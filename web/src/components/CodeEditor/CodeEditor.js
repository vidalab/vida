import MonacoEditor from 'react-monaco-editor'
import DashboardForm from 'src/components/DashboardForm'

import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/web'

const CSS = {
  label: 'block mt-6 text-gray-700 font-semibold',
  labelError: 'block mt-6 font-semibold text-red-700',
  input:
    'block mt-2 w-full p-2 border border-gray-300 text-gray-700 rounded focus:outline-none focus:border-gray-500',
  inputError:
    'block mt-2 w-full p-2 border border-red-700 text-red-900 rounded focus:outline-none',
  errorMessage: 'block mt-1 font-semibold uppercase text-xs text-red-700',
}

const CodeEditor = (props) => {
  let codeEditor
  const options = {
    selectOnLineNumbers: true
  }

  const createEditorMounted = (editor, monaco) => {
    codeEditor = editor
    window.addEventListener('resize', handleResize);
  }

  const handleResize = () => {
    codeEditor.layout()
  }

  return (
    <MonacoEditor
      width="auto"
      height="100%"
      language="json"
      theme="vs-dark"
      value={props.jsonText}
      options={options}
      onChange={props.onChange}
      editorDidMount={createEditorMounted}
    />
  )
}

export default CodeEditor
