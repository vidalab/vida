import DashboardsLayout from 'src/layouts/DashboardsLayout'
import NewDashboard from 'src/components/NewDashboard'

const NewDashboardPage = () => {
  GAPageView()
  return (
    <DashboardsLayout>
      <NewDashboard />
    </DashboardsLayout>
  )
}

export default NewDashboardPage
