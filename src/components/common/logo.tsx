import Image from "next/image"

import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/Frame 1.png"
        alt="Wicoro"
        width={36}
        height={36}
        sizes="36px"
        quality={100}
        className="size-9 rounded-xl object-contain"
        priority
      />
      <span className="text-lg font-semibold tracking-tight">Wicoro</span>
    </span>
  )
}
