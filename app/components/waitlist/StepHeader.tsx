export default function StepHeader({ step, title }: { step: number; title: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-sm text-gray-600">
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#008AFF]/10 font-medium text-[#008AFF]">
          {step}
        </span>
        {title}
      </div>
    </div>
  );
}
