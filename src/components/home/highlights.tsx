import { GraduationCap, Hand, HeartHandshake } from "lucide-react"

import { FadeIn } from "@/components/common/fade-in"
import { Container } from "@/components/common/container"

const highlights = [
  {
    icon: Hand,
    title: "Belajar BISINDO",
    description:
      "Kuasai Bahasa Isyarat Indonesia langkah demi langkah, dari isyarat dasar hingga percakapan sehari-hari.",
  },
  {
    icon: GraduationCap,
    title: "Pelajaran Interaktif",
    description:
      "Berlatih dengan pelajaran yang seru dan mudah dipahami, dirancang agar kamu tetap semangat dari awal.",
  },
  {
    icon: HeartHandshake,
    title: "Komunikasi Inklusif",
    description:
      "Hapus hambatan dan berkomunikasi dengan percaya diri bersama komunitas Tuli melalui setiap isyarat.",
  },
]

export function Highlights() {
  return (
    <section className="relative pb-20 sm:pb-28" aria-label="Keunggulan Wicoro">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-primary">Kenapa Wicoro?</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Semua yang kamu butuhkan untuk mulai berisyarat
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <div className="group h-full rounded-3xl border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-mint-deep text-primary-foreground shadow-md shadow-primary/25">
                  <item.icon className="size-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
