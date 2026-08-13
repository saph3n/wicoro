"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  BrainCircuit,
  Check,
  ChevronRight,
  CircleX,
  Clock3,
  Flame,
  Hand,
  Hash,
  Heart,
  Keyboard,
  Layers,
  LetterText,
  RotateCcw,
  Send,
  Smile,
  Sparkles,
  Star,
  TimerReset,
  Trophy,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Category = "Huruf" | "Angka" | "Ekspresi" | "Salam"
type Mode = "semua" | Category
type Phase = "answering" | "feedback" | "timeout"

interface BaseQuestion {
  category: Category
  question: string
  note: string
  time?: number
}

interface TextOnly extends BaseQuestion {
  type: "teks"
  options: string[]
  answerIndex: number
}

interface ImageToText extends BaseQuestion {
  type: "gambar-ke-teks"
  image: string
  imageAlt: string
  options: string[]
  answerIndex: number
}

interface TextToImage extends BaseQuestion {
  type: "teks-ke-gambar"
  imageOptions: { src: string; alt: string }[]
  answerIndex: number
}

interface TypeAnswer extends BaseQuestion {
  type: "isian"
  image: string
  imageAlt: string
  answer: string
}

interface TrueFalse extends BaseQuestion {
  type: "benar-salah"
  answer: boolean
}

type Question = TextOnly | ImageToText | TextToImage | TypeAnswer | TrueFalse

const DEFAULT_TIME = 15
const MAX_LIVES = 3

