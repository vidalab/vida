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

enum EditorTab {
  Info,
  Data,
  Charts
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
      textEdit: false,
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
            <CodeEditor jsonText={this.props.dashboard?.json} onChange={this.onCodeChange} />
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
