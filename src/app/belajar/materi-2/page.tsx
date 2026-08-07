import { Hash, Repeat, Timer } from "lucide-react"

import { Container } from "@/components/common/container"
import { LessonHero } from "@/components/belajar/lesson-hero"
import { LessonNav } from "@/components/belajar/lesson-nav"
import { LessonSection } from "@/components/belajar/lesson-section"
import { SignCard } from "@/components/belajar/sign-card"
import { TipCard } from "@/components/belajar/tip-card"

const digits = [
  { sign: "0", name: "Nol", description: "Kelima jari membentuk lingkaran seperti huruf O, telapak menghadap ke depan." },
  { sign: "1", name: "Satu", description: "Telunjuk lurus ke atas, empat jari lainnya menekuk rapat di telapak." },
  { sign: "2", name: "Dua", description: "Telunjuk dan jari tengah lurus membuka, dua jari lainnya menekuk di telapak." },
  { sign: "3", name: "Tiga", description: "Telunjuk, jari tengah, dan manis lurus membuka, kelingking dan ibu jari menekuk." },
  { sign: "4", name: "Empat", description: "Empat jari berdiri rapat tegak, ibu jari menekuk di telapak." },
  { sign: "5", name: "Lima", description: "Kelima jari terbuka lebar, telapak menghadap ke depan." },
  { sign: "6", name: "Enam", description: "Ibu jari dan kelingking lurus ke bawah, tiga jari tengah menekuk." },
  { sign: "7", name: "Tujuh", description: "Ibu jari dan jari manis lurus ke bawah, tiga jari lainnya menekuk." },
  { sign: "8", name: "Delapan", description: "Ibu jari dan jari tengah lurus ke bawah, tiga jari lainnya menekuk." },
  { sign: "9", name: "Sembilan", description: "Ibu jari dan telunjuk lurus ke bawah, tiga jari lainnya menekuk." },
]

const bigNumbers = [
  {
    sign: "10",
    name: "Sepuluh",
    description: "Isyaratkan angka satu, lalu angka nol secara berurutan. Angka puluhan lain mengikuti pola yang sama, misalnya 20 = dua lalu nol.",
  },
  {
    sign: "100",
    name: "Seratus",
    description: "Kombinasikan angka satu, nol, dan nol berurutan. Untuk 200, 300, dan seterusnya, ganti angka pertamanya sesuai bilangannya.",
  },
]

const accents = ["mint", "coral", "peach"] as const

export default function Materi2() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Container>
        <LessonHero
          index="2"
          title="Angka"
          description="Pelajari isyarat angka dari bilangan dasar hingga bilangan besar dalam BISINDO. Angka sangat sering dipakai untuk menyebut harga, jam, umur, dan jumlah."
          icon={Hash}
        />

        <LessonSection
          eyebrow="Bilangan Dasar"
          title="Isyarat Angka 0–9"
          description="Semua bilangan berawal dari sembilan angka ini. Hafalkan bentuk tangannya dulu sebelum belajar menggabungkannya."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {digits.map((item, index) => (
              <SignCard
                key={item.sign}
                sign={item.sign}
                name={item.name}
                description={item.description}
                accent={accents[index % accents.length]}
              />
            ))}
          </div>
        </LessonSection>

        <LessonSection
          eyebrow="Bilangan Besar"
          title="Gabungkan untuk Bilangan yang Lebih Besar"
          description="Angka 10 ke atas dibentuk dengan menggabungkan isyarat angka penyusunnya secara berurutan, mulai dari digit paling depan."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {bigNumbers.map((item, index) => (
              <SignCard
                key={item.sign}
                sign={item.sign}
                name={item.name}
                description={item.description}
                accent={accents[index % accents.length]}
              />
            ))}
          </div>

          <div className="mt-6 grid gap-4 rounded-3xl border bg-card p-7 shadow-md shadow-black/8 sm:grid-cols-3">
            {[
              { example: "11", note: "satu lalu satu" },
              { example: "25", note: "dua lalu lima" },
              { example: "99", note: "sembilan lalu sembilan" },
            ].map((item) => (
              <div key={item.example} className="text-center">
                <p className="text-3xl font-bold text-primary">{item.example}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
              </div>
            ))}
          </div>
        </LessonSection>

        <LessonSection
          eyebrow="Tips"
          title="Kapan Angka Paling Sering Dipakai?"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <TipCard
              icon={Timer}
              title="Jam dan waktu"
              description="Saat menyebut jam, tanggal, atau durasi — misalnya pukul tujuh pagi atau lima belas menit."
            />
            <TipCard
              icon={Hash}
              title="Harga dan belanja"
              description="Tanyakan harga, sebutkan jumlah, dan hitung kembalian dengan isyarat angka yang lancar."
            />
            <TipCard
              icon={Repeat}
              title="Berlatih berpasangan"
              description="Ajak teman berlatih menyebut angka acak secara bergantian agar hafalan makin mantap."
            />
          </div>
        </LessonSection>

        <LessonNav current={1} />
      </Container>
    </div>
  )
}
