import DashboardsLayout from 'src/layouts/DashboardsLayout'
import DashboardForm from 'src/components/DashboardForm'
import MonacoEditor from 'react-monaco-editor'


const CreateDashboardPage = () => {
  const options = {
    selectOnLineNumbers: true
  }

  return (
    <DashboardsLayout>
      <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Dashboard > <b>New Dashboard</b></h2>
      </header>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 bg-gray-100 p-4">
        </div>
        <div className="col-span-1 ">
        </div>
      </div>

      <MonacoEditor
        width="800"
        height="600"
        language="javascript"
        theme="vs-dark"
        value={"console.log('Hello')"}
        options={options}
      />
    </div>
    </DashboardsLayout>
  )
}

export default CreateDashboardPage
