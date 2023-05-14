import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Produk",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [13, 10, 5, 2, 20, 30, 45],
    },
    {
        label: "Jasa",
        backgroundColor: "rgb(95, 157, 247)",
        borderColor: "rgb(95, 157, 247)",
        data: [2, 5, 10, 15, 4, 8, 3],
      },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;