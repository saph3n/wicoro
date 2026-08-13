import Image from "next/image"

import { cn } from "@/lib/utils"

const accentStyles = {
  mint: "bg-mint text-mint-deep",
  coral: "bg-coral-light text-[#cf6f95]",
  peach: "bg-peach text-primary",
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
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border bg-card p-6 shadow-md shadow-black/8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-mint-deep/20">
      {image ? (
        <div className="relative mb-5 overflow-hidden rounded-2xl bg-muted/30 border">
          <div className="relative aspect-4/3 w-full">
            <Image
              src={image}
              alt={`Bentuk tangan ${name}`}
              fill
              className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>
      ) : null}

      <div className="flex items-center gap-4">
        {!image && (
          <div
            className={cn(
              "flex size-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
              accentStyles[accent]
            )}
          >
            {sign}
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
            {name}
          </h3>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  )
}
