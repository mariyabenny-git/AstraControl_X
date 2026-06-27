export default function AlertsPanel() {
  const alerts = [
    {
      level: "High",
      message: "Unauthorized movement detected near Delhi.",
      color: "bg-red-100 text-red-700",
    },
    {
      level: "Medium",
      message: "Mission MS-102 awaiting confirmation.",
      color: "bg-yellow-100 text-yellow-700",
    },
    {
      level: "Low",
      message: "Routine system health check completed.",
      color: "bg-green-100 text-green-700",
    },
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">
        Recent Alerts
      </h2>

      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg border p-4"
          >
            <span>{alert.message}</span>

            <span className={`rounded px-3 py-1 text-sm font-medium ${alert.color}`}>
              {alert.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}