const questions: Question[] = [
  {
    type: "gambar-ke-teks",
    category: "Huruf",
    image: "/Huruf C.png",
    imageAlt: "Isyarat huruf C",
    question: "Isyarat tangan pada gambar ini menunjukkan huruf apa dalam alfabet BISINDO?",
    options: ["A", "B", "C"],
    answerIndex: 2,
    note: "Ibu jari dan empat jari melengkung terbuka membentuk kelengkungan huruf C.",
  },
  {
    type: "gambar-ke-teks",
    category: "Angka",
    image: "/7.png",
    imageAlt: "Isyarat angka 7",
    question: "Berapa angka yang sedang diisyaratkan pada gambar ini?",
    options: ["6", "7", "8"],
    answerIndex: 1,
    note: "Angka 7 dibentuk dengan ibu jari dan jari manis yang lurus ke bawah.",
  },
  {
    type: "gambar-ke-teks",
    category: "Ekspresi",
    image: "/senang.png",
    imageAlt: "Ekspresi senang",
    question: "Ekspresi wajah apa yang ditunjukkan pada gambar ini?",
    options: ["Sedih", "Senang", "Marah"],
    answerIndex: 1,
    note: "Telapak terbuka menempel di dada lalu naik ke depan wajah sambil tersenyum lebar — itulah senang.",
  },
  {
    type: "teks-ke-gambar",
    category: "Huruf",
    question: "Manakah gambar yang menunjukkan isyarat huruf L?",
    imageOptions: [
      { src: "/L.png", alt: "Isyarat huruf L" },
      { src: "/Huruf A.png", alt: "Isyarat huruf A" },
      { src: "/Huruf E.png", alt: "Isyarat huruf E" },
    ],
    answerIndex: 0,
    note: "Ibu jari dan telunjuk terbuka tegak lurus membentuk sudut seperti huruf L.",
  },
  {
    type: "teks-ke-gambar",
    category: "Angka",
    question: "Pilih gambar isyarat angka 9!",
    imageOptions: [
      { src: "/9.png", alt: "Isyarat angka 9" },
      { src: "/2.png", alt: "Isyarat angka 2" },
      { src: "/6.png", alt: "Isyarat angka 6" },
    ],
    answerIndex: 0,
    note: "Angka 9 dibentuk dengan ibu jari dan telunjuk yang lurus ke bawah.",
  },
  {
    type: "teks-ke-gambar",
    category: "Ekspresi",
    question: "Manakah gambar yang menunjukkan ekspresi 'kaget'?",
    imageOptions: [
      { src: "/kaget.png", alt: "Ekspresi kaget" },
      { src: "/marah.png", alt: "Ekspresi marah" },
      { src: "/sedih.png", alt: "Ekspresi sedih" },
    ],
    answerIndex: 0,
    note: "Kaget ditandai alis terangkat tinggi, mata membelalak, dan mulut sedikit terbuka.",
  },
  {
    type: "isian",
    category: "Angka",
    image: "/2.png",
    imageAlt: "Isyarat angka 2",
    question: "Tuliskan angka yang sedang diisyaratkan pada gambar!",
    answer: "2",
    note: "Telunjuk dan jari tengah lurus membuka, dua jari lainnya menekuk di telapak — itulah angka 2.",
    time: 20,
  },
  {
    type: "isian",
    category: "Huruf",
    image: "/V.png",
    imageAlt: "Isyarat huruf V",
    question: "Tuliskan huruf yang sedang diisyaratkan pada gambar!",
    answer: "v",
    note: "Telunjuk dan jari tengah direnggangkan melintang ke atas membentuk huruf V.",
    time: 20,
  },
  {
    type: "isian",
    category: "Ekspresi",
    image: "/marah.png",
    imageAlt: "Ekspresi marah",
    question: "Tuliskan nama ekspresi yang ditunjukkan pada gambar!",
    answer: "marah",
    note: "Telapak terbuka digerakkan kuat ke bawah dengan alis mengerut — itulah marah.",
    time: 20,
  },
  {
    type: "benar-salah",
    category: "Angka",
    question: "Angka 7 dibentuk dengan ibu jari dan jari manis yang lurus ke bawah.",
    answer: true,
    note: "Benar! Angka 7 memang memakai ibu jari dan jari manis yang lurus ke bawah.",
  },
  {
    type: "benar-salah",
    category: "Huruf",
    question: "Huruf L dibentuk dengan melengkungkan seluruh jari membentuk lingkaran.",
    answer: false,
    note: "Salah. Huruf L dibentuk dengan telunjuk dan ibu jari terbuka tegak lurus membentuk sudut.",
  },
  {
    type: "benar-salah",
    category: "Ekspresi",
    question: "Ekspresi 'kaget' ditandai dengan alis yang terangkat tinggi dan mata terbuka lebar.",
    answer: true,
    note: "Benar! Alis naik dan mata membelalak adalah ciri khas kaget.",
  },
  {
    type: "teks",
    category: "Huruf",
    question: "Bentuk tangan huruf apa yang dibuat dengan telunjuk lurus ke atas dan ibu jari menyamping membentuk sudut?",
    options: ["Huruf T", "Huruf L", "Huruf V"],
    answerIndex: 1,
    note: "Luruskan telunjuk ke atas dan ibu jari ke samping — itulah bentuk huruf L.",
  },
  {
    type: "teks",
    category: "Angka",
    question: "Untuk mengisyaratkan angka 7, jari mana yang diluruskan bersama ibu jari?",
    options: ["Jari manis", "Jari tengah", "Kelingking"],
    answerIndex: 0,
    note: "Angka 7 dibentuk dengan ibu jari dan jari manis yang lurus ke bawah.",
  },
  {
    type: "teks",
    category: "Salam",
    question: "Gerakan isyarat 'Terima kasih' diawali dari posisi mana?",
    options: [
      "Telapak terbuka di dekat dagu, lalu digerakkan ke depan",
      "Telunjuk menunjuk ke dada",
      "Kedua tangan mengepal di depan dada",
    ],
    answerIndex: 0,
    note: "Telapak di dekat dagu lalu menjauh ke depan seperti melepas ciuman.",
  },
  {
    type: "teks",
    category: "Ekspresi",
    question: "Dalam bahasa isyarat, ekspresi wajah berfungsi sebagai?",
    options: ["Hiasan saja", "Nada bicara dan intonasi", "Pengganti kata benda"],
    answerIndex: 1,
    note: "Wajah membawa intonasi — gerakan tangan membawa kata.",
  },
  {
    type: "teks",
    category: "Salam",
    question: "Saat memberi salam dalam isyarat, hal paling penting adalah?",
    options: ["Bergerak secepat mungkin", "Menatap lawan bicara dan tersenyum", "Menutup mata"],
    answerIndex: 1,
    note: "Kontak mata dan senyum adalah bentuk penghormatan dalam berkomunikasi.",
  },
  {
    type: "teks",
    category: "Angka",
    question: "Isyarat angka 25 dibentuk dengan cara?",
    options: ["Lima lalu dua", "Dua lalu lima", "Lima belas lalu sepuluh"],
    answerIndex: 1,
    note: "Bilangan besar digabungkan dari digit penyusunnya secara berurutan: dua lalu lima.",
  },
  {
    type: "teks",
    category: "Ekspresi",
    question: "Ekspresi 'kaget' dalam isyarat ditandai dengan?",
    options: ["Alis turun dan bibir mengerucut", "Alis terangkat dan mata terbuka lebar", "Kepala menunduk"],
    answerIndex: 1,
    note: "Kaget dibawa oleh alis yang naik, mata membelalak, dan mulut sedikit terbuka.",
  },
  {
    type: "teks",
    category: "Huruf",
    question: "Huruf C dalam alfabet BISINDO dibentuk dengan?",
    options: ["Empat jari mengepal", "Empat jari rapat dan tegak", "Jari-jari melengkung membentuk huruf C"],
    answerIndex: 2,
    note: "Lengkungkan jari bersama ibu jari persis seperti bentuk huruf C.",
  },
  {
    type: "teks",
    category: "Salam",
    question: "Salam 'Selamat Malam' diisyaratkan dengan gerakan?",
    options: [
      "Kedua tangan membentuk atap di atas kepala lalu diturunkan",
      "Telunjuk menunjuk ke tanah",
      "Telapak digerakkan ke samping",
    ],
    answerIndex: 0,
    note: "Atap segitiga di atas kepala melambangkan malam, lalu diturunkan perlahan.",
  },
  {
    type: "teks",
    category: "Salam",
    question: "Hal pertama yang dilakukan untuk membuka percakapan yang baik adalah?",
    options: ["Langsung bertanya hal pribadi", "Memberi salam hangat", "Berpaling dari lawan bicara"],
    answerIndex: 1,
    note: "Percakapan yang hangat selalu dimulai dari salam yang tulus.",
  },
]

