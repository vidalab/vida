export interface Axis {
  label: string
  dataColumn?: string
  dataColumns?: string[]
}

export interface XYAxes {
  x: Axis,
  y: Axis
}

export interface ChartProps {
  data: Object,
  axes: XYAxes,
  colors: string[],
  keys?: string[]
}