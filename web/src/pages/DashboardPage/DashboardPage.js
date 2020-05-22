import DashboardsLayout from 'src/layouts/DashboardsLayout'
import DashboardCell from 'src/components/DashboardCell'

const DashboardPage = ({ id }) => {
  GAPageView()
  return (
    <DashboardsLayout>
      <DashboardCell id={id} />
    </DashboardsLayout>
  )
}

export default DashboardPage
