import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const ReLineChart = (props) => {
  let lines = props.yAxis.map((y) => {
    return <Line key={y["name"]} type="monotone" dataKey={y["name"]} stroke={y["color"]} />
  })
  return (
    <LineChart
      width={props.width}
      height={props.height}
      data={props.data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={props.xAxis} />
      <YAxis />
      <Tooltip />
      <Legend />
      {lines}
    </LineChart>
  )
}

export default ReLineChart