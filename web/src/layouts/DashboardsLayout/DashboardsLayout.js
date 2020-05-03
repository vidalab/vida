import Header from '../../pages/Common/Header'

const DashboardsLayout = (props) => {
  return (
    <div className="rw-scaffold" style={{height: "100%"}}>
      <Header name="Vida"/>
      <main className="mx-4 pb-4" style={{height: "100%"}}>{props.children}</main>
    </div>
  )
}

export default DashboardsLayout
