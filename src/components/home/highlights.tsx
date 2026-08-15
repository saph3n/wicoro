"use client"

import { useRef } from "react"
import { GraduationCap, Hand, HeartHandshake, Sparkles, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react"

import { Container } from "@/components/common/container"
import { FadeIn } from "@/components/common/fade-in"

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
  {
    icon: Sparkles,
    title: "Visual & Praktis",
    description:
      "Materi disajikan secara visual dengan panduan gerakan yang jelas, ramah untuk semua kalangan.",
  },
  {
    icon: ShieldCheck,
    title: "Gratis Selamanya",
    description:
      "Akses seluruh modul dan latihan kapan saja tanpa hambatan biaya atau langganan.",
  },
]

export function Highlights() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: "smooth" })
    }
  }

  return (
    <section id="kenapa" className="relative pt-10 pb-8 sm:pt-12 sm:pb-10 overflow-hidden bg-slate-50/60" aria-label="Keunggulan Wicoro">
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          
          {/* ── Left Column: Expanded Headline ── */}
          <div className="lg:col-span-4 relative max-w-xl">
            <FadeIn>
              {/* Creative Styled Headline */}
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-[2.8rem] leading-[1.18]">
                <span className="text-foreground">Kenapa Harus</span> <br />
                <span className="text-foreground">Belajar </span>
                <span className="relative inline-block my-1 rounded-2xl bg-gradient-to-r from-[#123825] via-[#1d5e3e] to-[#2e9c64] px-3.5 py-0.5 text-white shadow-md shadow-emerald-900/15 rotate-[-1deg] border border-white/40">
                  BISINDO
                  <span className="absolute -top-1 -right-1 size-3 rounded-full bg-[#cf6f95] border-2 border-white shadow-xs" />
                </span>{" "}
                <br />
                <span className="text-foreground">di </span>
                <span className="bg-gradient-to-r from-[#123825] via-[#2e9c64] to-[#cf6f95] bg-clip-text text-transparent">
                  Wicoro?
                </span>
              </h2>
            </FadeIn>
          </div>

          {/* ── Right Column: Horizontal Cards Carousel Track (Exact Original Card Model) ── */}
          <div className="lg:col-span-8 relative">
            
            {/* Floating Left Arrow Button (<) */}
            <button
              onClick={scrollLeft}
              aria-label="Scroll Sebelumnya"
              className="absolute -left-3 sm:-left-6 top-1/2 -translate-y-1/2 z-30 flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-800 shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:border-primary hover:bg-primary hover:text-white active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="size-5" />
            </button>

            {/* Floating Right Arrow Button (>) */}
            <button
              onClick={scrollRight}
              aria-label="Scroll Selanjutnya"
              className="absolute -right-3 sm:-right-6 top-1/2 -translate-y-1/2 z-30 flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-800 shadow-xl backdrop-blur-md transition-all hover:scale-110 hover:border-primary hover:bg-primary hover:text-white active:scale-95 cursor-pointer"
            >
              <ChevronRight className="size-5" />
            </button>

            {/* Horizontal Cards Track */}
            <div
              ref={scrollContainerRef}
              className="flex gap-5 overflow-x-auto pb-6 pt-2 px-2 snap-x snap-mandatory scrollbar-none scroll-smooth"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group relative flex w-[280px] sm:w-[320px] shrink-0 snap-start flex-col justify-between overflow-hidden rounded-3xl border bg-card p-7 shadow-md shadow-black/8 transition-all duration-300 hover:-translate-y-2 hover:border-pink-200 hover:shadow-xl hover:shadow-pink-200/50"
                >
                  {/* Pink pastel background on hover (Exact original code) */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"
                    style={{ background: "linear-gradient(135deg, #fce8f0 0%, #fdf4f8 100%)" }}
                  />

                  {/* Decorative blobs (Exact original code) */}
                  <div className="pointer-events-none absolute inset-0 overflow-hidden">
                    <div className="absolute -top-12 -right-12 size-32 rounded-full bg-mint/30 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-mint/40" />
                    <div className="absolute -bottom-8 -left-8 size-24 rounded-full bg-coral-light/25 blur-xl transition-all duration-500 group-hover:scale-125 group-hover:bg-coral-light/35" />
                    <div className="absolute top-6 right-6 size-2 rounded-full bg-pink-300 opacity-0 transition-all duration-300 group-hover:opacity-60" />
                    <div className="absolute bottom-8 right-8 size-1.5 rounded-full bg-mint-deep opacity-0 transition-all duration-300 group-hover:opacity-50" />
                  </div>

                  {/* Shine sweep effect (Exact original code) */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full pointer-events-none" />

                  {/* Card Content (Exact original code) */}
                  <div className="relative flex flex-col justify-between h-full">
                    <div>
                      <div className="relative inline-flex">
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
                    </div>

                    {/* Expanding bottom gradient accent bar (Exact original code) */}
                    <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-coral-light opacity-0 transition-all duration-500 group-hover:w-20 group-hover:opacity-100" />
                  </div>

                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
