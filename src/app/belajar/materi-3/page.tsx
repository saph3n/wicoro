import { Container } from "@/components/common/container"
import { FadeIn } from "@/components/common/fade-in"

export default function Materi3() {
  return (
    <div className="relative min-h-screen py-16">
      <Container>
        <FadeIn>
          <p className="text-sm font-semibold text-primary">✦ Materi 3</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">Salam Sehari-hari</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Kuasai isyarat salam dan sapaan umum yang dipakai sehari-hari — 
            dari "Halo" hingga "Selamat malam".
          </p>
        </FadeIn>
      </Container>
    </div>
  )
}
