import DataLoader from "./Charts/DataLoader"
import HomePage from '../pages/HomePage/HomePage'
import UserHomePage from '../pages/UserHomePage/UserHomePage'
import { containerClassName } from './Charts/Constants'
import { useAuth } from '@redwoodjs/auth'
import gql from 'graphql-tag'

export const QUERY = gql`
  query($name: String!) {
    result: getViz(name: $name) {
      name
      vizName
    }
  }
`

export interface CellError {
  message: string
}

export interface VizCellResult {
  name: string
  vizName: string
}

export interface CellSuccess {
  result: VizCellResult
}

export const Loading = () => (
  <div className={containerClassName + " text-center"}>Loading...</div>
)

export const Empty = () => (
  <div className={containerClassName + " text-center"}>Empty</div>
)

export const Failure = ( error: CellError ) => (
  <div className={containerClassName + " text-center"}>Error: {error.message}</div>
)

export const Success = ( success: CellSuccess ) => {
  const { isAuthenticated } = useAuth()

  if (success.result.vizName != "") {
    return (
      <DataLoader vizName={success.result.vizName}/>
    )
  } else {
    if (isAuthenticated) {
      return (
        <UserHomePage />
      )
    } else {
      return (
        <HomePage />
      )
    }
  }
}