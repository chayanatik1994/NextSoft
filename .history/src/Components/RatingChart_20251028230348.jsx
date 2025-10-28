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

const RatingChart = ({ barColor = '#FFA500' }) => {
  const data = [
    { name: '5 Stars', count: 120 },
    { name: '4 Stars', count: 80 },
    { name: '3 Stars', count: 45 },
    { name: '2 Stars', count: 3000 },
    { name: '1 Star', count: 0 },
  ];

  const maxCount = Math.max(...data.map(item => item.count));

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
          />
          <XAxis
            type="number"
            stroke="#888888"
            domain={[0, maxCount]}
          />
          <Tooltip
            cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
            formatter={(value) => `${value} reviews`}
            labelFormatter={(label) => `${label}`}
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
