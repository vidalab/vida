import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DashboardForm from 'src/components/DashboardForm'
import DashboardsLayout from 'src/layouts/DashboardsLayout'
import DashboardCell from 'src/components/DashboardCell'
import MonacoEditor from 'react-monaco-editor'

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
      // navigate(routes.dashboards())
      // this.forceUpdate()
      // setVizData(newJson)
    },
  })

  const onSave = (input, id) => {
    newJson = input
    updateDashboard({ variables: { id, input } })
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
        <div className="col-span-1 bg-gray-100 p-4">
          <DashboardForm dashboard={dashboard} onSave={onSave.bind(this)} error={error} loading={loading} />
        </div>
        <div className="col-span-1 ">
        <DashboardsLayout>
          <DashboardCell id={dashboard.id} />
        </DashboardsLayout>
        </div>
      </div>

      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={"console.log('Hello')"}
        options={options}
      />
    </div>
  )
}
