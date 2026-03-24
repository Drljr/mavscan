"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useCallback, useState } from "react"

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#waitlist", label: "Get early access" },
  { href: "#faq", label: "FAQ" },
]

const mobileNavLinks = navLinks.filter((l) => l.href !== "#waitlist")
const mobileCta = navLinks.find((l) => l.href === "#waitlist")!

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-8">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900">
          <Image
            src="/mavscan logo.jpg"
            alt="Mavscan"
            width={36}
            height={36}
            className="h-12 w-12 rounded-lg object-cover shadow-sm"
          />
          <span>Mavscan</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-slate-600 transition hover:text-[#007FCF]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-50 md:hidden"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>

          <Link
            href="#waitlist"
            className="hidden shrink-0 items-center justify-center rounded-lg bg-[#007FCF] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0063a1] hover:shadow-md md:inline-flex"
          >
            Get early access
          </Link>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-slate-200 bg-white md:hidden ${mobileOpen ? "block" : "hidden"}`}
      >
        <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
          {mobileNavLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#007FCF]"
              onClick={closeMobile}
            >
              {label}
            </Link>
          ))}
          <Link
            href={mobileCta.href}
            className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-[#007FCF] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0063a1] hover:shadow-md"
            onClick={closeMobile}
          >
            {mobileCta.label}
          </Link>
        </nav>
      </div>
    </header>
  )
}
