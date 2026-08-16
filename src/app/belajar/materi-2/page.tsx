import { Hash, Repeat, Timer } from "lucide-react"

import { Container } from "@/components/common/container"
import { LessonHero } from "@/components/belajar/lesson-hero"
import { LessonNav } from "@/components/belajar/lesson-nav"
import { LessonSection } from "@/components/belajar/lesson-section"
import { SignCard } from "@/components/belajar/sign-card"
import { TipCard } from "@/components/belajar/tip-card"
import { NumberPractice } from "@/components/belajar/number-practice"

const digits = [
  { sign: "0", name: "Nol", description: "Kelima jari membentuk lingkaran seperti huruf O, telapak menghadap ke depan.", image: "/12.png" },
  { sign: "1", name: "Satu", description: "Telunjuk lurus ke atas, empat jari lainnya menekuk rapat di telapak.", image: "/1.png" },
  { sign: "2", name: "Dua", description: "Telunjuk dan jari tengah lurus membuka, dua jari lainnya menekuk di telapak.", image: "/2.png" },
  { sign: "3", name: "Tiga", description: "Telunjuk, jari tengah, dan manis lurus membuka, kelingking dan ibu jari menekuk.", image: "/3.png" },
  { sign: "4", name: "Empat", description: "Empat jari berdiri rapat tegak, ibu jari menekuk di telapak.", image: "/4.png" },
  { sign: "5", name: "Lima", description: "Kelima jari terbuka lebar, telapak menghadap ke depan.", image: "/5.png" },
  { sign: "6", name: "Enam", description: "Ibu jari dan kelingking lurus ke bawah, tiga jari tengah menekuk.", image: "/6.png" },
  { sign: "7", name: "Tujuh", description: "Ibu jari dan jari manis lurus ke bawah, tiga jari lainnya menekuk.", image: "/7.png" },
  { sign: "8", name: "Delapan", description: "Ibu jari dan jari tengah lurus ke bawah, tiga jari lainnya menekuk.", image: "/8.png" },
  { sign: "9", name: "Sembilan", description: "Ibu jari dan telunjuk lurus ke bawah, tiga jari lainnya menekuk.", image: "/9.png" },
  { sign: "10", name: "Sepuluh", description: "Isyaratkan angka satu lalu angka nol secara berurutan. Puluhan lain mengikuti pola yang sama, misalnya 20 = dua lalu nol.", image: "/11.png" },
]

const accents = ["mint", "coral", "peach"] as const

export default function Materi2() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Container>
        <LessonHero
          index="2"
          title="Angka & Bilangan"
          description="Pelajari bentuk tangan untuk setiap angka 0–10 dan kuasai cara merangkai bilangan untuk percakapan sehari-hari."
          icon={Hash}
        />

        {/* Grid 0–10 */}
        <LessonSection
          eyebrow="Angka Dasar"
          title="Isyarat Angka 0–10"
          description="Setiap angka 0 hingga 10 memiliki posisi jari dan telapak tangan yang khas. Kuasai angka dasar ini untuk menyebut jumlah, harga, dan waktu."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {digits.map((item, index) => (
              <SignCard
                key={item.sign}
                sign={item.sign}
                name={item.name}
                description={item.description}
                accent={accents[index % accents.length]}
                image={item.image}
              />
            ))}
          </div>
        </LessonSection>

        {/* Kuis interaktif — ketik angka, lihat isyaratnya */}
        <NumberPractice />

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