const categoryStyles: Record<Category, string> = {
  Huruf: "bg-mint text-mint-deep",
  Angka: "bg-coral-light text-[#cf6f95]",
  Ekspresi: "bg-peach text-primary",
  Salam: "bg-primary/10 text-primary",
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
  }
  return a
}

function seededShuffle<T>(arr: T[], seed: number): T[] {
  const a = [...arr]
  let s = seed
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280
    const j = Math.floor((s / 233280) * (i + 1))
    const tmp = a[i]
    a[i] = a[j]
    a[j] = tmp
  }
  return a
}

const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, " ")

function getResult(score: number, total: number, livesLeft: number) {
  if (livesLeft <= 0)
    return {
      emoji: "💔",
      title: "Nyawa Habis!",
      message: `Kamu menjawab ${score} soal benar sebelum kehabisan nyawa. Perhatikan waktunya dan coba lagi!`,
    }
  const pct = score / total
  if (pct === 1)
    return {
      emoji: "🏆",
      title: "Sempurna! Semua Benar",
      message: "Skor penuh dengan nyawa aman. Kamu benar-benar menguasai isyarat dasar!",
    }
  if (pct >= 0.8)
    return {
      emoji: "🥇",
      title: "Hebat!",
      message: `Kamu menjawab ${score} dari ${total} soal dengan benar. Tinggal sedikit lagi untuk sempurna!`,
    }
  if (pct >= 0.5)
    return {
      emoji: "💪",
      title: "Bagus, Terus Berlatih!",
      message: "Kamu sudah mengenal banyak isyarat. Ulangi materi yang masih keliru lalu coba lagi.",
    }
  return {
    emoji: "🌱",
    title: "Jangan Menyerah!",
    message: "Pelajari kembali huruf, angka, dan ekspresi di materi, lalu kembali ke kuis ini.",
  }
}

