import ReLineChart from "./ReLineChart"
import ReBarChart from "./ReBarChart"
import ReAreaChart from "./ReAreaChart"

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

  parse() {
    let els = []
    this.json["charts"].forEach((chart, index) => {
      const chartType = chart["type"]
      const dataName = chart["data"]
      const data = this.getData(dataName)
      let el = null
      if (chartType == "line") {
        el = <ReLineChart
                key={"line-chart-" + index}
                data={data} width={chart["width"]} height={chart["height"]}
                xAxis={chart["axes"]["x"]} yAxis={chart["axes"]["y"]}
              />
      } else if (chartType == "bar") {
        el = <ReBarChart
                key={"bar-chart-" + index}
                data={data} width={chart["width"]} height={chart["height"]}
                xAxis={chart["axes"]["x"]} yAxis={chart["axes"]["y"]}
              />
      } else if (chartType == "area") {
        el = <ReAreaChart
                key={"area-chart-" + index}
                data={data} width={chart["width"]} height={chart["height"]}
                xAxis={chart["axes"]["x"]} yAxis={chart["axes"]["y"]}
              />
      }
      els.push(el)
    })
    return els
  }
}

export default GrammarParser