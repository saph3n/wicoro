import { Hand, MessageCircleHeart, Smile } from "lucide-react"

import { Container } from "@/components/common/container"
import { LessonHero } from "@/components/belajar/lesson-hero"
import { LessonNav } from "@/components/belajar/lesson-nav"
import { LessonSection } from "@/components/belajar/lesson-section"
import { SignCard } from "@/components/belajar/sign-card"
import { TipCard } from "@/components/belajar/tip-card"

const greetings = [
  { sign: "Halo", name: "Halo / Hai", description: "Telapak terbuka di samping kepala, lalu digerakkan sedikit seperti melambai. Ekspresikan dengan senyum.", image: "/Hai.png?v=3" },
  { sign: "Apa\nkabar?", name: "Apa Kabar?", description: "Telunjuk dan jari tengah menunjuk ke depan, lalu digerakkan naik-turun sambil menaikkan alis sebagai tanda tanya.", image: "/Apa Kabar.png?v=4" },
  { sign: "Pagi", name: "Selamat Pagi", description: "Tangan mengepal di depan dada, lalu ibu jari diluruskan ke atas dan digerakkan kecil ke atas. Kombinasikan dengan 'halo' untuk salam pembuka.", image: "/Selamat Pagi.png?v=3" },
  { sign: "Siang", name: "Selamat Siang", description: "Ibu jari menempel di telapak dan digerakkan dari dada ke samping, melambangkan matahari berada di tengah hari.", image: "/Selamat Siang.png?v=3" },
  { sign: "Sore", name: "Selamat Sore", description: "Gerakan seperti matahari mulai turun: telapak terbuka digerakkan ke bawah di depan tubuh.", image: "/Selamat Sore.png?v=3" },
  { sign: "Malam", name: "Selamat Malam", description: "Kedua tangan membentuk atap segitiga di atas kepala, seperti rumah di malam hari, lalu diturunkan perlahan.", image: "/Selamat Malam.png?v=4" },
  { sign: "Terima\nkasih", name: "Terima Kasih", description: "Telapak terbuka di dekat dagu, lalu digerakkan menjauh ke depan seperti melepas ciuman. Ekspresi tulus dan tersenyum.", image: "/Terima Kasih.png?v=3" },
  { sign: "Sama-\nsama", name: "Sama-sama", description: "Kedua telapak terbuka menghadap ke atas di depan dada, lalu digerakkan keluar berbarengan.", image: "/Sama Sama.png?v=3" },
  { sign: "Maaf", name: "Maaf", description: "Tangan mengepal di depan dada, lalu digerakkan memutar kecil ke arah luar seperti meminta maaf dengan tulus.", image: "/Maaf.png?v=3" },
  { sign: "Permisi", name: "Permisi", description: "Telapak terbuka di samping wajah, lalu digerakkan ke depan pelan untuk meminta izin lewat atau memanggil perhatian.", image: "/Permisi.png?v=3" },
  { sign: "Sampai\njumpa", name: "Sampai Jumpa", description: "Telapak terbuka digerakkan ke samping sambil melambai, sering diakhiri dengan senyum atau anggukan.", image: "/Sampai Jumpa.png?v=3" },
  { sign: "Aku\nsenang", name: "Senang Bertemu", description: "Telapak terbuka menempel di dada, lalu digerakkan ke depan sambil tersenyum, tanda senang berkenalan.", image: "/Senang Bertemu.png?v=4" },
]

const accents = ["mint", "coral", "peach"] as const

export default function Materi3() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Container>
        <LessonHero
          index="3"
          title="Salam Sehari-hari"
          description="Kuasai isyarat salam dan sapaan yang paling sering dipakai sehari-hari. Salam yang hangat adalah kunci membuka percakapan apa pun."
          icon={Hand}
        />

        <LessonSection
          eyebrow="Sapaan & Basa-basi"
          title="Salam yang Sering Dipakai"
          description="Salam dalam isyarat selalu dibarengi ekspresi wajah. Jangan lupa menatap lawan bicara dan tersenyum saat memberi salam."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {greetings.map((item, index) => (
              <SignCard
                key={item.name}
                sign={item.sign.replace("\n", " ")}
                name={item.name}
                description={item.description}
                accent={accents[index % accents.length]}
                image={item.image}
              />
            ))}
          </div>
        </LessonSection>

        <LessonSection
          eyebrow="Etika"
          title="Aturan Sopan saat Bersalaman"
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <TipCard
              icon={Smile}
              title="Mulailah dengan senyum"
              description="Ekspresi wajah adalah 'nada bicara' dalam isyarat. Senyum membuat sapaanmu terasa hangat dan ramah."
            />
            <TipCard
              icon={MessageCircleHeart}
              title="Tatap mata lawan bicara"
              description="Menatap saat berkomunikasi adalah bentuk penghormatan. Hindari memalingkan pandangan sebelum salam selesai."
            />
            <TipCard
              icon={Hand}
              title="Gerakkan perlahan dan jelas"
              description="Salam bukan ajang balap. Buat gerakan jelas dan beri jeda agar mudah dibaca, terutama saat baru berlatih."
            />
          </div>
        </LessonSection>

        <LessonNav current={2} />
      </Container>
    </div>
  )
}
