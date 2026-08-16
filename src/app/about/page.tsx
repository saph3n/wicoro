"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  BookOpen,
  Heart,
  Sparkles,
  Hand,
  CheckCircle2,
  ArrowRight,
  Zap,
  MessageSquare,
  ShieldCheck,
} from "lucide-react"

import { Container } from "@/components/common/container"
import { FadeIn } from "@/components/common/fade-in"
import { ValueCard } from "@/components/about/value-card"
import { Faq } from "@/components/about/faq"
import { CountUp } from "@/components/about/count-up"
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
  const [activeTab, setActiveTab] = useState<"filosofi" | "visi" | "misi">("filosofi")

  return (
    <div className="relative overflow-hidden bg-background text-foreground selection:bg-primary selection:text-white">
      {/* Background Glow Spheres */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 size-[650px] rounded-full bg-mint/20 blur-[110px]" />
        <div className="absolute top-1/2 -right-40 size-[500px] rounded-full bg-coral-light/35 blur-3xl" />
        <div className="absolute bottom-10 -left-40 size-[500px] rounded-full bg-secondary/60 blur-3xl" />
      </div>

      {/* ══════════════════════════════════════════════════════════
          HERO SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-6">
            <HeroTitle />

            <FadeIn delay={0.2}>
              <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">
                <strong className="text-foreground font-bold">
                  &ldquo;Berakar dari kata wicara yang berarti tutur atau berbicara&rdquo;
                </strong>{" "}
                Wicoro membuktikan bahwa percakapan dapat lahir tanpa suara. Melalui pembelajaran Bahasa Isyarat Indonesia (BISINDO) yang aplikatif, kami membuka ruang bagi siapa saja untuk saling terhubung secara setara.
              </p>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          BENTO GRID (Filosofi & Impact)
          ══════════════════════════════════════════════════════════ */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-12">
            {/* Bento Card 1: Interactive Tab Card (7 Cols) */}
            <FadeIn delay={0.1} className="md:col-span-7">
              <div className="relative h-full overflow-hidden rounded-[2.5rem] border border-primary/20 bg-gradient-to-br from-card via-background to-primary/5 p-8 sm:p-9 shadow-xl transition-all duration-500 hover:shadow-2xl hover:border-primary/40 flex flex-col justify-between">
                {/* Background Decor Glow */}
                <div className="pointer-events-none absolute -bottom-16 -right-16 size-64 rounded-full bg-primary/10 blur-3xl" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-4 py-1.5 text-xs font-bold text-primary shadow-xs">
                      <Hand className="size-3.5" /> Filosofi Kami
                    </span>
                    <div className="flex rounded-full bg-muted/80 p-1.5 text-xs font-medium border border-border/60">
                      {(["filosofi", "visi", "misi"] as const).map((tab) => (
                        <button
                          key={tab}
                          onClick={() => setActiveTab(tab)}
                          className={`rounded-full px-4 py-1.5 capitalize transition-all duration-300 ${
                            activeTab === tab
                              ? "bg-primary text-white shadow-md shadow-primary/25 font-bold scale-105"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="space-y-4"
                    >
                      {activeTab === "filosofi" && (
                        <div className="space-y-3">
                          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                            Tutur Kata dalam Kesunyian
                          </h3>
                          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                            Kata <strong className="text-primary font-bold">Wicoro</strong> terinspirasi dari <span className="italic font-medium text-foreground">wicara</span>. Kami percaya bahwa Bahasa Isyarat Indonesia (BISINDO) bukan sekadar pengganti kata, melainkan ragam tutur visual yang penuh ekspresi, emosi, dan nilai kebahasaan yang setara.
                          </p>
                          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                            Setiap gerak jemari dan mimik wajah adalah bentuk wicara tanpa suara yang menghubungkan hati, membangun pemahaman yang lebih dalam antara Teman Tuli dan Teman Dengar di seluruh Indonesia.
                          </p>
                        </div>
                      )}
                      {activeTab === "visi" && (
                        <div className="space-y-3">
                          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                            Komunikasi Inklusif Tanpa Sekat
                          </h3>
                          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                            Mewujudkan masyarakat Indonesia di mana setiap orang, baik Teman Tuli maupun Dengar, dapat berinteraksi secara natural, hangat, dan tanpa hambatan bahasa di ruang publik, pendidikan, maupun pekerjaan.
                          </p>
                          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                            Kami bercita-cita agar BISINDO dapat dipelajari dengan mudah oleh semua kalangan, menjadikan komunikasi tanpa sekat sebagai bagian alami dari budaya inklusif bangsa.
                          </p>
                        </div>
                      )}
                      {activeTab === "misi" && (
                        <div className="space-y-3">
                          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
                            Pembelajaran Visual Menyenangkan
                          </h3>
                          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                            Menyediakan materi BISINDO berkualitas tinggi secara gratis, memanfaatkan pendekatan visual interaktif yang menyenangkan, intuitif, dan mudah diakses dari mana saja.
                          </p>
                          <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                            Kami merancang modul latihan terstruktur dari abjad hingga kalimat sehari-hari untuk mendampingi langkah awalmu belajar bahasa isyarat secara mandiri dan efektif.
                          </p>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="mt-6 pt-5 border-t border-border/80 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-2 text-primary font-semibold">
                    <CheckCircle2 className="size-4 text-mint-deep" /> 100% Aksesibel & Gratis
                  </span>
                  <span className="font-medium">Belajar BISINDO Mandiri</span>
                </div>
              </div>
            </FadeIn>

            {/* Bento Card 2: Ultra Cool Impact Card (5 Cols) */}
            <FadeIn delay={0.2} className="md:col-span-5">
              <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#0c2419] via-[#133827] to-[#091a12] border border-emerald-500/25 p-8 sm:p-9 text-white shadow-2xl shadow-emerald-950/30 transition-all duration-500 hover:shadow-emerald-900/40 hover:border-emerald-400/40 flex flex-col justify-between group">
                {/* Glowing Matrix Radial Spotlights */}
                <div className="pointer-events-none absolute -top-20 -right-20 size-60 rounded-full bg-emerald-400/20 blur-3xl group-hover:bg-emerald-400/30 transition-all duration-700" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 size-60 rounded-full bg-teal-500/20 blur-3xl" />

                <div>
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3.5 py-1 text-xs font-black text-emerald-300 backdrop-blur-md">
                      <Zap className="size-3.5 text-emerald-400 animate-pulse" /> Dampak Wicoro
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400/80 bg-black/30 px-3 py-1 rounded-full border border-white/10">
                      ⚡ Real-time
                    </span>
                  </div>

                  {/* Main Spotlight Header */}
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-snug">
                    Didesain Ringkas & Efektif
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-emerald-100/75">
                    Materi disusun terstruktur dari abjad dasar hingga percakapan sehari-hari.
                  </p>
                </div>

                {/* 4 Sleek Neon Glass Cards Grid */}
                <div className="grid grid-cols-2 gap-3.5 mt-8">
                  {/* Card 1 */}
                  <div className="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-emerald-400/50">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200 tracking-tight">
                        <CountUp value={500} suffix="+" />
                      </span>
                      <div className="size-7 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-400/30 text-emerald-300">
                        <Hand className="size-4" />
                      </div>
                    </div>
                    <span className="text-xs text-emerald-200/90 font-bold block">Kosakata Visual</span>
                  </div>

                  {/* Card 2 */}
                  <div className="relative overflow-hidden rounded-2xl border border-mint-deep/30 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-mint-deep/50">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-mint-light via-white to-emerald-200 tracking-tight">
                        <CountUp value={100} suffix="%" />
                      </span>
                      <div className="size-7 rounded-xl bg-mint-deep/20 flex items-center justify-center border border-mint-deep/30 text-mint-light">
                        <CheckCircle2 className="size-4" />
                      </div>
                    </div>
                    <span className="text-xs text-emerald-200/90 font-bold block">Gratis & Bebas</span>
                  </div>

                  {/* Card 3 */}
                  <div className="relative overflow-hidden rounded-2xl border border-rose-400/25 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-rose-400/50">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-2xl sm:text-3xl font-black text-rose-300 tracking-tight">
                        4
                      </span>
                      <div className="size-7 rounded-xl bg-rose-500/20 flex items-center justify-center border border-rose-400/30 text-rose-300">
                        <BookOpen className="size-4" />
                      </div>
                    </div>
                    <span className="text-xs text-rose-200/90 font-bold block">Modul Latihan</span>
                  </div>

                  {/* Card 4 */}
                  <div className="relative overflow-hidden rounded-2xl border border-amber-400/25 bg-white/10 p-4 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-white/15 hover:border-amber-400/50">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-2xl sm:text-3xl font-black text-amber-300 tracking-tight">
                        24/7
                      </span>
                      <div className="size-7 rounded-xl bg-amber-500/20 flex items-center justify-center border border-amber-400/30 text-amber-300">
                        <Zap className="size-4" />
                      </div>
                    </div>
                    <span className="text-xs text-amber-200/90 font-bold block">Latihan Mandiri</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>


      <section className="relative pt-12 pb-16 sm:pt-16 sm:pb-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl text-foreground">
                Nilai yang Kami Pegang
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Prinsip utama yang memandu setiap kurikulum dan desain di Wicoro.
              </p>
            </FadeIn>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* ══════════════════════════════════════════════════════════
          FAQ SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="relative py-16 sm:py-24 border-t border-border/60">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <FadeIn>
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl text-foreground">
                Pertanyaan yang Sering Ditanyakan
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted-foreground">
                Punya pertanyaan tentang pembelajaran BISINDO di Wicoro? Temukan jawabannya di sini.
              </p>
            </FadeIn>
          </div>
          <FadeIn delay={0.2} className="mt-10">
            <Faq />
          </FadeIn>
        </Container>
      </section>

      {/* ══════════════════════════════════════════════════════════
          LUXURY CTA SECTION
          ══════════════════════════════════════════════════════════ */}
      <section className="relative pt-8 pb-20 sm:pt-12 sm:pb-28">
        <Container>
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#12281d] border border-[#57b585]/30 p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-emerald-950/40">
              {/* Background Ambient Light Beams */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -top-32 -left-32 size-[450px] rounded-full bg-emerald-500/20 blur-[100px]" />
                <div className="absolute -bottom-32 -right-32 size-[450px] rounded-full bg-teal-400/20 blur-[100px]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:28px_28px]" />
              </div>

              <div className="relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#57b585]/40 bg-[#57b585]/15 px-4 py-1.5 text-xs font-semibold text-[#b9e8cd] backdrop-blur-md">
                    <span className="size-2 rounded-full bg-[#57b585] animate-pulse" />
                    <span>Ruang Belajar Inklusif & Gratis</span>
                  </div>

                  <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-white leading-tight">
                    Mulailah Perjalanan <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#b9e8cd] to-[#57b585]">
                      Isyaratmu Hari Ini
                    </span>
                  </h2>

                  <p className="max-w-xl text-base leading-relaxed text-[#b9e8cd]/80">
                    Setiap isyarat yang kamu pelajari adalah jembatan menuju komunikasi yang lebih inklusif, hangat, dan tanpa batasan.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href="/belajar/materi-1"
                      className="group inline-flex h-13 items-center gap-2.5 rounded-full bg-[#57b585] px-8 text-base font-bold text-[#0c1a13] shadow-lg shadow-emerald-900/40 transition-all hover:bg-[#68c695] hover:scale-[1.02] hover:shadow-xl"
                    >
                      <BookOpen className="size-5" aria-hidden="true" />
                      <span>Mulai Belajar Sekarang</span>
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    <div className="flex items-center gap-4 text-xs text-[#b9e8cd]/70 px-2">
                      <span className="flex items-center gap-1.5">
                        <ShieldCheck className="size-4 text-[#57b585]" /> BISINDO Standar
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Zap className="size-4 text-[#57b585]" /> Interaktif
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column - Wicoro Logo Floating Animation */}
                <div className="lg:col-span-5 flex justify-center items-center relative">
                  {/* Glowing Aura Behind Logo */}
                  <div className="absolute size-64 sm:size-72 lg:size-80 rounded-full bg-[#57b585]/25 blur-3xl animate-pulse" />

                  <motion.div
                    animate={{
                      y: [0, -14, 0],
                      rotate: [0, 2, -2, 0],
                      scale: [1, 1.03, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative z-10 cursor-pointer"
                    whileHover={{ scale: 1.08, rotate: 4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Image
                      src="/Frame 1.png"
                      alt="Wicoro Logo"
                      width={340}
                      height={340}
                      className="object-contain size-64 sm:size-72 lg:size-80 drop-shadow-[0_20px_50px_rgba(87,181,133,0.35)] transition-all duration-300"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </div>
  )
}
