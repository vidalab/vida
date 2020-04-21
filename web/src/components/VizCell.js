import GrammarParser from './GrammarParser'

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
  const grammarParser = new GrammarParser(vizData)
  const charts = grammarParser.parse()
  let cssStyle = {}
  if (vizData["layout"]["type"] == "fixed") {
    cssStyle = {
      width: vizData["layout"]["width"],
      height: vizData["layout"]["height"]
    }
  }
  return (
    <div style={cssStyle}>
      {charts}
    </div>
  )
}