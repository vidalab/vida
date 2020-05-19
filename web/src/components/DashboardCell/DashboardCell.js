import Dashboard from 'src/components/Dashboard'
import { containerClassName } from '../Constants'

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
  return <Dashboard dashboard={JSON.parse(dashboard.json)} />
}
