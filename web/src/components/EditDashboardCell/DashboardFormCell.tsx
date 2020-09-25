import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import DashboardForm from '../DashboardForm/DashboardForm'
import { withAlert } from "react-alert"
import { checkJSONSize } from '../../PageHelper'
import { DashboardData, DashboardFormCellProps } from '../DashboardData'
import { JSONVizData } from '../../components/Charts/VizData'

class DashboardFormCell extends React.Component<DashboardFormCellProps> {
  private dashboardRef: React.RefObject<typeof Dashboard>

  constructor(props: DashboardFormCellProps) {
    super(props)

    this.onPreview = this.onPreview.bind(this)
    this.dashboardRef = React.createRef()
  }

  handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key == "Enter") {
      this.refreshDashboard()
    }
  }

  refreshDashboard = () => {
    this.dashboardRef.current.refresh()
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  onPreview = (id: number, json: JSONVizData) => {
    if (checkJSONSize(this.props.alert, json)) {
      this.props.dashboard.json = json
      this.refreshDashboard()
    }
  }

  onSave = (id: number, dashboard: DashboardData) => {
    if (checkJSONSize(this.props.alert, dashboard)) {
      this.props.onSave(id, dashboard)
    }
  }

  render() {
    console.log('DashboardFormCell render')
    return (
      <div className="grid grid-cols-3 gap-4" style={{height: "calc(100% - 15px)"}}>
        <div className="col-span-1" style={{height: "calc(100% - 30px)"}}>
          <DashboardForm dashboard={this.props.dashboard} onSave={this.onSave} onPreview={this.onPreview}/>
        </div>
        <div className="col-span-2 ">
          {this.props.dashboard && <Dashboard dashboardJSON={this.props.dashboard.json} ref={this.dashboardRef} />}
        </div>
      </div>
    )
  }
}

export default withAlert()(DashboardFormCell)