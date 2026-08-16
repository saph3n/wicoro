"use client"

import { useState } from "react"
import { BrainCircuit } from "lucide-react"

import { Container } from "@/components/common/container"
import { LessonHero } from "@/components/belajar/lesson-hero"
import { InteractiveQuiz, type Mode } from "@/components/belajar/interactive-quiz"
import { LessonNav } from "@/components/belajar/lesson-nav"

export default function Materi5() {
  const [activeQuizMode, setActiveQuizMode] = useState<Mode | null>(null)
  const [resetSignal, setResetSignal] = useState(0)

  const handlePrevClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (activeQuizMode !== null) {
      e.preventDefault()
      setActiveQuizMode(null)
      setResetSignal((s) => s + 1)
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Container>
        <LessonHero
          index="5"
          title="Kuis Interaktif"
          description="Uji ingatan dan kemampuan isyarat BISINDO kamu melalui berbagai pilihan mode kuis interaktif. Jawab soal bergambar, dapatkan umpan balik langsung, dan kejar skor terbaikmu!"
          icon={BrainCircuit}
        />

        <div className="mt-1 mb-8">
          <InteractiveQuiz onModeChange={setActiveQuizMode} resetSignal={resetSignal} />
        </div>

        <LessonNav current={4} onPrevClick={handlePrevClick} />
      </Container>
    </div>
  )
}
