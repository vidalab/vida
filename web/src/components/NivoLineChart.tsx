import { MARGIN } from './Constants'
import { ResponsiveLine } from '@nivo/line'
import { LineChartProps } from './ChartProps'
import DisplayFormatter from './DisplayFormatter'

const NivoLineChart = (props: LineChartProps) => (
    <ResponsiveLine
      data={props.data}
      enableArea={props.enableArea}
      margin={{ top: MARGIN.top, right: MARGIN.right, bottom: MARGIN.bottom, left: MARGIN.left }}
      xScale={{ type: 'point' }}
      yScale={{ type: 'linear', min: props.enableArea ? 0 : 'auto', max: 'auto', stacked: true, reverse: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
          orient: 'bottom',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.axes && props.axes.x.label,
          legendOffset: 36,
          legendPosition: 'middle'
      }}
      axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.axes && props.axes.y.label,
          legendOffset: -40,
          legendPosition: 'middle',
          format: (e) => {return DisplayFormatter.formatKMB(e)}
      }}
      colors={props.colors}
      pointSize={10}
      pointColor={{ theme: 'background' }}
      pointBorderWidth={2}
      pointBorderColor={{ from: 'serieColor' }}
      pointLabel="y"
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
          {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                  {
                      on: 'hover',
                      style: {
                          itemBackground: 'rgba(0, 0, 0, .03)',
                          itemOpacity: 1
                      }
                  }
              ]
          }
      ]}
    />
)

export default NivoLineChart