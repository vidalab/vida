import React from 'react'
import DataLoader from '../Charts/DataLoader'
import ErrorBoundary from '../ErrorBoundary'
import { JSONVizData } from '../../components/Charts/VizData'

interface DashboardProps {
  dashboardJSON: JSONVizData
}

interface DashboardState {
  dashboardJSON: JSONVizData
}

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props)
    this.state = {
      dashboardJSON: props.dashboardJSON
    }
  }

  refresh(newJson: JSONVizData) {
    console.log('Dashboard refresh')
    this.setState({
      dashboardJSON: newJson
    })
  }
  render() {
    const vizData = this.state.dashboardJSON
    return (
      <ErrorBoundary>
        <DataLoader vizData={vizData} />
      </ErrorBoundary>
    )
  }
}

export default Dashboard
