import { containerClassName } from './Charts/Constants'
import CreateDashboard from '../pages/CreateDashboardPage/CreateDashboard'
import { useAlert } from 'react-alert'

export const QUERY = gql`
  query FIND_DASHBOARD_BY_ID($id: String!) {
    dashboard: dashboard(id: $id) {
      id
      name
      json
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div className={containerClassName + " text-center"}>Loading...</div>

export const Empty = () => <div>Dashboard not found</div>

export const Success = ({ dashboard }) => {
  try {
    const json = dashboard.json
    return <CreateDashboard vizData={json} />
  } catch (e) {
    const alert = useAlert()
    alert.show('Invalid JSON data for dashboard.')
    console.log(e)
    return <></>
  }
}
