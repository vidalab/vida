import React from 'react'
import CodeEditor from 'src/components/CodeEditor'
import {
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'
import { Form } from '@redwoodjs/forms'
import { Dashboard, DashboardJSON } from '../DashboardData'

const CSS = {
  label: 'block text-gray-700 font-semibold',
  labelError: 'block mt-6 font-semibold text-red-700',
  input:
    'block mt-1 w-full p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-gray-500',
  inputError:
    'block mt-1 w-full p-2 border border-red-700 text-red-900 rounded focus:outline-none',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-700',
  activeTab: "bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold",
  inactiveTab: "bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"
}

interface DashboardFormProps {
  dashboard: Dashboard
  onSave: (id: number, input: Dashboard) => void
  onPreview: (id: number, json: DashboardJSON) => void
}

enum EditorTab {
  Info,
  Data,
  Charts
}

interface DashboardFormState {
  textEdit: boolean
  currentTab: EditorTab
}

class DashboardForm extends React.Component<DashboardFormProps, DashboardFormState> {
  private dashboard: Dashboard

  constructor(props: DashboardFormProps) {
    super(props)
    this.dashboard = props.dashboard
    this.state = {
      // the default editor is text
      textEdit: false,
      currentTab: EditorTab.Info
    }
  }

  onSubmit = (data: Dashboard) => {
    data.json = this.dashboard.json
    this.props.onSave(this.dashboard.id, data)
  }

  onCodeChange = (value: DashboardJSON) => {
    this.dashboard.json = value
  }

  onPreview = () => {
    this.props.onPreview(this.dashboard.id, this.dashboard.json)
  }

  onEditorChange = () => {
    this.setState({
      textEdit: !this.state.textEdit,
      currentTab: this.state.currentTab
    })
  }

  onEditorTabChange = (tab: EditorTab) => {
    this.setState({
      textEdit: this.state.textEdit,
      currentTab: tab
    })
  }

  onInfoChange = () => {

  }

  render() {
    return (
      <div className="box-border text-sm col-span-1 bg-gray-100 p-2" style={{height: "100%"}}>
        {this.state.textEdit && <Form onSubmit={this.onSubmit} style={{height: "100%"}}>
          <FormError
            wrapperClassName="p-4 bg-red-100 text-red-700 border border-red-300 rounded mt-2 mb-4"
            titleClassName="mt-0 font-semibold"
            listClassName="mt-2 list-disc list-inside"
          />

          <Label
            name="name"
            className={CSS.label}
            errorClassName={CSS.labelError}
          >Name</Label>
          <TextField
            name="name"
            defaultValue={this.props.dashboard?.json.name}
            className={CSS.input}
            errorClassName={CSS.inputError}
            validation={{ required: true }}
          />
          <FieldError name="name" className={CSS.errorMessage} />

          <Label
            name="json"
            className={CSS.label + " mt-2"}
            errorClassName={CSS.labelError}
            >JSON</Label>

          <div style={{height: "calc(100% - 105px)"}}>
            <CodeEditor jsonText={JSON.stringify(this.props.dashboard?.json, null, '  ')} onChange={this.onCodeChange} />
          </div>

          <FieldError name="json" className={CSS.errorMessage} />

          <div className="text-center mt-1">
            <Submit
              disabled={this.props.loading}
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
            >
              Save
            </Submit>

            <button
              className="ml-2 bg-green-600 text-white hover:bg-green-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
              title="Ctrl+Enter"
              type="button"
              onClick={this.onPreview}
            >
              Preview
            </button>

            <button
              className="ml-2 bg-orange-600 text-white hover:bg-orange-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
              type="button"
              onClick={this.onEditorChange}
            >
              Editor
            </button>
          </div>
        </Form>}
        {!this.state.textEdit &&
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
              </div>
              <div className={this.state.currentTab == EditorTab.Data ? "active" : "hidden"}>
                <h2>Data</h2>
              </div>
              <div className={this.state.currentTab == EditorTab.Charts ? "active" : "hidden"}>
                <h2>Charts</h2>
              </div>
            </div>

            <div className="text-center mt-1">
              <button
                type="submit"
                className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
              >
                Save
              </button>

              <button
                className="ml-2 bg-green-600 text-white hover:bg-green-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
                title="Ctrl+Enter"
                type="button"
                onClick={this.onPreview}
              >
                Preview
              </button>

              <button
                className="ml-2 bg-orange-600 text-white hover:bg-orange-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
                type="button"
                onClick={this.onEditorChange}
              >
                Text
              </button>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default DashboardForm
