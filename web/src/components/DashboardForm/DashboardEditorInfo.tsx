import React from 'react'
import { Dashboard } from '../DashboardData'
import { CSS } from './DashboardEditorCSS'

interface DashboardEditorInfoProps {
  dashboard: Dashboard
}

interface DashboardEditorInfoState {
  nameValue: string
  descriptionValue: string
  columnsValue: number
  rowsValue: number
  headerAlignValue: string
  headerTextValue: string
  headerBackgroundColorValue: string
}

class DashboardEditorInfo extends React.Component<DashboardEditorInfoProps, DashboardEditorInfoState> {
  constructor(props: DashboardEditorInfoProps) {
    super(props)
    this.state = {
      nameValue: this.props.dashboard?.json.name,
      descriptionValue: this.props.dashboard?.json.description,
      columnsValue: this.props.dashboard?.json.columns,
      rowsValue: this.props.dashboard?.json.rows,
      headerAlignValue: this.props.dashboard?.json.header?.align,
      headerTextValue: this.props.dashboard?.json.header?.text,
      headerBackgroundColorValue: this.props.dashboard?.json.header?.backgroundColor
    }
  }

  onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      nameValue: event.target.value
    })
  }

  onDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      descriptionValue: event.target.value
    })
  }

  onColumnsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      columnsValue: +event.target.value
    })
  }

  onRowsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      rowsValue: +event.target.value
    })
  }

  onHeaderAlignChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      headerAlignValue: event.target.value
    })
  }

  onHeaderTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      headerTextValue: event.target.value
    })
  }

  onHeaderBackgroundColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      headerBackgroundColorValue: event.target.value
    })
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
          value={this.state.nameValue}
          onChange={this.onNameChange}
        />

        <label
          className={CSS.label}
        >Description</label>
        <textarea
          name="description"
          className={CSS.input}
          rows={3}
          value={this.state.descriptionValue}
          onChange={this.onDescriptionChange}
        />

        <label
          className={CSS.label}
        >Columns</label>
        <input
          name="columns"
          type="text"
          className={CSS.input}
          value={this.state.columnsValue}
          onChange={this.onColumnsChange}
        />

        <label
          className={CSS.label}
        >Rows</label>
        <input
          name="rows"
          type="text"
          className={CSS.input}
          value={this.state.rowsValue}
          onChange={this.onRowsChange}
        />

        <label
          className={CSS.label}
        >Header Align</label>
        <select
          id="header-align"
          name="header-align"
          className={CSS.input}
          value={this.state.headerAlignValue}
          onChange={this.onHeaderAlignChange}
          >
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
          value={this.state.headerTextValue}
          onChange={this.onHeaderTextChange}
        />

        <label
          className={CSS.label}
        >Header Background Color</label>
        <input
          name="header-background-color"
          type="text"
          className={CSS.input}
          value={this.state.headerBackgroundColorValue}
          onChange={this.onHeaderBackgroundColorChange}
        />
      </>
    )
  }
}

export default DashboardEditorInfo