import { Container } from "@/components/common/container"
import { FadeIn } from "@/components/common/fade-in"
import { LessonNav } from "@/components/belajar/lesson-nav"
import { LessonSection } from "@/components/belajar/lesson-section"
import { SignCard } from "@/components/belajar/sign-card"
import { WordSpellingPractice } from "@/components/belajar/word-spelling-practice"

const alphabet = [
  { sign: "A", name: "Huruf A", description: "Kedua jari telunjuk saling bersentuhan di ujung atas membentuk segitiga, dengan kedua ibu jari bersentuhan mendatar di bawah.", image: "/Huruf A.png" },
  { sign: "B", name: "Huruf B", description: "Jari telunjuk tangan kiri berdiri tegak, disentuh mendatar oleh tiga jari (telunjuk, tengah, manis) tangan kanan.", image: "/Huruf B.png" },
  { sign: "C", name: "Huruf C", description: "Ibu jari dan empat jari melengkung terbuka membentuk kelengkungan huruf C.", image: "/Huruf C.png" },
  { sign: "D", name: "Huruf D", description: "Jari telunjuk tangan kiri tegak, disatukan dengan lengkungan ibu jari dan telunjuk tangan kanan membentuk huruf D.", image: "/Huruf D.png" },
  { sign: "E", name: "Huruf E", description: "Satu tangan dengan jari-jari merapat membengkok melengkung ke depan.", image: "/E.png" },
  { sign: "F", name: "Huruf F", description: "Dua jari tangan atas (telunjuk dan tengah) terentang mendatar, disentuh di bawahnya oleh jari telunjuk tangan bawah.", image: "/F.png" },
  { sign: "G", name: "Huruf G", description: "Kedua tangan mengepal dan disatukan/ditumpuk secara mendatar.", image: "/G.png" },
  { sign: "H", name: "Huruf H", description: "Jari telunjuk kedua tangan berdiri tegak sejajar, dihubungkan oleh jari telunjuk tangan satunya melintang di tengah.", image: "/H.png" },
  { sign: "I", name: "Huruf I", description: "Satu tangan mengepal dengan jari kelingking berdiri tegak lurus ke atas.", image: "/I.png" },
  { sign: "J", name: "Huruf J", description: "Jari kelingking berdiri tegak lalu diayunkan melengkung membentuk gerak huruf J.", image: "/J.png" },
  { sign: "K", name: "Huruf K", description: "Jari telunjuk tangan kiri berdiri tegak, disentuh oleh bagian belakang kepalan tangan kanan.", image: "/K.png" },
  { sign: "L", name: "Huruf L", description: "Ibu jari dan jari telunjuk satu tangan terbuka tegak lurus membentuk sudut huruf L.", image: "/L.png" },
  { sign: "M", name: "Huruf M", description: "Tiga jari (telunjuk, tengah, manis) tangan kanan menempel mendatar di atas telapak tangan kiri.", image: "/M.png" },
  { sign: "N", name: "Huruf N", description: "Jari telunjuk dan jari tengah tangan kanan menempel mendatar di atas telapak tangan kiri.", image: "/N.png" },
  { sign: "O", name: "Huruf O", description: "Kelima jari melengkung menyatu di ujung membentuk lingkaran huruf O.", image: "/O.png" },
  { sign: "P", name: "Huruf P", description: "Jari telunjuk tangan kiri berdiri tegak, disentuh melengkung di bagian atas oleh ibu jari dan telunjuk tangan kanan.", image: "/P.png" },
  { sign: "Q", name: "Huruf Q", description: "Ibu jari dan telunjuk melengkung membentuk lingkaran (Q), disentuh miring di bawahnya oleh telunjuk tangan satunya.", image: "/Q.png" },
  { sign: "R", name: "Huruf R", description: "Jari telunjuk berdiri tegak dengan jari tengah melengkung menempel di depannya.", image: "/R.png" },
  { sign: "S", name: "Huruf S", description: "Ujung ibu jari dan telunjuk tangan kiri membentuk kelengkungan atas, disentuh oleh telunjuk tangan kanan di bagian bawah.", image: "/S.png" },
  { sign: "T", name: "Huruf T", description: "Jari telunjuk tangan kanan terentang horizontal, disentuh di bawahnya oleh telunjuk tangan kiri yang berdiri tegak.", image: "/T.png" },
  { sign: "U", name: "Huruf U", description: "Jari telunjuk berdiri tegak lurus dengan ibu jari terangkat sejajar di sampingnya.", image: "/U.png" },
  { sign: "V", name: "Huruf V", description: "Jari telunjuk dan jari tengah direnggangkan melintang ke atas membentuk huruf V.", image: "/V.png" },
  { sign: "W", name: "Huruf W", description: "Kedua tangan diangkat dengan ibu jari saling bersentuhan di tengah dan jari telunjuk tegak membentuk huruf W.", image: "/W.png" },
  { sign: "X", name: "Huruf X", description: "Jari telunjuk kedua tangan disilangkan di ujung atas membentuk tanda silang X.", image: "/X.png" },
  { sign: "Y", name: "Huruf Y", description: "Jari telunjuk tangan kiri tegak lurus, disentuh di pangkalnya oleh telunjuk dan ibu jari tangan kanan.", image: "/Y.png" },
  { sign: "Z", name: "Huruf Z", description: "Lengan tangan ditekuk dengan telapak tangan merapat mendatar melengkung ke depan membentuk siluet Z.", image: "/Z.png" },
]

export default function Materi1() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Container>
        <FadeIn className="pt-10 pb-2 sm:pt-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-coral-light px-4 py-1.5 text-sm font-semibold text-[#cf6f95]">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#cf6f95] opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-[#cf6f95]" />
            </span>
            Materi 1
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            <span className="bg-gradient-to-r from-primary via-mint-deep to-[#cf6f95] bg-clip-text text-transparent">
              Huruf & Alfabet
            </span>
          </h1>
        </FadeIn>
        <LessonSection>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {alphabet.map((item) => (
              <SignCard
                key={item.sign}
                sign={item.sign}
                name={item.name}
                description={item.description}
                accent="coral"
                image={"image" in item ? (item.image as string) : undefined}
              />
            ))}
          </div>
        </LessonSection>

        <WordSpellingPractice />

        <LessonNav current={0} />
      </Container>
    </div>
  )
}
