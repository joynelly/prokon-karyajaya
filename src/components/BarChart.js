import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const BarChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const tempData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [unitData, setUnitdata] = useState([]);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Total Transaction",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: unitData,
      },
    ],
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/penjualan`);
      res?.data?.map((penjualan) => {
        let date = new Date(penjualan?.tanggal_penjualan);
        let month = date?.toLocaleString('default', { month: 'long' });
        console.log(month);
        labels.forEach((label, index) => {
          if (label === month) {
            tempData[index]++;
          }
        });
        setUnitdata(tempData);
      });
    };
    fetch();
  }, []);

  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default BarChart;