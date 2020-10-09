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
import { DashboardData, DashboardUpdateData } from '../DashboardData'
import { JSONVizData } from '../Charts/VizData'
import DashboardEditor from './DashboardEditor'
import { CSS } from './DashboardEditorCSS'

interface DashboardFormProps {
  dashboard: DashboardData
  onSave: (id: number, updateData: DashboardUpdateData) => void
  onPreview: (id: number, json: string) => void
}

interface DashboardFormState {
  textEdit: boolean
}

class DashboardForm extends React.Component<DashboardFormProps, DashboardFormState> {
  private dashboard: DashboardData

  constructor(props: DashboardFormProps) {
    super(props)
    this.dashboard = props.dashboard
    this.state = {
      // the default editor is text
      textEdit: true,
    }

    this.onPreview = this.onPreview.bind(this)
  }

  onSubmit = (data: DashboardData) => {
    data.json = this.dashboard.json
    this.props.onSave(this.dashboard.id, {name: this.dashboard.name, json: data.json})
  }

  onCodeChange = (value: JSONVizData) => {
    this.dashboard.json = JSON.stringify(value, null, ' ')
  }

  onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.dashboard.name = event.target.value
  }

  onSave = () => {
    this.props.onSave(this.dashboard.id, {name: this.dashboard.name, json: this.dashboard.json})
  }

  onPreview = () => {
    this.props.onPreview(this.dashboard.id, this.dashboard.json)
  }

  onEditorChange = () => {
    this.setState({
      textEdit: !this.state.textEdit
    })
  }

  render() {
    return (
      <div className="box-border text-sm col-span-1 bg-gray-100 p-2" style={{height: "100%"}}>
        {this.state.textEdit && <div style={{height: "100%"}}>
          <label
            className={CSS.label}
          >Name</label>
          <input
            defaultValue={this.props.dashboard?.name}
            className={CSS.input}
            onChange={this.onNameChange}
          />

          <label
            className={CSS.label + " mt-2"}
            >JSON</label>

          <div style={{height: "calc(100% - 95px)"}}>
            <CodeEditor jsonText={this.props.dashboard?.json} onChange={this.onCodeChange} />
          </div>

          <div className="text-center mt-1">
            <button
              type="submit"
              className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
              onClick={this.onSave}
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
              Editor
            </button>
          </div>
        </div>}
        {!this.state.textEdit &&
          <>
            <DashboardEditor dashboard={this.props.dashboard} />

            <div className="text-center mt-1">
              <button
                type="submit"
                className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
                onClick={this.onSave}
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
          </>
        }
      </div>
    )
  }
}

export default DashboardForm
