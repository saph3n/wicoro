"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, CheckCircle2, Play, Compass } from "lucide-react"

import { Container } from "@/components/common/container"
import { FadeIn } from "@/components/common/fade-in"
import { cn } from "@/lib/utils"

interface SignItem {
  id: string
  name: string
  category: "salam" | "huruf" | "angka" | "ekspresi"
  description: string
  image: string
  link: string
  tag: string
}

const previewCategories = [
  { id: "salam", label: "👋 Salam Sehari-hari" },
  { id: "huruf", label: "🔤 Huruf & Alfabet" },
  { id: "angka", label: "🔢 Angka" },
  { id: "ekspresi", label: "😊 Ekspresi" },
] as const

const signItems: SignItem[] = [
  {
    id: "hai",
    name: "Hai / Halo",
    category: "salam",
    description: "Lambaikan telapak tangan terbuka dengan lembut di samping bahu. Merupakan isyarat ramah paling umum untuk menyapa.",
    image: "/Hai.png?v=2",
    link: "/belajar/materi-3",
    tag: "Salam Utama",
  },
  {
    id: "terima-kasih",
    name: "Terima Kasih",
    category: "salam",
    description: "Sentuh dagu atau bibir dengan ujung jari tangan kanan, lalu gerakkan tangan ke depan menuju orang yang diajak bicara.",
    image: "/Terima Kasih.png",
    link: "/belajar/materi-3",
    tag: "Sopan Santun",
  },
  {
    id: "apa-kabar",
    name: "Apa Kabar?",
    category: "salam",
    description: "Kombinasi isyarat menyapa disertai senyuman dan pandangan hangat untuk menanyakan kabar teman atau lawan bicara.",
    image: "/Apa Kabar.png",
    link: "/belajar/materi-3",
    tag: "Percakapan",
  },
  {
    id: "huruf-a",
    name: "Huruf A",
    category: "huruf",
    description: "Mengepalkan tangan dengan ibu jari berada tegak di samping jari telunjuk. Merupakan huruf pertama dalam alfabet BISINDO.",
    image: "/Huruf A.png",
    link: "/belajar/materi-1",
    tag: "Alfabet Dasar",
  },
  {
    id: "huruf-b",
    name: "Huruf B",
    category: "huruf",
    description: "Empat jari berdiri tegak rapat, sementara ibu jari melipat lurus di depan telapak tangan.",
    image: "/Huruf B.png",
    link: "/belajar/materi-1",
    tag: "Alfabet Dasar",
  },
  {
    id: "huruf-c",
    name: "Huruf C",
    category: "huruf",
    description: "Kelima jari melengkung membentuk setengah lingkaran bulat seperti bentuk huruf C.",
    image: "/Huruf C.png",
    link: "/belajar/materi-1",
    tag: "Alfabet Dasar",
  },
  {
    id: "angka-1",
    name: "Angka 1",
    category: "angka",
    description: "Telunjuk tegak lurus ke atas, sementara empat jari lainnya melipat rapat di telapak tangan.",
    image: "/1.png",
    link: "/belajar/materi-2",
    tag: "Bilangan",
  },
  {
    id: "angka-2",
    name: "Angka 2",
    category: "angka",
    description: "Jari telunjuk dan jari tengah berdiri membentuk huruf V, dua jari lainnya melipat di telapak.",
    image: "/2.png",
    link: "/belajar/materi-2",
    tag: "Bilangan",
  },
  {
    id: "angka-5",
    name: "Angka 5",
    category: "angka",
    description: "Kelima jari terbuka lebar dengan telapak tangan menghadap penuh ke depan.",
    image: "/5.png",
    link: "/belajar/materi-2",
    tag: "Bilangan",
  },
  {
    id: "senang",
    name: "Senang / Gembira",
    category: "ekspresi",
    description: "Tampilkan senyuman ceria disertai gerakan tangan melambangkan perasaan bahagia yang meluap.",
    image: "/senang%20(1).png",
    link: "/belajar/materi-4",
    tag: "Perasaan",
  },
  {
    id: "semangat",
    name: "Semangat!",
    category: "ekspresi",
    description: "Kepalan tangan diangkat mantap disertai binar mata penuh antusiasme dan energi positif.",
    image: "/semangat%20(1).png",
    link: "/belajar/materi-4",
    tag: "Perasaan",
  },
]

