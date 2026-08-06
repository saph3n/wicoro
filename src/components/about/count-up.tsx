"use client"

import { useEffect, useRef } from "react"
import { animate, useInView } from "framer-motion"

interface CountUpProps {
  value: number
  suffix?: string
  className?: string
}

function formatNumber(n: number, suffix: string) {
  return n >= 1000 ? `${(n / 1000).toFixed(0)}K${suffix}` : `${n}${suffix}`
}

export function CountUp({ value, suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration: 1.8,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (ref.current) ref.current.textContent = formatNumber(Math.round(latest), suffix)
      },
    })
    return () => controls.stop()
  }, [inView, value, suffix])

  return (
    <span ref={ref} className={className}>
      {formatNumber(0, suffix)}
    </span>
  )
}
