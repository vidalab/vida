import Header from '../../pages/Common/Header'

const DashboardsLayout = (props) => {
  return (
    <div className="" style={{height: "100%"}}>
      <Header name="Vida"/>
      <main style={{height: "calc(100% - 50px)"}}>{props.children}</main>
    </div>
  )
}

export default DashboardsLayout
