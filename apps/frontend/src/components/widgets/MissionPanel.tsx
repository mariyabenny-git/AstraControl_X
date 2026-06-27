export default function MissionPanel() {
  const missions = [
    { id: "MS-101", location: "Delhi", status: "Active" },
    { id: "MS-102", location: "Mumbai", status: "Monitoring" },
    { id: "MS-103", location: "Chennai", status: "Completed" },
    { id: "MS-104", location: "Bengaluru", status: "Active" },
  ];

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">
        Active Missions
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="py-2 text-left">Mission</th>
            <th className="py-2 text-left">Location</th>
            <th className="py-2 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {missions.map((mission) => (
            <tr key={mission.id} className="border-b">
              <td className="py-3">{mission.id}</td>
              <td>{mission.location}</td>
              <td>
                <span className="rounded bg-green-100 px-2 py-1 text-sm text-green-700">
                  {mission.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}