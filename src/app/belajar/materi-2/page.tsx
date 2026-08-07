import { Container } from "@/components/common/container"
import { FadeIn } from "@/components/common/fade-in"

export default function Materi2() {
  return (
    <div className="relative min-h-screen py-16">
      <Container>
        <FadeIn>
          <p className="text-sm font-semibold text-primary">✦ Materi 2</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">Angka</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Pelajari cara mengisyaratkan angka 0–100 dalam BISINDO. 
            Dari bilangan sederhana hingga angka besar.
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}
