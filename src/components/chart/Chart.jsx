import React from 'react';
import './chart.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Chart() {
  const data = [
    {
      name: 'Jan',
      "Active User": 2000,
    },
    {
      name: 'Feb',
      "Active User": 4000,
    },
    {
      name: 'Mar',
      "Active User": 3000,
    },
    {
      name: 'Apr',
      "Active User": 6000,
    },
    {
      name: 'May',
      "Active User": 1000,
    },
    {
      name: 'Jun',
      "Active User": 8000,
    },
    {
      name: 'Jul',
      "Active User": 4000,
    },
    {
      name: 'Aug',
      "Active User": 2000,
    },
    {
      name: 'Sep',
      "Active User": 6000,
    },
    {
      name: 'Oct',
      "Active User": 1000,
    },
    {
      name: 'Nov',
      "Active User": 5000,
    },
    {
      name: 'Des',
      "Active User": 2000,
    }
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">User Analystyc</h3>
      <ResponsiveContainer width="100%" height="100%" aspect={4 / 1}>
        <LineChart
          data={data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active User"/>
          <Tooltip/>
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
