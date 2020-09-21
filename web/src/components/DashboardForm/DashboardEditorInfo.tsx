import React from 'react'
import { DashboardData } from '../DashboardData'
import { CSS } from './DashboardEditorCSS'

interface DashboardEditorInfoProps {
  dashboard: DashboardData
  onInfoChange: (dashboard: DashboardData) => void
}

class DashboardEditorInfo extends React.Component<DashboardEditorInfoProps> {
  constructor(props: DashboardEditorInfoProps) {
    super(props)
  }

  onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.dashboard.json.name = event.target.value
    this.props.onInfoChange(this.props.dashboard)
  }

  onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.props.dashboard.json.description = event.target.value
    this.props.onInfoChange(this.props.dashboard)
  }

  onColumnsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.dashboard.json.columns = +event.target.value
    this.props.onInfoChange(this.props.dashboard)
  }

  onRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.dashboard.json.rows = +event.target.value
    this.props.onInfoChange(this.props.dashboard)
  }

  onHeaderAlignChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.dashboard.json.header.align = event.target.value
    this.props.onInfoChange(this.props.dashboard)
  }

  onHeaderTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.dashboard.json.header.text = event.target.value
    this.props.onInfoChange(this.props.dashboard)
  }

  onHeaderBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.props.dashboard.json.header.backgroundColor = event.target.value
    this.props.onInfoChange(this.props.dashboard)
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
          value={this.props.dashboard?.json.name}
          onChange={this.onNameChange}
        />

        <label
          className={CSS.label}
        >Description</label>
        <textarea
          name="description"
          className={CSS.input}
          rows={3}
          value={this.props.dashboard?.json.description}
          onChange={this.onDescriptionChange}
        />

        <label
          className={CSS.label}
        >Columns</label>
        <input
          name="columns"
          type="text"
          className={CSS.input}
          value={this.props.dashboard?.json.columns}
          onChange={this.onColumnsChange}
        />

        <label
          className={CSS.label}
        >Rows</label>
        <input
          name="rows"
          type="text"
          className={CSS.input}
          value={this.props.dashboard?.json.rows}
          onChange={this.onRowsChange}
        />

        <label
          className={CSS.label}
        >Header Align</label>
        <select
          id="header-align"
          name="header-align"
          className={CSS.input}
          value={this.props.dashboard?.json.header?.align}
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
          value={this.props.dashboard?.json.header?.text}
          onChange={this.onHeaderTextChange}
        />

        <label
          className={CSS.label}
        >Header Background Color</label>
        <input
          name="header-background-color"
          type="text"
          className={CSS.input}
          value={this.props.dashboard?.json.header?.backgroundColor}
          onChange={this.onHeaderBackgroundColorChange}
        />
      </>
    )
  }
}

export default DashboardEditorInfo