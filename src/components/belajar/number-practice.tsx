"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Hash, X, ArrowRight, Calculator } from "lucide-react"
import { cn } from "@/lib/utils"

const DIGIT_DATA: Record<string, { name: string; description: string; emoji: string; image?: string }> = {
  "0": {
    name: "Nol",
    emoji: "0️⃣",
    image: "/12.png",
    description: "Kelima jari membentuk lingkaran seperti huruf O, telapak menghadap ke depan.",
  },
  "1": {
    name: "Satu",
    emoji: "1️⃣",
    image: "/1.png",
    description: "Telunjuk lurus ke atas, empat jari lainnya menekuk rapat di telapak.",
  },
  "2": {
    name: "Dua",
    emoji: "2️⃣",
    image: "/2.png",
    description: "Telunjuk dan jari tengah lurus membuka, dua jari lainnya menekuk di telapak.",
  },
  "3": {
    name: "Tiga",
    emoji: "3️⃣",
    image: "/3.png",
    description: "Telunjuk, jari tengah, dan manis lurus membuka, kelingking dan ibu jari menekuk.",
  },
  "4": {
    name: "Empat",
    emoji: "4️⃣",
    image: "/4.png",
    description: "Empat jari berdiri rapat tegak, ibu jari menekuk di telapak.",
  },
  "5": {
    name: "Lima",
    emoji: "5️⃣",
    image: "/5.png",
    description: "Kelima jari terbuka lebar, telapak menghadap ke depan.",
  },
  "6": {
    name: "Enam",
    emoji: "6️⃣",
    image: "/6.png",
    description: "Ibu jari dan kelingking lurus ke bawah, tiga jari tengah menekuk.",
  },
  "7": {
    name: "Tujuh",
    emoji: "7️⃣",
    image: "/7.png",
    description: "Ibu jari dan jari manis lurus ke bawah, tiga jari lainnya menekuk.",
  },
  "8": {
    name: "Delapan",
    emoji: "8️⃣",
    image: "/8.png",
    description: "Ibu jari dan jari tengah lurus ke bawah, tiga jari lainnya menekuk.",
  },
  "9": {
    name: "Sembilan",
    emoji: "9️⃣",
    image: "/9.png",
    description: "Ibu jari dan telunjuk lurus ke bawah, tiga jari lainnya menekuk.",
  },
}

const PRESET_NUMBERS = ["17", "25", "100", "2025"]

const accentClasses = [
  "bg-mint text-mint-deep",
  "bg-coral-light text-[#cf6f95]",
  "bg-peach text-primary",
] as const

