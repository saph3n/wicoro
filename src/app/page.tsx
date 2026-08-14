import Link from "next/link"
import { ArrowRight, Sparkles, BookOpen, Layers, HeartHandshake } from "lucide-react"

import { FadeIn } from "@/components/common/fade-in"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/common/container"
import { HeroIllustration } from "@/components/home/hero-illustration"
import { Highlights } from "@/components/home/highlights"
import { Materials } from "@/components/home/materials"
import { QuickPreview } from "@/components/home/quick-preview"

const heroStats = [
  { icon: BookOpen, label: "Materi Interaktif", value: "5+ Modul" },
  { icon: Layers, label: "Isyarat Visual", value: "Alfabet & Angka" },
  { icon: HeartHandshake, label: "Akses Belajar", value: "100% Gratis" },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-4 pb-8 sm:pt-6 sm:pb-12">
        <Container className="relative grid items-center gap-10 py-6 lg:grid-cols-2 lg:gap-12 lg:py-12">
          <FadeIn className="max-w-xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-bold tracking-wide text-primary shadow-sm backdrop-blur-sm">
              <Sparkles className="size-3.5 text-primary animate-pulse" />
              <span>Platform Belajar BISINDO Interaktif</span>
            </div>

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl leading-[1.15]">
              Belajar Bahasa Isyarat,{" "}
              <span className="bg-gradient-to-r from-[#1b6b47] via-[#268a5e] to-[#d65780] bg-clip-text text-transparent">
                Terhubung Tanpa Kata
              </span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Wicoro adalah platform interaktif yang membantu semua orang belajar
              Bahasa Isyarat Indonesia (BISINDO) dengan cara yang mudah, seru, dan
              menyenangkan.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Button asChild className="h-12 rounded-full px-8 text-base shadow-xl shadow-primary/30 transition-all hover:scale-105 hover:shadow-primary/40">
                <Link href="/belajar/materi-1">
                  Mulai Belajar
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full px-7 text-base border-border/80 hover:bg-white hover:border-primary/50 transition-all hover:scale-105"
              >
                <Link href="#preview">
                  Coba Isyarat
                </Link>
              </Button>
            </div>

            {/* Quick Hero Stats Bar */}
            <div className="mt-10 grid grid-cols-3 gap-3 border-t border-border/60 pt-6">
              {heroStats.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex flex-col">
                  <div className="flex items-center gap-1.5 text-primary">
                    <Icon className="size-4 shrink-0" />
                    <span className="text-sm font-extrabold text-foreground sm:text-base">{value}</span>
                  </div>
                  <span className="mt-0.5 text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <HeroIllustration />
          </FadeIn>
        </Container>
      </section>

      {/* Keunggulan Wicoro */}
      <Highlights />

      {/* Materi yang Akan Kamu Pelajari */}
      <Materials />

      {/* Interactive Quick Preview Widget (Section Terakhir) */}
      <div id="preview">
        <QuickPreview />
      </div>
    </>
  )
}
