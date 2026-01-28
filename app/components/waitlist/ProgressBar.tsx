export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">
      <div className="text-xs text-gray-500">
        <span>Completion</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-gray-200">
        <div
          className="h-2 rounded-full bg-[#008AFF] transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
