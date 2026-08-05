"use client"

import { BrainCircuit, Hand, Hash, LetterText, MessagesSquare, Smile } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"
import { FadeIn } from "@/components/common/fade-in"
import { Container } from "@/components/common/container"

const materials = [
  {
    icon: LetterText,
    title: "Huruf & Alfabet",
    description:
      "Kenali huruf dan alfabet BISINDO sebagai fondasi untuk merangkai kata dan kalimat.",
  },
  {
    icon: Hash,
    title: "Angka",
    description:
      "Pelajari isyarat angka dari bilangan satuan hingga bilangan besar untuk kebutuhan sehari-hari.",
  },
  {
    icon: Hand,
    title: "Salam Sehari-hari",
    description:
      "Sapa orang lain dengan percaya diri memakai isyarat salam yang umum digunakan.",
  },
  {
    icon: Smile,
    title: "Ekspresi Dasar",
    description:
      "Tampilkan perasaan dan reaksi lewat ekspresi wajah serta gerakan isyarat yang tepat.",
  },
  {
    icon: MessagesSquare,
    title: "Percakapan",
    description:
      "Rangkai isyarat menjadi percakapan sederhana untuk interaksi yang lebih bermakna.",
  },
  {
    icon: BrainCircuit,
    title: "Kuis Interaktif",
    description:
      "Uji pemahamanmu dengan kuis seru yang mengasah ingatan dan kemampuan berisyarat.",
  },
]

const LINE_FADE = {
  maskImage:
    "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
}

const MOBILE_LINE_FADE = {
  maskImage:
    "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
}

const LINE_SHADOW = { filter: "drop-shadow(0 2px 4px rgba(87, 181, 133, 0.35))" }

// Wavy horizontal journey line passing through each milestone's icon center
// (y = 50 for odd columns, y = 75 for even columns in a 0-100 viewBox).
const DESKTOP_PATH = [
  "M 8.33 50",
  "C 16.67 50, 16.67 75, 25 75",
  "C 33.33 75, 33.33 50, 41.67 50",
  "C 50 50, 50 75, 58.33 75",
  "C 66.67 75, 66.67 50, 75 50",
  "C 83.33 50, 83.33 75, 91.67 75",
].join(" ")

const MOBILE_PATH = "M 50 0 C 57 22, 43 44, 50 66 C 57 84, 46 92, 50 100"

function JourneyGradient({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="100%" y2="0">
      <stop offset="0%" stopColor="#57b585" />
      <stop offset="55%" stopColor="#7cc8a0" />
      <stop offset="100%" stopColor="#f08aa8" />
    </linearGradient>
  )
}

function StepChip({ index }: { index: number }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-coral-light px-3 py-1 text-xs font-bold tracking-wide text-[#cf6f95]">
      <span aria-hidden="true">✦</span>Materi {index + 1}
    </span>
  )
}

function MilestoneIcon({
  item,
  index,
  small = false,
}: {
  item: (typeof materials)[number]
  index: number
  small?: boolean
}) {
  return (
    <div className="group relative inline-flex">
      <div
        className={cn(
          "absolute rounded-full border-2 border-mint-deep/30 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100 group-hover:border-mint-deep/40",
          small ? "-inset-1" : "-inset-1.5"
        )}
      />
      <div
        className={cn(
          "relative flex items-center justify-center rounded-full bg-mint text-mint-deep shadow-md shadow-mint-deep/25 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-lg group-hover:shadow-mint-deep/30",
          small ? "size-12" : "size-16",
          index % 2 === 0 ? "-rotate-3" : "rotate-3"
        )}
      >
        <item.icon
          className={cn(
            "transition-transform duration-300 group-hover:scale-110",
            small ? "size-5" : "size-7"
          )}
          strokeWidth={2}
        />
      </div>
    </div>
  )
}

export function Materials() {
  return (
    <section className="relative pt-6 pb-20 sm:pt-8 sm:pb-28" aria-label="Materi yang Akan Kamu Pelajari">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-16 top-16 size-48 rounded-full bg-mint/30 blur-3xl" />
        <div className="absolute -right-20 bottom-10 size-56 rounded-full bg-coral-light/40 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 size-40 -translate-x-1/2 rounded-full bg-mint/15 blur-3xl" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn delay={0.2}>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Materi yang Akan Kamu Pelajari
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Jelajahi berbagai materi BISINDO yang dirancang secara bertahap, mulai dari
              dasar hingga percakapan sehari-hari.
            </p>
          </FadeIn>
        </div>

        {/* Desktop: zigzag learning journey */}
        <div className="relative mt-4 hidden lg:block">
          <svg
            className="absolute inset-x-0 top-0 h-32 w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={LINE_FADE}
            aria-hidden="true"
          >
            <defs>
              <JourneyGradient id="journey-gradient-desktop" />
            </defs>
            <motion.path
              d={DESKTOP_PATH}
              fill="none"
              stroke="url(#journey-gradient-desktop)"
              strokeWidth={3}
              strokeLinecap="round"
              style={LINE_SHADOW}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.35 }}
            />
          </svg>

          <div className="grid grid-cols-6 gap-6">
            {materials.map((item, index) => {
              const even = index % 2 === 1
              return (
                <FadeIn
                  key={item.title}
                  delay={0.4 + index * 0.1}
                  className="group flex flex-col items-center text-center cursor-pointer"
                >
                  <div
                    className={cn(
                      "relative flex h-32 w-full items-center justify-center transition-transform duration-300 group-hover:-translate-y-2",
                      even && "items-end"
                    )}
                  >
                    <MilestoneIcon item={item} index={index} />
                  </div>
                  <div className="mt-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-105">
                    <StepChip index={index} />
                    <h3 className="mt-3 whitespace-nowrap text-[16px] font-semibold transition-colors duration-300 group-hover:text-primary">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                      {item.description}
                    </p>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>

        {/* Mobile: vertical learning journey */}
        <div className="relative mt-4 lg:hidden">
          <svg
            className="absolute left-0 top-0 h-full w-12"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={MOBILE_LINE_FADE}
            aria-hidden="true"
          >
            <defs>
              <JourneyGradient id="journey-gradient-mobile" />
            </defs>
            <motion.path
              d={MOBILE_PATH}
              fill="none"
              stroke="url(#journey-gradient-mobile)"
              strokeWidth={3}
              strokeLinecap="round"
              style={LINE_SHADOW}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
              viewport={{ once: true, amount: 0.2 }}
            />
          </svg>

          <div className="space-y-10">
            {materials.map((item, index) => (
              <FadeIn
                key={item.title}
                delay={0.3 + index * 0.08}
                className="group relative flex gap-5 cursor-pointer"
              >
                <div className="relative z-10 shrink-0 transition-transform duration-300 group-hover:-translate-y-1">
                  <MilestoneIcon item={item} index={index} small />
                </div>
                <div className="flex-1 pt-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105">
                  <StepChip index={index} />
                  <h3 className="mt-2 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
