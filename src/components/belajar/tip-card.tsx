import type { LucideIcon } from "lucide-react"
import { Lightbulb } from "lucide-react"

interface TipCardProps {
  title: string
  description: string
  icon?: LucideIcon
}

export function TipCard({ title, description, icon: Icon = Lightbulb }: TipCardProps) {
  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-amber-200/70 bg-amber-50/70 p-6 shadow-md shadow-black/8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-amber-200/60">

      <div className="relative">
        <div className="inline-flex rounded-2xl bg-amber-200/80 p-3 text-amber-700 transition-transform duration-300 group-hover:scale-110">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <h3 className="mt-4 text-lg font-semibold text-amber-900">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-amber-900/70">{description}</p>
      </div>
    </div>
  )
}
