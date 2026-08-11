"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Apakah Wicoro gratis?",
    answer:
      "Ya! Semua materi pelajaran di Wicoro dapat diakses secara gratis. Misi kami adalah membuka jalan komunikasi bagi semua orang, tanpa terkecuali.",
  },
  {
    question: "Apakah saya perlu pengalaman sebelumnya?",
    answer:
      "Tidak sama sekali. Wicoro dirancang untuk pemula dan menyusun pelajaran secara bertahap — mulai dari alfabet hingga percakapan sehari-hari.",
  },
  {
    question: "Materi apa saja yang akan saya pelajari?",
    answer:
      "Kamu akan belajar alfabet, angka, salam sehari-hari, ekspresi dasar, percakapan sederhana, dan kuis interaktif untuk menguji pemahamanmu.",
  },
  {
    question: "Bisakah saya belajar sendiri?",
    answer:
      "Bisa! Setiap pelajaran dibuat mandiri dan mudah diikuti. Bergabunglah dengan komunitas untuk berlatih bersama dan mendapat dukungan.",
  },
  {
    question: "Apakah Wicoro juga untuk teman Tuli?",
    answer:
      "Tentu. Wicoro terbuka untuk siapa saja — komunitas Tuli, keluarga, tenaga pendidik, hingga siapapun yang ingin berkomunikasi lebih inklusif.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="mx-auto mt-10 max-w-2xl space-y-3">
      {faqs.map((item, index) => {
        const isOpen = open === index
        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-2xl border bg-card transition-all duration-300",
              isOpen
                ? "border-mint-deep/30 shadow-lg shadow-mint-deep/10"
                : "border-border/70 hover:border-mint-deep/30 hover:bg-mint/40"
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="text-sm font-semibold sm:text-base">{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={cn(
                  "flex size-7 shrink-0 items-center justify-center rounded-full transition-colors duration-300",
                  isOpen ? "bg-primary text-primary-foreground" : "bg-mint text-mint-deep"
                )}
              >
                <ChevronDown className="size-4" aria-hidden="true" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
