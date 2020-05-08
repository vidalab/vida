export interface JSONDataset {
  name: string
  url?: string
  values?: any[]
}

export interface JSONChart {
  type: string
  data: string
  title: string
}

export interface JSONVizHeader {
  align: string
  text: string
  backgroundColor: string
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
  data: object
}