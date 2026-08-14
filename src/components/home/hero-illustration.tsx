"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Heart, Sparkles, Hand } from "lucide-react"

import { cn } from "@/lib/utils"

interface HeroIllustrationProps {
  className?: string
}

export function HeroIllustration({ className }: HeroIllustrationProps) {
  return (
    <div className={cn("relative flex items-center justify-center py-4", className)}>
      {/* Center Image Container */}
      <div className="relative z-10 w-full max-w-lg">
        {/* Main Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <Image
            src="/bicara.png"
            alt="Dua orang berkomunikasi menggunakan Bahasa Isyarat Indonesia"
            width={640}
            height={520}
            className="h-auto w-full drop-shadow-xl transition-transform duration-500 hover:scale-[1.02]"
            priority
          />
        </motion.div>

        {/* Floating Glassmorphism Badge 1 — Top Left: "Hai / Salam" */}
        <motion.div
          className="absolute -top-4 -left-4 sm:-left-8 z-20"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
          transition={{
            opacity: { duration: 0.6, delay: 0.3 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <div className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/80 p-3 shadow-lg shadow-black/5 backdrop-blur-md transition-transform duration-300 hover:scale-105">
            <div className="flex size-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-mint-deep text-white shadow-md shadow-primary/20">
              <Hand className="size-5" />
            </div>
            <div className="pr-1">
              <div>
                <span className="text-xs font-bold text-foreground">👋 Isyarat &ldquo;Hai&rdquo;</span>
              </div>
              <p className="text-[11px] text-primary font-medium">Mudah dipelajari</p>
            </div>
          </div>
        </motion.div>

        {/* Floating Glassmorphism Badge 2 — Right Center: "Aku Cinta Kamu" */}
        <motion.div
          className="absolute top-1/2 -right-4 sm:-right-8 z-20 -translate-y-1/2"
          initial={{ opacity: 0, x: 20, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, y: [0, 12, 0], scale: 1 }}
          transition={{
            opacity: { duration: 0.6, delay: 0.5 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
          }}
        >
          <div className="flex items-center gap-2.5 rounded-2xl border border-white/80 bg-white/85 p-3 shadow-lg shadow-black/5 backdrop-blur-md transition-transform duration-300 hover:scale-105">
            <div className="flex size-9 items-center justify-center rounded-xl bg-coral text-white shadow-md shadow-coral/30">
              <Heart className="size-4 fill-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-foreground">🤟 Ekspresi Hangat</p>
              <p className="text-[11px] text-[#cf6f95] font-medium">Bikin Komunikasi Dekat</p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Sparkles */}
        <motion.div
          className="absolute top-2 right-6 z-20 text-coral"
          animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="size-6 drop-shadow" />
        </motion.div>
      </div>
    </div>
  )
}
