"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", missions: 2 },
  { day: "Tue", missions: 4 },
  { day: "Wed", missions: 3 },
  { day: "Thu", missions: 5 },
  { day: "Fri", missions: 6 },
  { day: "Sat", missions: 4 },
  { day: "Sun", missions: 7 },
];

export default function AnalyticsPanel() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">
        Mission Analytics
      </h2>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="missions"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}