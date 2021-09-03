import React from 'react'
import DataLoader from '../Charts/DataLoader'
import ErrorBoundary from '../ErrorBoundary'
import { JSONVizData } from '../../components/Charts/VizData'
import cubejs from '@cubejs-client/core'
import { QueryRenderer } from '@cubejs-client/react'

interface DashboardProps {
  dashboardText: string
}

interface DashboardState {
  dashboardJSON: JSONVizData
}

const cubejsApi = cubejs(process.env.REACT_APP_CUBEJS_TOKEN, {
  apiUrl: process.env.REACT_APP_API_URL,
})

class Dashboard extends React.Component<DashboardProps, DashboardState> {
  constructor(props: DashboardProps) {
    super(props)
    let json = null
    try {
      json = JSON.parse(props.dashboardText)
    } catch (e) {
      console.log(e)
    }
    this.state = {
      dashboardJSON: json,
    }
  }

  refresh(newJson: string) {
    this.setState({
      dashboardJSON: JSON.parse(newJson),
    })
  }

  getCubeJSQuery(vizData: JSONVizData) {
    let cubeJSQuery = null
    if (vizData['data']) {
      for (const d of vizData['data']) {
        if (d['cubejs']) {
          cubeJSQuery = d['cubejs']['query']
        }
      }
    }
    return cubeJSQuery
  }

  setCubeJSData(vizData: JSONVizData, values: object[]) {
    if (vizData['data']) {
      for (const d of vizData['data']) {
        if (d['cubejs']) {
          d['values'] = values
        }
      }
    }
  }

  render() {
    const vizData = this.state.dashboardJSON
    const query = vizData ? this.getCubeJSQuery(vizData) : null
    return (
      <ErrorBoundary>
        {vizData && query && (
          <QueryRenderer
            query={query}
            cubejsApi={cubejsApi}
            render={({ resultSet }) => {
              if (!resultSet) {
                return 'Loading...'
              }
              this.setCubeJSData(vizData, resultSet.rawData())
              return <DataLoader vizData={vizData} />
            }}
          />
        )}
        {vizData && !query && <DataLoader vizData={vizData} />}
      </ErrorBoundary>
    )
  }
}

export default Dashboard
