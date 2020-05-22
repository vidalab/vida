import DashboardsLayout from 'src/layouts/DashboardsLayout'
import EditDashboardCell from 'src/components/EditDashboardCell'
import { GAPageView } from '../../PageView'
import { useEffect } from 'react'

const EditDashboardPage = ({ id }) => {
  useEffect(() => {
    GAPageView()
    if (process.env.LOCK_EDIT == "true") {
      document.location.href = "/"
    }
  }, [])
  return (
    <DashboardsLayout>
      <EditDashboardCell id={id} />
    </DashboardsLayout>
  )
}

export default EditDashboardPage
