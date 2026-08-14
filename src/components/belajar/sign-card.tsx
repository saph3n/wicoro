import Image from "next/image"

import { cn } from "@/lib/utils"

const accentStyles = {
  mint: "bg-gradient-to-br from-mint to-mint-deep text-white",
  coral: "bg-gradient-to-br from-coral to-[#cf6f95] text-white",
  peach: "bg-gradient-to-br from-[#268a5e] to-[#5fb98a] text-white",
} as const

type Accent = keyof typeof accentStyles

interface SignCardProps {
  sign: string
  name: string
  description: string
  accent?: Accent
  image?: string
}

export function SignCard({ sign, name, description, accent = "coral", image }: SignCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/80 bg-white/90 p-6 shadow-lg shadow-black/5 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
      {/* Top Accent Pill Badge */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
          {name}
        </h3>
        <span
          className={cn(
            "flex size-8 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6",
            accentStyles[accent]
          )}
        >
          {sign.length > 2 ? sign.slice(0, 2) : sign}
        </span>
      </div>

      {image ? (
        <div className="relative mb-4 overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-mint/15 via-peach/20 to-coral-light/15 p-2">
          <div className="relative aspect-4/3 w-full">
            <Image
              src={image}
              alt={`Bentuk tangan ${name}`}
              fill
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-108"
            />
          </div>
        </div>
      ) : null}

      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}
