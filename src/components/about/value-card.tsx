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

import { cn } from "@/lib/utils"

export type ValueAccent = "primary" | "coral" | "peach" | "mint"

interface ValueCardProps {
  icon: ReactNode
  title: string
  description: string
  number: string
  accent?: ValueAccent
  className?: string
  horizontal?: boolean
}

const accents: Record<
  ValueAccent,
  {
    blob1: string
    blob2: string
    shadow: string
    ghost: string
    line: string
    hoverTitle: string
    hoverDesc: string
    glow: string
    border: string
    icon: string
  }
> = {
  primary: {
    blob1: "bg-mint/30 group-hover:bg-mint/50",
    blob2: "bg-mint-deep/20 group-hover:bg-mint-deep/30",
    shadow: "hover:shadow-primary/20",
    ghost: "text-primary/12",
    line: "from-primary to-mint-deep",
    hoverTitle: "group-hover:text-primary",
    hoverDesc: "group-hover:text-foreground",
    glow: "rgba(87, 181, 133, 0.18)",
    border: "hover:border-primary/30",
    icon: "from-primary to-mint-deep text-primary-foreground shadow-primary/25",
  },
  coral: {
    blob1: "bg-coral/20 group-hover:bg-coral/35",
    blob2: "bg-coral-light/30 group-hover:bg-coral-light/50",
    shadow: "hover:shadow-[#cf6f95]/20",
    ghost: "text-[#cf6f95]/12",
    line: "from-[#f08aa8] to-[#cf6f95]",
    hoverTitle: "group-hover:text-[#cf6f95]",
    hoverDesc: "group-hover:text-foreground",
    glow: "rgba(207, 111, 149, 0.15)",
    border: "hover:border-[#cf6f95]/30",
    icon: "from-[#f08aa8] to-[#cf6f95] text-white shadow-[#cf6f95]/30",
  },
  peach: {
    blob1: "bg-coral-light/35 group-hover:bg-coral-light/55",
    blob2: "bg-coral/15 group-hover:bg-coral/25",
    shadow: "hover:shadow-[#f08aa8]/20",
    ghost: "text-[#f08aa8]/15",
    line: "from-[#f08aa8] to-coral-light",
    hoverTitle: "group-hover:text-[#f08aa8]",
    hoverDesc: "group-hover:text-foreground",
    glow: "rgba(240, 138, 168, 0.15)",
    border: "hover:border-[#f08aa8]/30",
    icon: "from-coral-light to-peach text-[#cf6f95] shadow-[#cf6f95]/20",
  },
  mint: {
    blob1: "bg-mint/40 group-hover:bg-mint/60",
    blob2: "bg-mint-deep/20 group-hover:bg-mint-deep/35",
    shadow: "hover:shadow-mint-deep/20",
    ghost: "text-mint-deep/15",
    line: "from-mint-deep to-mint",
    hoverTitle: "group-hover:text-mint-deep",
    hoverDesc: "group-hover:text-foreground",
    glow: "rgba(87, 181, 133, 0.15)",
    border: "hover:border-mint-deep/30",
    icon: "from-mint to-mint-deep text-mint-deep shadow-mint-deep/25",
  },
}

export function ValueCard({
  icon,
  title,
  description,
  number,
  accent = "primary",
  className,
  horizontal = false,
}: ValueCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const a = accents[accent]
  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 180,
    damping: 18,
  })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), {
    stiffness: 180,
    damping: 18,
  })

  const glowX = useTransform(mx, [-0.5, 0.5], ["30%", "70%"])
  const glowY = useTransform(my, [-0.5, 0.5], ["30%", "70%"])
  const glow = useMotionTemplate`radial-gradient(220px circle at ${glowX} ${glowY}, ${a.glow}, transparent 65%)`

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
      className={cn(
        "group relative h-full overflow-hidden rounded-[2rem] border bg-card p-7 shadow-md shadow-black/8 transition-all duration-300 hover:shadow-2xl",
        a.shadow,
        a.border,
        className
      )}
    >
      {/* Cursor-following glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
        aria-hidden="true"
      />

      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className={cn("absolute -top-14 -right-14 size-40 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150", a.blob1)} />
        <div className={cn("absolute -bottom-10 -left-10 size-28 rounded-full blur-xl transition-all duration-500 group-hover:scale-125", a.blob2)} />
      </div>

      {/* Ghost number */}
      <span
        className={cn("pointer-events-none absolute -top-4 right-2 select-none text-[7rem] font-extrabold leading-none tracking-tighter", a.ghost)}
        aria-hidden="true"
      >
        {number}
      </span>

      {/* Shine sweep */}
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

      <div
        className={cn(
          "relative flex gap-5",
          horizontal ? "flex-col sm:flex-row sm:items-start" : "flex-col",
          horizontal && "h-full"
        )}
        style={{ transform: "translateZ(24px)" }}
      >
        <div className={cn("flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6", a.icon)}>
          {icon}
        </div>
        <div className="flex-1">
          <h3 className={cn("text-lg font-bold tracking-tight transition-colors duration-300", a.hoverTitle)}>
            {title}
          </h3>
          <p className={cn("mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-300", a.hoverDesc)}>
            {description}
          </p>

        </div>
      </div>
    </motion.div>
  )
}
