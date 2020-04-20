import Header from '../Common/Header'
import VizCell from '../../components/VizCell'

const HomePage = () => {
  const name = 'viz'
  return (
    <>
      <Header/>
      <div className="container">
        {<VizCell name={name} />}
      </div>
    </>
  )
}

export default HomePage