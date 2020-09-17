import React from 'react'
import { Dashboard } from '../DashboardData'
import { CSS } from './DashboardEditorCSS'
import DashboardEditorInfo from './DashboardEditorInfo'

interface DashboardEditorProps {
  dashboard: Dashboard
}

enum EditorTab {
  Info,
  Data,
  Charts
}

interface DashboardEditorState {
  currentTab: EditorTab
}

class DashboardEditor extends React.Component<DashboardEditorProps, DashboardEditorState> {
  constructor(props: DashboardEditorProps) {
    super(props)
    this.state = {
      currentTab: EditorTab.Info
    }
  }

  onEditorTabChange = (tab: EditorTab) => {
    this.setState({
      currentTab: tab
    })
  }

  render = () => {
    return (
      <div style={{height: "100%"}}>
        <div style={{height: "100%"}}>
          <ul className="flex border-b">
            <li className={this.state.currentTab == EditorTab.Info ? "-mb-px mr-1" : "mr-1"}>
              <a
                className={this.state.currentTab == EditorTab.Info ? CSS.activeTab : CSS.inactiveTab}
                onClick={(e) => {
                  e.preventDefault()
                  this.onEditorTabChange(EditorTab.Info)
                }}
                href="#">Info</a>
            </li>
            <li className={this.state.currentTab == EditorTab.Data ? "-mb-px mr-1" : "mr-1"}>
              <a className={this.state.currentTab == EditorTab.Data ? CSS.activeTab : CSS.inactiveTab}
                onClick={(e) => {
                  e.preventDefault()
                  this.onEditorTabChange(EditorTab.Data)
                }}
                href="#">Data</a>
            </li>
            <li className={this.state.currentTab == EditorTab.Charts ? "-mb-px mr-1" : "mr-1"}>
              <a className={this.state.currentTab == EditorTab.Charts ? CSS.activeTab : CSS.inactiveTab}
                onClick={(e) => {
                  e.preventDefault()
                  this.onEditorTabChange(EditorTab.Charts)
                }}
                href="#">Charts</a>
            </li>
          </ul>
          <div className={this.state.currentTab == EditorTab.Info ? "active" : "hidden"}>
            <DashboardEditorInfo dashboard={this.props.dashboard} />
          </div>
          <div className={this.state.currentTab == EditorTab.Data ? "active" : "hidden"}>
            <h2>Data</h2>
          </div>
          <div className={this.state.currentTab == EditorTab.Charts ? "active" : "hidden"}>
            <h2>Charts</h2>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardEditor