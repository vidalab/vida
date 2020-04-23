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

export const containerClassName = "container w-full mx-auto px-6 pt-6";

export const Loading = () => <div className={containerClassName + " text-center"}>Loading...</div>

export const Empty = () => <div className={containerClassName + " text-center"}>Empty</div>

export const Failure = ({ error }) => <div className={containerClassName + " text-center"}>Error: {error.message}</div>

export const Success = ({ viz }) => {
  const vizData = JSON.parse(viz.data)
  const grammarParser = new GrammarParser(vizData)
  const charts = grammarParser.parse()
  const vizInfo = grammarParser.getVizInfo()
  let cssStyle = {}
  if (vizData["layout"]["type"] == "fixed") {
    cssStyle = {
      width: vizData["layout"]["width"],
      height: vizData["layout"]["height"]
    }
  }
  return (
    <div>
      <Header name={vizInfo["name"]}/>
      <div className={containerClassName}>
        <div style={cssStyle}>
          {charts}
        </div>
      </div>
      <Footer description={vizInfo["description"]}/>
    </div>
  )
}