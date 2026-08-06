"use client"

import Image from "next/image"
import { AtSign, Mail, MapPin, MessageCircle, Phone, Video } from "lucide-react"

import { Container } from "@/components/common/container"

const contactLinks = [
  { label: "halo@wicoro.id", href: "mailto:halo@wicoro.id", Icon: Mail },
  { label: "+62 812-3456-7890", href: "tel:+6281234567890", Icon: Phone },
  { label: "Jakarta, Indonesia", href: "#contact", Icon: MapPin },
]

const socialLinks = [
  { label: "Instagram", href: "#", Icon: AtSign },
  { label: "Komunitas", href: "#", Icon: MessageCircle },
  { label: "YouTube", href: "#", Icon: Video },
]

export function SiteFooter() {
  return (
    <footer id="contact" className="text-white">
      {/* Animated wave */}
      <div className="bg-background leading-none overflow-hidden">
        <div className="relative h-6 sm:h-8 w-full">
          {/* Wave layer 1 — faster */}
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-[200%] animate-[wave_6s_linear_infinite]"
            aria-hidden="true"
          >
            <path
              d="M0,40 C120,70 240,10 360,30 C480,50 600,70 720,50 C840,30 960,10 1080,30 C1200,50 1320,70 1440,40 L1440,80 L0,80 Z"
              fill="#1c3b2c"
            />
            {/* repeat for seamless loop */}
            <path
              d="M1440,40 C1560,70 1680,10 1800,30 C1920,50 2040,70 2160,50 C2280,30 2400,10 2520,30 C2640,50 2760,70 2880,40 L2880,80 L1440,80 Z"
              fill="#1c3b2c"
            />
          </svg>

          {/* Wave layer 2 — slower, slightly transparent */}
          <svg
            viewBox="0 0 1440 80"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-[200%] animate-[wave_10s_linear_infinite_reverse] opacity-50"
            aria-hidden="true"
          >
            <path
              d="M0,55 C180,20 360,70 540,45 C720,20 900,65 1080,40 C1260,15 1380,60 1440,50 L1440,80 L0,80 Z"
              fill="#1c3b2c"
            />
            <path
              d="M1440,55 C1620,20 1800,70 1980,45 C2160,20 2340,65 2520,40 C2700,15 2820,60 2880,50 L2880,80 L1440,80 Z"
              fill="#1c3b2c"
            />
          </svg>
        </div>
      </div>

      <div className="bg-[#1c3b2c]">
        <Container className="mx-auto max-w-4xl">
          <div className="flex flex-col gap-8 py-7 sm:py-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Brand */}
            <div className="flex flex-col gap-2.5">
              <a href="#home" className="group inline-flex items-center gap-2.5 transition-transform hover:scale-105" aria-label="Wicoro home">
                <Image
                  src="/Frame 1.png"
                  alt="Wicoro logo"
                  width={32}
                  height={32}
                  className="size-8 object-contain transition-transform group-hover:rotate-3"
                />
                <span className="text-base font-bold tracking-tight">Wicoro</span>
              </a>
              <p className="max-w-xs text-xs leading-relaxed text-white/60">
                Platform interaktif untuk belajar Bahasa Isyarat Indonesia (BISINDO) dengan cara yang mudah dan seru.
              </p>
            </div>

            {/* Kontak + Social */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
              <div className="flex flex-col">
                <h3 className="mb-2.5 text-[11px] font-bold uppercase tracking-wider text-white/50">Kontak</h3>
                <ul className="space-y-2">
                  {contactLinks.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        className="group inline-flex items-center gap-2.5 text-xs text-white/70 transition-all hover:text-white hover:translate-x-0.5"
                      >
                        <Icon className="size-3.5 shrink-0 transition-colors group-hover:text-mint" aria-hidden="true" />
                        <span className="transition-colors">{label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="hidden h-8 w-px bg-white/10 sm:block" aria-hidden="true" />

              <div className="flex items-center gap-2.5">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="group inline-flex size-8 items-center justify-center rounded-full border border-white/25 bg-white/5 text-white/70 transition-all hover:scale-110 hover:border-white/50 hover:bg-white/10 hover:text-white hover:shadow-lg hover:shadow-white/10"
                  >
                    <Icon className="size-3.5 transition-transform group-hover:scale-110" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>

        <div className="border-t border-white/10">
          <Container className="flex max-w-4xl items-center justify-start py-3.5">
            <p className="text-[11px] text-white/50">© 2026 Wicoro. Semua hak dilindungi.</p>
          </Container>
        </div>
      </div>
    </footer>
  )
}
