import Header from '../Common/Header'
import vizJson from '../../viz.json'
import GrammarParser from '../../components/GrammarParser'

const HomePage = () => {
  const grammarParser = new GrammarParser(vizJson)
  const charts = grammarParser.parse()
  return (
    <>
      <Header/>
      <div className="container">
        {charts}
      </div>
    </>
  )
}

export default HomePage