import React from 'react'
import DashboardCell from '../DashboardCell/DashboardCell'
import DashboardForm from '../DashboardForm/DashboardForm'
import { checkJSONSize } from '../../PageHelper'

interface Dashboard {
  id: number
  json: object
}

interface DashboardFormCellProps {
  dashboard: Dashboard
  onSave: (id: number, input: Dashboard) => void
}

interface DashboardFormCellState {
  dashboard: Dashboard
}

class DashboardFormCell extends React.Component<DashboardFormCellProps, DashboardFormCellState> {
  constructor(props: DashboardFormCellProps) {
    super(props)

    this.state = {
      dashboard: props.dashboard
    }
  }

  handleKeyDown = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key == "Enter") {
      this.setDashboardState()
    }
  }

  setDashboardState = () => {
    const dashboard = this.state.dashboard
    const json = dashboard.json
    if (checkJSONSize(json)) {
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

  onPreview = (id: number, json: object) => {
    this.state.dashboard.json = json
    this.setDashboardState()
  }

  render() {
    return (
      <div className="grid grid-cols-3 gap-4" style={{height: "calc(100% - 45px)"}}>
        <div className="col-span-1" style={{height: "calc(100% - 40px)"}}>
          <DashboardForm dashboard={this.props.dashboard} onSave={this.props.onSave} onPreview={this.onPreview}/>
        </div>
        <div className="col-span-2 ">
          {this.state.dashboard && <DashboardCell id={this.props.dashboard.id} />}
        </div>
      </div>
    )
  }
}

export default DashboardFormCell