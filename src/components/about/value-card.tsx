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
    icon: string
    iconRing: string
    blob: string
    shadow: string
    ghost: string
    line: string
  }
> = {
  primary: {
    icon: "from-primary to-mint-deep text-primary-foreground shadow-primary/25",
    iconRing: "border-primary/30",
    blob: "bg-mint/30 group-hover:bg-mint/50",
    shadow: "hover:shadow-primary/25",
    ghost: "text-primary/15",
    line: "from-primary to-mint-deep",
  },
  coral: {
    icon: "from-[#f08aa8] to-[#cf6f95] text-white shadow-[#cf6f95]/30",
    iconRing: "border-[#cf6f95]/30",
    blob: "bg-coral-light/40 group-hover:bg-coral/30",
    shadow: "hover:shadow-[#cf6f95]/25",
    ghost: "text-[#cf6f95]/15",
    line: "from-[#f08aa8] to-[#cf6f95]",
  },
  peach: {
    icon: "from-peach to-coral-light text-[#cf6f95] shadow-[#cf6f95]/20",
    iconRing: "border-coral/30",
    blob: "bg-coral/15 group-hover:bg-coral/25",
    shadow: "hover:shadow-peach",
    ghost: "text-coral/20",
    line: "from-coral to-coral-light",
  },
  mint: {
    icon: "from-mint to-mint-deep text-mint-deep shadow-mint-deep/25",
    iconRing: "border-mint-deep/30",
    blob: "bg-mint/40 group-hover:bg-mint-deep/30",
    shadow: "hover:shadow-mint-deep/25",
    ghost: "text-mint-deep/15",
    line: "from-mint to-mint-deep",
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
      className={cn(
        "group relative h-full overflow-hidden rounded-[2rem] border bg-card p-7 shadow-md shadow-black/8 transition-shadow duration-300 hover:shadow-2xl sm:p-8",
        a.shadow,
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
        <div
          className={cn(
            "absolute -top-14 -right-14 size-40 rounded-full blur-2xl transition-all duration-500 group-hover:scale-150",
            a.blob
          )}
        />
        <div className="absolute -bottom-10 -left-10 size-28 rounded-full bg-coral-light/25 blur-xl transition-all duration-500 group-hover:scale-125" />
      </div>

      {/* Ghost number */}
      <span
        className={cn(
          "pointer-events-none absolute -top-4 right-2 select-none text-[7rem] font-extrabold leading-none tracking-tighter",
          a.ghost
        )}
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
        <div className={cn("flex-1")}>
          <h3 className="text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-primary">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
            {description}
          </p>
          <div
            className={cn(
              "mt-4 h-1 w-12 rounded-full bg-gradient-to-r opacity-0 transition-all duration-500 group-hover:w-24 group-hover:opacity-100",
              a.line
            )}
          />
        </div>
      </div>
    </motion.div>
  )
}
