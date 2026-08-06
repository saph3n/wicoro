"use client"

import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const words = [
  "Satu Isyarat, Seribu Makna",
  "Belajar dengan Hati",
  "Tangan Berbicara, Dunia Mendengar",
  "Inklusif & Hangat",
  "BISINDO untuk Semua",
  "Dari Tangan ke Hati",
  "Komunikasi Tanpa Batas",
  "Berisyarat dengan Percaya Diri",
]

const MASK = {
  maskImage:
    "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
}

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-mint/10 py-6" style={MASK}>
      <motion.div
        className="flex w-max items-center gap-8 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-8" aria-hidden={dup === 1}>
            {words.map((word) => (
              <span
                key={`${dup}-${word}`}
                className="inline-flex items-center gap-8"
              >
                <span className="text-base font-semibold italic tracking-wide text-primary/60">
                  {word}
                </span>
                <Sparkles className="size-5 text-coral animate-pulse" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
