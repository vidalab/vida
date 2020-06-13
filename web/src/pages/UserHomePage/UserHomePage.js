import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { containerClassName } from '../../components/Charts/Constants'
import DashboardsCell from '../../components/DashboardsCell/DashboardsCell'

const UserHomePage = () => {
  return (
    <>
      <Header name="Vida"/>
      <div className={containerClassName + " pb-4"}>
        <div className="font-bold text-xl mb-2">Your Dashboards</div>
        <DashboardsCell />
      </div>
      <Footer description="Flexible Data Visualization"/>
    </>
  )
}

export default UserHomePage
