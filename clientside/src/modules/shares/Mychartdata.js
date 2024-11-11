import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CourseChart = ({ CourseCounts = {} }) => {
  const data = Object.entries(CourseCounts).map(([name, value]) => ({ name, value }));


  return (
  <PieChart width={400} height={400}>
    <Pie
      data={data}
      cx={200}
      cy={200}
      labelLine={false}
      label={({ name }) => name}
      outerRadius={100}
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
);
};
export default CourseChart;
