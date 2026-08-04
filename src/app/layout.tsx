import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import { SiteLayout } from "@/components/layout/site-layout"

import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Wicoro — Learn Indonesian Sign Language",
  description:
    "An interactive platform for learning Indonesian Sign Language (BISINDO).",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}
