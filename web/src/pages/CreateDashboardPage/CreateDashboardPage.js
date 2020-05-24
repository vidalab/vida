import CreateDashboard from './CreateDashboard'
import CreateDashboardCell from '../../components/CreateDashboardCell'
import { GAPageView } from '../../PageView'
import { setPageTitle } from '../../PageHelper'
import { useEffect } from 'react'

const CreateDashboardPage = ({ id }) => {
  useEffect(() => {
    GAPageView()
    setPageTitle('Create Dashboard')
  }, [])
  if (id) {
    return (
      <CreateDashboardCell id={id} />
    )
  } else {
    return (
      <CreateDashboard />
    )
  }
}

export default CreateDashboardPage
