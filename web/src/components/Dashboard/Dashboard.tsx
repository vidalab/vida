import React from 'react'
import DataLoader from '../Charts/DataLoader'
import ErrorBoundary from '../ErrorBoundary'
import { JSONVizData } from '../../components/Charts/VizData'

interface DashboardProps {
  dashboardText: string
}

interface DashboardState {
  dashboardJSON: JSONVizData
}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props)
    this.state = {
      dashboardJSON: JSON.parse(props.dashboardText)
    }
  }

  refresh(newJson: string) {
    this.setState({
      dashboardJSON: JSON.parse(newJson)
    })
  }
  render() {
    let vizData = this.state.dashboardJSON
    return (
      <ErrorBoundary>
        <DataLoader vizData={vizData} />
      </ErrorBoundary>
    )
  }
}

export default Dashboard
