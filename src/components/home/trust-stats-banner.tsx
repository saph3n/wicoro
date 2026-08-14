"use client"

import { Sparkles, ArrowRight, BookOpen, Users, Award, ShieldCheck } from "lucide-react"

import { Container } from "@/components/common/container"
import { FadeIn } from "@/components/common/fade-in"

const partners = [
  "Komunitas BISINDO",
  "Teman Tuli & Dengar",
  "Akses Inklusi",
  "Pembelajar Mandiri",
]

const statsCards = [
  {
    icon: ShieldCheck,
    value: "100%",
    label: "GRATIS AKSES",
  },
  {
    icon: BookOpen,
    value: "5+",
    label: "MODUL INTERAKTIF",
  },
  {
    icon: Users,
    value: "1.000+",
    label: "PEMBELAJAR AKTIF",
  },
  {
    icon: Award,
    value: "BISINDO",
    label: "STANDAR RESMI",
  },
]

export function TrustStatsBanner() {
  return (
    <section className="relative pt-6 pb-12 sm:pt-8 sm:pb-16">
      <Container className="relative">
        <FadeIn delay={0.1}>
          {/* Main Dark Emerald Container with Top Center Notch Curve */}
          <div className="relative overflow-visible rounded-3xl bg-gradient-to-r from-[#123825] via-[#1d5e3e] to-[#123825] px-6 pt-7 pb-10 text-white shadow-2xl sm:px-10 sm:pt-8 sm:pb-12">

            {/* Top Center Pointer Notch / Peak Curve (Matching reference image top triangle notch) */}
            <div
              aria-hidden="true"
              className="absolute -top-3.5 left-1/2 -translate-x-1/2 size-7 rotate-45 rounded-sm bg-[#1d5e3e] shadow-md pointer-events-none"
            />

            {/* ── Top Row: Trusted By Header & Partners ── */}
            <div className="flex flex-col items-center justify-between gap-4 border-b border-white/15 pb-6 lg:flex-row">
              {/* Left Label */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex size-7 items-center justify-center rounded-lg bg-[#a3e635] text-[#123825] shadow-md">
                  <Sparkles className="size-4 fill-[#123825]" />
                </div>
                <span className="text-base font-extrabold tracking-wide text-white">
                  Dipercaya oleh
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

            {/* ── Bottom Row: Floating White Stats Pills (Matching reference bottom cards) ── */}
            <div className="absolute -bottom-6 left-4 right-4 sm:left-8 sm:right-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {statsCards.map((card) => (
                <div
                  key={card.label}
                  className="flex items-center justify-center gap-2.5 rounded-2xl border border-white/90 bg-white px-3 py-3 shadow-xl shadow-black/10 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
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
