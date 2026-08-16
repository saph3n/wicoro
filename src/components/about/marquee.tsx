"use client"

import Image from "next/image"

export function Marquee() {
  return (
    <section className="relative my-8 py-6 bg-[#f4fbf6] dark:bg-[#1a2e24]">
      {/* Top Scallop Cloud Wave Border */}
      <div className="absolute -top-5 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1200 24"
          preserveAspectRatio="none"
          className="w-full h-6 text-[#f4fbf6] dark:text-[#1a2e24] fill-current stroke-primary/30 stroke-2"
        >
          <path d="M0,0 Q30,24 60,0 Q90,24 120,0 Q150,24 180,0 Q270,24 300,0 Q390,24 420,0 Q450,24 480,0 Q510,24 540,0 Q570,24 600,0 Q630,24 660,0 Q690,24 720,0 Q750,24 780,0 Q810,24 840,0 Q870,24 900,0 Q930,24 960,0 Q990,24 1020,0 Q1050,24 1080,0 Q1110,24 1140,0 Q1170,24 1200,0 L1200,24 L0,24 Z" />
        </svg>
      </div>

      {/* Floating Wicoro Logo Directly */}
      <div className="relative mx-auto py-2 w-fit z-20 flex items-center justify-center">
        <Image
          src="/Frame 1.png"
          alt="Wicoro Logo"
          width={150}
          height={150}
          className="size-28 sm:size-32 object-contain drop-shadow-md transition-transform hover:scale-105"
        />
      </div>

      {/* Bottom Scallop Cloud Wave Border */}
      <div className="absolute -bottom-5 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none z-10">
        <svg
          viewBox="0 0 1200 24"
          preserveAspectRatio="none"
          className="w-full h-6 text-[#f4fbf6] dark:text-[#1a2e24] fill-current stroke-primary/30 stroke-2"
        >
          <path d="M0,24 Q30,0 60,24 Q90,0 120,24 Q150,0 180,24 Q270,0 300,24 Q330,0 360,24 Q390,0 420,24 Q450,0 480,24 Q510,0 540,24 Q570,0 600,24 Q630,0 660,24 Q690,0 720,24 Q750,0 780,24 Q810,0 840,24 Q930,0 960,24 Q990,0 1020,24 Q1050,0 1080,24 Q1110,0 1140,24 Q1170,0 1200,24 L1200,0 L0,0 Z" />
        </svg>
      </div>
    </section>
  )
}
