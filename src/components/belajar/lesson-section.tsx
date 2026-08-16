import type { ReactNode } from "react"

import { FadeIn } from "@/components/common/fade-in"

interface LessonSectionProps {
  eyebrow?: string
  title?: string
  description?: string
  children: ReactNode
}

export function LessonSection({ eyebrow, title, description, children }: LessonSectionProps) {
  return (
    <section className="pt-8 sm:pt-10">
      {(eyebrow || title || description) && (
        <FadeIn>
          {eyebrow && (
            <p className="text-sm font-semibold text-primary">✦ {eyebrow}</p>
          )}
          {title && (
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-balance sm:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </FadeIn>
      )}
      <div className="mt-5">{children}</div>
    </section>
  )
}
