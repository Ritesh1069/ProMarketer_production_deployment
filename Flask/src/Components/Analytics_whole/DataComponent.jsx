import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const DataComponent = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [
        {
          label: 'Sales',
          data: [65, 59, 80, 81, 56],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };

    setChartData(data);
  }, []);

  return (
    <div>
      <h2>Bar Chart Example</h2>
      <div style={{ width: '600px', height: '400px' }}>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default DataComponent;
