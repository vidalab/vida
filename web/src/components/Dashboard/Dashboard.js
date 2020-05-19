import DataLoader from '../DataLoader'

const Dashboard = ({ dashboard: dashboardJson }) => {
  const vizData = dashboardJson
  return (
    <DataLoader vizData={vizData} />
  )
}

export default Dashboard
