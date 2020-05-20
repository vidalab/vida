import { Component } from "react"
import { Submit } from '@redwoodjs/web'
import DashboardsLayout from 'src/layouts/DashboardsLayout'
import Dashboard from 'src/components/Dashboard'
import MonacoEditor from 'react-monaco-editor'
import vizJson from './viz.json'

class CreateDashboardPage extends Component {
  private createEditorMounted = () => {
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
            <h2 className="text-sm font-semibold">Edit Dashboard > <b>New Dashboard</b></h2>
          </header>
          <div className="grid grid-cols-2 gap-4" style={{height: "calc(100% - 45px)"}}>
            <div className="col-span-1 bg-gray-100 p-4">
              <MonacoEditor
                width="100%"
                height="calc(100% - 35px)"
                language="json"
                theme="vs-dark"
                value={JSON.stringify(vizJson, null, '  ')}
                options={options}
                editorDidMount={this.createEditorMounted}
              />
              <div className="mt-1 text-center">
                <Submit
                  className="bg-blue-600 text-white hover:bg-blue-700 text-xs rounded px-4 py-2 uppercase font-semibold tracking-wide"
                >
                  Save
                </Submit>
              </div>
            </div>
            <div className="col-span-1 ">
              <Dashboard dashboard={vizJson} />
            </div>
          </div>
        </div>
      </DashboardsLayout>
    )
  }
}

export default CreateDashboardPage
