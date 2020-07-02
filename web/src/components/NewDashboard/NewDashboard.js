import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import DashboardCell from 'src/components/DashboardCell'
import DashboardForm from 'src/components/DashboardForm'
import { checkJSONSize } from '../../PageHelper'
import { withAlert } from "react-alert"

const CREATE_DASHBOARD_MUTATION = gql`
  mutation CreateDashboardMutation($input: CreateDashboardInput!) {
    createDashboard(input: $input) {
      id
    }
  }
`

const NewDashboard = ({alert}) => {
  const [createDashboard, { loading, error }] = useMutation(CREATE_DASHBOARD_MUTATION, {
    onCompleted: (data) => {
      navigate(routes.editDashboard({id: data.createDashboard.id}))
    },
  })

  const onSave = (id, input) => {
    if (checkJSONSize(alert, input.json)) {
      createDashboard({ variables: { input } })
    }
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden" style={{height: "100%"}}>
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Dashboard</h2>
      </header>
      <div className="grid grid-cols-2 gap-4" style={{height: "calc(100% - 45px)"}}>
        <div className="col-span-1" style={{height: "calc(100% - 40px)"}}>
          <DashboardForm onSave={onSave} loading={loading} error={error}/>
        </div>
        <div className="col-span-1 ">
          {/* <DashboardCell /> */}
        </div>
      </div>
    </div>
  )
}

export default withAlert()(NewDashboard)