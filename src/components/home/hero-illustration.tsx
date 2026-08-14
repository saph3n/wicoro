"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"

import { cn } from "@/lib/utils"

interface HeroIllustrationProps {
  className?: string
}

export function HeroIllustration({ className }: HeroIllustrationProps) {
  // Mouse position values for 3D tilt
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"])

  const [activeBadge, setActiveBadge] = useState<string | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <div className={cn("relative flex items-center justify-center pt-0 pb-0", className)}>
      <div
        className="relative z-10 w-full max-w-[465px] cursor-pointer [perspective:1000px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Soft glowing ambient ring pulsing in background */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 -m-4 rounded-full bg-gradient-to-tr from-primary/20 via-mint/30 to-coral-light/20 blur-3xl pointer-events-none"
        />

        {/* Clean Compact 3D Card with Continuous Tilting Left & Right Animation */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, rotate: [-3, 3, -3], y: [0, -6, 0] }}
          transition={{
            opacity: { duration: 0.6, ease: "easeOut" },
            scale: { duration: 0.6, ease: "easeOut" },
            rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.03 }}
          className="group relative overflow-hidden rounded-[2rem] border-2 border-white bg-gradient-to-b from-white via-white to-emerald-50/40 p-2.5 shadow-2xl shadow-primary/10 backdrop-blur-md transition-all duration-300"
        >
          {/* Shine Sweep Effect on Hover */}
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 group-hover:translate-x-full pointer-events-none z-20" />

          {/* Main Showcase Image */}
          <div className="relative overflow-hidden rounded-[1.4rem] border border-white/80 bg-white shadow-inner">
            <Image
              src="/bicara.png"
              alt="Dua orang berkomunikasi menggunakan Bahasa Isyarat Indonesia"
              width={580}
              height={470}
              className="h-auto w-full rounded-[1.4rem] object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
        </motion.div>

        {/* Floating Glass Badge 1 (Top Left) */}
        <motion.div
          className="absolute -top-3 left-1 sm:-left-3 z-30"
          animate={{ y: [0, -6, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.08, rotate: 1 }}
          onClick={() => setActiveBadge("hai")}
        >
          <div className={cn(
            "flex items-center gap-2 rounded-2xl border-2 bg-white/95 px-3 py-1.5 shadow-xl backdrop-blur-md transition-all duration-300 cursor-pointer",
            activeBadge === "hai" ? "border-primary shadow-primary/20 scale-105" : "border-white/90 hover:border-primary/40"
          )}>
            <div className="relative size-8 overflow-hidden rounded-xl border border-primary/20 bg-emerald-50 p-0.5 shrink-0 shadow-inner">
              <Image
                src="/Hai.png"
                alt="Isyarat Hai"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-bold text-foreground">👋 Isyarat &ldquo;Hai&rdquo;</span>
                <span className="size-1.5 rounded-full bg-primary animate-ping" />
              </div>
              <span className="block text-[9px] font-bold text-primary">Mudah Dipelajari</span>
            </div>
          </div>
        </motion.div>

        {/* Floating Glass Badge 2 (Bottom Right) */}
        <motion.div
          className="absolute -bottom-3 right-1 sm:-right-3 z-30"
          animate={{ y: [0, 6, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          whileHover={{ scale: 1.08, rotate: -1 }}
          onClick={() => setActiveBadge("senang")}
        >
          <div className={cn(
            "flex items-center gap-2 rounded-2xl border-2 bg-white/95 px-3 py-1.5 shadow-xl backdrop-blur-md transition-all duration-300 cursor-pointer",
            activeBadge === "senang" ? "border-[#cf6f95] shadow-pink-200 scale-105" : "border-white/90 hover:border-pink-300"
          )}>
            <div className="relative size-8 overflow-hidden rounded-xl border border-pink-200 bg-pink-50 p-0.5 shrink-0 shadow-inner">
              <Image
                src="/senang.png"
                alt="Ekspresi Senang"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-[11px] font-bold text-foreground">🤟 Ekspresi Senang</span>
                <span className="size-1.5 rounded-full bg-[#cf6f95] animate-ping" />
              </div>
              <span className="block text-[9px] font-bold text-[#cf6f95]">100% Interaktif</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
