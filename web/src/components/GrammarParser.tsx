import NivoLineChart from "./Charts/NivoLineChart"
import NivoBarChart from "./Charts/NivoBarChart"
import NivoScatterChart from "./Charts/NivoScatterChart"
import NivoPieChart from "./Charts/NivoPieChart"
import { JSONVizData, XYAxes, JSONChartDataColumn, IHash } from "./VizData"

class GrammarParser {
  private json: JSONVizData

  constructor(json: JSONVizData) {
    this.json = json
  }

  private getData = (name: string): object[] => {
    let values = null
    this.json.data.forEach((d) => {
      if (d.name == name) {
        values = d.values
      }
    })
    return values
  }

  private getNivoPieData = (data: any, group: any, value: any, colors: any): any => {
    let dataPoints: any = []
    data.forEach((d: any, index: any) => {
      dataPoints.push({"id": d[group], "label": d[group], "value": d[value], "color": colors[index % colors]})
    })
    return dataPoints
  }

  private getNivoLineData = (dataArray: any, axes: XYAxes): any => {
    let lineData: any = []
    let colors: any = []
    axes.y.dataColumns.forEach((yAxis: JSONChartDataColumn) => {
      colors.push(yAxis.color)
      let data: any = []
      let lData = {id: yAxis.name, color: yAxis.color, data: data}
      dataArray.forEach((d: IHash) => {
        if (!isNaN(d[yAxis.name])) {
          lData.data.push({x: d[axes.x.dataColumn], y: d[yAxis.name]})
        }
      })
      lineData.push(lData)
    })
    return {data: lineData, colors: colors}
  }

  private getNivoBarData = (dataArray: object[], axes: XYAxes): any => {
    let barData: any = []
    dataArray.forEach((d: IHash) => {
      let dp: IHash = {}
      axes.y.dataColumns.forEach((yAxis) => {
        dp[axes.x.dataColumn] = d[axes.x.dataColumn]
        dp[yAxis.name] = d[yAxis.name]
        dp[yAxis.name + "Color"] = yAxis.color
      })
      barData.push(dp)
    })
    let keys: string[] = [], colors: string[] = []
    axes.y.dataColumns.forEach((yAxis: JSONChartDataColumn) => {
      keys.push(yAxis.name)
      colors.push(yAxis.color)
    })
    return {data: barData, keys: keys, colors: colors}
  }

  private getNivoScatterData = (dataArray: any): any => {
    return {data: dataArray}
  }

  public getVizInfo = (): any => {
    return {"name": this.json["name"], "description": this.json["description"], "header": this.json["header"]}
  }

  public parse = () => {
    let els: JSX.Element[] = []
    let self = this
    const containerCssStyle = {
      width: "100%",
      height: "100%"
    }
    this.json.charts.forEach((chart, index) => {
      const chartType = chart.type
      const dataName = chart.data
      const data = self.getData(dataName)
      const colX = chart.position.x + 1,
            colSpan = chart.position.columns,
            rowSpan = chart.position.rows,
            colXClass = "col-start-" + colX,
            colSpanClass = "col-span-" + colSpan,
            rowSpanClass = "row-span-" + rowSpan
      let el: JSX.Element = null
      if (chartType == "line") {
        const lineData = self.getNivoLineData(data, chart.axes)
        el = <div key={"line-chart-container-" + index} style={containerCssStyle}
                className={colXClass + " " + colSpanClass + " " + rowSpanClass}
              >
                <NivoLineChart
                  key={"line-chart-" + index}
                  chartTitle={chart["title"]}
                  axes={chart["axes"]}
                  colors={lineData.colors}
                  data={lineData.data} />
              </div>
      } else if (chartType == "bar") {
        const barData = self.getNivoBarData(data, chart.axes)
        el = <div key={"bar-chart-container-" + index} style={containerCssStyle}
                className={colXClass + " " + colSpanClass + " " + rowSpanClass}
              >
                <NivoBarChart
                  key={"bar-chart-" + index}
                  chartTitle={chart["title"]}
                  axes={chart["axes"]}
                  keys={barData.keys}
                  colors={barData.colors}
                  data={barData.data} />
              </div>
      } else if (chartType == "horizontal-bar") {
        const barData = self.getNivoBarData(data, chart.axes)
        el = <div key={"horizontal-bar-chart-container-" + index} style={containerCssStyle}
                className={colXClass + " " + colSpanClass + " " + rowSpanClass}
              >
                <NivoBarChart
                  key={"horizontal-bar-chart-" + index}
                  chartTitle={chart["title"]}
                  horizontal={true}
                  axes={chart["axes"]}
                  keys={barData.keys}
                  colors={barData.colors}
                  data={barData.data} />
              </div>
      } else if (chartType == "scatter") {
        const scatterData = self.getNivoScatterData(data)
        el = <div key={"scatter-chart-container-" + index} style={containerCssStyle}
                className={colXClass + " " + colSpanClass + " " + rowSpanClass}
              >
                <NivoScatterChart
                  key={"scatter-chart-" + index}
                  axes={chart["axes"]}
                  data={scatterData.data} />
              </div>
      } else if (chartType == "area") {
        const lineData = self.getNivoLineData(data, chart.axes)
        el = <div key={"line-chart-container-" + index} style={containerCssStyle}
                className={colXClass + " " + colSpanClass + " " + rowSpanClass}
              >
                <NivoLineChart
                  key={"line-chart-" + index}
                  chartTitle={chart["title"]}
                  enableArea={true}
                  axes={chart["axes"]}
                  colors={lineData.colors}
                  data={lineData.data} />
              </div>
      } else if (chartType == "pie") {
        const pieData = self.getNivoPieData(data, chart.group, chart.value, chart.colors)
        el = <div key={"pie-chart-container-" + index} style={containerCssStyle}
                className={colXClass + " " + colSpanClass + " " + rowSpanClass}
              >
                <NivoPieChart
                  key={"pie-chart-" + index}
                  data={pieData} />
            </div>
      }
      els.push(el)
    })
    let gridEl = <div
      className={"grid grid-cols-" + this.json.columns + " grid-rows-" + this.json.rows + " gap-4"}
      style={containerCssStyle}>{els}</div>
    return gridEl
  }
}

export default GrammarParser
