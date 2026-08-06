"use client"

import { useRef } from "react"
import type { ReactNode } from "react"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"

interface ValueCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function ValueCard({ icon, title, description }: ValueCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 180,
    damping: 18,
  })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 180,
    damping: 18,
  })

  const glowX = useTransform(mx, [-0.5, 0.5], ["30%", "70%"])
  const glowY = useTransform(my, [-0.5, 0.5], ["30%", "70%"])
  const glow = useMotionTemplate`radial-gradient(220px circle at ${glowX} ${glowY}, rgba(87, 181, 133, 0.16), transparent 65%)`

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function reset() {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      className="group relative h-full overflow-hidden rounded-3xl border bg-card p-7 shadow-md shadow-black/8 transition-all duration-300 hover:shadow-2xl hover:shadow-mint-deep/25"
    >
      {/* Cursor-following glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
        aria-hidden="true"
      />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-10 -right-10 size-28 rounded-full bg-mint/25 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-mint/40" />
        <div className="absolute -bottom-8 -left-8 size-24 rounded-full bg-coral-light/25 blur-xl transition-all duration-500 group-hover:scale-125" />
        <div className="absolute top-6 right-8 size-2 rounded-full bg-pink-300 opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
        <div className="absolute bottom-8 right-12 size-1.5 rounded-full bg-mint-deep opacity-0 transition-opacity duration-300 group-hover:opacity-50" />
      </div>

      {/* Shine sweep */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <div className="relative" style={{ transform: "translateZ(24px)" }}>
        <div className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-mint-deep text-primary-foreground shadow-md shadow-primary/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
          {icon}
        </div>
        <h3 className="mt-5 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
