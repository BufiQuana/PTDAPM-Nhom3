import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        stepSize: 10000,
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      align: "start",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function getGradientDaChi(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  // Create the gradient because this is either the first render
  // or the size of the chart has changed
  const width = 600;
  const height = 350;
  const gradient = ctx.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  );
  gradient.addColorStop(0, "#817AF3");
  gradient.addColorStop(0.5, "#74B0FA");
  gradient.addColorStop(1, "#79D0F1");

  return gradient;
}

function getGradientNhanVe(ctx, chartArea) {
  const chartWidth = chartArea.right - chartArea.left;
  const chartHeight = chartArea.bottom - chartArea.top;
  // Create the gradient because this is either the first render
  // or the size of the chart has changed
  const width = 600;
  const height = 350;
  const gradient = ctx.createLinearGradient(
    0,
    chartArea.bottom,
    0,
    chartArea.top
  );
  gradient.addColorStop(0, "#46A46C");
  gradient.addColorStop(0.5, "#51CC5D");
  gradient.addColorStop(1, "#57DA65");

  return gradient;
}

const data = {
  labels,
  datasets: [
    {
      label: "Số tiền đã chi",
      data: labels.map(() => faker.datatype.number({ min: 10000, max: 50000 })),
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          // This case happens on initial chart load
          return;
        }
        return getGradientDaChi(ctx, chartArea);
      },
      barPercentage: 0.5,
      borderRadius: 8,
      categoryPercentage: 0.7,
    },
    {
      label: "Số tiền nhận về",
      data: labels.map(() => faker.datatype.number({ min: 10000, max: 50000 })),
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          // This case happens on initial chart load
          return;
        }
        return getGradientNhanVe(ctx, chartArea);
      },
      barPercentage: 0.5,
      borderRadius: 8,
      categoryPercentage: 0.7,
    },
  ],
};

export function ChartNganSach() {
  return (
    <div className="chart-container" style={{ minWidth: 600, height: 350 }}>
      <Bar options={options} data={data} />
    </div>
  );
}
