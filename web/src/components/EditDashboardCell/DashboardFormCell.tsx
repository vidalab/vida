import React from 'react'
import Dashboard from '../Dashboard/Dashboard'
import DashboardForm from '../DashboardForm/DashboardForm'
import { withAlert } from "react-alert"
import { checkJSONSize } from '../../PageHelper'
import { DashboardData, DashboardFormCellProps, DashboardFormCellState, DashboardJSON } from '../DashboardData'

class DashboardFormCell extends React.Component<DashboardFormCellProps, DashboardFormCellState> {
  constructor(props: DashboardFormCellProps) {
    super(props)

    this.state = {
      dashboard: props.dashboard
    }

    this.onPreview = this.onPreview.bind(this)
  }

  handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key == "Enter") {
      this.setDashboardState()
    }
  }

  setDashboardState = () => {
    const dashboard = JSON.parse(JSON.stringify(this.state.dashboard))
    const json = dashboard.json
    if (checkJSONSize(this.props.alert, json)) {
      this.setState({
        dashboard: dashboard
      })
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleKeyDown, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleKeyDown, false);
  }

  onPreview = (id: number, json: DashboardJSON) => {
    this.state.dashboard.json = json
    this.setDashboardState()
  }

  onSave = (id: number, dashboard: DashboardData) => {
    if (checkJSONSize(this.props.alert, dashboard)) {
      this.props.onSave(id, dashboard)
    }
  }

  render() {
    return (
      <div className="grid grid-cols-3 gap-4" style={{height: "calc(100% - 15px)"}}>
        <div className="col-span-1" style={{height: "calc(100% - 30px)"}}>
          <DashboardForm dashboard={this.props.dashboard} onSave={this.onSave} onPreview={this.onPreview}/>
        </div>
        <div className="col-span-2 ">
          {this.state.dashboard && <Dashboard dashboard={this.state.dashboard.json} />}
        </div>
      </div>
    )
  }
}

export default withAlert()(DashboardFormCell)