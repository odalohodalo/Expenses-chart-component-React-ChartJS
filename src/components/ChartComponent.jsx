import React from "react";
import data from "../data/data.json";

import { Bar } from "react-chartjs-2";
import {
  CategoryScale,
  LinearScale,
  BarElement,
  Chart,
  Tooltip,
} from "chart.js";


Chart.register(CategoryScale, LinearScale, BarElement, Tooltip);

const ChartComponent = () => {
  const labels = data.map((item) => item.day);
  const amounts = data.map((item) => item.amount);
  const highestAmount = Math.max(...amounts);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Dataset 1",
        data: amounts,
        backgroundColor: amounts.map((amount) =>
          amount === highestAmount ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)"
        ),
        hoverBackgroundColor: amounts.map((amount) =>
          amount === highestAmount
            ? "hsla(186, 34%, 60%, 0.6)"
            : "hsla(10, 79%, 65%, 0.6)"
        ),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: (context) => `$${context.formattedValue}`,
          title: () => null,
        },
      },
    },
    scales: {
      x: {
        display: true,
        grid: {
          display: false,
        },
        ticks: {
          color: "hsl(28, 10%, 53%)",
        },
      },
      y: {
        display: false,
      },
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 0,
      },
    },
    elements: {
      bar: {
        borderRadius: 5,
      },
    },
  };

  return (
    <div>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ChartComponent;
