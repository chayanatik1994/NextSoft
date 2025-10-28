import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';



 * @param {Array<Object>} data - Array of objects like: 

 * @param {string} barColor - Hex color for the bars (e.g., '#0070c9').
 */
const RatingDistributionChart = ({ data, barColor = '#41c300' }) => {
 
  const maxCount = Math.max(...data.map(item => item.count)) 

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical" // KEY: This makes the bars horizontal
          barSize={20} // Adjust bar thickness
          margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
        >
          {/* Grid lines are usually vertical for a horizontal chart */}
          <CartesianGrid strokeDasharray="3 3" horizontal={false} /> 

          {/* YAxis: Category Axis (The star ratings) */}
          <YAxis
            dataKey="name"
            type="category"
            stroke="#888888"
            // Reverse the order to show 5-Star at the top, matching your image
            reversed
          /> 

          {/* XAxis: Value Axis (The review counts) */}
          <XAxis 
            type="number"
            dataKey="count"
            stroke="#888888"
            domain={[0, maxCount]} // Set domain based on max data value
          />
          
          <Tooltip 
            cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
            formatter={(value) => [`${value.toLocaleString()} Reviews`, value.name]}
          />
          
          {/* The Bar itself. dataKey refers to the numerical value */}
          <Bar 
            dataKey="count" 
            fill={barColor}
            // Optional: Add label for value inside/on top of the bar
            label={{ position: 'right', fill: '#000000', fontSize: 12 }} 
          />
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;