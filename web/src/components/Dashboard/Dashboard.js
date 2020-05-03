import DataLoader from '../DataLoader'

const Dashboard = ({ dashboard }) => {
  const vizData = JSON.parse(dashboard.json)
  return (
    <DataLoader vizData={vizData} />
  )
}

export default Dashboard
