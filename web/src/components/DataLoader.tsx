import { Component } from "react"
import Header from './Charts/Header'
import Footer from '../pages/Common/Footer'
import GrammarParser from './GrammarParser'
import { JSONVizData, DataLoaderProps, DataLoaderState } from './VizData'

export const containerClassName = "container w-full mx-auto px-2 pt-2";

class DataLoader extends Component<DataLoaderProps, DataLoaderState> {
  private vizName: string
  private vizData: JSONVizData

  public constructor(props: DataLoaderProps) {
    super(props)
    this.vizName = props.vizName
    this.vizData = props.vizData
    this.state = { data: null };
  }

  private getDataUrl = async () => {
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

  public componentDidMount = () => {
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

  public componentDidUpdate = (prevProps: DataLoaderProps) => {
    if (JSON.stringify(this.props) != JSON.stringify(prevProps)) {
      this.vizData = this.props.vizData
      this.getDataUrl()
    }
  }

  public render = () => {
    if (this.state.data) {
      const vizData = this.state.data
      const grammarParser = new GrammarParser(vizData)
      const charts = grammarParser.parse()
      const vizInfo = grammarParser.getVizInfo()
      let headerPadding = "80"
      if (!vizInfo["header"]) {
        headerPadding = "30"
      }
      return (
        <div style={{height: "100%", width: "100%"}}>
          {vizInfo["header"] &&
            <Header name={vizInfo["header"]["text"]}
                    backgroundColor={vizInfo["header"]["backgroundColor"]}
                    align={vizInfo["header"]["align"]} />}
          <div className={containerClassName} style={{height: "calc(100% - " + headerPadding + "px)"}}>
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
