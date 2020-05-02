import DashboardsLayout from 'src/layouts/DashboardsLayout'
import DashboardCell from 'src/components/DashboardCell'

const DashboardPage = ({ id }) => {
  return (
    <DashboardsLayout>
      <DashboardCell id={id} />
    </DashboardsLayout>
  )
}

export default DashboardPage
