import { getDashboardData } from "@/lib/api";
import MissionPanel from "@/components/widgets/MissionPanel";
import AlertsPanel from "@/components/widgets/AlertsPanel";
import UnitsPanel from "@/components/widgets/UnitsPanel";
import MapPanel from "@/components/widgets/MapPanel";

export default async function Home() {
  const data = await getDashboardData();

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Mission Dashboard</h1>

      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg bg-blue-100 p-4">
          <h2 className="font-semibold">Missions</h2>
          <p className="text-3xl">{data.missions}</p>
        </div>

        <div className="rounded-lg bg-green-100 p-4">
          <h2 className="font-semibold">Completed</h2>
          <p className="text-3xl">{data.completed}</p>
        </div>

        <div className="rounded-lg bg-red-100 p-4">
          <h2 className="font-semibold">Alerts</h2>
          <p className="text-3xl">{data.alerts}</p>
        </div>
      </div>

      <MapPanel />

      <MissionPanel />
      <AlertsPanel />
      <UnitsPanel />
    </div>
  );
}