export function NumberPractice() {
  const [inputNumber, setInputNumber] = useState("17")

  const parsedDigits = useMemo(() => {
    const raw = inputNumber.trim()
    if (!raw) return []
    return raw.split("").filter((ch) => DIGIT_DATA[ch])
  }, [inputNumber])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/[^0-9\s]/g, "")
    setInputNumber(val)
  }

  return (
    <section className="pt-8 sm:pt-10">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-primary">✦ Kuis Interaktif</p>
        <h2 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          Coba Gabungkan Angkanya!
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
          Ketik sembarang angka di bawah — lihat isyarat digit-per-digitnya secara berurutan. Angka berapapun bisa dicoba!
        </p>
      </div>

      {/* Control Box */}
      <div className="mt-6 rounded-3xl border bg-card/80 p-5 shadow-lg shadow-black/5 backdrop-blur-sm sm:p-7">
        {/* Preset Buttons */}
        <div className="mb-5 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mr-1">
            Contoh Angka:
          </span>
          {PRESET_NUMBERS.map((preset) => {
            const isActive = inputNumber.trim() === preset
            return (
              <button
                key={preset}
                type="button"
                onClick={() => setInputNumber(preset)}
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
            <Calculator className="size-5 text-primary/70" />
          </div>
          <input
            type="text"
            inputMode="numeric"
            value={inputNumber}
            onChange={handleInput}
            placeholder="Ketik angka di sini... (misal: 17)"
            className="w-full rounded-2xl border bg-background/90 py-3.5 pl-12 pr-12 text-base font-semibold transition-all duration-200 placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 sm:text-lg"
          />
          {inputNumber && (
            <button
              type="button"
              onClick={() => setInputNumber("")}
              className="absolute right-3 rounded-xl p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors cursor-pointer"
              title="Hapus angka"
            >
              <X className="size-5" />
            </button>
          )}
        </div>

        {/* Info Bar */}
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground px-1">
          <div className="flex items-center gap-2">
            <Hash className="size-3.5 text-primary" />
            <span>
              {parsedDigits.length > 0
                ? `${parsedDigits.length} digit terdeteksi`
                : "Masukkan angka 0–9"}
            </span>
          </div>
        </div>
      </div>

      {/* Visual Digit Cards */}
      <div className="mt-8">
        <AnimatePresence mode="wait">
          {parsedDigits.length > 0 ? (
            <motion.div
              key={inputNumber}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
            >
              <div className="rounded-3xl border bg-card p-6 shadow-md shadow-black/5">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b pb-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-foreground">
                      Angka: &quot;{inputNumber.trim()}&quot;
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Rangkaian {parsedDigits.length} isyarat digit
                    </p>
                  </div>
                </div>

                {/* Digit Cards */}
                <div className="flex flex-wrap items-stretch justify-start gap-4 sm:gap-6">
                  {parsedDigits.map((digit, idx) => {
                    const data = DIGIT_DATA[digit]
                    const accentClass = accentClasses[idx % accentClasses.length]
                    return (
                      <motion.div
                        key={`${digit}-${idx}`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: idx * 0.06 }}
                        className="flex items-center gap-4"
                      >
                        {/* Single Digit Card */}
                        <div className="group relative flex w-36 flex-col overflow-hidden rounded-2xl border bg-background p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md sm:w-44">
                          {/* Badge Row */}
                          <div className="mb-3 flex items-center justify-between">
                            <span
                              className={cn(
                                "flex size-8 items-center justify-center rounded-lg text-base font-bold shadow-sm",
                                accentClass
                              )}
                            >
                              {digit}
                            </span>
                            <span className="text-[10px] font-semibold text-muted-foreground uppercase">
                              Ke-{idx + 1}
                            </span>
                          </div>

                          {/* Image or Emoji Display */}
                          {data.image ? (
                            <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted/20 border">
                              <Image
                                src={data.image}
                                alt={`Isyarat ${data.name}`}
                                fill
                                className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>
                          ) : (
                            <div className="flex aspect-square w-full items-center justify-center rounded-xl bg-muted/20 border text-5xl sm:text-6xl">
                              {data.emoji}
                            </div>
                          )}

                          {/* Name */}
                          <p className="mt-3 text-center text-sm font-semibold text-foreground">
                            {data.name}
                          </p>
                        </div>

                        {/* Arrow connector */}
                        {idx < parsedDigits.length - 1 && (
                          <div className="hidden sm:flex items-center justify-center text-primary/40">
                            <ArrowRight className="size-5" />
                          </div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>

                {/* Combined reading hint */}
                {parsedDigits.length > 1 && (
                  <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4">
                    <p className="text-sm font-medium text-primary">
                      💡 Cara baca:{" "}
                      <span className="font-bold">
                        {parsedDigits.map((d) => DIGIT_DATA[d].name).join(" → ")}
                      </span>
                    </p>
                  </div>
                )}
              </div>
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
                <Hash className="size-7" />
              </div>
              <h4 className="text-lg font-bold text-foreground">Belum ada angka yang dimasukkan</h4>
              <p className="mt-1 max-w-md text-sm text-muted-foreground">
                Ketik angka pada kolom di atas atau klik salah satu tombol contoh seperti &quot;17&quot; untuk menampilkan isyaratnya.
              </p>
              <button
                type="button"
                onClick={() => setInputNumber("17")}
                className="mt-4 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Tampilkan Contoh &quot;17&quot;
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
