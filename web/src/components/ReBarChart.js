import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const ReBarChart = (props) => {
  let bars = props.yAxis.map((y) => {
    return <Bar key={"bar-" + y["name"]} type="monotone" dataKey={y["name"]} fill={y["color"]} />
  })
  return (
    <BarChart
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
      {bars}
    </BarChart>
  )
}

export default ReBarChart