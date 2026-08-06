"use client"

import { Sparkles } from "lucide-react"
import { motion } from "framer-motion"

const words = [
  "Inklusif",
  "Visual",
  "Interaktif",
  "Menyenangkan",
  "Untuk Semua",
  "BISINDO",
  "Tanpa Batas",
  "Berkomunitas",
]

const MASK = {
  maskImage:
    "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
}

export function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-mint/10 py-5" style={MASK}>
      <motion.div
        className="flex w-max items-center gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-10" aria-hidden={dup === 1}>
            {words.map((word) => (
              <span
                key={`${dup}-${word}`}
                className="inline-flex items-center gap-10 text-lg font-bold tracking-wide text-primary/80"
              >
                {word}
                <Sparkles className="size-4 text-coral" aria-hidden="true" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
