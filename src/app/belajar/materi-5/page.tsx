import { BrainCircuit, RotateCcw, Trophy } from "lucide-react"

import { Container } from "@/components/common/container"
import { LessonHero } from "@/components/belajar/lesson-hero"
import { InteractiveQuiz } from "@/components/belajar/interactive-quiz"
import { LessonNav } from "@/components/belajar/lesson-nav"
import { LessonSection } from "@/components/belajar/lesson-section"
import { SignCard } from "@/components/belajar/sign-card"
import { TipCard } from "@/components/belajar/tip-card"

const accents = ["mint", "coral", "peach"] as const

export default function Materi5() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Container>
        <LessonHero
          index="5"
          title="Kuis Interaktif"
          description="Sepuluh soal bergambar untuk menguji ingatanmu. Jawab satu per satu, dapatkan umpan balik langsung, dan lihat seberapa jauh kemampuan isyaratmu berkembang."
          icon={BrainCircuit}
        />

        <LessonSection
          eyebrow="Aturan Main"
          title="Cara Mengerjakan"
          description="Satu soal tampil setiap langkah dengan gambar isyarat nyata. Pilih jawabanmu, dapatkan umpan balik langsung, dan kejar skor terbaikmu."
        >
          <div className="grid gap-5 sm:grid-cols-3">
            <TipCard
              icon={BrainCircuit}
              title="Amati gambar dengan teliti"
              description="Perhatikan bentuk jari, arah telapak, dan ekspresi wajah sebelum memilih jawaban."
            />
            <TipCard
              icon={RotateCcw}
              title="Ulangi sampai lancar"
              description="Kurang dari 8 benar? Tenang, ulangi kuis sampai semua soal terasa mudah."
            />
            <TipCard
              icon={Trophy}
              title="Kejar skor sempurna"
              description="10 benar berarti kamu menguasai huruf, angka, dan ekspresi dasar. Selamat!"
            />
          </div>
        </LessonSection>

        <LessonSection
          eyebrow="Soal"
          title="Kuis Interaktif"
          description="Puluhan soal campuran dari seluruh materi: tebak gambar, pilih gambar, ketik jawaban, benar/salah, dan pertanyaan pengetahuan. Jawab satu per satu dan lihat skormu di akhir."
        >
          <InteractiveQuiz />
        </LessonSection>

        <LessonSection
          eyebrow="Evaluasi"
          title="Hasil Belajarmu"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { sign: "8–10", name: "Hebat!", description: "Pemahamanmu sudah kuat. Siap berlatih isyarat nyata bersama teman." },
              { sign: "5–7", name: "Bagus, terus berlatih", description: "Sudah mengenal banyak isyarat. Ulangi materi yang masih keliru lalu coba lagi." },
              { sign: "0–4", name: "Mari ulang dari awal", description: "Tidak apa-apa! Pelajari kembali huruf, angka, dan ekspresi, lalu kembali ke kuis ini." },
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

        <LessonNav current={4} />
      </Container>
    </div>
  )
}
