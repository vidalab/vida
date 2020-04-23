import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { MARGIN } from './Constants';

const ReLineChart = (props) => {
  let lines = props.yAxis.map((y) => {
    return <Line key={"line-" + y["name"]} type="monotone" dataKey={y["name"]} stroke={y["color"]} />
  })
  return (
    <LineChart
      width={props.width}
      height={props.height}
      data={props.data}
      margin={{
        top: MARGIN.top, right: MARGIN.right, left: MARGIN.left, bottom: MARGIN.bottom,
      }}
    >
      <XAxis dataKey={props.xAxis} />
      <YAxis />
      <Tooltip />
      <Legend />
      {lines}
    </LineChart>
  )
}

export default ReLineChart