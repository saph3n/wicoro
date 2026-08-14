import Link from "next/link"
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react"

import { FadeIn } from "@/components/common/fade-in"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/common/container"
import { HeroIllustration } from "@/components/home/hero-illustration"
import { TrustStatsBanner } from "@/components/home/trust-stats-banner"
import { Highlights } from "@/components/home/highlights"
import { Materials } from "@/components/home/materials"
import { QuickPreview } from "@/components/home/quick-preview"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white text-foreground">

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════ */}
      <section id="home" className="relative bg-white pt-2 pb-6 sm:pt-4 sm:pb-8">
        <Container className="relative grid items-start gap-8 py-2 lg:grid-cols-12 lg:gap-8 lg:py-4">

          {/* Left Column: Typography & CTAs */}
          <FadeIn className="lg:col-span-6 max-w-2xl">
            {/* Top Feature Pill Tags */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white px-4 py-1.5 text-xs font-extrabold tracking-wide text-primary shadow-sm">
                <Sparkles className="size-3.5 text-coral animate-pulse" />
                Platform Belajar BISINDO No. 1
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[11px] font-bold text-emerald-700 shadow-sm">
                <CheckCircle2 className="size-3 text-emerald-600" />
                Standar BISINDO
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.6rem] leading-[1.12]">
              Belajar{" "}
              <span className="relative inline-block my-1 rounded-2xl bg-gradient-to-r from-primary via-mint-deep to-[#57b585] px-4 py-1 text-white shadow-xl shadow-primary/25 rotate-[-1deg] border border-white/50">
                Bahasa Isyarat
                <span className="absolute -top-1.5 -right-1.5 size-4 rounded-full bg-[#f1a4c0] border-2 border-white shadow-sm" />
              </span>{" "}
              Terhubung Tanpa Kata
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Wicoro adalah platform interaktif yang membantu semua orang belajar
              Bahasa Isyarat Indonesia (BISINDO) dengan cara yang mudah, seru, dan
              menyenangkan.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild className="h-13 rounded-full bg-primary px-8 text-base font-extrabold text-white shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-105 hover:bg-primary/95 border-0">
                <Link href="/belajar/materi-1">
                  Mulai Belajar
                </Link>
              </Button>

              <Link
                href="#preview"
                className="inline-flex items-center gap-2 text-base font-extrabold text-foreground transition-all hover:text-primary underline decoration-2 decoration-primary/40 underline-offset-4 hover:translate-x-1"
              >
                Coba Isyarat
                <ArrowRight className="size-4 text-primary" />
              </Link>
            </div>
          </FadeIn>

          {/* Right Column: Interactive Showcase Illustration */}
          <FadeIn delay={0.15} className="lg:col-span-6 relative mx-auto w-full max-w-xl lg:max-w-none lg:pt-[78px]">
            <HeroIllustration />
          </FadeIn>
        </Container>
      </section>

      {/* ── Trust & Stats Banner Strip (Matching reference image design) ── */}
      <TrustStatsBanner />

      {/* ── Keunggulan Wicoro (Original Highlights) ── */}
      <Highlights />

      {/* ── Materi yang Akan Kamu Pelajari (Original Wavy Journey Line Materials) ── */}
      <Materials />

      {/* ── Interactive Quick Preview Widget (Original QuickPreview) ── */}
      <div id="preview">
        <QuickPreview />
      </div>
    </div>
  )
}
