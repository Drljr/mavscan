import Link from "next/link";

export default function WaitlistHeader({
  step,
  totalSteps,
}: {
  step: number;
  totalSteps: number;
}) {
  return (
    <div className="flex items-center justify-between">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#008AFF]"
      >
        <span aria-hidden>‹</span>
        Back
      </Link>
      <div className="text-xs text-gray-500">
        Step <span className="font-semibold text-gray-900">{step}</span> of {totalSteps}
      </div>
    </div>
  );
}
