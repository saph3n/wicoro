import { Container } from "@/components/common/container"
import { FadeIn } from "@/components/common/fade-in"

export default function Materi4() {
  return (
    <div className="relative min-h-screen py-16">
      <Container>
        <FadeIn>
          <p className="text-sm font-semibold text-primary">✦ Materi 4</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">Ekspresi Dasar</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Ungkapkan perasaan dan emosi melalui isyarat — senang, sedih, 
            marah, dan ekspresi dasar lainnya dalam BISINDO.
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}
