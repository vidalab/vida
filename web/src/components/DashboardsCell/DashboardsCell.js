import { Link, routes } from '@redwoodjs/router'

import Dashboards from 'src/components/Dashboards'

export const QUERY = gql`
  query DASHBOARDS($ownerId: String!) {
    dashboards(ownerId: $ownerId) {
      id
      name
      user {
        auth0Id
      }
      createdAt
      updatedAt
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No dashboards yet. '}
      <Link
        to={routes.newDashboard()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ dashboards }) => {
  return <Dashboards dashboards={dashboards} />
}
