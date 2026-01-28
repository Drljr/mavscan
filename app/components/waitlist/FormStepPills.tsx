import type { WaitlistStep } from "@/app/lib/types";

export default function FormStepPills({
  currentStep,
  totalSteps,
  onStepClick,
}: {
  currentStep: WaitlistStep;
  totalSteps: number;
  onStepClick: (step: WaitlistStep) => void;
}) {
  return (
    <div className="mb-6 flex items-center justify-center gap-1.5">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((n) => {
        const step = n as WaitlistStep;
        return (
          <button
            key={n}
            type="button"
            onClick={() => onStepClick(step)}
            className={[
              "h-7 w-7 rounded-full border text-xs font-semibold transition text-gray-700",
              n === currentStep
                ? "border-[#008AFF] bg-[#008AFF]/10 text-[#008AFF]"
                : "border-gray-200 bg-gray-50 hover:border-[#008AFF]/50",
            ].join(" ")}
            aria-current={n === currentStep ? "step" : undefined}
          >
            {n}
          </button>
        );
      })}
    </div>
  );
}
