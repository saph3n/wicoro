import { BrainCircuit, CircleCheck, CircleX, RotateCcw, Trophy } from "lucide-react"

import { Container } from "@/components/common/container"
import { LessonHero } from "@/components/belajar/lesson-hero"
import { LessonNav } from "@/components/belajar/lesson-nav"
import { LessonSection } from "@/components/belajar/lesson-section"
import { SignCard } from "@/components/belajar/sign-card"
import { TipCard } from "@/components/belajar/tip-card"

const questions = [
  {
    question: "Bentuk tangan huruf apa yang dibuat dengan telunjuk lurus ke atas dan ibu jari menyamping membentuk sudut?",
    options: ["Huruf T", "Huruf L", "Huruf V"],
    answer: 1,
    note: "Luruskan telunjuk ke atas dan ibu jari ke samping — itulah bentuk huruf L.",
  },
  {
    question: "Untuk mengisyaratkan angka 7, jari mana yang diluruskan bersama ibu jari?",
    options: ["Jari manis", "Jari tengah", "Kelingking"],
    answer: 0,
    note: "Angka 7 dibentuk dengan ibu jari dan jari manis yang lurus ke bawah.",
  },
  {
    question: "Gerakan isyarat 'Terima kasih' diawali dari posisi mana?",
    options: [
      "Telapak terbuka di dekat dagu, lalu digerakkan ke depan",
      "Telunjuk menunjuk ke dada",
      "Kedua tangan mengepal di depan dada",
    ],
    answer: 0,
    note: "Telapak di dekat dagu lalu menjauh ke depan seperti melepas ciuman.",
  },
  {
    question: "Dalam bahasa isyarat, ekspresi wajah berfungsi sebagai?",
    options: ["Hiasan saja", "Nada bicara dan intonasi", "Pengganti kata benda"],
    answer: 1,
    note: "Wajah membawa intonasi — gerakan tangan membawa kata.",
  },
  {
    question: "Saat memberi salam dalam isyarat, hal paling penting adalah?",
    options: [
      "Bergerak secepat mungkin",
      "Menatap lawan bicara dan tersenyum",
      "Menutup mata",
    ],
    answer: 1,
    note: "Kontak mata dan senyum adalah bentuk penghormatan dalam berkomunikasi.",
  },
  {
    question: "Isyarat angka 25 dibentuk dengan cara?",
    options: [
      "Lima lalu dua",
      "Dua lalu lima",
      "Lima belas lalu sepuluh",
    ],
    answer: 1,
    note: "Bilangan besar digabungkan dari digit penyusunnya secara berurutan: dua lalu lima.",
  },
  {
    question: "Ekspresi 'kaget' dalam isyarat ditandai dengan?",
    options: [
      "Alis turun dan bibir mengerucut",
      "Alis terangkat dan mata terbuka lebar",
      "Kepala menunduk",
    ],
    answer: 1,
    note: "Kaget dibawa oleh alis yang naik, mata membelalak, dan mulut sedikit terbuka.",
  },
  {
    question: "Huruf C dalam alfabet BISINDO dibentuk dengan?",
    options: [
      "Empat jari mengepal",
      "Empat jari rapat dan tegak",
      "Jari-jari melengkung membentuk huruf C",
    ],
    answer: 2,
    note: "Lengkungkan jari bersama ibu jari persis seperti bentuk huruf C.",
  },
  {
    question: "Salam 'Selamat Malam' diisyaratkan dengan gerakan?",
    options: [
      "Kedua tangan membentuk atap di atas kepala lalu diturunkan",
      "Telunjuk menunjuk ke tanah",
      "Telapak digerakkan ke samping",
    ],
    answer: 0,
    note: "Atap segitiga di atas kepala melambangkan malam, lalu diturunkan perlahan.",
  },
  {
    question: "Hal pertama yang dilakukan untuk membuka percakapan yang baik adalah?",
    options: [
      "Langsung bertanya hal pribadi",
      "Memberi salam hangat",
      "Berpaling dari lawan bicara",
    ],
    answer: 1,
    note: "Percakapan yang hangat selalu dimulai dari salam yang tulus.",
  },
]

