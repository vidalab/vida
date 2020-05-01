import DataLoader from "./DataLoader"
import Header from '../pages/Common/Header'
import Footer from '../pages/Common/Footer'

export const QUERY = gql`
  query($name: String!) {
    result: getViz(name: $name) {
      name
      vizName
    }
  }
`

export const containerClassName = "container w-full mx-auto px-2 pt-2";

export const Loading = () => <div className={containerClassName + " text-center"}>Loading...</div>

export const Empty = () => <div className={containerClassName + " text-center"}>Empty</div>

export const Failure = ({ error }) => <div className={containerClassName + " text-center"}>Error: {error.message}</div>

export const Success = ({ result }) => {
  let cssStyle = {
    height: "calc(100% - 100px)"
  }
  if (result.vizName != "") {
    return (
      <DataLoader vizName={result.vizName}/>
    )
  } else {
    return (
      <div style={{height: "100%"}}>
        <Header name="Vida"/>
        <div className={containerClassName} style={cssStyle}>
        </div>
        <Footer description="Flexible Data Visualization"/>
      </div>
    )
  }
}