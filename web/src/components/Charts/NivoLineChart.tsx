import React from "react"
import { MARGIN } from './Constants'
import { ResponsiveLine } from '@nivo/line'
import { LineChartProps } from './ChartProps'
import DisplayFormatter from './DisplayFormatter'
import { timeFormat } from 'd3-time-format'
import { BasicTooltip } from '@nivo/tooltip'

interface TooltipPointData {
  xFormatted: string
  yFormatted: string
}

interface TooltipPoint {
  id: string
  value: string
  color: string
  serieId: string
  serieColor: string
  data: TooltipPointData
}

interface TooltipPointArg {
  point: TooltipPoint
}

const CustomLinePointTooltip = (pointArg: TooltipPointArg) => {
  console.log(pointArg)
  const point: TooltipPoint = pointArg.point
  return (
    <BasicTooltip
      id={
        <span>
          {point.serieId}: <strong>{point.data.xFormatted}</strong>, {point.serieId}:{' '}
          <strong>{point.data.yFormatted}</strong>
        </span>
      }
      enableChip={true}
      color={point.serieColor}
    />
  )
}

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
  const responsiveHeight = props.chartTitle ? "calc(100% - 20px)" : "100%"
  const xLabel = props.axes && props.axes.x.label
  const yLabel = props.axes && props.axes.y.label
  return (
    <div style={{ height: "100%" }}>
      <div className="text-center text-gray-700 font-medium">{props.chartTitle}</div>
      <div style={{ height: responsiveHeight }}>
        <ResponsiveLine
          data={props.data}
          enableArea={props.enableArea}
          tooltip={(pointArg: TooltipPointArg) => {
            // custom tooltip label
            // https://github.com/plouc/nivo/blob/bd008153c80295d0f0c719c30b318b940d2559dc/packages/line/src/PointTooltip.js#L13
            const point: TooltipPoint = pointArg.point
            return (
              <BasicTooltip
                id={
                  <span>
                    {xLabel}: <strong>{point.data.xFormatted}</strong><br/>
                    {point.serieId}: <strong>{point.data.yFormatted}</strong>
                  </span>
                }
                enableChip={true}
                color={point.serieColor}
              />
            )
          }}
          margin={{
            top: MARGIN.top,
            right: (props.legend && props.legend.enabled ? MARGIN.right : MARGIN.right_no_legend),
            bottom: MARGIN.bottom,
            left: MARGIN.left }}
          xScale={xScaleOpts}
          yScale={{ type: 'linear', min: props.enableArea ? 0 : 'auto', max: 'auto', stacked: false, reverse: false }}
          axisTop={null}
          axisRight={null}
          axisBottom={axisBottomOpts}
          xFormat={(d) => {
            if (props.axes.x.dataType == "time") {
              return timeFormat(props.axes && props.axes.x.displayFormat)(d)
            } else {
              return d.toString()
            }
          }}
          axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: props.axes && props.axes.y.label,
            legendOffset: -45,
            legendPosition: 'middle',
            format: (e) => { return DisplayFormatter.formatKMB(e) }
          }}
          colors={props.colors}
          pointColor={{ theme: 'background' }}
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
      </div>
    </div>
  )
}

export default NivoLineChart