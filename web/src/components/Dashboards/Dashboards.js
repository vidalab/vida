import { useMutation } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'

const DELETE_DASHBOARD_MUTATION = gql`
  mutation DeleteDashboardMutation($id: String!) {
    deleteDashboard(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const truncate = (text) => {
  let output = text
  if (text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const timeTag = (datetime) => {
  const d = new Date(datetime)
  return (
    <time dateTime={datetime} title={datetime}>
      {d.getUTCFullYear() + "/" + (d.getUTCMonth() + 1) + "/"+ d.getUTCDate()}
    </time>
  )
}

const DashboardsList = ({ dashboards }) => {
  const [deleteDashboard] = useMutation(DELETE_DASHBOARD_MUTATION)

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete dashboard ' + id + '?')) {
      deleteDashboard({ variables: { id }, refetchQueries: ['POSTS'] })
    }
  }

  return (
    <div className="bg-white text-gray-900 border rounded-lg overflow-x-scroll">
      <table className="table-auto w-full min-w-3xl text-sm">
        <thead>
          <tr className="bg-gray-300 text-gray-700">
            <th className="font-semibold text-left p-3">name</th>
            <th className="font-semibold text-left p-3">createdAt</th>
            <th className="font-semibold text-left p-3">updatedAt</th>
            <th className="font-semibold text-left p-3">&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {dashboards.map((dashboard) => (
            <tr
              key={dashboard.id}
              className="odd:bg-gray-100 even:bg-white border-t"
            >
              <td className="p-3">{truncate(dashboard.name)}</td>
              <td className="p-3">{timeTag(dashboard.createdAt)}</td>
              <td className="p-3">{timeTag(dashboard.updatedAt)}</td>
              <td className="p-3 pr-4 text-right whitespace-no-wrap">
                <nav>
                  <ul>
                    <li className="inline-block">
                      <Link
                        to={routes.dashboard({ id: dashboard.id })}
                        title={'Show dashboard ' + dashboard.id + ' detail'}
                        className="text-xs bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white rounded-sm px-2 py-1 uppercase font-semibold tracking-wide"
                      >
                        Show
                      </Link>
                    </li>
                  </ul>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DashboardsList
