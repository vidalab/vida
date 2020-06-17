export interface JSONDataset {
  name: string
  url?: string
  values?: object[]
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
  [details: string] : any;
}