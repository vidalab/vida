import ReLineChart from "./ReLineChart"

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
    let el = null
    this.json["charts"].forEach((chart) => {
      const chartType = chart["type"]
      const dataName = chart["data"]
      const data = this.getData(dataName)
      if (chartType == "line") {
        el = <ReLineChart data={data} width={chart["width"]} height={chart["height"]} />
      }
    })
    return el
  }
}

export default GrammarParser