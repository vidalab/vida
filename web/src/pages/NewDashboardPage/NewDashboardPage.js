import DashboardsLayout from 'src/layouts/DashboardsLayout'
import NewDashboard from 'src/components/NewDashboard'
import { GAPageView } from '../../PageView'
import { setPageTitle } from '../../PageHelper'
import { useEffect } from 'react'

const NewDashboardPage = () => {
  useEffect(() => {
    GAPageView()
    setPageTitle('New Dashboard')
  }, [])
  return (
    <DashboardsLayout>
      <NewDashboard />
    </DashboardsLayout>
  )
}

export default NewDashboardPage
