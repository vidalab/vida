import CreateDashboard from './CreateDashboard'
import { GAPageView } from '../../PageView'
import { setPageTitle } from '../../PageHelper'
import { useEffect } from 'react'

const CreateDashboardPage = () => {
  useEffect(() => {
    GAPageView()
    setPageTitle('Create Dashboard')
  }, [])
  return (
    <CreateDashboard />
  )
}

export default CreateDashboardPage
