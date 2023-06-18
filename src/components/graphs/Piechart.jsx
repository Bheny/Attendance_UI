import React from 'react';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ totalStudents, maleCount, femaleCount }) => {
  const data = {
    labels: ['Male', 'Female'],
    datasets: [
      {
        data: [maleCount, femaleCount],
        backgroundColor: ['#4F46E5', '#FF6584'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: 'right',
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem, data) => {
          const dataset = data.datasets[tooltipItem.datasetIndex];
          const total = dataset.data.reduce((acc, value) => acc + value, 0);
          const percentage = ((dataset.data[tooltipItem.index] / total) * 100).toFixed(2);
          return `${dataset.data[tooltipItem.index]} (${percentage}%)`;
        },
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChart;
