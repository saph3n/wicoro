import { MessagesSquare, MessageCircle, User, Users } from "lucide-react"

import { Container } from "@/components/common/container"
import { LessonHero } from "@/components/belajar/lesson-hero"
import { LessonNav } from "@/components/belajar/lesson-nav"
import { LessonSection } from "@/components/belajar/lesson-section"
import { SignCard } from "@/components/belajar/sign-card"
import { TipCard } from "@/components/belajar/tip-card"

const vocab = [
  { sign: "Saya", name: "Saya", description: "Telunjuk menunjuk ke arah dada sendiri." },
  { sign: "Kamu", name: "Kamu", description: "Telunjuk menunjuk ke arah lawan bicara." },
  { sign: "Nama", name: "Nama", description: "Telunjuk dan jari tengah menyilang di depan dada, lalu diputar sedikit." },
  { sign: "Siapa", name: "Siapa", description: "Telunjuk digerakkan kecil ke samping di depan wajah sambil menaikkan alis sebagai tanda tanya." },
  { sign: "Senang", name: "Senang", description: "Telapak terbuka menempel di dada, digerakkan naik di depan wajah sambil tersenyum." },
  { sign: "Kenal", name: "Kenalan", description: "Kedua telunjuk saling mendekat di depan dada, seperti dua orang yang baru bertemu." },
  { sign: "Dari", name: "Dari", description: "Telunjuk menunjuk ke belakang bahu, lalu digerakkan ke depan — menandakan titik asal." },
  { sign: "Sampai", name: "Sampai / Jumpa", description: "Telunjuk menunjuk ke depan, lalu digerakkan turun seperti isyarat berakhir atau bertemu." },
]

const dialog1 = [
  { who: "Saya", line: "Halo! Saya Rina. Siapa nama kamu?" },
  { who: "Kamu", line: "Halo Rina, saya Budi. Senang bertemu kamu." },
  { who: "Saya", line: "Senang bertemu kamu juga, Budi. Kamu dari mana?" },
  { who: "Kamu", line: "Saya dari Bandung. Kalau kamu?" },
  { who: "Saya", line: "Saya dari Jakarta. Sampai jumpa, Budi!" },
  { who: "Kamu", line: "Sampai jumpa, Rina!" },
]

const dialog2 = [
  { who: "Saya", line: "Permisi, apa kabar?" },
  { who: "Kamu", line: "Kabar baik! Kamu?" },
  { who: "Saya", line: "Baik juga. Senang sekali bisa bertemu hari ini." },
  { who: "Kamu", line: "Saya juga senang. Sampai jumpa lagi ya!" },
]

const accents = ["mint", "coral", "peach"] as const

function DialogCard({
  title,
  subtitle,
          lines,
        }: {
  title: string
  subtitle: string
  lines: { who: string; line: string }[]
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border bg-card p-7 shadow-md shadow-black/8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="pointer-events-none absolute -top-10 -right-10 size-28 rounded-full bg-mint/25 blur-2xl" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-mint text-mint-deep">
            <MessageCircle className="size-5" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-xs font-medium text-muted-foreground">{subtitle}</p>
          </div>
        </div>

        <ol className="mt-5 space-y-3">
          {lines.map((item, i) => (
            <li key={i} className="flex gap-3">
              <span
                className={`mt-0.5 inline-flex h-6 shrink-0 items-center rounded-full px-2.5 text-xs font-bold ${
                  item.who === "Saya" ? "bg-coral-light text-[#cf6f95]" : "bg-mint text-mint-deep"
                }`}
              >
                {item.who}
              </span>
              <span className="text-sm leading-relaxed text-muted-foreground">{item.line}</span>
            </li>
          ))}
        </ol>

        <p className="mt-5 rounded-2xl bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-900/80 border border-amber-200/60">
          💡 Berlatih bersama teman: salah satu menjadi &quot;Saya&quot; dan yang lain menjadi &quot;Kamu&quot;, lalu bertukar peran.
        </p>
      </div>
    </div>
  )
}

export default function Materi5() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Container>
        <LessonHero
          index="5"
          title="Percakapan"
          description="Waktunya merangkai semua yang sudah kamu pelajari menjadi percakapan nyata. Latih perkenalan, tanya jawab, dan cara berpamitan dalam BISINDO."
          icon={MessagesSquare}
        />

        <LessonSection
          eyebrow="Kosakata"
          title="Kosakata Pendukung Percakapan"
          description="Beberapa kata kunci yang paling sering muncul saat berbicara dengan orang baru."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vocab.map((item, index) => (
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

        <LessonSection
          eyebrow="Praktik"
          title="Contoh Percakapan Sederhana"
          description="Perhatikan alurnya: selalu diawali salam, lalu tanya kabar atau perkenalan, dan ditutup dengan salam perpisahan."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <DialogCard
              title="Perkenalan Diri"
              subtitle="Berlatih menyebut nama dan asal"
              lines={dialog1}
            />
            <DialogCard
              title="Tanya Kabar & Berpamitan"
              subtitle="Menutup percakapan dengan hangat"
              lines={dialog2}
            />
          </div>
        </LessonSection>

        <LessonSection
          eyebrow="Tips"
          title="Rahasia Percakapan yang Lancar"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <TipCard
              icon={Users}
              title="Latihan dengan pasangan"
              description="Bahasa isyarat baru terasa hidup saat dipakai bercakap. Cari teman untuk berlatih dialog secara bergantian."
            />
            <TipCard
              icon={User}
              title="Tidak perlu takut salah"
              description="Salah isyarat itu wajar. Minta lawan bicara mengulang atau perbaiki, dan jadikan sebagai bagian dari belajar."
            />
            <TipCard
              icon={MessageCircle}
              title="Baca ekspresi lawan bicara"
              description="Perhatikan wajahnya untuk tahu apakah pesanmu diterima. Anggukan dan senyum adalah umpan balik terbaik."
            />
          </div>
        </LessonSection>

        <LessonNav current={4} />
      </Container>
    </div>
  )
}
