export default function FeatureCard({
  title,
  copy,
  icon,
}: {
  title: string;
  copy: string;
  icon: string;
}) {
  return (
    <div className="group rounded-3xl border border-gray-200 bg-gray-50/50 p-5 shadow-md transition hover:-translate-y-1 hover:border-[#008AFF]/40 hover:shadow-lg">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#008AFF]/10 text-2xl">
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm text-gray-600">{copy}</p>
    </div>
  );
}
