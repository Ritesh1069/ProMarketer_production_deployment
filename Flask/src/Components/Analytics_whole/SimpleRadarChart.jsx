import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const SimpleRadarChart = () => {
  const data = [
    { subject: 'Math', A: 120, B: 110, fullMark: 150 },
    { subject: 'English', A: 98, B: 130, fullMark: 150 },
    { subject: 'Science', A: 86, B: 130, fullMark: 150 },
    { subject: 'History', A: 99, B: 100, fullMark: 150 },
    { subject: 'Geography', A: 85, B: 90, fullMark: 150 },
    { subject: 'Art', A: 65, B: 85, fullMark: 150 },
  ];

  return (
    <div style={{ width: '450px', height: '450px', border:"2px solid black", borderRadius:"7px"}}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Student A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Student B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SimpleRadarChart;
