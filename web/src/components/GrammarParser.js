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
    axes["y"]["dataColumns"].forEach((yAxis) => {
      let lData = {id: yAxis["name"], color: yAxis["color"], data: []}
      dataArray.forEach((d) => {
        lData.data.push({x: d[axes["x"]["dataColumn"]], y: d[yAxis["name"]]})
      })
      lineData.push(lData)
    })
    console.log(lineData)
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
      const containerCssStyle = {
        width: "100%",
        height: chart["height"]
      }
      let el = null
      if (layout["type"] == "grid") {
        if (chartType == "line") {
          el = <div key={"line-chart-container-" + index} style={containerCssStyle}>
                  <NivoLineChart
                    key={"line-chart-" + index}
                    axes={chart["axes"]}
                    data={self.getNivoData(data, chart["axes"])} />
                </div>
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