import DashboardsLayout from 'src/layouts/DashboardsLayout'
import NewDashboard from 'src/components/NewDashboard'
import { GAPageView } from '../../PageView'
import { setPageTitle } from '../../PageHelper'
import { useEffect } from 'react'

const NewDashboardPage = () => {
  useEffect(() => {
    GAPageView()
    setPageTitle('New Dashboard')
    if (process.env.LOCK_EDIT == "true") {
      document.location.href = "/"
    }
  }, [])
  return (
    <DashboardsLayout>
      <NewDashboard />
    </DashboardsLayout>
  )
}

export default NewDashboardPage
