import { Component } from "react"
import Header from '../pages/Common/Header'
import Footer from '../pages/Common/Footer'
import GrammarParser from './GrammarParser'

export const containerClassName = "container w-full mx-auto px-2 pt-2";

interface DataLoaderProps {
  vizName: string
  vizData: any
}

interface DataLoaderState {
  data: object
}

class DataLoader extends Component<DataLoaderProps, DataLoaderState> {
  private vizName: string
  private vizData: any

  constructor(props: DataLoaderProps) {
    super(props)
    this.vizName = props.vizName
    this.vizData = props.vizData
    this.state = { data: null };
  }

  async getDataUrl() {
    for (const d of this.vizData["data"]) {
      if (d["url"]) {
        // retrieve data from url to send to client
        const response = await fetch(d["url"])
        const json = await response.json()
        d["values"] = json
      }
    }
    this.setState({ data: this.vizData })
  }

  componentDidMount() {
    if (this.vizName) {
      window.fetch('/viz/' + this.vizName)
        .then((res) => res.json())
        .then(async (json) => {
          for (const d of json["data"]) {
            if (d["url"]) {
              // retrieve data from url to send to client
              const response = await fetch(d["url"])
              const json = await response.json()
              d["values"] = json
            }
          }
          this.setState({ data: json })
        })
    } else {
      this.getDataUrl()
    }
  }

  render() {
    if (this.state.data) {
      const vizData = this.state.data
      const grammarParser = new GrammarParser(vizData)
      const charts = grammarParser.parse()
      const vizInfo = grammarParser.getVizInfo()
      let cssStyle = {
        height: "calc(100% - 100px)"
      }
      return (
        <div style={{height: "100%"}}>
          <Header name={vizInfo["name"]}/>
          <div className={containerClassName} style={cssStyle}>
            {charts}
          </div>
          <Footer description={vizInfo["description"]}/>
        </div>
      )
    } else {
      return (
        <div className={containerClassName + " text-center"}>Loading...</div>
      )
    }
  }
}

export default DataLoader