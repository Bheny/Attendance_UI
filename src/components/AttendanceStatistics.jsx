import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'

const AttendanceStatistics = ({ totalStudents, totalTeachers, attendanceRate, totalClasses, totalEvents }) => {
  // Data for the bar chart
  const data = {
    labels: ['Total Students', 'Total Teachers', 'Attendance Rate', 'Total Classes', 'Total Events'],
    datasets: [
      {
        label: 'Attendance Statistics',
        data: [totalStudents, totalTeachers, attendanceRate, totalClasses, totalEvents],
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Adjust the color as needed
        borderColor: 'rgba(54, 162, 235, 1)', // Adjust the color as needed
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
        precision: 0,
        maxTicksLimit: 6,
      },
    },
  };

  return (
    <div>
      <h2>Overall Attendance Statistics</h2>
      <div style={{ height: '300px', width: '500px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default AttendanceStatistics;
