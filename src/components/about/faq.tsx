"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import {
  ArrowRight,
  ChevronDown,
  HelpCircle,
} from "lucide-react"

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
      "Tidak sama sekali. Wicoro dirancang untuk pemula dan menyusun pelajaran secara bertahap, mulai dari alfabet hingga percakapan sehari-hari.",
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
      "Tentu. Wicoro terbuka untuk siapa saja seperti komunitas Tuli, keluarga, tenaga pendidik, hingga siapapun yang ingin berkomunikasi lebih inklusif.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="mx-auto mt-10 max-w-2xl space-y-4">
      {faqs.map((item, index) => {
        const isOpen = open === index

        return (
          <div
            key={item.question}
            className={cn(
              "overflow-hidden rounded-[1.75rem] border transition-all duration-300 relative group",
              isOpen
                ? "border-primary/40 bg-gradient-to-r from-primary/10 via-mint/15 to-card shadow-xl shadow-primary/10"
                : "border-border/80 bg-card/90 hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
            )}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : index)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
            >
              <span className="text-base font-extrabold tracking-tight text-foreground sm:text-lg">
                {item.question}
              </span>

              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "backOut" }}
                className={cn(
                  "flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                  isOpen
                    ? "bg-primary text-white border-primary shadow-md shadow-primary/25 scale-105"
                    : "bg-muted/80 text-muted-foreground border-border group-hover:text-foreground group-hover:border-primary/30"
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
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-6 pb-6 pt-1">
                    <div className="border-l-3 border-primary/80 pl-4 py-1 text-sm sm:text-base leading-relaxed text-muted-foreground">
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}

      {/* Interactive Mini Contact CTA Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-8 rounded-[2rem] border border-primary/20 bg-gradient-to-r from-primary/10 via-card to-mint/20 p-6 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 shadow-lg shadow-primary/5"
      >
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-2xl bg-primary/15 border border-primary/25 flex items-center justify-center text-primary">
            <HelpCircle className="size-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground sm:text-base">
              Punya pertanyaan lainnya?
            </h4>
            <p className="text-xs text-muted-foreground">
              Tim Wicoro siap membantumu kapan saja.
            </p>
          </div>
        </div>

        <Link
          href="/kontak"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-extrabold text-white shadow-md shadow-primary/25 transition-all hover:bg-primary/90 hover:scale-105"
        >
          <span>Hubungi Kami</span>
          <ArrowRight className="size-3.5" />
        </Link>
      </motion.div>
    </div>
  )
}

