import type React from "react"
// ... existing code ...
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mavscan - Verify Authenticity, Protect Your Health",
  description:
    "Join the waitlist for Mavscan. Scan barcodes and verify authentic cosmetics, health products, and beverages with 99.9% accuracy.",
  generator: "v0.app",
  icons: {
    icon: "/mavscan logo.jpg",
    apple: "/mavscan logo.jpg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