const MODE_OPTIONS: { id: Mode; title: string; description: string; icon: LucideIcon }[] = [
  { id: "semua", title: "Campuran", description: "Semua kategori diacak jadi satu ronde yang seru.", icon: Layers },
  { id: "Huruf", title: "Huruf & Alfabet", description: "Tebak bentuk isyarat huruf alfabet BISINDO.", icon: LetterText },
  { id: "Angka", title: "Angka & Bilangan", description: "Kenali isyarat angka dan pola bilangannya.", icon: Hash },
  { id: "Ekspresi", title: "Ekspresi Dasar", description: "Tebak perasaan dari ekspresi wajah.", icon: Smile },
  { id: "Salam", title: "Salam Sehari-hari", description: "Isyarat sapaan, terima kasih, dan basa-basi.", icon: Hand },
]

const MODE_ACCENTS: Record<Mode, string> = {
  semua: "bg-mint text-mint-deep",
  Huruf: "bg-mint text-mint-deep",
  Angka: "bg-coral-light text-[#cf6f95]",
  Ekspresi: "bg-peach text-primary",
  Salam: "bg-primary/10 text-primary",
}

function ModeSelector({ onSelect }: { onSelect: (mode: Mode) => void }) {
  const countFor = (m: Mode) =>
    m === "semua" ? questions.length : questions.filter((qq) => qq.category === m).length

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
      <div className="mb-6 text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-coral-light px-4 py-1.5 text-sm font-bold text-[#cf6f95]">
          <BrainCircuit className="size-4" aria-hidden="true" />
          Pilih Quiz
        </span>
        <h3 className="mt-3 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          Mau Quiz Apa Hari Ini?
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Pilih kategori yang ingin kamu latih. Tiap mode punya nyawa, timer, dan soal yang diacak ulang.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {MODE_OPTIONS.map((m, i) => {
          const accent = MODE_ACCENTS[m.id]
          const count = countFor(m.id)
          return (
            <motion.button
              key={m.id}
              type="button"
              onClick={() => onSelect(m.id)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border bg-card p-6 text-left shadow-md shadow-black/8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span
                  className={cn(
                    "flex size-12 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
                    accent
                  )}
                >
                  <m.icon className="size-6" strokeWidth={2} />
                </span>
                <span className={cn("rounded-full px-3 py-1 text-xs font-bold", accent)}>{count} soal</span>
              </div>
              <h4 className="mt-4 text-lg font-bold text-foreground">{m.title}</h4>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                Mulai Quiz <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </motion.button>
          )
        })}
      </div>
    </motion.div>
  )
}

