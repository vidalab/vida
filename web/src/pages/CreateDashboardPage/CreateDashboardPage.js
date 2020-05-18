import DashboardsLayout from 'src/layouts/DashboardsLayout'
import DashboardForm from 'src/components/DashboardForm'
import MonacoEditor from 'react-monaco-editor'
import vizJson from './viz.json'

const CreateDashboardPage = () => {
  const options = {
    selectOnLineNumbers: true,
    formatOnType: true,
    formatOnPaste: true
  }

  const createEditorMounted = (editor, monaco) => {
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
              height="100%"
              language="json"
              theme="vs-dark"
              value={JSON.stringify(vizJson, null, '  ')}
              options={options}
              editorDidMount={createEditorMounted}
            />
          </div>
          <div className="col-span-1 ">
            Dashboard View
          </div>
        </div>
      </div>
    </DashboardsLayout>
  )
}

export default CreateDashboardPage
