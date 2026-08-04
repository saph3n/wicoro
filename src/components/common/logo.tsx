import { Hand } from "lucide-react"

import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        aria-hidden="true"
        className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm shadow-primary/30"
      >
        <Hand className="size-5" strokeWidth={2.25} />
      </span>
      <span className="text-lg font-semibold tracking-tight">Wicoro</span>
    </span>
  )
}
