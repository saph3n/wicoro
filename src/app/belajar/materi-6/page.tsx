import { Container } from "@/components/common/container"
import { FadeIn } from "@/components/common/fade-in"

export default function Materi6() {
  return (
    <div className="relative min-h-screen py-16">
      <Container>
        <FadeIn>
          <p className="text-sm font-semibold text-primary">✦ Materi 6</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">Kuis Interaktif</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Uji pemahamanmu dengan kuis interaktif. Selesaikan tantangan 
            dan lihat seberapa jauh kemampuan isyaratmu berkembang.
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}
