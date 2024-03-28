import React from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const ScatterPlot = () => {
  const data = [
    { x: 10, y: 200 },
    { x: 20, y: 100 },
    { x: 30, y: 170 },
    { x: 40, y: 250 },
    { x: 50, y: 300 },
    { x: 60, y: 200 },
  ];

  return (
    <div style={{ width: '900px', height: '450px', border: '2px solid black', borderRadius: '10px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="x" name="X" />
          <YAxis type="number" dataKey="y" name="Y" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="A Scatter Plot" data={data} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ScatterPlot;
