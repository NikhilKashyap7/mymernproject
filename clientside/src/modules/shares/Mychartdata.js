import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';



const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CourseChart = ({ CourseCounts = {} }) => {
  const data = Object.entries(CourseCounts).map(([name, value]) => ({ name, value }));
    
  if (data.length === 0){
    return <div>No Data Availabel To Show</div>;
  }

  return (
    <div style={{width:"100%", height:'50vh'}}>
    <ResponsiveContainer width="100%" height='100%'>
  <PieChart>
    <Pie
      data={data}
      cx="50%"
      cy="50%"
      labelLine={false}
      label={({ name }) => name}
      outerRadius="80%"
      fill="#8884d8"
      dataKey="value"
    >
      {data.map((entry, index) => (
        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
      ))}
    </Pie>
    <Tooltip />
  </PieChart>
  </ResponsiveContainer>
  </div>
);
};
export default CourseChart;
