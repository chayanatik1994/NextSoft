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

/**
 * @param {Array<Object>} data 
 * @param {string} barColor
 */
const RatingChart = ({ data, barColor = '#41c300' }) => {

  const maxCount = Math.max(...data.map(item => item.count)) 

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical" 
          barSize={20} 
          margin={{ top: 10, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} /> 

          <YAxis
            dataKey="name"
            type="category"
            stroke="#888888"
            reversed
          /> 

          <XAxis 
            type="number"
            dataKey="count"
            stroke="#888888"
            domain={[0, maxCount]} 
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