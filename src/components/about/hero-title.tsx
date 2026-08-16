"use client"

import { motion } from "framer-motion"

export function HeroTitle() {
  return (
    <div className="space-y-4">
      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.15]"
      >
        <span>Dari Tangan, Lahir</span>{" "}
        <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-primary via-mint-deep to-[#cf6f95] drop-shadow-sm">
          Percakapan Tanpa Suara
        </span>
      </motion.h1>
    </div>
  )
}
