export interface Axis {
  label: string
  dataColumn?: string
  dataColumns?: string[]
  dataType?: string
  dataFormat?: string
  displayFormat?: string
  timePrecision?: string
}

export interface XYAxes {
  x: Axis,
  y: Axis
}

export interface ChartProps {
  data: Object,
  axes: XYAxes,
  colors: string[],
  keys?: string[],
  chartTitle: string
}

export interface LineChartProps extends ChartProps {
  enableArea: boolean
}

export interface BarCharProps extends ChartProps {
  horizontal: boolean
}