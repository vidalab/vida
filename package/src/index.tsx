import React from 'react'
import Header from './Charts/Header'
import Footer from './Charts/Footer'
import GrammarParser from './Charts/GrammarParser'
import { JSONVizData } from './Charts/VizData'
import { containerClassName } from './Charts/Constants'

export interface VidaProps {
  vizData: JSONVizData
}

const VidaComponent = (props: VidaProps) => {
  const grammarParser = GrammarParser(props.vizData)
  const charts = grammarParser.charts
  const vizInfo = grammarParser.vizInfo
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
}

export default VidaComponent