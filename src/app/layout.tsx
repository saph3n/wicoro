import type { Metadata } from "next"
import { Geist_Mono, Poppins } from "next/font/google"

import { SiteLayout } from "@/components/layout/site-layout"

import "./globals.css"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Wicoro",
  description:
    "Wicoro adalah platform interaktif untuk belajar Bahasa Isyarat Indonesia (BISINDO) dengan cara yang mudah, seru, dan menyenangkan.",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${poppins.variable} ${geistMono.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  )
}
