import { useAlert } from "react-alert"
import { JSONVizData } from "../components/Charts/VizData"

export interface DashboardData {
  id: number
  name: string
  json: string
}

export interface DashboardUpdateData {
  name: string
  json: string
}

export interface DashboardFormCellProps {
  dashboard: DashboardData
  alert: useAlert
  onSave: (id: number, dbData: DashboardData) => void
}