"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [

    {
      question: "Does it work offline?",
      answer:
        "The Pro and Business plans include offline mode, allowing you to scan products and verify results even without an internet connection.",
    },
    {
      question: "What products can I verify?",
      answer:
        "Currently, you can verify cosmetics, health products, and beverages. We're constantly expanding to include more product categories.",
    },
  ]

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#007FCF]">
            Questions about Mavscan
          </p>
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Frequently asked.</h2>
          <p className="text-sm text-slate-600 md:text-base">
            If there&apos;s anything else you&apos;re unsure about, join the waitlist and we&apos;ll follow up.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="cursor-pointer rounded-xl border border-slate-200 bg-white transition hover:border-[#007FCF]/40"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between gap-4 px-5 py-4">
                <h3 className="pr-4 text-sm font-semibold text-slate-900">{faq.question}</h3>
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full border text-xs text-slate-500 transition-transform ${
                    openIndex === i ? "rotate-45 border-[#007FCF]/40 bg-[#007FCF]/5 text-[#007FCF]" : "border-slate-200"
                  }`}
                >
                  +
                </span>
              </div>
              {openIndex === i && (
                <div className="border-t border-slate-100 px-5 pb-4 pt-0 text-sm text-slate-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
