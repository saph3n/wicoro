import type { Metadata } from "next"

import { Contact } from "@/components/home/contact"

export const metadata: Metadata = {
  title: "Kontak — Wicoro",
  description:
    "Hubungi tim Wicoro untuk pertanyaan, saran, atau kolaborasi seputar belajar Bahasa Isyarat Indonesia (BISINDO).",
}

export default function KontakPage() {
  return (
    <div className="relative overflow-hidden">
      <Contact />
    </div>
  )
}
