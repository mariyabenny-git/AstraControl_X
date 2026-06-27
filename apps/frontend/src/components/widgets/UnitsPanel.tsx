export default function UnitsPanel() {
  const units = [
    { name: "Alpha Team", status: "Online" },
    { name: "Bravo Team", status: "Deployed" },
    { name: "Charlie Team", status: "Standby" },
    { name: "Delta Team", status: "Offline" },
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Active Units</h2>

      <div className="space-y-3">
        {units.map((unit) => (
          <div
            key={unit.name}
            className="flex items-center justify-between border-b pb-2"
          >
            <span>{unit.name}</span>
            <span className="text-sm font-medium">{unit.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}