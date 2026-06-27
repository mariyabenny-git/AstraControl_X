export default function Sidebar() {
  const items = [
    "Dashboard",
    "Map",
    "Units",
    "Missions",
    "Analytics",
    "Settings",
  ];

  return (
    <aside className="w-64 bg-slate-900 text-white p-6">
      <h2 className="mb-8 text-2xl font-bold text-cyan-400">
        AstraControl
      </h2>

      <nav className="space-y-3">
        {items.map((item) => (
          <button
            key={item}
            className="block w-full rounded-lg px-4 py-3 text-left transition hover:bg-slate-800"
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}