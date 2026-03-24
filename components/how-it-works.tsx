export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Download App",
      description: "Get Mavscan from your app store for free",
    },
    {
      number: "2",
      title: "Point & Scan",
      description: "Use your camera to scan product barcodes",
    },
    {
      number: "3",
      title: "Instant Results",
      description: "Get real-time verification results immediately",
    },
    {
      number: "4",
      title: "Shop Safely",
      description: "Make informed purchasing decisions with confidence",
    },
  ]

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-lg text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#007FCF]">
            How Mavscan fits in
          </p>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">From shelf to sure.</h2>
          <p className="text-sm text-slate-600 md:text-base">
            A clear, guided flow so anyone can validate products in seconds—no hardware or training required.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {steps.map((step, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="mb-4 flex justify-center md:justify-start">
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#007FCF]/10 text-xs font-semibold text-[#007FCF]">
                  {step.number}
                </div>
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900">{step.title}</h3>
              <p className="mx-auto max-w-sm text-sm text-slate-600 md:mx-0 md:max-w-none">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
