import ReLineChart from "./ReLineChart"
import ReBarChart from "./ReBarChart"
import ReAreaChart from "./ReAreaChart"
import RePieChart from "./RePieChart"
import { ResponsiveContainer } from "recharts"
import NivoLineChart from "./NivoLineChart"

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

  groupPieData(groups, data) {
    let dataGroups = []
    groups.forEach((g) => {
      let value = g["name"],
          color = g["color"],
          dataPoints = []
      data.forEach((d) => {
        dataPoints.push({"name": value, "value": d[value]})
      })
      dataGroups.push({"data": dataPoints, "color": color})
    })
    return dataGroups
  }

  getVizInfo() {
    return {"name": this.json["name"], "description": this.json["description"]}
  }

  getNivoData(dataArray, axes) {
    let lineData =[]
    axes["y"].forEach((yAxis) => {
      let lData = {id: yAxis["name"], color: yAxis["color"], data: []}
      dataArray.forEach((d) => {
        lData.data.push({x: d[axes["x"]], y: d[yAxis["name"]]})
      })
      lineData.push(lData)
    })
    return lineData
  }

  parse() {
    let els = []
    let layout = this.json["layout"]
    let self = this
    this.json["charts"].forEach((chart, index) => {
      const chartType = chart["type"]
      const dataName = chart["data"]
      const data = this.getData(dataName)
      let el = null
      if (layout["type"] == "grid") {
        if (chartType == "line") {
          el = <NivoLineChart key={"line-chart-" + index} data={self.getNivoData(data, chart["axes"])} />
        } else if (chartType == "bar") {
          el = <ResponsiveContainer key={"bar-chart-container-" + index} width="100%" height={chart["height"]}>
                <ReBarChart
                  key={"bar-chart-" + index}
                  data={data}
                  xAxis={chart["axes"]["x"]} yAxis={chart["axes"]["y"]}
                />
              </ResponsiveContainer>
        } else if (chartType == "area") {
          el = <ResponsiveContainer key={"bar-chart-container-" + index} width="100%" height={chart["height"]}>
                <ReAreaChart
                  key={"area-chart-" + index}
                  data={data}
                  xAxis={chart["axes"]["x"]} yAxis={chart["axes"]["y"]}
                />
              </ResponsiveContainer>
        } else if (chartType == "pie") {
          let dataGroups = self.groupPieData(chart["groups"], data)
          el = <ResponsiveContainer key={"pie-chart-container-" + index} width="100%" height={chart["height"]}>
                <RePieChart
                  key={"pie-chart-" + index}
                  dataGroups={dataGroups}
                />
              </ResponsiveContainer>
        }
      } else {
        let width = chart["width"]
        let height = chart["height"]
        if (chartType == "line") {
          el = <ReLineChart
                  key={"line-chart-" + index}
                  data={data} width={width} height={height}
                  xAxis={chart["axes"]["x"]} yAxis={chart["axes"]["y"]}
                />
        } else if (chartType == "bar") {
          el = <ReBarChart
                  key={"bar-chart-" + index}
                  data={data} width={width} height={height}
                  xAxis={chart["axes"]["x"]} yAxis={chart["axes"]["y"]}
                />
        } else if (chartType == "area") {
          el = <ReAreaChart
                  key={"area-chart-" + index}
                  data={data} width={width} height={height}
                  xAxis={chart["axes"]["x"]} yAxis={chart["axes"]["y"]}
                />
        } else if (chartType == "pie") {
          let dataGroups = self.groupPieData(chart["groups"], data)
          el = <RePieChart
                  key={"pie-chart-" + index}
                  dataGroups={dataGroups}
                  width={width} height={height}
                />
        }
      }
      els.push(el)
    })
    if (layout["type"] == "grid") {
      let gridEl = <div className={"grid grid-cols-" + layout["details"][0]["cols"] + " gap-2"}>{els}</div>
      return gridEl
    } else {
      return els
    }
  }
}

export default GrammarParser