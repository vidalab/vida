import { useAlert } from "react-alert"

export interface DashboardJSONHeader {
  align: string
  text: string
  backgroundColor: string
}

export interface DashboardJSON {
  name: string
  description: string
  columns: number
  rows: number
  header?: DashboardJSONHeader
}

export interface DashboardData {
  id: number
  json: DashboardJSON
}

export interface DashboardFormCellProps {
  dashboard: DashboardData
  alert: useAlert
  onSave: (id: number, input: DashboardData) => void
}

export interface DashboardFormCellState {
  dashboard: DashboardData
}