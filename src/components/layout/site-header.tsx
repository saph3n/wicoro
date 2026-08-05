"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { Container } from "@/components/common/container"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Belajar", href: "#learn" },
  { label: "Kontak", href: "#contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("#home")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const ids = navItems.map((i) => i.href.replace("#", ""))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { threshold: 0.5 }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-4 pb-2">
      <div
        className={cn(
          "flex w-full max-w-3xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500",
          scrolled
            ? "bg-background/80 shadow-lg shadow-black/8 backdrop-blur-md border border-border/50"
            : "bg-background/60 backdrop-blur-sm border border-transparent"
        )}
      >
        {/* Logo */}
        <a href="#home" aria-label="Wicoro home" className="inline-flex items-center gap-2 shrink-0">
          <Image
            src="/Frame 1.png"
            alt="Wicoro logo"
            width={32}
            height={32}
            className="size-8 object-contain"
            priority
          />
          <span className="text-base font-semibold tracking-tight">Wicoro</span>
        </a>

        {/* Nav links — desktop */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => {
            const isActive = active === item.href
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setActive(item.href)}
                className={cn(
                  "relative px-3.5 py-1.5 text-sm font-medium rounded-xl transition-all duration-200",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                )}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-xl bg-primary/10" />
                )}
                <span className="relative">{item.label}</span>
              </a>
            )
          })}
        </nav>

        {/* CTA — hidden, navigation via bottom nav on mobile */}
      </div>
    </header>
  )
}
