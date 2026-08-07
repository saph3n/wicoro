import { Fingerprint, Hand, LetterText } from "lucide-react"

import { Container } from "@/components/common/container"
import { LessonHero } from "@/components/belajar/lesson-hero"
import { LessonNav } from "@/components/belajar/lesson-nav"
import { LessonSection } from "@/components/belajar/lesson-section"
import { SignCard } from "@/components/belajar/sign-card"
import { TipCard } from "@/components/belajar/tip-card"

const alphabet = [
  { sign: "A", name: "Huruf A", description: "Keempat jari mengepal rapat, ibu jari lurus menempel di samping telapak." },
  { sign: "B", name: "Huruf B", description: "Telapak menghadap ke depan, empat jari rapat dan tegak, ibu jari menekuk di telapak." },
  { sign: "C", name: "Huruf C", description: "Empat jari merapat melengkung dan ibu jari membuka, membentuk bentuk huruf C." },
  { sign: "D", name: "Huruf D", description: "Telunjuk lurus ke atas, tiga jari lainnya menekuk dan menempel di ibu jari." },
  { sign: "E", name: "Huruf E", description: "Lima ujung jari saling menyentuh ke depan, membentuk bundaran kecil." },
  { sign: "F", name: "Huruf F", description: "Ibu jari dan telunjuk membentuk lingkaran kecil, tiga jari lain berdiri tegak." },
  { sign: "G", name: "Huruf G", description: "Telunjuk dan ibu jari membuka sejajar ke depan, tiga jari lain mengepal." },
  { sign: "H", name: "Huruf H", description: "Telunjuk dan jari tengah rapat menyamping, ibu jari menahan di tengah, dua jari lain menekuk." },
  { sign: "I", name: "Huruf I", description: "Kelingking lurus ke atas, empat jari lainnya mengepal." },
  { sign: "J", name: "Huruf J", description: "Seperti I, lalu kelingking digerakkan melengkung membentuk kait J." },
  { sign: "K", name: "Huruf K", description: "Telunjuk dan jari tengah lurus membuka, ibu jari menjepit di sela keduanya." },
  { sign: "L", name: "Huruf L", description: "Telunjuk lurus ke atas dan ibu jari menyamping, membentuk sudut L." },
  { sign: "M", name: "Huruf M", description: "Ibu jari menyilang di depan telunjuk, tengah, dan manis yang menekuk ke bawah." },
  { sign: "N", name: "Huruf N", description: "Seperti M, namun hanya telunjuk dan tengah yang menekuk di bawah ibu jari." },
  { sign: "O", name: "Huruf O", description: "Kelima jari membuka membentuk lingkaran huruf O." },
  { sign: "P", name: "Huruf P", description: "Telunjuk lurus ke depan, jari tengah menekuk, ibu jari menempel — membentuk bentuk P." },
  { sign: "Q", name: "Huruf Q", description: "Telunjuk dan ibu jari lurus menunjuk ke bawah, tiga jari lain menekuk." },
  { sign: "R", name: "Huruf R", description: "Telunjuk dan jari tengah lurus ke atas menyilang, dua jari lain menekuk di telapak." },
  { sign: "S", name: "Huruf S", description: "Empat jari mengepal menutup, ibu jari menumpang di depan jari-jari." },
  { sign: "T", name: "Huruf T", description: "Ibu jari menyilang di antara telunjuk dan tengah yang menekuk, tiga jari lain merapat." },
  { sign: "U", name: "Huruf U", description: "Telunjuk dan jari tengah rapat lurus ke atas, dua jari lain menekuk di telapak." },
  { sign: "V", name: "Huruf V", description: "Telunjuk dan jari tengah lurus membuka membentuk huruf V." },
  { sign: "W", name: "Huruf W", description: "Telunjuk, tengah, dan manis lurus membuka, kelingking dan ibu jari menekuk." },
  { sign: "X", name: "Huruf X", description: "Telunjuk menekuk membentuk kait, tiga jari lain mengepal." },
  { sign: "Y", name: "Huruf Y", description: "Ibu jari dan kelingking lurus membuka ke samping, tiga jari lain mengepal." },
  { sign: "Z", name: "Huruf Z", description: "Telunjuk digerakkan menggambar garis zig-zag huruf Z di udara." },
]

const accents = ["mint", "coral", "peach"] as const

export default function Materi1() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Container>
        <LessonHero
          index="1"
          title="Huruf & Alfabet"
          description="Kenali huruf dan alfabet dalam Bahasa Isyarat Indonesia (BISINDO). Setiap huruf punya bentuk tangan khas — pelajari satu per satu dan biasakan sebelum lanjut ke kata."
          icon={LetterText}
        />

        <LessonSection
          eyebrow="Fondasi"
          title="Kenapa Alfabet Penting?"
          description="Alfabet adalah pijakan pertama dalam berisyarat. Dengan menguasai abjad, kamu bisa mengeja nama, kata baru, atau istilah yang belum punya isyarat khusus."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative h-full overflow-hidden rounded-3xl border bg-card p-7 shadow-md shadow-black/8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="pointer-events-none absolute -top-10 -right-10 size-28 rounded-full bg-mint/25 blur-2xl" />
              <div className="relative">
                <div className="inline-flex rounded-2xl bg-mint text-mint-deep p-3">
                  <Fingerprint className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Eja nama dengan abjad</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Nama diri, merek, dan nama tempat biasanya diisyaratkan dengan mengeja huruf satu per satu.
                </p>
              </div>
            </div>
            <div className="group relative h-full overflow-hidden rounded-3xl border bg-card p-7 shadow-md shadow-black/8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              <div className="pointer-events-none absolute -top-10 -right-10 size-28 rounded-full bg-coral-light/40 blur-2xl" />
              <div className="relative">
                <div className="inline-flex rounded-2xl bg-coral-light text-[#cf6f95] p-3">
                  <Hand className="size-5" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">Tingkatkan keluwesan tangan</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Berlatih alfabet melatih otot jari dan membuat gerakan tanganmu makin luwes untuk isyarat lain.
                </p>
              </div>
            </div>
          </div>
        </LessonSection>

        <LessonSection
          eyebrow="Alfabet A–Z"
          title="Bentuk Tangan untuk Setiap Huruf"
          description="Arahkan telapak menghadap lawan bicara dan pastikan gerakan terlihat jelas. Berikut bentuk tangan alfabet dalam BISINDO:"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {alphabet.map((item, index) => (
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
          eyebrow="Tips"
          title="Cara Berlatih yang Efektif"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <TipCard
              title="Latihan di depan cermin"
              description="Cermati bentuk tanganmu. Pastikan setiap huruf terbentuk dengan jelas dan tidak tertukar satu sama lain."
            />
            <TipCard
              title="Eja kata favoritmu"
              description="Eja nama, makanan, atau kota kesukaanmu huruf demi huruf. Menjadikannya permainan membuat hafalan lebih cepat."
            />
            <TipCard
              title="Mulai pelan, lalu cepat"
              description="Kecepatan datang setelah akurat. Latih perlahan sampai bentuk tangan terbiasa, barulah tambah tempo."
            />
          </div>
        </LessonSection>

        <LessonNav current={0} />
      </Container>
    </div>
  )
}
