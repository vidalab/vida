import React from 'react'
import { JSONVizData } from '../Charts/VizData'
import { DashboardData } from '../DashboardData'
import { CSS } from './DashboardEditorCSS'

interface DashboardEditorInfoProps {
  dashboard: DashboardData
}

interface DashboardEditorInfoState {
  name: string
  description: string
  columns: number
  rows: number
  headerAlign: string
  headerText: string
  headerBackgroundColor: string
}

class DashboardEditorInfo extends React.Component<DashboardEditorInfoProps, DashboardEditorInfoState> {
  private dashboardJSON: JSONVizData

  constructor(props: DashboardEditorInfoProps) {
    super(props)

    this.dashboardJSON = JSON.parse(props.dashboard.json)

    this.state = {
      name: this.dashboardJSON.name,
      description: this.dashboardJSON.description,
      columns: this.dashboardJSON.columns,
      rows: this.dashboardJSON.rows,
      headerAlign: this.dashboardJSON.header ? this.dashboardJSON.header.align : "",
      headerText: this.dashboardJSON.header ? this.dashboardJSON.header.text : "",
      headerBackgroundColor: this.dashboardJSON.header ? this.dashboardJSON.header.backgroundColor : ""
    }
  }

  onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.dashboardJSON.name = event.target.value
    this.setState({
      name: event.target.value
    })
    this.updateJSONProp()
  }

  onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.dashboardJSON.description = event.target.value
    this.setState({
      description: event.target.value
    })
    this.updateJSONProp()
  }

  onColumnsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.dashboardJSON.columns = +event.target.value
    this.setState({
      columns: +event.target.value
    })
    this.updateJSONProp()
  }

  onRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.dashboardJSON.rows = +event.target.value
    this.setState({
      rows: +event.target.value
    })
    this.updateJSONProp()
  }

  onHeaderAlignChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.initHeader()
    this.dashboardJSON.header.align = event.target.value
    this.setState({
      headerAlign: event.target.value
    })
    this.updateJSONProp()
  }

  onHeaderTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.initHeader()
    this.dashboardJSON.header.text = event.target.value
    this.setState({
      headerText: event.target.value
    })
    this.updateJSONProp()
  }

  onHeaderBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.initHeader()
    this.dashboardJSON.header.backgroundColor = event.target.value
    this.setState({
      headerBackgroundColor: event.target.value
    })
    this.updateJSONProp()
  }

  updateJSONProp = () => {
    this.props.dashboard.json = JSON.stringify(this.dashboardJSON, null, ' ')
  }

  initHeader = () => {
    if (!this.dashboardJSON.header) {
      this.dashboardJSON.header = {
        align: "",
        text: "",
        backgroundColor: ""
      }
    }
  }

  render = () => {
    return (
      <>
        <label
          className={CSS.label}
        >Name</label>
        <input
          name="name"
          type="text"
          className={CSS.input}
          value={this.state.name}
          onChange={this.onNameChange}
        />

        <label
          className={CSS.label}
        >Description</label>
        <textarea
          name="description"
          className={CSS.input}
          rows={3}
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />

        <label
          className={CSS.label}
        >Columns</label>
        <input
          name="columns"
          type="text"
          className={CSS.input}
          value={this.state.columns}
          onChange={this.onColumnsChange}
        />

        <label
          className={CSS.label}
        >Rows</label>
        <input
          name="rows"
          type="text"
          className={CSS.input}
          value={this.state.rows}
          onChange={this.onRowsChange}
        />

        <label
          className={CSS.label}
        >Header Align</label>
        <select
          id="header-align"
          name="header-align"
          className={CSS.input}
          value={this.state.headerAlign}
          onChange={this.onHeaderAlignChange}
          >
          <option value=""></option>
          <option value="left">left</option>
          <option value="center">center</option>
          <option value="right">right</option>
        </select>

        <label
          className={CSS.label}
        >Header Text</label>
        <input
          name="header-text"
          type="text"
          className={CSS.input}
          value={this.state.headerText}
          onChange={this.onHeaderTextChange}
        />

        <label
          className={CSS.label}
        >Header Background Color</label>
        <input
          name="header-background-color"
          type="text"
          className={CSS.input}
          value={this.state.headerBackgroundColor}
          onChange={this.onHeaderBackgroundColorChange}
        />
      </>
    )
  }
}

export default DashboardEditorInfo