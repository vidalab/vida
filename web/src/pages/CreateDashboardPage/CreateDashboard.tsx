import { Component, MouseEvent } from "react"
import { Submit } from '@redwoodjs/web'
import DashboardsLayout from 'src/layouts/DashboardsLayout'
import Dashboard from 'src/components/Dashboard'
import MonacoEditor from 'react-monaco-editor'
import vizJson from './viz.json'

interface CreateDashboardProps {
  vizData: object
}

interface CreateDashboardState {
  vizData: object
}

class CreateDashboard extends Component<CreateDashboardProps, CreateDashboardState> {
  private editor: MonacoEditor
  private vizData: object

  constructor(props: CreateDashboardProps) {
    super(props)
    if (props.vizData) {
      this.vizData = props.vizData
    } else {
      this.vizData = vizJson
    }
    this.state = {
      vizData: this.vizData
    }
  }

  private createEditorMounted = (editor: MonacoEditor) => {
    this.editor = editor
  }

  private onSaveClicked = (e: MouseEvent) => {
    this.setState({
      vizData: JSON.parse(this.editor.getValue())
    })
  }

  public render = () => {
    const options = {
      selectOnLineNumbers: true,
      formatOnType: true,
      formatOnPaste: true
    }

    return (
      <DashboardsLayout>
        <div className="bg-white border rounded-lg overflow-hidden" style={{height: "100%"}}>
          <header className="bg-gray-300 text-gray-700 py-3 px-4">
            <h2 className="text-sm font-semibold"><b>Create Dashboard</b></h2>
          </header>
          <div className="grid grid-cols-3 gap-4" style={{height: "calc(100% - 45px)"}}>
            <div className="col-span-1 bg-gray-100 p-4">
              <MonacoEditor
                width="100%"
                height="calc(100% - 35px)"
                language="json"
                theme="vs-dark"
                value={JSON.stringify(this.state.vizData, null, '  ')}
                options={options}
                editorDidMount={this.createEditorMounted}
              />
              <div className="mt-1 text-center">
                <Submit
                  className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
                  onClick={this.onSaveClicked}
                >
                  Save
                </Submit>
              </div>
            </div>
            <div className="col-span-2 ">
              <Dashboard dashboard={this.state.vizData} />
            </div>
          </div>
        </div>
      </DashboardsLayout>
    )
  }
}

export default CreateDashboard
