"use client"

import { motion } from "framer-motion"

const words = [
  { text: "Dari", className: "" },
  { text: "Tangan,", className: "text-primary" },
  { text: "Lahir", className: "" },
]

const highlight = "Percakapan"
const letterColors = [
  "text-[#1f7a52]",
  "text-primary",
  "text-[#3f9e73]",
  "text-mint-deep",
  "text-[#6fbf94]",
  "text-mint-deep",
  "text-[#3f9e73]",
  "text-primary",
  "text-[#1f7a52]",
  "text-primary",
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function HeroTitle() {
  return (
    <motion.h1
      className="relative mx-auto max-w-3xl text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <span className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
        {words.map((w) => (
          <motion.span key={w.text} variants={item} className={w.className}>
            {w.text}
          </motion.span>
        ))}
      </span>

      <span className="relative mt-1 block">
        <span className="inline-flex">
          {highlight.split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 40, scale: 0.5, rotate: -8 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 16,
                delay: 0.9 + i * 0.07,
              }}
              className={letterColors[i % letterColors.length]}
            >
              {letter}
            </motion.span>
          ))}
        </span>

        {/* Hand-drawn underline */}
        <svg
          viewBox="0 0 260 18"
          preserveAspectRatio="none"
          className="mx-auto mt-2 h-3 w-44 sm:w-56"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="title-underline" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#57b585" />
              <stop offset="100%" stopColor="#268a5e" />
            </linearGradient>
          </defs>
          <motion.path
            d="M4 14 C 45 3, 90 3, 135 8 C 180 13, 220 9, 256 12"
            fill="none"
            stroke="url(#title-underline)"
            strokeWidth={5}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.6, ease: "easeInOut" }}
          />
        </svg>
      </span>
    </motion.h1>
  )
}
