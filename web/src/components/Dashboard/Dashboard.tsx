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

class Dashboard extends React.Component<DashboardProps> {
  refresh() {
    console.log('Dashboard refresh')
  }
  render() {
    const vizData = this.props.dashboardJSON
    return (
      <ErrorBoundary>
        <DataLoader vizData={vizData} />
      </ErrorBoundary>
    )
  }
}

export default Dashboard
