import NivoLineChart from "./NivoLineChart"
import NivoBarChart from "./NivoBarChart"
import NivoScatterChart from "./NivoScatterChart"
import NivoPieChart from "./NivoPieChart"

const pieTestData = [
  {
    "id": "css",
    "label": "css",
    "value": 137,
    "color": "hsl(209, 70%, 50%)"
  },
  {
    "id": "javascript",
    "label": "javascript",
    "value": 384,
    "color": "hsl(147, 70%, 50%)"
  },
  {
    "id": "python",
    "label": "python",
    "value": 549,
    "color": "hsl(174, 70%, 50%)"
  },
  {
    "id": "stylus",
    "label": "stylus",
    "value": 531,
    "color": "hsl(148, 70%, 50%)"
  },
  {
    "id": "c",
    "label": "c",
    "value": 442,
    "color": "hsl(244, 70%, 50%)"
  }
]

class GrammarParser {
  constructor(json) {
    this.json = json
  }

  getData(name) {
    let values = null
    this.json["data"].forEach((d) => {
      if (d["name"] == name) {
        values = d["values"]
      }
    })
    return values
  }

  getNivoPieData(data, group, value, colors) {
    let dataPoints = []
    data.forEach((d, index) => {
      dataPoints.push({"id": d[group], "label": d[group], "value": d[value], "color": colors[index % colors]})
    })
    return dataPoints
  }

  getVizInfo() {
    return {"name": this.json["name"], "description": this.json["description"]}
  }

  getNivoLineData(dataArray, axes) {
    let lineData = []
    let colors = []
    axes["y"]["dataColumns"].forEach((yAxis) => {
      colors.push(yAxis["color"])
      let lData = {id: yAxis["name"], color: yAxis["color"], data: []}
      dataArray.forEach((d) => {
        lData.data.push({x: d[axes["x"]["dataColumn"]], y: d[yAxis["name"]]})
      })
      lineData.push(lData)
    })
    return {data: lineData, colors: colors}
  }

  getNivoBarData(dataArray, axes) {
    let barData = []
    dataArray.forEach((d) => {
      let dp = {}
      axes["y"]["dataColumns"].forEach((yAxis) => {
        dp[axes["x"]["dataColumn"]] = d[axes["x"]["dataColumn"]]
        dp[yAxis["name"]] = d[yAxis["name"]]
        dp[yAxis["name"] + "Color"] = yAxis["color"]
      })
      barData.push(dp)
    })
    let keys = [], colors = []
    axes["y"]["dataColumns"].forEach((yAxis) => {
      keys.push(yAxis["name"])
      colors.push(yAxis["color"])
    })
    return {data: barData, keys: keys, colors: colors}
  }

  getNivoScatterData(dataArray, axes) {
    return {data: dataArray}
  }

  parse() {
    let els = []
    let self = this
    const containerCssStyle = {
      width: "100%",
      height: "100%"
    }
    this.json["charts"].forEach((chart, index) => {
      const chartType = chart["type"]
      const dataName = chart["data"]
      const data = self.getData(dataName)
      const colX = chart["position"]["x"] + 1,
            colSpan = chart["position"]["columns"],
            rowSpan = chart["position"]["rows"],
            colXClass = "col-start-" + colX,
            colSpanClass = "col-span-" + colSpan,
            rowSpanClass = "row-span-" + rowSpan
      let el = null
      if (chartType == "line") {
        const lineData = self.getNivoLineData(data, chart["axes"])
        el = <div key={"line-chart-container-" + index} style={containerCssStyle}
                className={colXClass + " " + colSpanClass + " " + rowSpanClass}
              >
                <NivoLineChart
                  key={"line-chart-" + index}
                  axes={chart["axes"]}
                  colors={lineData.colors}
                  data={lineData.data} />
              </div>
      } else if (chartType == "bar") {
        const barData = self.getNivoBarData(data, chart["axes"])
        el = <div key={"bar-chart-container-" + index} style={containerCssStyle}
                className={colXClass + " " + colSpanClass + " " + rowSpanClass}
              >
                <NivoBarChart
                  key={"bar-chart-" + index}
                  axes={chart["axes"]}
                  keys={barData.keys}
                  colors={barData.colors}
                  data={barData.data} />
              </div>
      } else if (chartType == "horizontal-bar") {
        const barData = self.getNivoBarData(data, chart["axes"])
        el = <div key={"horizontal-bar-chart-container-" + index} style={containerCssStyle}
                className={colXClass + " " + colSpanClass + " " + rowSpanClass}
              >
                <NivoBarChart
                  key={"horizontal-bar-chart-" + index}
                  horizontal={true}
                  axes={chart["axes"]}
                  keys={barData.keys}
                  colors={barData.colors}
                  data={barData.data} />
              </div>
      } else if (chartType == "scatter") {
        const scatterData = self.getNivoScatterData(data, chart["axes"])
        el = <div key={"scatter-chart-container-" + index} style={containerCssStyle}
                className={colXClass + " " + colSpanClass + " " + rowSpanClass}
              >
                <NivoScatterChart
                  key={"scatter-chart-" + index}
                  axes={chart["axes"]}
                  data={scatterData.data} />
              </div>
      } else if (chartType == "area") {
        const lineData = self.getNivoLineData(data, chart["axes"])
        el = <div key={"line-chart-container-" + index} style={containerCssStyle}
                className={colXClass + " " + colSpanClass + " " + rowSpanClass}
              >
                <NivoLineChart
                  key={"line-chart-" + index}
                  enableArea={true}
                  axes={chart["axes"]}
                  colors={lineData.colors}
                  data={lineData.data} />
              </div>
      } else if (chartType == "pie") {
        const pieData = self.getNivoPieData(data, chart["group"], chart["value"], chart["colors"])
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
      className={"grid grid-cols-" + this.json["columns"] + " grid-rows-" + this.json["rows"] + " gap-2"}
      style={containerCssStyle}>{els}</div>
    return gridEl
  }
}

export default GrammarParser