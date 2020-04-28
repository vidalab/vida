import { MARGIN } from './Constants'
import { ResponsiveLine } from '@nivo/line'
import { LineChartProps } from './ChartProps'
import DisplayFormatter from './DisplayFormatter'

const NivoLineChart = (props: LineChartProps) => {
    const xScaleOpts = {
        type: props.axes && props.axes.x.dataType ? props.axes.x.dataType : "point",
        format: props.axes && props.axes.x.dataFormat,
        precision: props.axes && props.axes.x.timePrecision
    }
    const axisBottomOpts = {
        format: props.axes && props.axes.x.displayFormat,
        legend: props.axes && props.axes.x.label,
        legendOffset: 36,
        legendPosition: 'middle'
    }
    return (<ResponsiveLine
      data={props.data}
      enableArea={props.enableArea}
      margin={{ top: MARGIN.top, right: MARGIN.right, bottom: MARGIN.bottom, left: MARGIN.left }}
      xScale={xScaleOpts}
      yScale={{ type: 'linear', min: props.enableArea ? 0 : 'auto', max: 'auto', stacked: true, reverse: false }}
      axisTop={null}
      axisRight={null}
      axisBottom={axisBottomOpts}
      axisLeft={{
          orient: 'left',
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.axes && props.axes.y.label,
          legendOffset: -45,
          legendPosition: 'middle',
          format: (e) => {return DisplayFormatter.formatKMB(e)}
      }}
      colors={props.colors}
      pointColor={{ theme: 'background' }}
      pointLabel="y"
      pointLabelYOffset={-12}
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
    />)
}

export default NivoLineChart