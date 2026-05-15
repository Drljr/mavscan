export default function Features() {
  const features = [
    {
      icon: "📱",
      title: "Quick Scanning",
      description: "Point and shoot to instantly verify product authenticity with our advanced AI",
    },
    {
      icon: "🔍",
      title: "Serial Number Verification",
      description: "Cross-reference with manufacturer databases to ensure legitimacy",
    },
    {
      icon: "🛡️",
      title: "Security Alerts",
      description: "Get real-time notifications about counterfeit threats in your area",
    },
    {
      icon: "🌍",
      title: "Global Database",
      description: "Access our comprehensive database of verified products worldwide",
    },
  ]

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#007FCF]">
            Why people use Mavscan
          </p>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Built to catch fakes before you do.
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            A focused toolkit that makes it effortless to verify everyday products, from skincare to supplements.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#007FCF]/40 hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#007FCF]/5 text-lg">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900 group-hover:text-[#007FCF]">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
