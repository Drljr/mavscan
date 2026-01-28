export default function TextArea({
  showError,
  required,
  value,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  showError?: boolean;
}) {
  const hasError = required && showError && !value;
  return (
    <div className="space-y-1">
      <textarea
        {...props}
        value={value}
        className={[
          "w-full rounded-lg border px-4 py-3 text-gray-900 placeholder:text-gray-400 bg-white",
          "outline-none transition focus:ring-2 focus:ring-[#008AFF]/40",
          hasError
            ? "border-red-400 focus:border-red-400"
            : "border-gray-300 focus:border-[#008AFF]",
          props.className ?? "",
        ].join(" ")}
      />
      {hasError && (
        <p className="text-center text-xs text-red-600">This field is required</p>
      )}
    </div>
  );
}
