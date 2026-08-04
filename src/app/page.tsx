import { ArrowRight } from "lucide-react"

import { FadeIn } from "@/components/common/fade-in"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/common/container"
import { HeroIllustration } from "@/components/home/hero-illustration"
import { Highlights } from "@/components/home/highlights"

export default function Home() {
  return (
    <>
      <section id="home" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 right-[-10%] size-[30rem] rounded-full bg-mint/40 blur-3xl" />
          <div className="absolute top-1/2 left-[-14%] size-[26rem] rounded-full bg-coral-light/30 blur-3xl" />
          <div className="absolute right-8 bottom-16 size-16 rounded-full border border-primary/20" />
          <div className="absolute top-40 left-[8%] size-4 rounded-full bg-coral/30" />
          <div className="absolute right-[18%] bottom-24 size-3 rounded-full bg-mint-deep/50" />
        </div>

        <Container className="relative grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12 lg:py-28">
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
    </>
  )
}
