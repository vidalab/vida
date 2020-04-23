import React from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { MARGIN } from './Constants';

const ReAreaChart = (props) => {
  let areaLines = props.yAxis.map((y, index) => {
    return <Area key={"area-line-" + y["name"]} type="monotone" dataKey={y["name"]} stroke={y["color"]} fillOpacity={1} fill={"url(#colorGradient" + index + ")"} />
  })
  let areaGradients = props.yAxis.map((y, index) => {
    return <linearGradient key={"color-gradient-" + index} id={"colorGradient" + index} x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor={y["color"]} stopOpacity={0.8}/>
      <stop offset="95%" stopColor={y["color"]} stopOpacity={0}/>
    </linearGradient>
  })
  return (
    <AreaChart
      width={props.width}
      height={props.height}
      data={props.data}
      margin={{
        top: MARGIN.top, right: MARGIN.right, left: MARGIN.left, bottom: MARGIN.bottom,
      }}
    >
      <defs>
        {areaGradients}
      </defs>
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      {areaLines}
    </AreaChart>
  )
}

export default ReAreaChart