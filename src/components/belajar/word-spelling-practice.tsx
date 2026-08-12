"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Type, Sparkles, X, ArrowRight, Keyboard, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

const ALPHABET_DATA: Record<
  string,
  { image: string; name: string; description: string }
> = {
  A: {
    image: "/Huruf A.png",
    name: "Huruf A",
    description: "Kedua jari telunjuk saling bersentuhan di ujung atas.",
  },
  B: {
    image: "/Huruf B.png",
    name: "Huruf B",
    description: "Telunjuk tangan kiri tegak, disentuh 3 jari tangan kanan.",
  },
  C: {
    image: "/Huruf C.png",
    name: "Huruf C",
    description: "Ibu jari dan 4 jari melengkung terbuka membentuk huruf C.",
  },
  D: {
    image: "/Huruf D.png",
    name: "Huruf D",
    description: "Telunjuk kiri tegak disatukan lengkungan ibu jari & telunjuk kanan.",
  },
  E: {
    image: "/Huruf E.png",
    name: "Huruf E",
    description: "Satu tangan dengan jari-jari merapat membengkok melengkung.",
  },
  F: {
    image: "/F.png",
    name: "Huruf F",
    description: "Dua jari tangan atas terentang mendatar disentuh telunjuk bawah.",
  },
  G: {
    image: "/G.png",
    name: "Huruf G",
    description: "Kedua tangan mengepal dan disatukan/ditumpuk mendatar.",
  },
  H: {
    image: "/H.png",
    name: "Huruf H",
    description: "Dua telunjuk tegak dihubungkan telunjuk tangan melintang.",
  },
  I: {
    image: "/I.png",
    name: "Huruf I",
    description: "Satu tangan mengepal dengan kelingking berdiri tegak.",
  },
  J: {
    image: "/J.png",
    name: "Huruf J",
    description: "Jari kelingking berdiri tegak diayunkan melengkung Z/J.",
  },
  K: {
    image: "/K.png",
    name: "Huruf K",
    description: "Telunjuk kiri tegak disentuh belakang kepalan kanan.",
  },
  L: {
    image: "/L.png",
    name: "Huruf L",
    description: "Ibu jari dan telunjuk terbuka tegak lurus membentuk L.",
  },
  M: {
    image: "/M.png",
    name: "Huruf M",
    description: "Tiga jari tangan kanan menempel mendatar di atas telapak kiri.",
  },
  N: {
    image: "/N.png",
    name: "Huruf N",
    description: "Dua jari tangan kanan menempel mendatar di atas telapak kiri.",
  },
  O: {
    image: "/O.png",
    name: "Huruf O",
    description: "Kelima jari melengkung menyatu membentuk lingkaran O.",
  },
  P: {
    image: "/P.png",
    name: "Huruf P",
    description: "Telunjuk kiri tegak disentuh melengkung di atas oleh ibu jari & telunjuk kanan.",
  },
  Q: {
    image: "/Q.png",
    name: "Huruf Q",
    description: "Ibu jari & telunjuk melengkung disentuh miring di bawahnya.",
  },
  R: {
    image: "/R.png",
    name: "Huruf R",
    description: "Jari telunjuk tegak dengan jari tengah melengkung di depan.",
  },
  S: {
    image: "/S.png",
    name: "Huruf S",
    description: "Ujung ibu jari & telunjuk kiri disentuh telunjuk kanan.",
  },
  T: {
    image: "/T.png",
    name: "Huruf T",
    description: "Telunjuk kanan horizontal disentuh di bawah oleh telunjuk kiri.",
  },
  U: {
    image: "/U.png",
    name: "Huruf U",
    description: "Telunjuk tegak lurus dengan ibu jari terangkat di samping.",
  },
  V: {
    image: "/V.png",
    name: "Huruf V",
    description: "Telunjuk dan jari tengah direnggangkan membentuk V.",
  },
  W: {
    image: "/W.png",
    name: "Huruf W",
    description: "Kedua tangan diangkat dengan ibu jari bersentuhan membentuk W.",
  },
  X: {
    image: "/X.png",
    name: "Huruf X",
    description: "Jari telunjuk kedua tangan disilangkan di ujung atas.",
  },
  Y: {
    image: "/Y.png",
    name: "Huruf Y",
    description: "Telunjuk kiri tegak disentuh di pangkal oleh telunjuk & ibu jari kanan.",
  },
  Z: {
    image: "/Z.png",
    name: "Huruf Z",
    description: "Telapak tangan merapat mendatar melengkung ke depan membentuk Z.",
  },
}

const PRESET_WORDS = ["sifa", "wicoro", "belajar", "kita", "bisa", "teman"]

