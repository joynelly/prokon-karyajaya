import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import axios from "axios";

const LineChart = () => {
  const labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const tempData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [sellingData, setSellingData] = useState([]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Revenue",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: sellingData,
      }
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
            tempData[index] += penjualan?.total_harga;
          }
        });
        setSellingData(tempData);
      });
    };
    fetch();
  }, []);

  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;