import { Hash, Repeat, Timer } from "lucide-react"

import { Container } from "@/components/common/container"
import { FadeIn } from "@/components/common/fade-in"
import { LessonNav } from "@/components/belajar/lesson-nav"
import { LessonSection } from "@/components/belajar/lesson-section"
import { SignCard } from "@/components/belajar/sign-card"
import { TipCard } from "@/components/belajar/tip-card"
import { NumberPractice } from "@/components/belajar/number-practice"

const digits = [
  { sign: "0",  name: "Nol",     description: "Kelima jari membentuk lingkaran seperti huruf O, telapak menghadap ke depan.",                                               image: "/12.png" },
  { sign: "1",  name: "Satu",    description: "Telunjuk lurus ke atas, empat jari lainnya menekuk rapat di telapak.",                                                      image: "/1.png"  },
  { sign: "2",  name: "Dua",     description: "Telunjuk dan jari tengah lurus membuka, dua jari lainnya menekuk di telapak.",                                              image: "/2.png"  },
  { sign: "3",  name: "Tiga",    description: "Telunjuk, jari tengah, dan manis lurus membuka, kelingking dan ibu jari menekuk.",                                          image: "/3.png"  },
  { sign: "4",  name: "Empat",   description: "Empat jari berdiri rapat tegak, ibu jari menekuk di telapak.",                                                              image: "/4.png"  },
  { sign: "5",  name: "Lima",    description: "Kelima jari terbuka lebar, telapak menghadap ke depan.",                                                                    image: "/5.png"  },
  { sign: "6",  name: "Enam",    description: "Ibu jari dan kelingking lurus ke bawah, tiga jari tengah menekuk.",                                                        image: "/6.png"  },
  { sign: "7",  name: "Tujuh",   description: "Ibu jari dan jari manis lurus ke bawah, tiga jari lainnya menekuk.",                                                       image: "/7.png"  },
  { sign: "8",  name: "Delapan", description: "Ibu jari dan jari tengah lurus ke bawah, tiga jari lainnya menekuk.",                                                      image: "/8.png"  },
  { sign: "9",  name: "Sembilan",description: "Ibu jari dan telunjuk lurus ke bawah, tiga jari lainnya menekuk.",                                                         image: "/9.png"  },
  { sign: "10", name: "Sepuluh", description: "Isyaratkan angka satu lalu angka nol secara berurutan. Puluhan lain mengikuti pola yang sama, misalnya 20 = dua lalu nol.", image: "/11.png" },
]

const accents = ["mint", "coral", "peach"] as const

export default function Materi2() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Container>
        <FadeIn className="pt-10 pb-2 sm:pt-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-coral-light px-4 py-1.5 text-sm font-semibold text-[#cf6f95]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#cf6f95] opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-[#cf6f95]" />
            </span>
            Materi 2
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            <span className="bg-gradient-to-r from-primary via-mint-deep to-[#cf6f95] bg-clip-text text-transparent">
              Angka &amp; Bilangan
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="mt-6 flex items-center gap-3" aria-hidden="true">
            <span className="h-px w-16 bg-gradient-to-r from-primary to-transparent sm:w-24" />
            <span className="h-2 w-2 rotate-45 bg-[#cf6f95]" />
            <span className="h-1.5 w-1.5 rounded-full bg-mint-deep" />
            <svg
              className="h-4 w-40 text-primary sm:w-56"
              viewBox="0 0 200 16"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 12 C 30 2, 60 2, 90 10 S 150 14, 200 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-primary/70"
              />
              <circle cx="200" cy="4" r="3" className="fill-[#cf6f95]" />
              <circle cx="90" cy="10" r="2.5" className="fill-mint-deep" />
            </svg>
          </div>
        </FadeIn>

        {/* Grid 0–10 */}
        <LessonSection
          eyebrow="Bilangan Dasar"
          title="Isyarat Angka 0–10"
          description="Pelajari bentuk tangan untuk setiap angka. Kuasai 0–9 terlebih dahulu, lalu 10 sebagai pola dasar bilangan puluhan."
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
