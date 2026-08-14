"use client"

import Image from "next/image"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

const elements = [
  { src: "/elemen%201.png", alt: "Elemen dekorasi 1", className: "top-16 left-2 w-16 sm:left-6 sm:w-24", duration: 6, delay: 0, rotate: -8 },
  { src: "/elemen%202.png", alt: "Elemen dekorasi 2", className: "top-32 right-2 w-14 sm:right-8 sm:w-20", duration: 7, delay: 0.5, rotate: 8 },
  { src: "/elemen%203.png", alt: "Elemen dekorasi 3", className: "top-1/2 left-1 hidden w-16 -translate-y-1/2 sm:block sm:left-4 sm:w-24", duration: 6.5, delay: 1, rotate: -6 },
  { src: "/elemen%204.png", alt: "Elemen dekorasi 4", className: "top-1/2 right-1 hidden w-16 -translate-y-1/2 sm:block sm:right-4 sm:w-24", duration: 7.5, delay: 0.3, rotate: 6 },
  { src: "/elemen%205.png", alt: "Elemen dekorasi 5", className: "bottom-24 left-2 w-14 sm:left-10 sm:w-20", duration: 6, delay: 1.2, rotate: -8 },
  { src: "/elemen%206.png", alt: "Elemen dekorasi 6", className: "right-2 bottom-16 w-14 sm:right-10 sm:w-20", duration: 7, delay: 0.8, rotate: 8 },
  { src: "/elemen%207.png", alt: "Elemen dekorasi 7", className: "top-8 left-1/2 hidden w-14 -translate-x-1/2 lg:block lg:w-20", duration: 8, delay: 0.2, rotate: -5 },
]

export function FloatingElements() {
  return (
    <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden" aria-hidden="true">
      {elements.map((e) => (
        <motion.div
          key={e.src}
          className={cn("absolute", e.className)}
          animate={{ y: [0, -12, 0], rotate: [e.rotate, -e.rotate, e.rotate] }}
          transition={{ duration: e.duration, delay: e.delay, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src={e.src}
            alt={e.alt}
            width={160}
            height={160}
            className="h-auto w-full drop-shadow-lg"
          />
        </motion.div>
      ))}
    </div>
  )
}
