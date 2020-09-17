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

export interface Dashboard {
  id: number
  json: DashboardJSON
}

export interface DashboardFormCellProps {
  dashboard: Dashboard
  alert: useAlert
  onSave: (id: number, input: Dashboard) => void
}

export interface DashboardFormCellState {
  dashboard: Dashboard
}