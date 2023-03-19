import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
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
        stepSize: 1000,
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
    },
    title: {
      display: false,
    },
  },
};

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
  gradient.addColorStop(1, "rgba(223,155,45,1)");
  gradient.addColorStop(0.5, "rgba(223,155,45,0.1)");
  gradient.addColorStop(0, "rgba(223,155,45,0)");

  return gradient;
}

const labels = ["Jan", "Feb", "Mar", "Apr", "May"];

const data = {
  labels,
  datasets: [
    {
      label: "Tiến độ dự kiến",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 4000 })),
      fill: "start",
      borderColor: "#DBA362",
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          // This case happens on initial chart load
          return;
        }
        return getGradientDaChi(ctx, chartArea);
      },
      pointBackgroundColor: "#DBA362",
    },
    {
      label: "Tiến độ thực tế",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 4000 })),
      fill: "start",
      borderColor: "#B6D3FA",
      backgroundColor: "transparent",
      pointBackgroundColor: "#B6D3FA",
    },
  ],
};

export function ChartTienDo() {
  return (
    <div className="chart-container" style={{ minWidth: 300, height: 350 }}>
      <Line options={options} data={data} />
    </div>
  );
}
