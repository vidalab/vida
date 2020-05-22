import DashboardsLayout from 'src/layouts/DashboardsLayout'
import DashboardCell from 'src/components/DashboardCell'
import { GAPageView } from '../../PageView'
import { useEffect } from 'react'

const DashboardPage = ({ id }) => {
  useEffect(() => {
    GAPageView()
  }, [])
  return (
    <DashboardsLayout>
      <DashboardCell id={id} />
    </DashboardsLayout>
  )
}

export default DashboardPage
