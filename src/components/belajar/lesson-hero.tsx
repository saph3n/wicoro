import { Sparkles } from "lucide-react"

import { FadeIn } from "@/components/common/fade-in"
import { cn } from "@/lib/utils"

interface LessonHeroProps {
  index: string
  title: string
  description?: string
  chips?: string[]
  icon?: React.ElementType
  className?: string
}

export function LessonHero({ index, title, description, chips, icon: Icon, className }: LessonHeroProps) {
  return (
    <FadeIn className={cn("pt-10 pb-6 sm:pt-14 sm:pb-8", className)}>
      {/* Badge Header */}
      <div className="flex flex-wrap items-center gap-2.5">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/15 via-mint/20 to-primary/10 px-4 py-1.5 text-xs font-bold text-primary shadow-sm backdrop-blur-md">
          {Icon ? (
            <Icon className="size-3.5" />
          ) : (
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
          )}
          Materi {index} • BISINDO
        </div>

        <span className="inline-flex items-center gap-1 text-xs font-bold text-muted-foreground">
          <Sparkles className="size-3.5 text-primary" />
          Modul Interaktif
        </span>
      </div>

      {/* Main Title */}
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl leading-[1.15]">
        <span className="bg-gradient-to-r from-primary via-mint-deep to-[#cf6f95] bg-clip-text text-transparent">
          {title}
        </span>
      </h1>

      {/* Description */}
      {description && (
        <p className="mt-3.5 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          {description}
        </p>
      )}

      {/* Feature Chips Bar */}
      {chips && chips.length > 0 && (
        <div className="mt-5 flex flex-wrap items-center gap-2">
          {chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-border/80 bg-white/80 px-3.5 py-1 text-xs font-semibold text-foreground shadow-xs backdrop-blur-sm"
            >
              {chip}
            </span>
          ))}
        </div>
      )}

      {/* Modern Minimalist Divider Bar */}
      <div className="mt-6 flex items-center gap-2" aria-hidden="true">
        <div className="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-mint-deep" />
        <div className="size-1.5 rotate-45 rounded-xs bg-[#cf6f95]" />
        <div className="h-0.5 flex-1 max-w-xs rounded-full bg-gradient-to-r from-border to-transparent" />
      </div>
    </FadeIn>
  )
}
