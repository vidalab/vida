import { useAlert } from "react-alert"
import { JSONVizData } from "../components/Charts/VizData"

export interface DashboardData {
  id: number
  json: JSONVizData
}

export interface DashboardFormCellProps {
  dashboard: DashboardData
  alert: useAlert
  onSave: (id: number, input: DashboardData) => void
}