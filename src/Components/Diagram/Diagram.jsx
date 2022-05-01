import React from "react";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import styles from "./Diagram.module.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  ArcElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Diagram = ({ type, labels, values }) => {
  const options = {
    maintainAspectRatio: true,
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      labels: {
        render: labels,
        display: true,
      },
      title: {
        display: true,
        text: "Chart component render",
      },
    },
  };

  const data = {
    labels: labels,
    fill: true,
    datasets: [
      {
        type: type,
        label: "Dataset 1",
        backgroundColor: [
          "rgba(255, 26, 104, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 26, 104, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
        fill: true,
        data: values,
      },
    ],
  };
  return (
    <div className={styles.diagram}>
      <Chart type={type} options={options} data={data} />
    </div>
  );
};

const MemoizedDiagram = React.memo(Diagram);
export default MemoizedDiagram;
