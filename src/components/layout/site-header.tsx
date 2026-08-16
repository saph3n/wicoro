"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const navItems = [
  { label: "Beranda", href: "/#home" },
  { label: "Tentang", href: "/about" },
  {
    label: "Belajar",
    href: "/#learn",
    dropdown: [
      { label: "Huruf & Alfabet", href: "/belajar/materi-1" },
      { label: "Angka & Bilangan", href: "/belajar/materi-2" },
      { label: "Salam Sehari-hari", href: "/belajar/materi-3" },
      { label: "Ekspresi Dasar", href: "/belajar/materi-4" },
      { label: "Kuis Interaktif", href: "/belajar/materi-5" },
    ]
  },
  { label: "Kontak", href: "/kontak" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState("#home")
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (pathname.startsWith("/belajar")) {
      setActive("/belajar")
    } else if (pathname === "/kontak") {
      setActive("/kontak")
    } else {
      setActive(pathname === "/about" ? "/about" : "#home")
    }
  }, [pathname])

  useEffect(() => {
    const ids = navItems
      .filter((i) => i.href.includes("#"))
      .map((i) => i.href.split("#")[1])
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
          "relative w-full max-w-3xl rounded-2xl px-4 py-2.5 transition-all duration-500 border-0",
          scrolled
            ? "shadow-lg shadow-black/8 backdrop-blur-md"
            : "backdrop-blur-sm"
        )}
      >
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-mint via-peach to-coral transition-opacity duration-500",
            scrolled ? "opacity-90" : "opacity-40"
          )}
        />

        <div className="relative flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/#home" aria-label="Wicoro home" className="inline-flex items-center gap-2 shrink-0">
            <Image
              src="/Frame 1.png"
              alt="Wicoro logo"
              width={32}
              height={32}
              className="size-8 object-contain"
              priority
            />
            <span className="text-base font-semibold tracking-tight">Wicoro</span>
          </Link>

          {/* Nav links — desktop */}
          <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = active === item.href || (item.href === "/#learn" && pathname.startsWith("/belajar"))

              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <button
                      className={cn(
                        "relative inline-flex items-center gap-1 px-3.5 py-1.5 text-sm font-medium rounded-xl transition-all duration-200",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      )}
                    >
                      {isActive && (
                        <span className="absolute inset-0 rounded-xl bg-primary/10" />
                      )}
                      <span className="relative">{item.label}</span>
                    </button>

                    {/* Dropdown */}
                    {dropdownOpen && (
                      <div className="absolute top-full left-0 pt-2 w-56">
                        <div className="rounded-xl border bg-background/95 backdrop-blur-md shadow-xl p-1 animate-in fade-in slide-in-from-top-2 duration-200">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:text-[#cf6f95] hover:bg-coral-light transition-colors"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
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
                </Link>
              )
            })}
          </nav>

          {/* CTA — hidden, navigation via bottom nav on mobile */}
        </div>
      </div>
    </header>
  )
}
