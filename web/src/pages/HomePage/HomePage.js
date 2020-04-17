import Header from '../Common/Header'
import ReLineChart from '../../components/ReLineChart'
import vizJson from '../../viz.json'
import GrammarParser from '../../components/GrammarParser'

const HomePage = () => {
  const grammarParser = new GrammarParser(vizJson)
  const charts = grammarParser.parse()
  return (
    <>
      <Header/>
      <div className="container p-4">
        <main>Home Page</main>

        {charts}
      </div>
    </>
  )
}

export default HomePage