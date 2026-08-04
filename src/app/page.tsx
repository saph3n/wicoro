import { ArrowRight } from "lucide-react"

import { FadeIn } from "@/components/common/fade-in"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <section className="flex flex-1 items-center justify-center px-4 py-24">
      <div className="flex max-w-3xl flex-col items-center gap-6 text-center">
        <FadeIn>
          <h1 className="text-6xl font-bold tracking-tight sm:text-7xl">
            Wicoro
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="text-2xl font-semibold sm:text-3xl">
            Learn Indonesian Sign Language
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            An interactive platform for learning Indonesian Sign Language
            (BISINDO).
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <Button
            type="button"
            size="lg"
            className="mt-2 h-12 rounded-xl px-8 text-base shadow-lg shadow-primary/25"
          >
            Start Learning
            <ArrowRight aria-hidden="true" />
          </Button>
        </FadeIn>
      </div>
    </section>
  )
}
