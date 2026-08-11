import { FadeIn } from "@/components/common/fade-in"

interface LessonHeroProps {
  index: string
  title: string
  description?: string
  icon?: React.ElementType
}

export function LessonHero({ index, title }: LessonHeroProps) {
  return (
    <FadeIn className="pt-10 pb-2 sm:pt-14">
      <div className="inline-flex items-center gap-2 rounded-full bg-coral-light px-4 py-1.5 text-sm font-semibold text-[#cf6f95]">
        <span className="relative flex size-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#cf6f95] opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-[#cf6f95]" />
        </span>
        Materi {index}
      </div>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-balance sm:text-5xl">
        <span className="bg-gradient-to-r from-primary via-mint-deep to-[#cf6f95] bg-clip-text text-transparent">
          {title}
        </span>
      </h1>
    </FadeIn>
  )
}
