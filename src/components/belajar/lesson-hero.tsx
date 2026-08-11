import type { LucideIcon } from "lucide-react"

import { FadeIn } from "@/components/common/fade-in"

interface LessonHeroProps {
  index: string
  title: string
  description: string
  icon: LucideIcon
}

export function LessonHero({ index, title, description, icon: Icon }: LessonHeroProps) {
  return (
    <div className="relative">
      <div className="relative pt-12 pb-10 sm:pt-16 sm:pb-14">
        <FadeIn>
          <span className="inline-flex items-center gap-2 rounded-full bg-coral-light px-4 py-1.5 text-sm font-bold tracking-wide text-[#cf6f95]">
            <Icon className="size-4" aria-hidden="true" />
            Materi {index}
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