export function WordSpellingPractice() {
  const [inputWord, setInputWord] = useState("sifa")

  const parsedWords = useMemo(() => {
    if (!inputWord.trim()) return []

    // Split by spaces to handle multi-word inputs
    const rawWords = inputWord.trim().split(/\s+/)

    return rawWords.map((word) => {
      const letters = word
        .toUpperCase()
        .split("")
        .filter((char) => ALPHABET_DATA[char])
        .map((char) => ({
          char,
          ...ALPHABET_DATA[char],
        }))

      return {
        originalWord: word,
        letters,
      }
    })
  }, [inputWord])

  const totalLettersCount = useMemo(() => {
    return parsedWords.reduce((acc, w) => acc + w.letters.length, 0)
  }, [parsedWords])

  return (
    <section className="pt-8 sm:pt-10">
      {/* Header Info */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-primary">✦ Praktik Isyarat</p>
        <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          Berlatih Menggabungkan Huruf
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Ketik kata pilihanmu atau klik contoh kata di bawah ini untuk melihat bagaimana huruf-huruf digabungkan menjadi isyarat tangan.
        </p>
      </div>

      {/* Control Box */}
      <div className="mt-6 rounded-3xl border bg-card/80 p-5 shadow-lg shadow-black/5 backdrop-blur-sm sm:p-7">
        {/* Preset Buttons */}
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
            <Sparkles className="size-3.5 text-amber-500" />
            Contoh Kata:
          </span>
          {PRESET_WORDS.map((preset) => {
            const isActive = inputWord.toLowerCase().trim() === preset.toLowerCase()
            return (
              <button
                key={preset}
                type="button"
                onClick={() => setInputWord(preset)}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 cursor-pointer",
                  isActive
                    ? "bg-primary text-primary-foreground font-semibold shadow-sm shadow-primary/30 scale-105"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {preset}
              </button>
            )
          })}
        </div>

        {/* Input Field */}
        <div className="relative flex items-center">
          <div className="absolute left-4 flex items-center text-muted-foreground pointer-events-none">
            <Keyboard className="size-5 text-primary/70" />
          </div>
          <input
            type="text"
            value={inputWord}
            onChange={(e) => setInputWord(e.target.value)}
            placeholder="Ketik kata di sini... (misal: sifa)"
            className="w-full rounded-2xl border bg-background/90 py-3.5 pl-12 pr-12 text-base font-semibold transition-all duration-200 placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 sm:text-lg"
          />
          {inputWord && (
            <button
              type="button"
              onClick={() => setInputWord("")}
              className="absolute right-3 rounded-xl p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
              title="Hapus teks"
            >
              <X className="size-5" />
            </button>
          )}
        </div>

        {/* Input Info Bar */}
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground px-1">
          <div className="flex items-center gap-2">
            <Type className="size-3.5 text-primary" />
            <span>
              {totalLettersCount > 0
                ? `${totalLettersCount} huruf terdeteksi`
                : "Masukkan huruf A-Z"}
            </span>
          </div>
          {inputWord && (
            <button
              type="button"
              onClick={() => setInputWord("sifa")}
              className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer"
            >
              <RefreshCw className="size-3" /> Reset ke &quot;sifa&quot;
            </button>
          )}
        </div>
      </div>

      {/* Visual Sequence Display */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {parsedWords.length > 0 && totalLettersCount > 0 ? (
            <motion.div
              key={inputWord}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              {parsedWords.map((wordGroup, wordIdx) => (
                <div
                  key={`${wordGroup.originalWord}-${wordIdx}`}
                  className="rounded-3xl border bg-card p-6 shadow-md shadow-black/5"
                >
                  {/* Word Header */}
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b pb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-xl bg-coral-light font-bold text-[#cf6f95] text-sm">
                        {wordIdx + 1}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold tracking-tight text-foreground uppercase">
                          Kata: &quot;{wordGroup.originalWord}&quot;
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Rangkaian {wordGroup.letters.length} huruf isyarat
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-mint px-3 py-1 text-xs font-semibold text-mint-deep">
                      <Sparkles className="size-3.5" />
                      <span>Hasil Penggabungan</span>
                    </div>
                  </div>

                  {/* Letter Cards Grid / Flex Flow */}
                  {wordGroup.letters.length > 0 ? (
                    <div className="flex flex-wrap items-stretch justify-start gap-4 sm:gap-6">
                      {wordGroup.letters.map((item, charIdx) => (
                        <motion.div
                          key={`${item.char}-${charIdx}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2, delay: charIdx * 0.05 }}
                          className="flex items-center gap-4"
                        >
                          {/* Single Letter Card */}
                          <div className="group relative flex w-36 flex-col overflow-hidden rounded-2xl border bg-background p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md sm:w-44 sm:p-4">
                            {/* Card Top Badge */}
                            <div className="mb-2 flex items-center justify-between">
                              <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                                {item.char}
                              </span>
                              <span className="text-[10px] font-semibold text-muted-foreground uppercase">
                                Ke-{charIdx + 1}
                              </span>
                            </div>

                            {/* Image Container */}
                            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted/20 border p-1">
                              <Image
                                src={item.image}
                                alt={`Isyarat ${item.name}`}
                                fill
                                className="object-contain p-1 transition-transform duration-300 group-hover:scale-110"
                              />
                            </div>

                            {/* Letter Name & Desc */}
                            <div className="mt-3 text-center">
                              <p className="text-xs font-bold text-foreground">
                                {item.name}
                              </p>
                              <p className="mt-1 line-clamp-2 text-[11px] leading-tight text-muted-foreground">
                                {item.description}
                              </p>
                            </div>
                          </div>

                          {/* Arrow Connector between letters */}
                          {charIdx < wordGroup.letters.length - 1 && (
                            <div className="hidden sm:flex items-center justify-center text-primary/40">
                              <ArrowRight className="size-5" />
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground italic">
                      Tidak ada huruf A-Z yang dapat diisyaratkan pada kata ini.
                    </p>
                  )}
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center rounded-3xl border border-dashed p-10 text-center"
            >
              <div className="flex size-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground mb-3">
                <Type className="size-7" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Belum ada kata yang dimasukkan</h4>
              <p className="mt-1 max-w-md text-sm text-muted-foreground">
                Ketik kata pada kolom di atas atau klik salah satu tombol contoh seperti &quot;sifa&quot; untuk menampilkan bentuk isyaratnya.
              </p>
              <button
                type="button"
                onClick={() => setInputWord("sifa")}
                className="mt-4 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Tampilkan Contoh &quot;sifa&quot;
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
