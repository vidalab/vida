import { useAlert } from "react-alert"

export interface Dashboard {
  id: number
  json: object
}

export interface DashboardFormCellProps {
  dashboard: Dashboard
  alert: useAlert
  onSave: (id: number, input: Dashboard) => void
}

export interface DashboardFormCellState {
  dashboard: Dashboard
}