import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DashboardCell from 'src/components/DashboardCell'
import DashboardForm from 'src/components/DashboardForm'

const CREATE_DASHBOARD_MUTATION = gql`
  mutation CreateDashboardMutation($input: CreateDashboardInput!) {
    createDashboard(input: $input) {
      id
    }
  }
`

const NewDashboard = () => {
  const [createDashboard, { loading, error }] = useMutation(CREATE_DASHBOARD_MUTATION, {
    onCompleted: (data) => {
      navigate(routes.editDashboard({id: data.createDashboard.id}))
    },
  })

  const onSave = (id, input) => {
    createDashboard({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Dashboard</h2>
      </header>
      <div className="grid grid-cols-2 gap-4">
        <DashboardForm onSave={onSave} loading={loading} error={error} />
        <div className="col-span-1 ">
          {/* <DashboardCell /> */}
        </div>
      </div>
    </div>
  )
}

export default NewDashboard
