import { useAlert } from "react-alert"

export interface DashboardJSON {
  name: string
  description: string
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