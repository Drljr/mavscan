import Link from "next/link";

const features = [
  {
    title: "Quick Scanning",
    copy: "Point and shoot to instantly verify product authenticity with our AI.",
    icon: "📱",
  },
  {
    title: "Serial Number Verification",
    copy: "Cross-reference with manufacturer databases to ensure legitimacy.",
    icon: "🔎",
  },
  {
    title: "Security Alerts",
    copy: "Real-time notifications about counterfeit threats near you.",
    icon: "🛡️",
  },
  {
    title: "Product History",
    copy: "View supply chain details for any product in seconds.",
    icon: "💾",
  },
  {
    title: "Global Database",
    copy: "Comprehensive verified products database worldwide.",
    icon: "🌍",
  },
  {
    title: "Smart Integration",
    copy: "Works with your favorite shopping and inventory apps.",
    icon: "⚙️",
  },
];

const pricing = [
  {
    name: "Free",
    price: "$0",
    description: "Great for trying MAVSCAN and light personal use.",
    perks: ["50 scans/month", "Basic verification", "Community support"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "For power users who want unlimited protection.",
    perks: [
      "Unlimited scans",
      "Priority support",
      "Advanced analytics",
      "Offline mode",
      "Custom alerts",
    ],
    cta: "Get Started",
    highlight: true,
  },
  {
    name: "Business",
    price: "$29.99",
    description: "For teams and retailers protecting every shipment.",
    perks: [
      "Everything in Pro",
      "Team management",
      "API access",
      "Bulk scanning",
      "Dedicated support",
    ],
    cta: "Get Started",
    highlight: false,
  },
];

const selectOptions = {
  interests: [
    "Cosmetics",
    "Health & Wellness Products",
    "Beverages",
    "All of the above",
  ],
  frequency: ["Daily", "Weekly", "Monthly", "Occasionally"],
  concern: [
    "Authenticity",
    "Safety ingredients",
    "Health impact",
    "Brand transparency",
    "All of the above",
  ],
  counterfeit: ["Yes", "No", "Not sure"],
  research: [
    "Online reviews",
    "Brand websites",
    "Ask friends/family",
    "Don't research much",
    "Other",
  ],
  features: [
    "Barcode scanning",
    "Ingredient analysis",
    "Counterfeit detection",
    "Safety ratings",
    "Product recalls/alerts",
    "User reviews",
    "Other",
  ],
  category: [
    "Individual consumer",
    "Business owner/retailer",
    "Health professional",
    "Beauty professional",
    "Other",
  ],
  beta: ["Yes", "No", "Maybe"],
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f172b] text-white">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#0f172b] via-[#11253f] to-[#0f172b]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(circle_at_50%_-20%,rgba(163,255,0,0.12),transparent_50%)]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-12 md:px-8 lg:px-10">
        <header className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-6 lg:max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/80 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full bg-lime-400" />
              Join the MAVSCAN early access waitlist
            </div>
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.25em] text-lime-300">
                Counterfeit-proof shopping
              </p>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Verify every product with confidence.
              </h1>
              <p className="text-lg text-white/75">
                Tell us about your needs and get notified when we launch. Help
                shape MAVSCAN and get early access to AI-powered verification,
                safety insights, and real-time alerts.
              </p>
            </div>

            <div className="rounded-2xl border border-white/5 bg-white/5 p-4 backdrop-blur">
              <div className="flex items-center justify-between text-sm text-white/70">
                <span>Waitlist progress</span>
                <span className="text-lime-300">You&apos;re early</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-white/10">
                <div className="h-2 w-[68%] rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-300 shadow-[0_0_20px_rgba(163,255,0,0.5)]" />
              </div>
              <p className="mt-2 text-xs text-white/60">
                Looks similar to the flow screens you shared, with our primary
                color locked to #0f172b.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/waitlist"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-300 px-5 py-3 text-base font-semibold text-[#0f172b] shadow-[0_15px_60px_rgba(163,255,0,0.25)] transition hover:scale-[1.01]"
              >
                Join the Waitlist
              </Link>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:border-lime-300/50 hover:text-lime-200"
              >
                View Pricing
              </a>
            </div>
          </div>
        </header>

        <section className="space-y-6">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-lime-300">
                Feature preview
              </p>
              <h2 className="text-3xl font-semibold">Powerful Features</h2>
              <p className="text-white/70">
                Adapted from your feature image with vibrant cards.
              </p>
            </div>
            <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              Inspired by your provided feature grid visual
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/3 to-transparent p-5 shadow-[0_20px_80px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 hover:border-lime-300/60"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                    {item.icon}
                  </span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="mt-3 text-sm text-white/70">{item.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="pricing"
          className="space-y-6 rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur"
        >
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.2em] text-lime-300">
              Pricing
            </p>
            <h2 className="text-3xl font-semibold">Simple Pricing</h2>
            <p className="text-white/70">
              Modeled after your pricing reference, with our color system.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-3xl border p-6 transition hover:-translate-y-1 ${plan.highlight
                  ? "border-lime-400/70 bg-gradient-to-br from-[#0f172b] via-[#0e2f45] to-[#0b3e52] shadow-[0_20px_80px_rgba(0,0,0,0.4)]"
                  : "border-white/10 bg-white/5"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-2xl bg-white/10" />
                  <div>
                    <p className="text-sm uppercase tracking-[0.15em] text-white/60">
                      {plan.name}
                    </p>
                    <p className="text-3xl font-bold">
                      {plan.price}
                      <span className="text-base font-medium text-white/60">
                        {plan.name === "Free" ? "" : "/month"}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/70">{plan.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2">
                      <span className="text-lime-300">✔</span>
                      {perk}
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-6 w-full rounded-2xl px-4 py-3 text-center text-base font-semibold transition ${plan.highlight
                    ? "bg-gradient-to-r from-lime-400 via-emerald-400 to-cyan-300 text-[#0f172b]"
                    : "bg-white/10 text-white hover:border-lime-300 hover:text-lime-200"
                    }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
