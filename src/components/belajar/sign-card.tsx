import { Hand } from "lucide-react"

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
}

export function SignCard({ sign, name, description, accent = "mint" }: SignCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border bg-card p-6 shadow-md shadow-black/8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-mint-deep/20">
      {/* Decorative blob */}
      <div className="pointer-events-none absolute -top-10 -right-10 size-28 rounded-full bg-mint/25 blur-2xl transition-transform duration-500 group-hover:scale-150" />

      <div className="relative">
        <div className="flex items-center gap-4">
          <div
            className={cn(
              "flex size-14 shrink-0 items-center justify-center rounded-2xl text-2xl font-bold shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3",
              accentStyles[accent]
            )}
          >
            {sign}
          </div>
          <div>
            <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-primary">
              {name}
            </h3>
            <p className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
              <Hand className="size-3.5" aria-hidden="true" />
              Bentuk tangan
            </p>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
