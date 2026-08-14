"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Sparkles, CheckCircle2, Play } from "lucide-react"

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
    image: "/Hai.png",
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
    image: "/senang.png",
    link: "/belajar/materi-4",
    tag: "Perasaan",
  },
  {
    id: "semangat",
    name: "Semangat!",
    category: "ekspresi",
    description: "Kepalan tangan diangkat mantap disertai binar mata penuh antusiasme dan energi positif.",
    image: "/semangat.png",
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
    <section className="relative py-12 sm:py-16 overflow-hidden">
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-bold tracking-wide text-primary shadow-sm">
              <Sparkles className="size-3.5" />
              Cobain Langsung di Sini
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Coba Isyarat Pertama Kamu
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Klik kategori dan pilih kata di bawah ini untuk melihat contoh visual gerakan Bahasa Isyarat Indonesia secara interaktif.
            </p>
          </FadeIn>
        </div>

        {/* Category Pills */}
        <FadeIn delay={0.1} className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {previewCategories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
                className={cn(
                  "relative rounded-full px-4 py-2 text-xs font-bold tracking-wide transition-all duration-300 sm:text-sm cursor-pointer",
                  isActive
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-white/80 border border-border/80 text-muted-foreground hover:bg-white hover:text-foreground hover:border-primary/40"
                )}
              >
                {cat.label}
              </button>
            )
          })}
        </FadeIn>

        {/* Interactive Playground Box */}
        <FadeIn delay={0.2} className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-center">
          {/* Left Column: Selector Chips */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground px-1">
              Pilih Kata / Isyarat:
            </p>
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
              {filteredItems.map((item) => {
                const isSelected = item.id === currentItem.id
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedId(item.id)}
                    className={cn(
                      "group relative flex items-center justify-between rounded-2xl border p-3.5 text-left transition-all duration-300",
                      isSelected
                        ? "border-primary bg-white shadow-xl shadow-primary/10 scale-[1.02]"
                        : "border-border/70 bg-white/70 hover:bg-white hover:border-primary/40 hover:shadow-md"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "flex size-10 items-center justify-center rounded-xl transition-colors",
                          isSelected
                            ? "bg-primary text-white"
                            : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                        )}
                      >
                        <Play className={cn("size-4 fill-current transition-transform group-hover:scale-110", isSelected && "ml-0.5")} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-foreground">{item.name}</h4>
                        <span className="text-[11px] font-medium text-muted-foreground">{item.tag}</span>
                      </div>
                    </div>

                    {isSelected && (
                      <motion.span
                        layoutId="active-indicator"
                        className="flex size-6 items-center justify-center rounded-full bg-primary/10 text-primary"
                      >
                        <CheckCircle2 className="size-4" />
                      </motion.span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Active Interactive Showcase Card */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 shadow-2xl shadow-black/8 backdrop-blur-md sm:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, y: 15, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="grid gap-6 sm:grid-cols-2 sm:items-center"
                >
                  {/* Image Display */}
                  <div className="relative flex aspect-square w-full items-center justify-center rounded-2xl bg-gradient-to-br from-mint/20 via-peach/30 to-coral-light/20 p-4 border border-border/50">
                    <Image
                      src={currentItem.image}
                      alt={currentItem.name}
                      width={320}
                      height={320}
                      className="max-h-56 w-auto object-contain drop-shadow-md transition-transform duration-500 hover:scale-105"
                      priority
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-extrabold tracking-wide text-primary shadow-sm border">
                      {currentItem.tag}
                    </span>
                  </div>

                  {/* Details & CTA */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-primary">
                        Pratinjau BISINDO
                      </span>
                      <h3 className="mt-1 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                        {currentItem.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {currentItem.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-border/60">
                      <Link
                        href={currentItem.link}
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-primary/20 transition-all hover:scale-105 hover:bg-primary/90 sm:text-sm"
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