export function InteractiveQuiz() {
  const [mode, setMode] = useState<Mode | null>(null)
  const [round, setRound] = useState(0)
  const [current, setCurrent] = useState(0)
  const [phase, setPhase] = useState<Phase>("answering")
  const [selected, setSelected] = useState<number | null>(null)
  const [typed, setTyped] = useState("")
  const [resultCorrect, setResultCorrect] = useState(false)
  const [score, setScore] = useState(0)
  const [lives, setLives] = useState(MAX_LIVES)
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)
  const [finished, setFinished] = useState(false)
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME)

  const deck = useMemo(
    () =>
      seededShuffle(
        mode === null || mode === "semua" ? questions : questions.filter((qq) => qq.category === mode),
        round
      ).map((q) => {
        if (q.type === "teks" || q.type === "gambar-ke-teks") {
          const options = shuffle(q.options)
          return { ...q, options, answerIndex: options.indexOf(q.options[q.answerIndex]) }
        }
        if (q.type === "teks-ke-gambar") {
          const imageOptions = shuffle(q.imageOptions)
          return { ...q, imageOptions, answerIndex: imageOptions.indexOf(q.imageOptions[q.answerIndex]) }
        }
        return q
      }),
    [mode, round]
  )

  const q = deck[current]
  const totalTime = q.time ?? DEFAULT_TIME
  const answered = phase !== "answering"
  const correct = answered && resultCorrect
  const result = getResult(score, deck.length, lives)

  useEffect(() => {
    if (finished) return
    setTimeLeft(deck[current].time ?? DEFAULT_TIME)
    setPhase("answering")
  }, [current, round, finished, deck])

  useEffect(() => {
    if (finished || mode === null || phase !== "answering") return
    const id = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0))
    }, 1000)
    return () => clearInterval(id)
  }, [current, round, phase, finished, mode])

  useEffect(() => {
    if (mode === null || phase !== "answering" || timeLeft !== 0) return
    setResultCorrect(false)
    setPhase("timeout")
    setLives((l) => l - 1)
    setStreak(0)
  }, [timeLeft, phase, mode])

  useEffect(() => {
    if (lives <= 0 && !finished) setFinished(true)
  }, [lives, finished])

  const getAnswerIndex = (): number => {
    if (q.type === "benar-salah") return q.answer ? 0 : 1
    if (q.type === "isian") return -1
    return q.answerIndex
  }

  const getCorrectAnswerLabel = (question: Question): string => {
    if (question.type === "isian") return question.answer.toUpperCase()
    if (question.type === "benar-salah") return question.answer ? "Benar" : "Salah"
    if (question.type === "teks" || question.type === "gambar-ke-teks")
      return question.options[question.answerIndex]
    return "lihat gambar yang ditandai"
  }

  const settle = (isCorrect: boolean) => {
    setResultCorrect(isCorrect)
    setPhase("feedback")
    if (isCorrect) {
      setScore((s) => s + 1)
      setStreak((s) => {
        const next = s + 1
        setBestStreak((b) => Math.max(b, next))
        return next
      })
    } else {
      setLives((l) => l - 1)
      setStreak(0)
    }
  }

  const handlePick = (index: number) => {
    if (phase !== "answering") return
    setSelected(index)
    settle(index === getAnswerIndex())
  }

  const handleSubmitTyped = () => {
    if (phase !== "answering" || !typed.trim() || q.type !== "isian") return
    settle(normalize(typed) === q.answer)
  }

  const handleNext = () => {
    if (current + 1 >= deck.length) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setTyped("")
    }
  }

  const handleRestart = () => {
    setRound((r) => r + 1)
    setCurrent(0)
    setPhase("answering")
    setSelected(null)
    setTyped("")
    setResultCorrect(false)
    setScore(0)
    setLives(MAX_LIVES)
    setStreak(0)
    setBestStreak(0)
    setFinished(false)
    setTimeLeft(DEFAULT_TIME)
  }

  const handleSelectMode = (m: Mode) => {
    setMode(m)
    setRound((r) => r + 1)
    setCurrent(0)
    setPhase("answering")
    setSelected(null)
    setTyped("")
    setResultCorrect(false)
    setScore(0)
    setLives(MAX_LIVES)
    setStreak(0)
    setBestStreak(0)
    setFinished(false)
    setTimeLeft(DEFAULT_TIME)
  }

  const handleChangeMode = () => {
    setMode(null)
    setFinished(false)
    setPhase("answering")
  }

  const optionBase =
    "flex items-center justify-center gap-2 rounded-2xl border px-4 py-4 text-base font-semibold transition-all duration-300 cursor-pointer"
  const optionIdle =
    "border-border bg-background text-foreground hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
  const optionCorrect = "border-mint-deep/60 bg-mint/20 text-mint-deep"
  const optionWrong = "border-destructive/60 bg-destructive/10 text-destructive"
  const optionDim = "border-border bg-muted/30 text-muted-foreground opacity-50"

  const renderTextOption = (option: string, index: number, answerIndex: number) => {
    const isAnswer = index === answerIndex
    const isSelected = selected === index
    return (
      <motion.button
        key={option}
        type="button"
        onClick={() => handlePick(index)}
        disabled={answered}
        initial={false}
        animate={answered && isSelected && !isAnswer ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
        transition={{ duration: 0.35 }}
        className={cn(
          optionBase,
          !answered && optionIdle,
          answered && isAnswer && optionCorrect,
          answered && isSelected && !isAnswer && optionWrong,
          answered && !isSelected && !isAnswer && optionDim
        )}
      >
        {answered && isAnswer && <Check className="size-4.5 shrink-0" aria-hidden="true" />}
        {answered && isSelected && !isAnswer && <CircleX className="size-4.5 shrink-0" aria-hidden="true" />}
        {option}
      </motion.button>
    )
  }

  const renderImageOption = (opt: { src: string; alt: string }, index: number, answerIndex: number) => {
    const isAnswer = index === answerIndex
    const isSelected = selected === index
    return (
      <motion.button
        key={opt.src}
        type="button"
        onClick={() => handlePick(index)}
        disabled={answered}
        initial={false}
        animate={answered && isSelected && !isAnswer ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
        transition={{ duration: 0.35 }}
        className={cn(
          "relative aspect-square w-full overflow-hidden rounded-2xl border bg-muted/20 transition-all duration-300 cursor-pointer",
          !answered && "border-border hover:-translate-y-1 hover:border-primary/40 hover:shadow-md",
          answered && isAnswer && "border-4 border-mint-deep/70 bg-mint/15",
          answered && isSelected && !isAnswer && "border-4 border-destructive/70 bg-destructive/5",
          answered && !isSelected && !isAnswer && "border-border opacity-40"
        )}
      >
        <Image src={opt.src} alt={opt.alt} fill className="object-contain p-2" />
        {answered && (
          <span
            className={cn(
              "absolute top-2 right-2 flex size-6 items-center justify-center rounded-full shadow",
              isAnswer ? "bg-mint-deep text-white" : "bg-destructive text-white"
            )}
          >
            {isAnswer ? <Check className="size-3.5" aria-hidden="true" /> : <CircleX className="size-3.5" aria-hidden="true" />}
          </span>
        )}
      </motion.button>
    )
  }

  return (
    <div className="pt-8 sm:pt-10">
      {mode === null ? (
        <ModeSelector onSelect={handleSelectMode} />
      ) : (
        <>
      <AnimatePresence mode="wait">
        {finished ? (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mx-auto max-w-xl">
              <div className="relative overflow-hidden rounded-3xl border bg-card p-8 text-center shadow-md shadow-black/8 sm:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-mint/20 via-transparent to-coral-light/40"
                />
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0, rotate: -12 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.15 }}
                    className="mx-auto flex size-24 items-center justify-center rounded-3xl bg-primary/10 text-6xl"
                  >
                    <span className="drop-shadow-sm">{result.emoji}</span>
                  </motion.div>

                  <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                    Skor Akhir
                  </p>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="mt-1 text-5xl font-black tracking-tight text-foreground"
                  >
                    {score}
                    <span className="text-2xl font-bold text-muted-foreground"> / {deck.length}</span>
                  </motion.p>

                  <div className="mx-auto mt-5 h-2.5 w-full max-w-xs overflow-hidden rounded-full bg-muted">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(score / deck.length) * 100}%` }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                      className={cn(
                        "h-full rounded-full",
                        score / deck.length >= 0.8 ? "bg-mint-deep" : score / deck.length >= 0.5 ? "bg-[#f08aa8]" : "bg-destructive"
                      )}
                    />
                  </div>

                  <div className="mt-6 flex items-center justify-center gap-3">
                    <div className="flex items-center gap-1.5 rounded-full bg-mint/40 px-3.5 py-1.5 text-sm font-semibold text-mint-deep">
                      <Star className="size-4" aria-hidden="true" />
                      {score} benar
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-coral-light px-3.5 py-1.5 text-sm font-semibold text-[#cf6f95]">
                      <Heart className="size-4 fill-[#cf6f95]" aria-hidden="true" />
                      {lives} nyawa
                    </div>
                    {bestStreak > 1 && (
                      <div className="flex items-center gap-1.5 rounded-full bg-peach px-3.5 py-1.5 text-sm font-semibold text-primary">
                        <Flame className="size-4" aria-hidden="true" />
                        {bestStreak}x beruntun
                      </div>
                    )}
                  </div>

                  <h3 className="mt-6 text-2xl font-bold tracking-tight text-balance text-foreground">
                    {result.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{result.message}</p>

                  <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleRestart}
                      className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg cursor-pointer"
                    >
                      <RotateCcw className="size-4" aria-hidden="true" />
                      Main Lagi (Soal Diacak Ulang)
                    </button>
                    <button
                      type="button"
                      onClick={handleChangeMode}
                      className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-semibold text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary cursor-pointer"
                    >
                      <Layers className="size-4" aria-hidden="true" />
                      Ganti Kategori
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={`${round}-${current}`}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <BrainCircuit className="size-4 text-primary" aria-hidden="true" />
                <span>
                  Soal <span className="font-bold text-foreground">{current + 1}</span> dari {deck.length}
                </span>
                <span
                  className={cn(
                    "ml-1 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-bold",
                    categoryStyles[q.category]
                  )}
                >
                  {q.category}
                </span>
                <button
                  type="button"
                  onClick={handleChangeMode}
                  className="inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary cursor-pointer"
                >
                  <Layers className="size-3.5" aria-hidden="true" />
                  Ubah
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                    timeLeft <= 5 && phase === "answering"
                      ? "bg-destructive/15 text-destructive animate-pulse"
                      : "bg-muted/70 text-muted-foreground"
                  )}
                >
                  <Clock3 className="size-3.5" aria-hidden="true" />
                  {timeLeft}s
                </div>
                <div className="flex items-center gap-1 px-1">
                  {Array.from({ length: MAX_LIVES }).map((_, i) => (
                    <Heart
                      key={i}
                      className={cn(
                        "size-4.5 transition-all duration-300",
                        i < lives ? "scale-100 fill-destructive text-destructive" : "scale-90 fill-muted text-muted"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-mint/40 px-3 py-1 text-xs font-semibold text-mint-deep">
                  <Star className="size-3.5" aria-hidden="true" />
                  {score}
                </div>
                <div
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-300",
                    bestStreak > 1 ? "bg-coral-light text-[#cf6f95]" : "bg-muted/60 text-muted-foreground"
                  )}
                >
                  <Flame className="size-3.5" aria-hidden="true" />
                  {streak}
                </div>
              </div>
            </div>

            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className={cn(
                  "h-full rounded-full",
                  timeLeft <= 5 && phase === "answering"
                    ? "bg-destructive"
                    : "bg-gradient-to-r from-mint-deep via-primary to-[#f08aa8]"
                )}
                initial={false}
                animate={{ width: `${(timeLeft / totalTime) * 100}%` }}
                transition={{ duration: 1, ease: "linear" }}
              />
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border bg-card shadow-md shadow-black/8">
              <div className="p-6 sm:p-8">
                <div className="grid gap-6 lg:grid-cols-5">
                  {(q.type === "gambar-ke-teks" || q.type === "isian") && (
                    <div className="lg:col-span-2">
                      <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border bg-muted/30">
                        <Image
                          src={q.image}
                          alt={q.imageAlt}
                          fill
                          priority={current === 0}
                          className="object-contain p-3"
                        />
                      </div>
                    </div>
                  )}

                  <div
                    className={cn(
                      "lg:col-span-3",
                      (q.type === "benar-salah" || q.type === "teks") && "lg:col-span-5"
                    )}
                  >
                    <p className="text-lg font-bold tracking-tight text-foreground sm:text-xl">{q.question}</p>

                    {q.type === "teks-ke-gambar" && (
                      <div className="mt-5 grid gap-4 sm:grid-cols-3">
                        {q.imageOptions.map((opt, i) => renderImageOption(opt, i, q.answerIndex))}
                      </div>
                    )}

                    {q.type === "gambar-ke-teks" && (
                      <div className="mt-5 grid gap-3 sm:grid-cols-3">
                        {q.options.map((opt, i) => renderTextOption(opt, i, q.answerIndex))}
                      </div>
                    )}

                    {q.type === "teks" && (
                      <div className="mt-5 grid gap-3">
                        {q.options.map((opt, i) => renderTextOption(opt, i, q.answerIndex))}
                      </div>
                    )}

                    {q.type === "benar-salah" && (
                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        {renderTextOption("Benar", 0, q.answer ? 0 : 1)}
                        {renderTextOption("Salah", 1, q.answer ? 0 : 1)}
                      </div>
                    )}

                    {q.type === "isian" && (
                      <div className="mt-5">
                        <div className="flex items-center gap-3">
                          <div className="relative flex-1">
                            <Keyboard className="pointer-events-none absolute top-1/2 left-4 size-5 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                            <input
                              type="text"
                              value={typed}
                              onChange={(e) => setTyped(e.target.value)}
                              onKeyDown={(e) => {
                                if (e.key === "Enter") handleSubmitTyped()
                              }}
                              disabled={answered}
                              placeholder={q.category === "Ekspresi" ? "contoh: marah" : "ketik jawabanmu..."}
                              className="w-full rounded-2xl border bg-background py-3.5 pl-12 pr-4 text-base font-semibold transition-all duration-200 placeholder:font-normal placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/10 sm:text-lg"
                            />
                          </div>
                          {!answered && (
                            <button
                              type="button"
                              onClick={handleSubmitTyped}
                              disabled={!typed.trim()}
                              className="inline-flex items-center gap-2 rounded-2xl bg-primary px-4 py-3.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all duration-200 hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
                            >
                              <Send className="size-4" aria-hidden="true" />
                              <span className="hidden sm:inline">Jawab</span>
                            </button>
                          )}
                        </div>
                        {q.type === "isian" && (
                          <p className="mt-2 text-xs text-muted-foreground">
                            Tekan Enter setelah mengetik jawabanmu.
                          </p>
                        )}
                      </div>
                    )}

                    <AnimatePresence>
                      {answered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div
                            className={cn(
                              "mt-5 overflow-hidden rounded-2xl border px-5 py-4",
                              correct ? "border-mint-deep/40 bg-mint/10" : "border-destructive/30 bg-destructive/5"
                            )}
                          >
                            <p className={cn("text-sm font-bold", correct ? "text-mint-deep" : "text-destructive")}>
                              {phase === "timeout" ? (
                                <>
                                  Waktu habis!{" "}
                                  <span className="font-medium text-muted-foreground">Jawaban yang benar:</span>{" "}
                                  <span className="font-bold text-foreground">{getCorrectAnswerLabel(q)}</span>
                                </>
                              ) : correct ? (
                                <>
                                  Benar! <span className="font-medium text-muted-foreground">Jawabanmu tepat.</span>
                                </>
                              ) : (
                                <>
                                  Belum tepat.{" "}
                                  <span className="font-medium text-muted-foreground">Jawaban yang benar:</span>{" "}
                                  <span className="font-bold text-foreground">{getCorrectAnswerLabel(q)}</span>
                                </>
                              )}
                            </p>
                            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">💡 {q.note}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {answered && (
                      <button
                        type="button"
                        onClick={handleNext}
                        className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg cursor-pointer"
                      >
                        {current + 1 >= deck.length ? (
                          <>
                            <Trophy className="size-4" aria-hidden="true" />
                            Lihat Hasil
                          </>
                        ) : (
                          <>
                            Soal Berikutnya
                            <ChevronRight className="size-4" aria-hidden="true" />
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!finished && (
        <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <Sparkles className="size-4 text-primary/70" aria-hidden="true" />
          Soal dan pilihan jawaban diacak setiap ronde. Jawab sebelum waktu habis — salah jawab atau kehabisan waktu
          mengurangi nyawamu.
        </p>
      )}

      {!finished && (
        <p className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <TimerReset className="size-4 text-primary/70" aria-hidden="true" />
          Skor terbaik tidak tersimpan otomatis — tantang dirimu untuk mengalahkan rekor sebelumnya!
        </p>
      )}
        </>
      )}
    </div>
  )
}
