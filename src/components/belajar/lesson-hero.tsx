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
    <div className="relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 -right-16 size-72 rounded-full bg-mint/30 blur-3xl" />
        <div className="absolute top-10 -left-20 size-56 rounded-full bg-coral-light/40 blur-3xl" />
      </div>

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
