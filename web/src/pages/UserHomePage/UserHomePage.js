import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { containerClassName } from '../../components/Charts/Constants'
import DashboardsCell from '../../components/DashboardsCell/DashboardsCell'
import { useAuth } from '@redwoodjs/auth'

const UserHomePage = () => {
  const { currentUser } = useAuth()
  return (
    <>
      <Header name="Vida"/>
      <div className={containerClassName + " pb-4"}>
        <div className="font-bold text-xl mb-2">Your Dashboards</div>
        <DashboardsCell ownerId={currentUser.sub} />
      </div>
      <Footer description="Flexible Data Visualization"/>
    </>
  )
}

export default UserHomePage
