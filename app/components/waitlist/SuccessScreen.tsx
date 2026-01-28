import Link from "next/link";

export default function SuccessScreen({
  email,
  waitlistPosition,
}: {
  email: string;
  waitlistPosition: number | null;
}) {
  return (
    <div className="space-y-4 text-center">
      <p className="text-sm uppercase tracking-[0.2em] text-[#008AFF]">
        You&apos;re in!
      </p>
      <h2 className="text-2xl font-semibold text-gray-900">Thanks for joining.</h2>
      {waitlistPosition && (
        <div className="inline-flex items-center gap-2 rounded-full border border-[#008AFF]/30 bg-[#008AFF]/10 px-4 py-2">
          <span className="text-gray-600">Your position:</span>
          <span className="text-xl font-bold text-[#008AFF]">#{waitlistPosition}</span>
        </div>
      )}
      <p className="text-gray-600">
        We&apos;ll notify you at <span className="font-medium text-[#008AFF]">{email}</span> when
        MAVSCAN is ready.
      </p>
      <div className="pt-4">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-2xl bg-[#008AFF] px-5 py-3 font-semibold text-white hover:bg-[#0077e6]"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