const accents = ["mint", "coral", "peach"] as const

function QuizCard({ index, q }: { index: number; q: (typeof questions)[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border bg-card p-7 shadow-md shadow-black/8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="pointer-events-none absolute -top-10 -right-10 size-28 rounded-full bg-mint/25 blur-2xl" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-mint text-mint-deep font-bold">
            {index + 1}
          </span>
          <p className="text-lg font-semibold">{q.question}</p>
        </div>

        <div className="mt-5 space-y-2.5">
          {q.options.map((option, i) => {
            const isAnswer = i === q.answer
            return (
              <div
                key={option}
                className={`flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm transition-all duration-300 ${
                  isAnswer
                    ? "border-mint-deep/50 bg-mint/15 font-semibold text-mint-deep"
                    : "border-border text-muted-foreground"
                }`}
              >
                {isAnswer ? (
                  <CircleCheck className="size-4.5 shrink-0" aria-hidden="true" />
                ) : (
                  <CircleX className="size-4.5 shrink-0 opacity-40" aria-hidden="true" />
                )}
                {option}
                {isAnswer && (
                  <span className="ml-auto inline-flex rounded-full bg-mint-deep/20 px-2.5 py-0.5 text-xs font-bold">
                    Jawaban
                  </span>
                )}
              </div>
            )
          })}
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">💡 {q.note}</p>
      </div>
    </div>
  )
}

export default function Materi6() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Container>
        <LessonHero
          index="6"
          title="Kuis Interaktif"
          description="Uji pemahamanmu dengan sepuluh soal dari seluruh materi. Pilih jawaban, cocokkan dengan kunci, dan lihat seberapa jauh kemampuan isyaratmu berkembang."
          icon={BrainCircuit}
        />

        <LessonSection
          eyebrow="Aturan Main"
          title="Cara Mengerjakan"
          description="Baca soal, tentukan jawabanmu, lalu cocokkan dengan pilihan bertanda 'Jawaban'. Targetkan minimal 8 dari 10 benar sebelum lanjut berlatih."
        >
          <div className="grid gap-5 sm:grid-cols-3">
            <TipCard
              icon={BrainCircuit}
              title="Kerjakan tanpa melihat kunci"
              description="Jawab dulu dari ingatan, baru buka pembahasannya. Itu cara paling efektif menguji pemahamanmu."
            />
            <TipCard
              icon={RotateCcw}
              title="Ulangi sampai lancar"
              description="Kurang dari 8 benar? Tenang, ulangi lagi sampai semua soal terasa mudah."
            />
            <TipCard
              icon={Trophy}
              title="Raih skor sempurna"
              description="10 benar berarti kamu siap lanjut ke percakapan dan praktik nyata. Selamat!"
            />
          </div>
        </LessonSection>

        <LessonSection
          eyebrow="Soal"
          title="10 Soal Latihan"
          description="Setiap soal memiliki satu jawaban benar dan pembahasan singkat di bagian bawah."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {questions.map((q, index) => (
              <QuizCard key={q.question} index={index} q={q} />
            ))}
          </div>
        </LessonSection>

        <LessonSection
          eyebrow="Evaluasi"
          title="Hasil Belajarmu"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { sign: "8–10", name: "Hebat!", description: "Pemahamanmu sudah kuat. Lanjutkan ke percakapan dan praktik nyata bersama teman." },
              { sign: "5–7", name: "Bagus, terus berlatih", description: "Sudah mengenal banyak isyarat. Ulangi materi yang masih keliru lalu coba lagi." },
              { sign: "0–4", name: "Mari ulang dari awal", description: "Tidak apa-apa! Pelajari kembali alfabet dan salam, lalu kembali ke kuis ini." },
            ].map((item, index) => (
              <SignCard
                key={item.name}
                sign={item.sign}
                name={item.name}
                description={item.description}
                accent={accents[index % accents.length]}
              />
            ))}
          </div>
        </LessonSection>

        <LessonNav current={5} />
      </Container>
    </div>
  )
}
