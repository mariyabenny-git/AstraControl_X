export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-gray-100 p-4">
      <h2 className="font-semibold mb-4">Navigation</h2>

      <ul className="space-y-2">
        <li>Dashboard</li>
        <li>Map</li>
        <li>Units</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}
