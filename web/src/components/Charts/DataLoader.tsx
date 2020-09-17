import React from 'react';
import { Component } from "react"
import Header from './Header'
import Footer from './Footer'
import GrammarParser from './GrammarParser'
import { JSONVizData, DataLoaderProps, DataLoaderState, JSONDataTransform, JSONDataset } from './VizData'
import { containerClassName } from './Constants'
import { CSVToJSON } from '../../Utility'
import { group as d3group } from 'd3-array'

interface UrlData {
  [url: string]: object[]
}

class DataLoader extends Component<DataLoaderProps, DataLoaderState> {
  private vizName: string
  private vizData: JSONVizData
  private urlData: UrlData

  public constructor(props: DataLoaderProps) {
    super(props)
    this.vizName = props.vizName
    // serialize vizData so it won't change props
    if (props.vizData) {
      this.vizData = JSON.parse(JSON.stringify(props.vizData))
    }
    this.state = { data: null }
    this.urlData = {}
  }

  private transformData = (data: object, transform: JSONDataTransform) => {
    // copy data to transform
    let tData = JSON.parse(JSON.stringify(data))
    for (const t in transform) {
      if (t == "groupBy") {
        tData = d3group(data, (d: any) => d[transform.groupBy])
      } else if (t == "select") {
        tData = tData.get(transform.select)
      } else if (t == "function") {
        // split namespace
        const functionSegs = transform.function.split('.')
        if (functionSegs.length == 1) {
          tData = window[functionSegs[0]](tData)
        } else {
          tData = window[functionSegs[0]][functionSegs[1]](tData, transform.fields)
        }
      }
    }
    return tData
  }

  private getDatumUrl = async (d: JSONDataset) => {
    if (d["url"]) {
      // retrieve data from url to send to client
      if (d["url"].indexOf(".json") != -1) {
        if (!this.urlData[d["url"]]) {
          const response = await fetch(d["url"])
          const json = await response.json()
          this.urlData[d["url"]] = json
        }
        let values = this.urlData[d["url"]]
        if (d["transform"]) {
          values = this.transformData(this.urlData[d["url"]], d["transform"])
        }
        d["values"] = values
      } else if (d["url"].indexOf(".csv") != -1) {
        if (!this.urlData[d["url"]]) {
          const response = await fetch(d["url"])
          const body = await response.text()
          const jsonData = CSVToJSON(body, ',')
          this.urlData[d["url"]] = jsonData["data"]
        }
        let values = this.urlData[d["url"]]
        if (d["transform"]) {
          values = this.transformData(this.urlData[d["url"]], d["transform"])
        }
        d["values"] = values
      }
    }
  }

  private removeScriptTags = (className: string) => {
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
  }

  private loadScripts = async (scripts: string[], callback: () => void) => {
    let count = 0
    for (const scriptUrl of scripts) {
      var scriptTag = document.createElement('script')
      scriptTag.setAttribute('src', scriptUrl)
      scriptTag.setAttribute('class', 'dynamic-script')
      document.body.appendChild(scriptTag)
      scriptTag.addEventListener('load', function() {
        count++
        if (count == scripts.length) {
          callback()
        }
      })
    }
  }

  private getDataUrl = async () => {
    if (this.vizData["data"]) {
      for (const d of this.vizData["data"]) {
        await this.getDatumUrl(d)
      }
      this.setState({ data: this.vizData })
    }
  }

  public componentDidMount = () => {
    if (this.vizName) {
      let url = ''
      if (this.vizName.indexOf('https://') == 0) {
        url = this.vizName
      } else {
        url = '/viz/' + this.vizName
      }
      window.fetch(url)
        .then((res) => res.json())
        .then(async (json) => {
          for (const d of json["data"]) {
            await this.getDatumUrl(d)
          }
          this.setState({ data: json })
        })
    } else {
      this.removeScriptTags('dynamic-script')
      if (this.vizData["scripts"]) {
        this.loadScripts(this.vizData["scripts"], () => {
          this.getDataUrl()
        })
      } else {
        this.getDataUrl()
      }
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
      const grammarParser = GrammarParser(vizData)
      const charts = grammarParser.charts
      const vizInfo = grammarParser.vizInfo
      let headerPadding = "80"
      if (!vizInfo["header"]) {
        headerPadding = "20"
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
