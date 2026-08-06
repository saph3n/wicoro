import {
  Accessibility,
  BookOpen,
  Eye,
  Hand,
  Heart,
  HeartHandshake,
  Lightbulb,
  MousePointer2,
  Sparkles,
  Users,
} from "lucide-react"
import Link from "next/link"

import { FadeIn } from "@/components/common/fade-in"
import { Container } from "@/components/common/container"
import { CountUp } from "@/components/about/count-up"
import { ValueCard } from "@/components/about/value-card"
import { Marquee } from "@/components/about/marquee"
import { Faq } from "@/components/about/faq"

const values = [
  {
    icon: <HeartHandshake className="size-6" strokeWidth={2} />,
    title: "Inklusif untuk Semua",
    description:
      "Wicoro lahir dari keyakinan bahwa komunikasi adalah hak setiap orang. Kami menghapus batasan antara komunitas Tuli dan pendengar.",
  },
  {
    icon: <Eye className="size-6" strokeWidth={2} />,
    title: "Visual & Mudah Diingat",
    description:
      "Bahasa isyarat adalah bahasa visual. Setiap pelajaran kami rancang dengan pendekatan visual yang alami dan menyenangkan.",
  },
  {
    icon: <Lightbulb className="size-6" strokeWidth={2} />,
    title: "Belajar Sambil Bermain",
    description:
      "Kami percaya belajar paling efektif saat terasa seperti bermain. Pelajaran interaktif dan kuis membuatmu terus penasaran.",
  },
  {
    icon: <Users className="size-6" strokeWidth={2} />,
    title: "Komunitas yang Hangat",
    description:
      "Kamu tidak belajar sendirian. Kami membangun komunitas tempat semua orang bisa berlatih, berbagi, dan saling mendukung.",
  },
]

const stats = [
  { value: 2024, suffix: "", label: "Wicoro lahir dari sebuah misi sederhana" },
  { value: 60, suffix: "+", label: "Materi isyarat yang terkurasi" },
  { value: 1000, suffix: "+", label: "Pembelajar yang bergabung" },
  { value: 100, suffix: "%", label: "Gratis untuk semua orang" },
]

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-20 left-1/4 size-72 rounded-full bg-mint/30 blur-3xl" />
        <div className="absolute top-40 -right-24 size-80 rounded-full bg-coral-light/40 blur-3xl" />
        <div className="absolute bottom-0 -left-24 size-96 rounded-full bg-coral/20 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/2 size-56 rounded-full bg-mint-deep/15 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-mint-deep/25 bg-mint/20 px-5 py-2 text-sm font-bold tracking-wide text-primary shadow-sm">
                <Sparkles className="size-4" aria-hidden="true" />
                Tentang Wicoro
              </span>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                Dari Tangan, Lahir{" "}
                <span className="bg-gradient-to-r from-primary via-mint-deep to-[#cf6f95] bg-clip-text text-transparent">
                  Percakapan
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                Wicoro adalah platform interaktif untuk belajar Bahasa Isyarat
                Indonesia (BISINDO). Kami percaya setiap orang berhak
                berkomunikasi — dan bahasa isyarat adalah jembatannya.
              </p>
            </FadeIn>

            <FadeIn delay={0.45}>
              <div className="mt-10 inline-flex flex-col items-center gap-2 text-muted-foreground">
                <span className="text-xs font-medium uppercase tracking-widest">Scroll untuk menjelajah</span>
                <span className="flex size-9 animate-bounce items-center justify-center rounded-full border border-mint-deep/30 bg-mint/20 text-primary">
                  <MousePointer2 className="size-4 rotate-90" aria-hidden="true" />
                </span>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Marquee */}
      <Marquee />

      {/* Story */}
      <section className="relative py-12 sm:py-16">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-mint/40 via-transparent to-coral-light/50 blur-2xl" />
                <div className="rounded-[2.5rem] border bg-card/80 p-8 shadow-xl shadow-black/8 backdrop-blur-sm sm:p-12">
                  <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-mint-deep text-primary-foreground shadow-lg shadow-primary/25">
                    <Hand className="size-7" strokeWidth={2} />
                  </span>
                  <h2 className="mt-6 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
                    Kisah Kami
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                    <p>
                      Semuanya berawal dari satu pertanyaan sederhana:{" "}
                      <span className="font-semibold text-foreground">
                        &ldquo;Bagaimana jika semua orang bisa bercakap dengan
                        bahasa isyarat?&rdquo;
                      </span>{" "}
                      Dari sana, Wicoro tumbuh menjadi rumah belajar yang hangat
                      bagi siapa saja yang ingin memahami BISINDO.
                    </p>
                    <p>
                      Kami merancang setiap pelajaran dengan cinta — dari
                      alfabet, angka, hingga percakapan sehari-hari — agar
                      belajar terasa ringan, seru, dan mudah diingat.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-4 sm:gap-5">
                {stats.map((item) => (
                  <div
                    key={item.label}
                    className="group rounded-3xl border bg-card p-6 shadow-md shadow-black/8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-mint-deep/20"
                  >
                    <div className="bg-gradient-to-r from-primary to-[#cf6f95] bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                      <CountUp value={item.value} suffix={item.suffix} />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="relative py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Nilai yang Kami Pegang
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Arahkan kursor ke kartu untuk merasakan sentuhan hangat Wicoro.
              </p>
            </FadeIn>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {values.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <ValueCard icon={item.icon} title={item.title} description={item.description} />
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="relative py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Pertanyaan yang Sering Ditanyakan
              </h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Masih penasaran dengan Wicoro? Kami siap menjawab.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Faq />
          </FadeIn>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-14 sm:py-20">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-mint-deep to-[#cf6f95] p-10 text-center text-white shadow-xl shadow-primary/25 sm:p-16">
              <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                <div className="absolute -top-16 -left-16 size-56 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute -bottom-20 -right-10 size-64 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute top-1/3 right-1/4 size-3 rounded-full bg-white/60" />
                <div className="absolute bottom-1/4 left-1/4 size-2 rounded-full bg-white/50" />
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

      {/* Accesibility note */}
      <section className="relative py-8 pb-16 sm:pb-20">
        <Container>
          <FadeIn>
            <div className="mx-auto flex max-w-2xl items-center gap-4 rounded-3xl border border-mint-deep/20 bg-mint/10 px-6 py-5">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-mint text-mint-deep shadow-md shadow-mint-deep/20">
                <Accessibility className="size-5" aria-hidden="true" />
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">Wicoro</span>{" "}
                berkomitmen membangun dunia yang lebih inklusif — satu isyarat
                pada satu waktu. Bersama, kita bisa saling memahami tanpa kata.
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  )
}
