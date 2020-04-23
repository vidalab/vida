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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ viz }) => {
  const vizData = JSON.parse(viz.data)
  console.log(vizData)
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
      <div className="container w-full mx-auto px-6 pt-6">
        <div style={cssStyle}>
          {charts}
        </div>
      </div>
      <Footer description={vizInfo["description"]}/>
    </div>
  )
}