import { ArrowRight } from "lucide-react"

import { FadeIn } from "@/components/common/fade-in"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/common/container"
import { HeroIllustration } from "@/components/home/hero-illustration"
import { Highlights } from "@/components/home/highlights"
import { Materials } from "@/components/home/materials"

export default function Home() {
  return (
    <>
      <section id="home" className="relative overflow-hidden">
        <Container className="relative grid items-center gap-14 py-10 lg:grid-cols-2 lg:gap-12 lg:py-16">
          <FadeIn className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Belajar Bahasa Isyarat,{" "}
              <span className="bg-gradient-to-r from-primary via-mint-deep to-[#cf6f95] bg-clip-text text-transparent">
                Terhubung Tanpa Kata
              </span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Wicoro adalah platform interaktif yang membantu semua orang belajar
              Bahasa Isyarat Indonesia (BISINDO) dengan cara yang mudah, seru, dan
              menyenangkan.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button className="h-12 rounded-full px-7 text-base shadow-lg shadow-primary/25">
                Mulai Belajar
                <ArrowRight aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                className="h-12 rounded-full px-7 text-base"
              >
                Jelajahi Wicoro
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <HeroIllustration />
          </FadeIn>
        </Container>
      </section>

      <Highlights />

      <Materials />
    </>
  )
}
