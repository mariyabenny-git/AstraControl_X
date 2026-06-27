type StatusCardProps = {
  title: string;
  value: string;
};

export default function StatusCard({
  title,
  value,
}: StatusCardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
      <h3 className="text-sm text-gray-500">{title}</h3>

      <p className="mt-3 text-4xl font-bold text-slate-900">
        {value}
      </p>
    </div>
  );
}