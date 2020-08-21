export interface JSONDataTransform {
  groupBy?: string
  select?: string
  function?: string
  fields?: object
}

export interface JSONDataset {
  name: string
  url?: string
  values?: object[]
  transform: JSONDataTransform
}

export interface JSONChartDataColumn {
  name: string
  color: string
}

export interface JSONChartAxis {
  label: string
  dataColumn?: string
  dataColumns?: JSONChartDataColumn[]
  dataType?: string
  dataFormat?: string
  displayFormat?: string
  timePrecision?: string
  color?: string
  textColor?: string
}

export interface XYAxes {
  x: JSONChartAxis,
  y: JSONChartAxis
}

export interface JSONChartPosition {
  columns: number
  rows: number
  x: number
  y: number
}

export interface JSONChart {
  type: string
  data: string
  title: string
  position: JSONChartPosition
  axes?: XYAxes
  colors: string[]
  legend?: LegendProps
  // pie chart
  group?: string
  value?: string
  // markdown text
  text?: string
}

export interface JSONVizHeader {
  align: string
  text: string
  backgroundColor: string
}

export interface LegendProps {
  enabled: boolean
}

export interface JSONVizData {
  name: string
  description: string
  header: JSONVizHeader
  columns: number
  rows: number
  scripts: string[]
  data: JSONDataset[]
  charts: JSONChart[]
}

export interface DataLoaderProps {
  vizName?: string
  vizData?: JSONVizData
}

export interface DataLoaderState {
  data: JSONVizData
}

export interface IHash {
  [details: string] : any
}

export interface MarkdownTextProps {
  text: string
}