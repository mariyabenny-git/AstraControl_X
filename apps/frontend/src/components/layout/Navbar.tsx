export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <h1 className="text-xl font-bold text-slate-800">
        Tactical Command Dashboard
      </h1>

      <div className="rounded-full bg-slate-200 px-4 py-2 text-sm">
        Commander
      </div>
    </header>
  );
}