import React from "react"
import { MARGIN } from './Constants'
import { ResponsiveBar } from '@nivo/bar'
import { BarCharProps } from './ChartProps'
import DisplayFormatter from './DisplayFormatter';

const NivoBarChart = (props: BarCharProps) => {
  const responsiveHeight = props.chartTitle ? "calc(100% - 20px)" : "100%"
  return (<div style={{ height: "100%" }}>
    <div className="text-center text-gray-700 font-medium">{props.chartTitle}</div>
    <div style={{ height: responsiveHeight }}>
      <ResponsiveBar
        data={props.data}
        keys={props.keys}
        enableLabel={false}
        layout={props.horizontal ? 'horizontal' : 'vertical'}
        indexBy={props.axes && props.axes.x.dataColumn}
        margin={{
          top: MARGIN.top,
          right: (props.legend && props.legend.enabled ? MARGIN.right : MARGIN.right_no_legend),
          bottom: MARGIN.bottom,
          left: MARGIN.left }}
        padding={0.3}
        colors={props.colors}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          tickValues: 8,
          legend: props.axes && (props.horizontal ? props.axes.y.label : props.axes.x.label),
          legendPosition: 'middle',
          legendOffset: 32,
          format: (e) => { return (!props.horizontal ? e : DisplayFormatter.formatKMB(e)) }
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.axes && (props.horizontal ? props.axes.x.label : props.axes.y.label),
          legendPosition: 'middle',
          legendOffset: -45,
          format: (e) => { return (props.horizontal ? e : DisplayFormatter.formatKMB(e)) }
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
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
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </div>
  </div>)
}

export default NivoBarChart