import MonacoEditor from 'react-monaco-editor'

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
