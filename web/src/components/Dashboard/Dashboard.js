import DataLoader from '../Charts/DataLoader'
import ErrorBoundary from '../ErrorBoundary'

const Dashboard = ({ dashboard: dashboardJson }) => {
  const vizData = dashboardJson
  return (
    <ErrorBoundary>
      <DataLoader vizData={vizData} />
    </ErrorBoundary>
  )
}

export default Dashboard
