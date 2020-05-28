import React from "react"
import { MARGIN } from './Constants'
import { ResponsiveScatterPlot } from '@nivo/scatterplot'
import { ChartProps } from './ChartProps'

const NivoScatterChart = (props: ChartProps) => {
  const xLabel: string = props.axes && props.axes.x.label,
        yLabel: string = props.axes && props.axes.y.label
  return (
    <ResponsiveScatterPlot
      data={props.data}
      margin={{ top: MARGIN.top, right: MARGIN.right, bottom: MARGIN.bottom, left: MARGIN.left }}
      xScale={{ type: 'linear', min: 0, max: 'auto' }}
      xFormat={function(e){return e}}
      yScale={{ type: 'linear', min: 0, max: 'auto' }}
      yFormat={function(e){return e}}
      blendMode="multiply"
      axisTop={null}
      axisRight={null}
      axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: xLabel,
          legendPosition: 'middle',
          legendOffset: 46
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: yLabel,
          legendPosition: 'middle',
          legendOffset: -50
      }}
      legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 130,
              translateY: 0,
              itemWidth: 100,
              itemHeight: 12,
              itemsSpacing: 5,
              itemDirection: 'left-to-right',
              symbolSize: 12,
              symbolShape: 'circle',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
    />
  )
}

export default NivoScatterChart