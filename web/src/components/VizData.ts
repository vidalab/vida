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

export interface JSONVizData {
  name: string
  description: string
  columns: number
  rows: number
  data: JSONDataset[]
  charts: JSONChart[]
}