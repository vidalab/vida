import { Link, routes } from '@redwoodjs/router'
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
        <div className="mb-4">
          <span className="font-bold text-xl mr-2">Your Dashboards</span>
          <Link
            to={routes.newDashboard()}
              className="float-right bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-2 py-1 uppercase tracking-wide rounded"
            >
              <span className="text-xl leading-none">+</span>
              <span className="ml-1 leading-loose">New Dashboard</span>
          </Link>
        </div>
        <DashboardsCell ownerId={currentUser.sub} />
      </div>
      <Footer description="Flexible Data Visualization"/>
    </>
  )
}

export default UserHomePage
