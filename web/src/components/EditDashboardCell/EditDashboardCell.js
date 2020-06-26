import { useMutation } from '@redwoodjs/web'
import DashboardFormCell from './DashboardFormCell'
import { checkJSONSize } from '../../PageHelper'

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

export const Loading = () => <div>Loading...</div>

export const Success = ({ dashboard }) => {
  let newJson

  const [updateDashboard, { loading, error, data }] = useMutation(UPDATE_DASHBOARD_MUTATION, {
    onCompleted: (e) => {
    },
  })

  const onSave = (id, input) => {
    if (checkJSONSize(input.json)) {
      newJson = input.json
      updateDashboard({ variables: { id, input }})
    }
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden" style={{height: "100%"}}>
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Dashboard > <b>{dashboard.name}</b></h2>
      </header>
      <DashboardFormCell dashboard={dashboard} onSave={onSave} />
    </div>
  )
}
