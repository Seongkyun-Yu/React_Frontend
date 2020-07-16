import React from "react";
import { Line } from "react-chartjs-2";

const DayAudienceLine = () => {

  const options = {
    legend: {
      display: false,
      title: false,
    },
    scales: {
      yAxes: [{
        ticks: {
          autoSkip: true,
          stepSize: 1,
          beginAtZero: true,
          display: false,
        },
      }],
      xAxes: [{
        ticks: {
          autoSkip: true,
          stepSize: 1,
          beginAtZero: true
        },
      }]
    },

    maintainAspectRatio: false
  };
  let currentDay = new Date();
  const data = {
    labels: ["7.8", "7.9", "7.10", "7.11", "7.12"],
    datasets: [
      {
        label: "누적관객수",
        data: [
          30,
          10,
          100,
          150,
          300
        ],
        backgroundColor: [
          '#309eb0',
          '#309eb0',
          '#309eb0',
          '#309eb0',
          '#309eb0',
        ],
        borderColor: "#309eb0",
        fill: false,
      }
    ]
  }

  return (
    <div>
      <Line
        data={data}
        width={216}
        height={216}
        options={options}
      />
    </div>
  );
};

export default DayAudienceLine;