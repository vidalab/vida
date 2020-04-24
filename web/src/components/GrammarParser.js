import NivoLineChart from "./NivoLineChart"
import NivoBarChart from "./NivoBarChart"

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
          const lineData = self.getNivoLineData(data, chart["axes"])
          el = <div key={"line-chart-container-" + index} style={containerCssStyle}>
                  <NivoLineChart
                    key={"line-chart-" + index}
                    axes={chart["axes"]}
                    colors={lineData.colors}
                    data={lineData.data} />
                </div>
        } else if (chartType == "bar") {
          const barData = self.getNivoBarData(data, chart["axes"])
          el = <div key={"bar-chart-container-" + index} style={containerCssStyle}>
                  <NivoBarChart
                    key={"bar-chart-" + index}
                    axes={chart["axes"]}
                    keys={barData.keys}
                    colors={barData.colors}
                    data={barData.data} />
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