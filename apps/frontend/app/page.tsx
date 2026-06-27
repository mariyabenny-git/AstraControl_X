import StatusCard from "@/components/widgets/StatusCard";

export default function HomePage() {
  return (
    <>
      <h1 className="mb-8 text-4xl font-bold">
        AstraControl Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <StatusCard title="Units Online" value="12" />
        <StatusCard title="Active Missions" value="3" />
        <StatusCard title="Alerts" value="1" />
        <StatusCard title="Network" value="Stable" />
      </div>
    </>
  );
}