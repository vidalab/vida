import Header from '../Common/Header'
import VizCell from '../../components/VizCell'

const HomePage = () => {
  const name = 'viz'
  return (
    <>
      <Header/>
      <div className="container w-full mx-auto px-6 pt-6">
        {<VizCell name={name} />}
      </div>
    </>
  )
}

export default HomePage