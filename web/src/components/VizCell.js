import GrammarParser from './GrammarParser'
import Header from '../pages/Common/Header'
import Footer from '../pages/Common/Footer'

export const QUERY = gql`
  query($name: String!) {
    viz: getViz(name: $name) {
      name
      data
    }
  }
`

export const containerClassName = "container w-full mx-auto px-2 pt-2";

export const Loading = () => <div className={containerClassName + " text-center"}>Loading...</div>

export const Empty = () => <div className={containerClassName + " text-center"}>Empty</div>

export const Failure = ({ error }) => <div className={containerClassName + " text-center"}>Error: {error.message}</div>

export const Success = ({ viz }) => {
  const vizData = JSON.parse(viz.data)
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
}