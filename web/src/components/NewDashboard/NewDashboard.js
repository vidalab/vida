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
      <div className="grid grid-cols-3 gap-4" style={{height: "calc(100% - 15px)"}}>
        <div className="col-span-1" style={{height: "calc(100% - 20px)"}}>
          <DashboardForm onSave={onSave} loading={loading} error={error}/>
        </div>
        <div className="col-span-2 ">
          Preview
        </div>
      </div>
    </div>
  )
}

export default withAlert()(NewDashboard)