import React from 'react'
import { Dashboard } from '../DashboardData'
import { CSS } from './DashboardEditorCSS'

interface DashboardEditorInfoProps {
  dashboard: Dashboard
}

class DashboardEditorInfo extends React.Component<DashboardEditorInfoProps> {
  onInfoChange = () => {
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
          readOnly={true}
        />

        <label
          className={CSS.label}
        >Description</label>
        <textarea
          name="description"
          className={CSS.input}
          rows={3}
          value={this.props.dashboard?.json.description}
          readOnly={true}
        />

        <label
          className={CSS.label}
        >Columns</label>
        <input
          name="columns"
          type="text"
          className={CSS.input}
          value={this.props.dashboard?.json.columns}
          readOnly={true}
        />

        <label
          className={CSS.label}
        >Rows</label>
        <input
          name="rows"
          type="text"
          className={CSS.input}
          value={this.props.dashboard?.json.rows}
          readOnly={true}
        />

        <label
          className={CSS.label}
        >Header Align</label>
        <select
          id="header-align"
          name="header-align"
          className={CSS.input}
          value={this.props.dashboard?.json.header?.align}
          onChange={this.onInfoChange}
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
          value={this.props.dashboard?.json.header?.text}
          readOnly={true}
        />

        <label
          className={CSS.label}
        >Header Background Color</label>
        <input
          name="header-background-color"
          type="text"
          className={CSS.input}
          value={this.props.dashboard?.json.header?.backgroundColor}
          readOnly={true}
        />
      </>
    )
  }
}

export default DashboardEditorInfo