export function QuickPreview() {
  const [activeCategory, setActiveCategory] = useState<typeof previewCategories[number]["id"]>("salam")
  
  const filteredItems = signItems.filter((item) => item.category === activeCategory)
  const [selectedId, setSelectedId] = useState<string>(filteredItems[0]?.id || "hai")

  const currentItem = signItems.find((item) => item.id === selectedId) || filteredItems[0] || signItems[0]

  const handleCategoryChange = (catId: typeof activeCategory) => {
    setActiveCategory(catId)
    const firstInCat = signItems.find((item) => item.category === catId)
    if (firstInCat) setSelectedId(firstInCat.id)
  }

  return (
    <section className="relative pt-10 pb-14 sm:pt-12 sm:pb-20 overflow-hidden bg-white" aria-label="Coba Isyarat Pertama Kamu">
      {/* Soft Decorative Ambient Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-10 left-1/4 size-96 rounded-full bg-emerald-50/50 blur-3xl opacity-60" />
        <div className="absolute bottom-10 right-1/4 size-96 rounded-full bg-pink-50/40 blur-3xl opacity-50" />
      </div>

      <Container className="relative">
        {/* ── Section Header ── */}
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn delay={0.1}>
            <h2 className="mt-4 text-2xl sm:text-4xl lg:text-[2.6rem] font-black tracking-tight text-foreground leading-tight sm:whitespace-nowrap">
              Coba Isyarat{" "}
              <span className="bg-gradient-to-r from-[#123825] via-[#2e9c64] to-[#cf6f95] bg-clip-text text-transparent">
                Pertama Kamu
              </span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.15}>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base max-w-xl mx-auto">
              Klik kategori dan pilih kata di bawah ini untuk melihat contoh visual gerakan Bahasa Isyarat Indonesia secara interaktif.
            </p>
          </FadeIn>
        </div>

        {/* ── Category Segmented Tabs ── */}
        <FadeIn delay={0.2} className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-slate-100/90 p-1.5 border border-slate-200/80 shadow-inner">
            {previewCategories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={cn(
                    "relative rounded-xl px-4 py-2 text-xs font-bold tracking-wide transition-all duration-300 sm:text-sm cursor-pointer",
                    isActive
                      ? "bg-gradient-to-r from-[#123825] to-[#2e9c64] text-white shadow-md shadow-emerald-950/20"
                      : "text-slate-600 hover:text-foreground hover:bg-white/60"
                  )}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </FadeIn>

        {/* ── Interactive Playground Studio Box ── */}
        <FadeIn delay={0.25} className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Selector Chips List */}
          <div className="flex flex-col gap-3 lg:col-span-5 justify-center">
            <div className="flex items-center justify-between px-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-muted-foreground">
                Pilih Kata / Isyarat:
              </span>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 rounded-full px-2.5 py-0.5">
                {filteredItems.length} Isyarat
              </span>
            </div>

            <div className="grid gap-3">
              {filteredItems.map((item) => {
                const isSelected = item.id === currentItem.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={cn(
                      "group relative flex items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300 cursor-pointer",
                      isSelected
                        ? "border-emerald-500/80 bg-gradient-to-r from-emerald-50/90 via-white to-white shadow-lg shadow-emerald-900/10 scale-[1.02]"
                        : "border-slate-200/80 bg-white hover:bg-slate-50/80 hover:border-emerald-300 hover:shadow-md"
                    )}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={cn(
                          "flex size-11 items-center justify-center rounded-xl transition-all duration-300 shadow-2xs",
                          isSelected
                            ? "bg-gradient-to-br from-[#123825] to-[#2e9c64] text-white shadow-md shadow-emerald-900/20 rotate-3"
                            : "bg-slate-100 text-slate-500 group-hover:bg-emerald-100/70 group-hover:text-emerald-700"
                        )}
                      >
                        <Play className={cn("size-4 fill-current transition-transform group-hover:scale-110", isSelected && "ml-0.5")} />
                      </div>

                      <div>
                        <h4 className="text-base font-extrabold text-foreground tracking-tight group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-[11px] font-bold text-muted-foreground">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <motion.span
                        layoutId="active-indicator-preview"
                        className="flex size-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xs"
                      >
                        <CheckCircle2 className="size-4" />
                      </motion.span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Active Interactive Showcase Card Stage */}
          <div className="lg:col-span-7 flex">
            <div className="relative w-full overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-br from-white via-slate-50/50 to-emerald-50/30 p-6 shadow-xl shadow-slate-900/8 backdrop-blur-md sm:p-8 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -18, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid gap-6 sm:grid-cols-2 sm:items-center"
                >
                  {/* Image Display Frame */}
                  <div className="relative flex aspect-square w-full items-center justify-center rounded-2xl bg-gradient-to-br from-mint/15 via-peach/20 to-coral-light/15 p-5 border border-emerald-500/20 shadow-md shadow-emerald-900/5 group">
                    {/* Corner Tag */}
                    <span className="absolute top-3 left-3 rounded-full bg-emerald-100/90 border border-emerald-300 px-3 py-1 text-[10px] font-extrabold tracking-wide text-emerald-900 shadow-2xs">
                      {currentItem.tag}
                    </span>

                    <Image
                      src={currentItem.image}
                      alt={currentItem.name}
                      width={320}
                      height={320}
                      className="max-h-60 w-auto object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-108"
                      priority
                    />
                  </div>

                  {/* Details & CTA Button */}
                  <div className="flex flex-col justify-between h-full py-1">
                    <div>
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                        <Compass className="size-3 text-emerald-600" />
                        Pratinjau BISINDO
                      </div>

                      <h3 className="mt-3 text-2xl font-black tracking-tight text-foreground sm:text-3xl">
                        {currentItem.name}
                      </h3>

                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                        {currentItem.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-slate-200/80">
                      <Link
                        href={currentItem.link}
                        className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-[#123825] via-[#1d5e3e] to-[#2e9c64] px-6 py-3 text-xs sm:text-sm font-extrabold text-white shadow-lg shadow-emerald-950/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-emerald-950/30"
                      >
                        Pelajari Materi Lengkap
                        <ArrowRight className="size-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
