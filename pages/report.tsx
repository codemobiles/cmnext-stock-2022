import Layout from "@/components/Layouts/Layout";
import withAuth from "@/components/withAuth";
import React from "react";
import "chart.js/auto";
import { Chart, Line } from "react-chartjs-2";

type Props = {};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

function getRandomInt(): any {
  let randoms = [];
  for (let index = 0; index <= labels.length; index++) {
    randoms.push(Math.floor(Math.random() * (50000 - 5 + 1)) + 5);
  }
  return randoms;
}

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => getRandomInt()),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => getRandomInt()),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Report = ({}: Props) => {
  return (
    <Layout>
      <div>Report</div>
      <Line options={options} data={data} />
    </Layout>
  );
};

export default withAuth(Report);
