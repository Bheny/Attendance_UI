import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ chartData }) => {
  const { labels, datasets } = chartData;

  return (
    <Doughnut
      data={{ labels, datasets }}
      options={{
        responsive: true,
        maintainAspectRatio: true,
      }}
    />
  );
};

export default DoughnutChart;
