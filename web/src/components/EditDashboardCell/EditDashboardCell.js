import { useMutation } from '@redwoodjs/web'
import DashboardFormCell from './DashboardFormCell'

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
const UPDATE_DASHBOARD_MUTATION = gql`
  mutation UpdateDashboardMutation($id: String!, $input: UpdateDashboardInput!) {
    updateDashboard(id: $id, input: $input) {
      id
      json
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-first' }
}

export const Loading = () => <div>Loading...</div>

export const Success = ({ dashboard }) => {
  let newJson

  const [updateDashboard, { loading, error, data }] = useMutation(UPDATE_DASHBOARD_MUTATION, {
    onCompleted: (e) => {
    },
  })

  const onSave = (id, input) => {
    newJson = input.json
    updateDashboard({ variables: { id, input }})
  }

  dashboard.json = JSON.parse(dashboard.json)

  return (
    <div className="bg-white border rounded-lg overflow-hidden" style={{height: "100%"}}>
      <DashboardFormCell dashboard={dashboard} onSave={onSave} />
    </div>
  )
}
