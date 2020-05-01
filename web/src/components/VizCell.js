import DataLoader from "./DataLoader"
import HomePage from '../pages/HomePage/HomePage'
import { containerClassName } from './Constants'

export const QUERY = gql`
  query($name: String!) {
    result: getViz(name: $name) {
      name
      vizName
    }
  }
`

export const Loading = () => <div className={containerClassName + " text-center"}>Loading...</div>

export const Empty = () => <div className={containerClassName + " text-center"}>Empty</div>

export const Failure = ({ error }) => <div className={containerClassName + " text-center"}>Error: {error.message}</div>

export const Success = ({ result }) => {
  if (result.vizName != "") {
    return (
      <DataLoader vizName={result.vizName}/>
    )
  } else {
    return (
      <HomePage />
    )
  }
}