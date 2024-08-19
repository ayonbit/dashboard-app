"use client";
//Dependencies
import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./chart.module.css";
//chart Data
const chartData = [
  {
    name: "Sun",
    visit: 5400,
    click: 4600,
  },
  {
    name: "Mon",
    visit: 1398,
    click: 2210,
  },
  {
    name: "Tue",
    visit: 9800,
    click: 2290,
  },
  {
    name: "Wed",
    visit: 3908,
    click: 2000,
  },
  {
    name: "Thu",
    visit: 4800,
    click: 2181,
  },
  {
    name: "Fri",
    visit: 3800,
    click: 2500,
  },
  {
    name: "Sat",
    visit: 4300,
    click: 2100,
  },
];
//Chart Main Function
const Chart = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{ background: "#151c2c", border: "none" }} />
          <Legend />
          <Line
            type="monotone"
            dataKey="visit"
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey="click"
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
