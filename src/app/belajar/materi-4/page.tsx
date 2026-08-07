import { Eye, MessageSquareQuote, Smile, SmilePlus } from "lucide-react"

import { Container } from "@/components/common/container"
import { LessonHero } from "@/components/belajar/lesson-hero"
import { LessonNav } from "@/components/belajar/lesson-nav"
import { LessonSection } from "@/components/belajar/lesson-section"
import { SignCard } from "@/components/belajar/sign-card"
import { TipCard } from "@/components/belajar/tip-card"

const expressions = [
  { sign: "Senang", name: "Senang", description: "Telapak terbuka menempel di dada, digerakkan naik di depan wajah sambil tersenyum lebar dan mata berbinar." },
  { sign: "Sedih", name: "Sedih", description: "Telunjuk menyentuh pipi di bawah mata sambil bibir mengerucut ke bawah dan alis turun." },
  { sign: "Marah", name: "Marah", description: "Telapak terbuka di depan wajah digerakkan kuat ke bawah, alis mengerut dan rahang mengeras." },
  { sign: "Takut", name: "Takut", description: "Kedua tangan mengepal di depan dada dengan jari sedikit gemetar, mata membelalak dan badan sedikit mundur." },
  { sign: "Kaget", name: "Kaget", description: "Telunjuk menunjuk ke depan sambil kedua alis terangkat tinggi dan mulut sedikit terbuka." },
  { sign: "Bingung", name: "Bingung", description: "Jari telunjuk dan tengah menekuk di depan wajah, kepala sedikit miring dengan ekspresi ragu." },
  { sign: "Malu", name: "Malu", description: "Telapak terbuka menutupi pipi, senyum kecil sambil memalingkan pandangan sebentar." },
  { sign: "Bosan", name: "Bosan", description: "Telapak terbuka menyangga dagu, pandangan sedikit kosong dengan bibir datar." },
  { sign: "Capek", name: "Capek", description: "Kedua tangan mengepal menyentuh bahu sambil menghela napas dan menurunkan bahu." },
  { sign: "Semangat", name: "Semangat", description: "Kedua tangan mengepal ditekuk di depan dada seperti pose penuh energi, wajah cerah dan mata menyala." },
  { sign: "Suka", name: "Suka", description: "Telapak terbuka menempel di dada lalu digerakkan ke depan sambil tersenyum tulus." },
  { sign: "Tidak\nsuka", name: "Tidak Suka", description: "Telapak terbuka digerakkan menjauh ke samping sambil muka mengerut, seperti menolak sesuatu." },
]

const accents = ["mint", "coral", "peach"] as const

export default function Materi4() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Container>
        <LessonHero
          index="4"
          title="Ekspresi Dasar"
          description="Dalam bahasa isyarat, wajah adalah alat bicara yang paling kuat. Kenali isyarat perasaan dasar sekaligus pelajari bagaimana ekspresi wajah mengubah makna."
          icon={Smile}
        />

        <LessonSection
          eyebrow="Ekspresi Wajah"
          title="Wajah Itu 'Nada Bicara'"
          description="Isyarat tangan menyampaikan kata, sedangkan ekspresi wajah menyampaikan intonasi. Ekspresi yang sama dengan gerakan tangan berbeda bisa mengubah seluruh makna kalimat."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {expressions.map((item, index) => (
              <SignCard
                key={item.name}
                sign={item.sign.replace("\n", " ")}
                name={item.name}
                description={item.description}
                accent={accents[index % accents.length]}
              />
            ))}
          </div>
        </LessonSection>

        <LessonSection
          eyebrow="Tips"
          title="Latihan Ekspresi yang Benar"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <TipCard
              icon={SmilePlus}
              title="Ekspresikan dengan seluruh wajah"
              description="Alis, mata, dan mulut bekerja sama. Jangan hanya mengandalkan senyum atau bibir mengerucut."
            />
            <TipCard
              icon={MessageSquareQuote}
              title="Latih dengan cermin"
              description="Rekam atau lihat diri sendiri di cermin. Bandingkan ekspresi marah, sedih, dan kaget hingga terlihat beda jelas."
            />
            <TipCard
              icon={Eye}
              title="Samakan dengan gerakan tangan"
              description="Ekspresi dan isyarat hadir bersamaan. Berlatih terpisah dulu boleh, lalu gabungkan dengan gerakan utuh."
            />
          </div>
        </LessonSection>

        <LessonNav current={3} />
      </Container>
    </div>
  )
}
