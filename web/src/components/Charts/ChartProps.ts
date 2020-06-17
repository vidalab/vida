import { XYAxes, LegendProps } from '../VizData'

export interface ChartProps {
  data: Object
  axes: XYAxes
  colors: string[]
  keys?: string[]
  chartTitle: string
  // pie chart
  group?: string
  value?: string
  legend?: LegendProps
}

export interface LineChartProps extends ChartProps {
  enableArea?: boolean
}

export interface BarCharProps extends ChartProps {
  horizontal?: boolean
}