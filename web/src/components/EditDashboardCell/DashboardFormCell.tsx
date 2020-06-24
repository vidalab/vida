import React from 'react'
import DashboardCell from '../DashboardCell/DashboardCell'
import DashboardForm from '../DashboardForm/DashboardForm'

interface Dashboard {
  id: number
}

interface DashboardFormCellProps {
  dashboard: Dashboard
  onSave: (id: number, input: Dashboard) => void
}

class DashboardFormCell extends React.Component<DashboardFormCellProps> {
  constructor(props: DashboardFormCellProps) {
    super(props)
  }

  render() {
    return (
      <div className="grid grid-cols-3 gap-4" style={{height: "calc(100% - 45px)"}}>
        <div className="col-span-1" style={{height: "calc(100% - 40px)"}}>
          <DashboardForm dashboard={this.props.dashboard} onSave={this.props.onSave}/>
        </div>
        <div className="col-span-2 ">
          <DashboardCell id={this.props.dashboard.id} />
        </div>
      </div>
    )
  }
}

export default DashboardFormCell