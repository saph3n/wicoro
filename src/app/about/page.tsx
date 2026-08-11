import { BookOpen, Heart } from "lucide-react"
import Link from "next/link"

import { FadeIn } from "@/components/common/fade-in"
import { Container } from "@/components/common/container"
import { ValueCard } from "@/components/about/value-card"
import { Marquee } from "@/components/about/marquee"
import { Faq } from "@/components/about/faq"
import { HeroTitle } from "@/components/about/hero-title"

const values = [
  {
    title: "Inklusif untuk Semua",
    description:
      "Wicoro lahir dari keyakinan bahwa komunikasi adalah hak setiap orang. Kami menghapus batasan antara komunitas Tuli dan pendengar.",
    number: "01",
    accent: "primary" as const,
    span: "lg:col-span-2",
    horizontal: true,
  },
  {
    title: "Visual & Mudah Diingat",
    description:
      "Bahasa isyarat adalah bahasa visual. Setiap pelajaran kami rancang dengan pendekatan visual yang alami dan menyenangkan.",
    number: "02",
    accent: "coral" as const,
  },
  {
    title: "Belajar Sambil Bermain",
    description:
      "Kami percaya belajar paling efektif saat terasa seperti bermain. Pelajaran interaktif dan kuis membuatmu terus penasaran.",
    number: "03",
    accent: "peach" as const,
  },
  {
    title: "Komunitas yang Hangat",
    description:
      "Kamu tidak belajar sendirian. Kami membangun komunitas tempat semua orang bisa berlatih, berbagi, dan saling mendukung.",
    number: "04",
    accent: "mint" as const,
    span: "lg:col-span-2",
    horizontal: true,
  },
]

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <HeroTitle />

            <FadeIn delay={0.3}>
              <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Semuanya berawal dari satu pertanyaan sederhana:{" "}
                <span className="font-semibold text-foreground">
                  &ldquo;Bagaimana jika semua orang bisa bercakap dengan
                  bahasa isyarat?&rdquo;
                </span>{" "}
                Dari sana, Wicoro tumbuh menjadi rumah belajar yang hangat
                bagi siapa saja yang ingin memahami Bahasa Isyarat Indonesia (BISINDO).
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Values */}
      <section className="relative py-8 sm:py-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Nilai yang Kami Pegang
              </h2>
            </FadeIn>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1} className={item.span}>
                <ValueCard
                  title={item.title}
                  description={item.description}
                  number={item.number}
                  accent={item.accent}
                  horizontal={item.horizontal}
                />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative py-8 sm:py-12">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Pertanyaan yang Sering Ditanyakan
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Faq />
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative pt-8 pb-20 sm:pt-12 sm:pb-28">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-mint-deep to-[#cf6f95] p-10 text-center text-white shadow-xl shadow-primary/25 sm:p-16">
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute -top-16 -left-16 size-56 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-20 -right-10 size-64 rounded-full bg-white/10 blur-3xl" />

              </div>
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-5 py-2 text-sm font-bold tracking-wide backdrop-blur-sm">
                  <Heart className="size-4" aria-hidden="true" />
                  Mari bergabung
                </span>
                <h2 className="mx-auto mt-5 max-w-xl text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  Mulailah perjalanan isyaratmu hari ini
                </h2>
                <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/80">
                  Setiap isyarat yang kamu pelajari adalah jembatan menuju
                  komunikasi yang lebih inklusif.
                </p>
                <Link
                  href="/#learn"
                  className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-white px-7 text-base font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <BookOpen className="size-5" aria-hidden="true" />
                  Mulai Belajar
                </Link>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>


    </div>
  )
}
