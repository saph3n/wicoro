import { Container } from "@/components/common/container"
import { FadeIn } from "@/components/common/fade-in"

export default function Materi1() {
  return (
    <div className="relative min-h-screen py-16">
      <Container>
        <FadeIn>
          <p className="text-sm font-semibold text-primary">✦ Materi 1</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">Huruf & Alfabet</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Kenali huruf dan alfabet dalam Bahasa Isyarat Indonesia (BISINDO). 
            Pelajari bentuk tangan untuk setiap huruf A–Z.
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}
