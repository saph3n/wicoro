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
              <div className="group relative h-full overflow-hidden rounded-3xl border bg-card p-7 shadow-md shadow-black/8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-200/50">
                {/* Pink pastel background on hover */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(135deg, #fce8f0 0%, #fdf4f8 100%)" }}
                />

                {/* Decorative blobs */}
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  {/* Top right mint blob */}
                  <div className="absolute -top-12 -right-12 size-32 rounded-full bg-mint/30 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-mint/40" />
                  {/* Bottom left coral blob */}
                  <div className="absolute -bottom-8 -left-8 size-24 rounded-full bg-coral-light/25 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:bg-coral-light/35" />
                  {/* Small accent dot */}
                  <div className="absolute top-6 right-6 size-2 rounded-full bg-pink-300 opacity-0 transition-all duration-300 group-hover:opacity-60" />
                  <div className="absolute bottom-8 right-8 size-1.5 rounded-full bg-mint-deep opacity-0 transition-all duration-300 group-hover:opacity-50" />
                </div>

                {/* Shine sweep effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                <div className="relative">
                  {/* Icon with decorative ring */}
                  <div className="relative inline-flex">
                    {/* Decorative ring behind icon */}
                    <div className="absolute inset-0 -m-1 rounded-2xl border-2 border-primary/20 opacity-0 transition-all duration-300 group-hover:scale-125 group-hover:opacity-100 group-hover:border-primary/30" />
                    
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-mint-deep text-primary-foreground shadow-md shadow-primary/25 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 group-hover:rotate-3">
                      <item.icon className="size-6 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                    </div>
                  </div>
                  
                  <h3 className="mt-5 text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>

                  {/* Decorative bottom accent line */}
                  <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-coral-light opacity-0 transition-all duration-500 group-hover:w-20 group-hover:opacity-100" />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
