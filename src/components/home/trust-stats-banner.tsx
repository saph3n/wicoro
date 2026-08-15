"use client"

import { Sparkles, ArrowRight, BookOpen, Users, Award, ShieldCheck } from "lucide-react"

import { Container } from "@/components/common/container"
import { FadeIn } from "@/components/common/fade-in"

const partners = [
  "Teman Tuli & Dengar",
  "Keluarga & Pengajar",
  "Komunitas Isyarat",
  "Pemula BISINDO",
]

const statsCards = [
  {
    icon: ShieldCheck,
    value: "100%",
    label: "GRATIS SELAMANYA",
  },
  {
    icon: BookOpen,
    value: "Visual",
    label: "MODUL LATIHAN",
  },
  {
    icon: Users,
    value: "Ramah",
    label: "UNTUK PEMULA",
  },
  {
    icon: Award,
    value: "Standar",
    label: "BAHASA BISINDO",
  },
]

export function TrustStatsBanner() {
  return (
    <section className="relative pt-6 pb-12 sm:pt-8 sm:pb-16">
      <Container className="relative">
        <FadeIn delay={0.1}>
          {/* Main Dark Emerald Container with Top Center Notch Curve */}
          <div className="relative overflow-visible rounded-xl bg-gradient-to-r from-[#123825] via-[#1d5e3e] to-[#123825] px-6 pt-7.5 pb-10.5 text-white shadow-[0_25px_40px_-15px_rgba(0,0,0,0.3)] sm:px-10 sm:pt-8 sm:pb-11">

            {/* Top Center Pointer Notch / Peak Curve (Wider smooth natural triangle) */}
            <svg
              aria-hidden="true"
              className="absolute -top-4.5 left-1/2 -translate-x-1/2 h-5.5 w-20 text-[#1d5e3e] pointer-events-none"
              viewBox="0 0 80 22"
              fill="currentColor"
            >
              <path d="M 0,22 C 22,22 30,2 40,2 C 50,2 58,22 80,22 Z" />
            </svg>

            {/* ── Top Row: Trusted By Header & Partners ── */}
            <div className="flex flex-col items-center justify-between gap-4 pb-5 lg:flex-row">
              {/* Left Label */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex size-7 items-center justify-center rounded-lg bg-[#a3e635] text-[#123825]">
                  <Sparkles className="size-4 fill-[#123825]" />
                </div>
                <span className="text-base font-extrabold tracking-wide text-white">
                  Dibuat untuk
                </span>
                <ArrowRight className="size-4 text-[#a3e635]" />
              </div>

              {/* Right Partners / Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 opacity-85">
                {partners.map((partner) => (
                  <span
                    key={partner}
                    className="text-xs font-bold tracking-wider text-white/90 uppercase hover:text-white transition-colors"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Bottom Row: Floating White Stats Pills (Balanced width oval pills) ── */}
            <div className="absolute -bottom-3.5 left-4 right-4 sm:left-8 sm:right-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 justify-items-center">
              {statsCards.map((card) => (
                <div
                  key={card.label}
                  className="flex w-full max-w-[230px] items-center justify-center gap-2.5 rounded-full border border-slate-200 bg-white px-3 py-2.5 shadow-sm transition-transform duration-200"
                >
                  <card.icon className="size-4 text-[#123825] shrink-0" />
                  <div className="flex items-baseline gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
                    <span className="text-sm font-extrabold text-foreground sm:text-base">
                      {card.value}
                    </span>
                    <span className="text-[10px] font-extrabold tracking-wider text-muted-foreground uppercase">
                      {card.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
