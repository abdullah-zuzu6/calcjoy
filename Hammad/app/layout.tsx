import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
//hello
export const metadata: Metadata = {
  title: "Hammad Masood | SEO Specialist & Flutter Developer",
  description:
    "Professional SEO services and Flutter mobile app development. Specializing in on-page SEO, off-page SEO, technical SEO, and cross-platform mobile applications.",
  keywords: [
    "SEO Specialist",
    "Flutter Developer",
    "On-Page SEO",
    "Off-Page SEO",
    "Technical SEO",
    "Mobile App Development",
    "Data Analytics",
  ],
  authors: [{ name: "Hammad Masood" }],
  generator: "v0.app",
  openGraph: {
    title: "Hammad Masood | SEO Specialist & Flutter Developer",
    description: "Professional SEO services and Flutter mobile app development",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
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
        <Navigation />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
