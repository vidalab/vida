import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { containerClassName } from '../../components/Constants'
import DashboardsCell from '../../components/DashboardsCell/DashboardsCell'

const HomePage = () => {
  let cssStyle = {
    height: "calc(100% - 80px)"
  }
  return (
    <div style={{height: "100%"}}>
      <Header name="Vida"/>
      <div className={containerClassName} style={cssStyle}>
        <DashboardsCell />
      </div>
      <Footer description="Flexible Data Visualization"/>
    </div>
  )
}

export default HomePage