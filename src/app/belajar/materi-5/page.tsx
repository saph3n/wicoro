import { Container } from "@/components/common/container"
import { FadeIn } from "@/components/common/fade-in"

export default function Materi5() {
  return (
    <div className="relative min-h-screen py-16">
      <Container>
        <FadeIn>
          <p className="text-sm font-semibold text-primary">✦ Materi 5</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">Percakapan</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Gabungkan semua yang kamu pelajari dalam percakapan nyata. 
            Latihan dialog sederhana menggunakan BISINDO.
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}
