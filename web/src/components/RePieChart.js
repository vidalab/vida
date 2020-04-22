import React from 'react'
import {
  PieChart, Pie, Tooltip, Legend
} from 'recharts'

const RePieChart = (props) => {
  const outerRadius = 100, radiusDiff = 20
  let pies = props.dataGroups.map((dg, index) => {
    return <Pie key={"pie-" + index} data={dg["data"]} type="monotone"
            dataKey="value" nameKey="name"
            outerRadius={outerRadius - (radiusDiff * index)} fill={dg["color"]} />
  })
  return (
    <PieChart
      width={props.width}
      height={props.height}
    >
      <Tooltip />
      {pies}
    </PieChart>
  )
}

export default RePieChart