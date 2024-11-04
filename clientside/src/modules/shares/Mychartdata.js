import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
  { name: 'Marketing', value: 11 },
  { name: 'DataScience', value: 5 },
  { name: 'MERN', value: 8 },
  { name: 'Mean', value: 6 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CourseChart = () => (
  <PieChart width={800} height={800}>
    <Pie
      data={data}
      cx={400}
      cy={400}
      labelLine={false}
      label={({ name }) => name}
      outerRadius={200}
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

export default CourseChart;
