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
    <footer className="text-white">
      {/* Animated wave */}
      <div className="bg-background leading-none overflow-hidden">
        <div className="relative h-8 sm:h-12 w-full">
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
        <Container className="grid max-w-4xl gap-8 pt-4 pb-10 sm:grid-cols-2">
          <div>
            <a href="#home" className="inline-flex items-center gap-2" aria-label="Wicoro home">
              <Image
                src="/Frame 1.png"
                alt="Wicoro logo"
                width={30}
                height={30}
                className="size-[30px] object-contain"
              />
              <span className="text-base font-semibold tracking-tight">Wicoro</span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Platform interaktif untuk belajar Bahasa Isyarat Indonesia (BISINDO)
              dengan cara yang mudah, seru, dan menyenangkan.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex size-8 items-center justify-center rounded-full border border-white/20 text-white/65 transition-colors hover:border-white hover:text-white"
                >
                  <Icon className="size-3.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/45">Kontak</h3>
            <ul className="mt-3 space-y-2.5">
              {contactLinks.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white"
                  >
                    <Icon className="size-4 shrink-0" aria-hidden="true" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Container>

        <div className="bg-[#172f22]">
          <Container className="flex max-w-4xl items-center justify-center py-4">
            <p className="text-xs text-white/45">© 2026 Wicoro. Semua hak dilindungi.</p>
          </Container>
        </div>
      </div>
    </footer>
  )
}
