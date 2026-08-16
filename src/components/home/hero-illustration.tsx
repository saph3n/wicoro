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
          <div className="relative overflow-hidden rounded-[1.4rem] border border-white/80 bg-white">
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
          className="absolute -top-6 sm:-top-8 left-1 sm:-left-5 z-30"
          animate={{ y: [0, -6, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.08, rotate: 1 }}
          onClick={() => setActiveBadge("hai")}
        >
          <div className={cn(
            "inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#0e3a24] to-[#2e9c64] pl-1.5 pr-4 py-1.5 shadow-lg backdrop-blur-md transition-all duration-300 cursor-pointer text-white",
            activeBadge === "hai" ? "scale-105 ring-2 ring-[#a3e635]" : ""
          )}>
            <div className="relative size-8 overflow-hidden rounded-full bg-white p-0.5 shrink-0 shadow-xs">
              <Image
                src="/Hai.png?v=2"
                alt="Isyarat Hai"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <span className="text-xs font-bold tracking-wide text-white leading-none whitespace-nowrap">
              👋 Isyarat &ldquo;Hai&rdquo;
            </span>
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
            "inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#701a3c] to-[#cf6f95] pl-1.5 pr-4 py-1.5 shadow-lg backdrop-blur-md transition-all duration-300 cursor-pointer text-white",
            activeBadge === "senang" ? "scale-105 ring-2 ring-pink-300" : ""
          )}>
            <div className="relative size-8 overflow-hidden rounded-full bg-white p-0.5 shrink-0 shadow-xs">
              <Image
                src="/senang%20(1).png"
                alt="Ekspresi Senang"
                fill
                className="object-contain p-0.5"
              />
            </div>
            <span className="text-xs font-bold tracking-wide text-white leading-none whitespace-nowrap">
              🤟 Ekspresi Senang
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
