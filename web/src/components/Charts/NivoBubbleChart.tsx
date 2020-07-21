import { ChartProps } from './ChartProps'
import { ResponsiveBubble } from '@nivo/circle-packing'

const NivoBubbleChart = (props: ChartProps) => {
  const root = {
    "name": "Total",
    "children": props.data
  }
  let count = 0;
  return (<ResponsiveBubble
    root={root}
    margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
    identity="name"
    value="value"
    colors={props.colors}
    colorBy="name"
    padding={6}
    labelTextColor={(d: any) => {
      if (count >= props.textColors.length) {
        count = 0
      }
      return props.textColors[count++];
    }}
    borderWidth={2}
    borderColor={{ from: 'color' }}
    animate={true}
    motionStiffness={90}
    motionDamping={12}
  />)
}

export default NivoBubbleChart