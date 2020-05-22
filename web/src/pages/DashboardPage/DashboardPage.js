import DashboardsLayout from 'src/layouts/DashboardsLayout'
import DashboardCell from 'src/components/DashboardCell'
import { GAPageView } from '../../PageView'

const DashboardPage = ({ id }) => {
  GAPageView()
  return (
    <DashboardsLayout>
      <DashboardCell id={id} />
    </DashboardsLayout>
  )
}

export default DashboardPage
