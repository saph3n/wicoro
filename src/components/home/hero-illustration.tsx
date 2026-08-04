import Image from "next/image"

import { cn } from "@/lib/utils"

interface HeroIllustrationProps {
  className?: string
}

export function HeroIllustration({ className }: HeroIllustrationProps) {
  return (
    <div className={cn("relative", className)}>
      <Image
        src="/bicara.png"
        alt="Dua orang berkomunikasi menggunakan Bahasa Isyarat Indonesia"
        width={640}
        height={520}
        className="h-auto w-[85%] mx-auto"
        priority
      />
    </div>
  )
}
