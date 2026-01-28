import FieldLabel from "./FieldLabel";
import TextArea from "./TextArea";

export default function CardMultiSelect({
  options,
  value,
  onChange,
  label,
  maxSelections,
  required,
  showError,
  otherValue,
  onOtherChange,
}: {
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  label?: string;
  maxSelections?: number;
  required?: boolean;
  showError?: boolean;
  otherValue?: string;
  onOtherChange?: (value: string) => void;
}) {
  const handleToggle = (option: string) => {
    if (value.includes(option)) {
      onChange(value.filter((v) => v !== option));
    } else {
      if (maxSelections && value.length >= maxSelections && option !== "Other") {
        return; // Don't allow more selections (except "Other")
      }
      onChange([...value, option]);
    }
  };

  const showOtherInput = value.includes("Other") && onOtherChange !== undefined;

  return (
    <div className="space-y-2">
      {label && (
        <div className="flex flex-col items-center gap-1">
          <FieldLabel>{label}</FieldLabel>
          {maxSelections && (
            <span className="text-xs text-gray-500">
              Choose one or more (max {maxSelections})
            </span>
          )}
        </div>
      )}
      <div className="grid gap-3">
        {options.map((option) => {
          const isSelected = value.includes(option);
          const isOther = option === "Other";
          return (
            <div key={option} className="space-y-2">
              <button
                type="button"
                onClick={() => handleToggle(option)}
                disabled={
                  maxSelections
                    ? !isSelected && value.length >= maxSelections && option !== "Other"
                    : false
                }
                className={[
                  "w-full rounded-lg border px-4 py-3 text-left transition text-gray-900",
                  isSelected
                    ? "border-[#008AFF] bg-[#008AFF]/10 text-[#008AFF] shadow-[0_0_20px_rgba(0,138,255,0.2)]"
                    : "border-gray-200 bg-white hover:border-[#008AFF]/50",
                  maxSelections &&
                  !isSelected &&
                  value.length >= maxSelections &&
                  option !== "Other" &&
                  "opacity-50 cursor-not-allowed",
                ].join(" ")}
              >
                <span className="font-medium">{option}</span>
              </button>
              {isOther && showOtherInput && (
                <div className="pl-1">
                  <TextArea
                    value={otherValue || ""}
                    onChange={(e) => onOtherChange?.(e.target.value)}
                    placeholder="Please specify..."
                    rows={2}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
      {required && showError && value.length === 0 && (
        <p className="text-center text-xs text-red-600">Please select at least one option</p>
      )}
      {required && showError && value.includes("Other") && !otherValue && (
        <p className="text-center text-xs text-red-600">Please provide details</p>
      )}
    </div>
  );
}
