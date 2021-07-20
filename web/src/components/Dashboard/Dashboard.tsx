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
    console.log(props)
    let json = null
    try {
      json = JSON.parse(props.dashboardText)
    } catch (e) {
      console.log(e)
    }
    this.state = {
      dashboardJSON: json
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
        {vizData && <DataLoader vizData={vizData} />}
      </ErrorBoundary>
    )
  }
}

export default Dashboard
