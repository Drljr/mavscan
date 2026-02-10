import Image from "next/image";
import Link from "next/link";
import WaitlistProgress from "../WaitlistProgress";

export default function HeroSection() {
  return (
    <header className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
      <div className="space-y-6 lg:max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700">
          <span className="inline-block h-2 w-2 rounded-full bg-[#008AFF]" />
          Join the MAVSCAN early access waitlist
        </div>
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-[#008AFF]">
            Counterfeit-proof shopping
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
            Make informed choices one scan at a time.
          </h1>
          <div className="space-y-[1px]">
            <p className="text-lg text-gray-600">
              MAVSCAN allows its users to research and authenticate cosmetic
              products, health &amp; wellness products and beverages.
            </p>
            <p className="text-lg text-gray-600">
              Tell us about your needs and get notified when we launch. Help
              shape MAVSCAN and get early access to AI-powered verification,
              safety insights, and real-time alerts.
            </p>
          </div>
        </div>

        <WaitlistProgress />

        <div className="flex flex-col gap-3 sm:flex-row">
          <Link
            href="/waitlist"
            className="inline-flex items-center justify-center rounded-2xl bg-[#008AFF] px-5 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-[#0077e6] hover:scale-[1.01]"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>

      {/* Logo on the right side */}
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:pt-24">
        <div className="relative">
          <div className="absolute -inset-4 rounded-full bg-[#008AFF]/10 blur-2xl" />
          <Image
            src="/mavscan logo.jpg"
            alt="MAVSCAN Logo"
            width={280}
            height={280}
            className="relative rounded-3xl border border-gray-200 shadow-xl"
            priority
          />
        </div>
      </div>
    </header>
  );
}
