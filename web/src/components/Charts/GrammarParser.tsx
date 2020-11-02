import React from "react"
import NivoLineChart from "./NivoLineChart"
import NivoBarChart from "./NivoBarChart"
import NivoScatterChart from "./NivoScatterChart"
import NivoPieChart from "./NivoPieChart"
import NivoBubbleChart from "./NivoBubbleChart"
import MarkdownText from "./MarkdownText"
import { JSONVizData, XYAxes, JSONChartDataColumn, IHash, UrlData } from "./VizData"

const GrammarParser = (jsonData: JSONVizData, urlData: UrlData) => {
  const getData = (name: string): object[] => {
    let values = null
    jsonData.data.forEach((d) => {
      if (d.name == name) {
        if (d.url) {
          // find values from urlData map
          if (d.transform) {
            values = urlData[d.name + ':' + d.url]
          } else {
            values = urlData[d.url]
          }
        } else {
          values = d.values
        }
      }
    })
    return values
  }

  const getNivoBubbleColors = (dataArray: any, axes: XYAxes): any => {
    // The first color is white for the outer bubble
    let colors = ["#FFFFFF"]
    let textColors = ["#FFFFFF"]
    dataArray.forEach((d: any, index: number) => {
      colors.push(d[axes.x.color])
      textColors.push(d[axes.x.textColor])
    })
    return {colors: colors, textColors: textColors}
  }

  const getNivoPieData = (data: any, group: any, value: any, colors: any): any => {
    let dataPoints: any = []
    data.forEach((d: any, index: any) => {
      dataPoints.push({"id": d[group], "label": d[group], "value": d[value], "color": colors[index % colors]})
    })
    return dataPoints
  }

  const getNivoLineData = (dataArray: any, axes: XYAxes): any => {
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

  const getNivoBarData = (dataArray: object[], axes: XYAxes): any => {
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

  const getNivoScatterData = (dataArray: any): any => {
    return {data: dataArray}
  }

  const getVizInfo = (): any => {
    return {
      "name": jsonData["name"], "description": jsonData["description"],
      "scripts": jsonData["scripts"],
      "header": jsonData["header"]}
  }

  let els: JSX.Element[] = []
  const containerCssStyle = {
    width: "100%",
    height: "100%"
  }
  jsonData.charts.forEach((chart, index) => {
    const chartType = chart.type
    const dataName = chart.data
    const data = getData(dataName)
    const colX = chart.position.x + 1,
          colSpan = chart.position.columns,
          rowSpan = chart.position.rows,
          colXClass = "col-start-" + colX,
          colSpanClass = "col-span-" + colSpan,
          rowSpanClass = "row-span-" + rowSpan
    let el: JSX.Element = null
    if (chartType == "line") {
      const lineData = getNivoLineData(data, chart.axes)
      el = <div key={"line-chart-container-" + index} style={containerCssStyle}
              className={colXClass + " " + colSpanClass + " " + rowSpanClass}
            >
              <NivoLineChart
                key={"line-chart-" + index}
                chartTitle={chart.title}
                axes={chart.axes}
                legend={chart.legend}
                colors={lineData.colors}
                data={lineData.data} />
            </div>
    } else if (chartType == "bar") {
      const barData = getNivoBarData(data, chart.axes)
      el = <div key={"bar-chart-container-" + index} style={containerCssStyle}
              className={colXClass + " " + colSpanClass + " " + rowSpanClass}
            >
              <NivoBarChart
                key={"bar-chart-" + index}
                chartTitle={chart.title}
                axes={chart.axes}
                keys={barData.keys}
                legend={chart.legend}
                colors={barData.colors}
                data={barData.data} />
            </div>
    } else if (chartType == "horizontal-bar") {
      const barData = getNivoBarData(data, chart.axes)
      el = <div key={"horizontal-bar-chart-container-" + index} style={containerCssStyle}
              className={colXClass + " " + colSpanClass + " " + rowSpanClass}
            >
              <NivoBarChart
                key={"horizontal-bar-chart-" + index}
                chartTitle={chart.title}
                horizontal={true}
                axes={chart.axes}
                keys={barData.keys}
                legend={chart.legend}
                colors={barData.colors}
                data={barData.data} />
            </div>
    } else if (chartType == "scatter") {
      const scatterData = getNivoScatterData(data)
      el = <div key={"scatter-chart-container-" + index} style={containerCssStyle}
              className={colXClass + " " + colSpanClass + " " + rowSpanClass}
            >
              <NivoScatterChart
                key={"scatter-chart-" + index}
                axes={chart.axes}
                data={[{id: dataName, data: scatterData.data}]} />
            </div>
    } else if (chartType == "area") {
      const lineData = getNivoLineData(data, chart.axes)
      el = <div key={"line-chart-container-" + index} style={containerCssStyle}
              className={colXClass + " " + colSpanClass + " " + rowSpanClass}
            >
              <NivoLineChart
                key={"line-chart-" + index}
                chartTitle={chart.title}
                enableArea={true}
                axes={chart.axes}
                colors={lineData.colors}
                data={lineData.data} />
            </div>
    } else if (chartType == "pie") {
      const pieData = getNivoPieData(data, chart.group, chart.value, chart.colors)
      el = <div key={"pie-chart-container-" + index} style={containerCssStyle}
              className={colXClass + " " + colSpanClass + " " + rowSpanClass}
            >
              <NivoPieChart
                key={"pie-chart-" + index}
                data={pieData} />
          </div>
    } else if (chartType == "bubble") {
      const bubbleColorData = getNivoBubbleColors(data, chart.axes)
      el = <div key={"bubble-chart-container-" + index} style={containerCssStyle}
              className={colXClass + " " + colSpanClass + " " + rowSpanClass}
            >
              <NivoBubbleChart
                key={"bubble-chart-" + index}
                colors={bubbleColorData.colors}
                textColors={bubbleColorData.textColors}
                axes={chart.axes}
                data={data} />
            </div>
    } else if (chartType == "markdown") {
      el = <div key={"markdown-container-" + index} style={containerCssStyle}
              className={colXClass + " " + colSpanClass + " " + rowSpanClass}
            >
              <MarkdownText text={chart.text} />
            </div>
    }
    els.push(el)
  })
  let gridEl = <div
    className={"grid grid-cols-" + jsonData.columns + " grid-rows-" + jsonData.rows + " gap-4"}
    style={containerCssStyle}>{els}</div>
  return {charts: gridEl, vizInfo: getVizInfo()}
}

export default GrammarParser
