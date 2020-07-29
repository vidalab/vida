import { MarkdownTextProps } from './VizData'
import ReactMarkdown from 'react-markdown'

const MarkdownText = (props: MarkdownTextProps) => {
  return (
    <ReactMarkdown source={props.text} />
  )
}

export default MarkdownText