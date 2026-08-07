import type { ReactNode } from "react"

import { FadeIn } from "@/components/common/fade-in"

interface LessonSectionProps {
  eyebrow?: string
  title: string
  description?: string
  children: ReactNode
}

export function LessonSection({ eyebrow, title, description, children }: LessonSectionProps) {
  return (
    <section className="pt-12 sm:pt-16">
      <FadeIn>
        {eyebrow && (
          <p className="text-sm font-semibold text-primary">✦ {eyebrow}</p>
        )}
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </FadeIn>
      <div className="mt-8">{children}</div>
    </section>
  )
}
