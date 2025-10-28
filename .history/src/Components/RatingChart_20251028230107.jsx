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

const RatingChart = ({ 
  data = [
    { name: '5', count: 120 },
    { name: '4', count: 80 },
    { name: '3', count: 45 },
    { name: '2', count: 20 },
    { name: '1', count: 10 },
  ],
  barColor = '#FFA500'
}) => {
  const maxCount = data.length ? Math.max(...data.map(item => item.count)) : 0;

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
            tickFormatter={(value) => `${value} Stars`}
          />
          <XAxis
            type="number"
            stroke="#888888"
            domain={[0, maxCount]}
          />
          <Tooltip
            cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
       
            labelFormatter={(label) => `${label} Stars`}
          />
          <Bar
            dataKey="count"
            fill={barColor}
            label={{ position: 'right', fill: '#000000', fontSize: 12 }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
