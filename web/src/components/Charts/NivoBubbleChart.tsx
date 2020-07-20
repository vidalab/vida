import { ChartProps } from './ChartProps'
import { ResponsiveBubble } from '@nivo/circle-packing'

const NivoBubbleChart = (props: ChartProps) => {
  const root = {
    "name": "Total",
    "children": props.data
  }
  return (<ResponsiveBubble
    root={root}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    identity="name"
    value="value"
    colors={props.colors}
    colorBy="name"
    padding={6}
    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 0.8 ] ] }}
    borderWidth={2}
    borderColor={{ from: 'color' }}
    animate={true}
    motionStiffness={90}
    motionDamping={12}
  />)
}

export default NivoBubbleChart