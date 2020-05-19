import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DashboardsLayout from 'src/layouts/DashboardsLayout'
import DashboardCell from 'src/components/DashboardCell'
import DashboardForm from 'src/components/DashboardForm'

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

  const onSave = (dashboard) => {
    newJson = input
    updateDashboard({ variables: { dashboard.id, {name: dashboard.name, json: dashboard.json} }})
  }

  const options = {
    selectOnLineNumbers: true
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Dashboard > <b>{dashboard.name}</b></h2>
      </header>
      <div className="grid grid-cols-2 gap-4">
        <DashboardForm dashboard={dashboard} onSave={onSave}/>
        <div className="col-span-1 ">
          <DashboardCell id={dashboard.id} />
        </div>
      </div>
    </div>
  )
}
