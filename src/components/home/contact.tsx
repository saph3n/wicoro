"use client"

import { useState } from "react"
import Image from "next/image"
import { AtSign, Check, Loader2, Mail, MapPin, MessageCircle, Phone, Send, Video } from "lucide-react"
import { motion } from "framer-motion"

import { FadeIn } from "@/components/common/fade-in"
import { Container } from "@/components/common/container"
import { cn } from "@/lib/utils"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "halo@wicoro.id",
    href: "mailto:halo@wicoro.id",
  },
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    value: "08xxxxxxx",
    href: "tel:08xxxxxxx",
  },
  {
    icon: MapPin,
    title: "Alamat",
    value: "Semarang, Indonesia",
    href: "/kontak",
  },
]

const socialLinks = [
  { label: "Instagram", href: "#", Icon: AtSign },
  { label: "Komunitas", href: "#", Icon: MessageCircle },
  { label: "YouTube", href: "#", Icon: Video },
]

const BUBBLE_COLORS = {
  mint: "from-mint/80 to-mint-deep/25 border-mint-deep/25 shadow-mint-deep/15",
  coral: "from-coral/80 to-[#cf6f95]/25 border-[#cf6f95]/25 shadow-[#cf6f95]/15",
  peach: "from-peach to-coral-light/40 border-coral/30 shadow-coral/10",
}

function FloatingBubble({
  color = "mint",
  size = 12,
  className,
  duration = 6,
  delay = 0,
}: {
  color?: keyof typeof BUBBLE_COLORS
  size?: number
  className?: string
  duration?: number
  delay?: number
}) {
  return (
    <motion.div
      className={cn("pointer-events-none absolute z-10", className)}
      animate={{ y: [0, -14, 0], x: [0, 6, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    >
      <div
        className={cn(
          "relative rounded-full border bg-gradient-to-br shadow-lg",
          BUBBLE_COLORS[color]
        )}
        style={{ width: size, height: size }}
      >
        <span
          className="absolute rounded-full bg-white/70 blur-[1px]"
          style={{ top: size * 0.18, left: size * 0.2, width: size * 0.28, height: size * 0.28 }}
        />
      </div>
    </motion.div>
  )
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus("sending")
    setTimeout(() => {
      setStatus("sent")
      form.reset()
      setTimeout(() => setStatus("idle"), 4000)
    }, 900)
  }

  return (
    <section id="contact" className="relative py-10 sm:py-14" aria-label="Hubungi Wicoro">
      {/* Decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-16 top-1/4 size-56 rounded-full bg-mint/30 blur-3xl" />
        <div className="absolute -right-20 bottom-10 size-64 rounded-full bg-coral-light/40 blur-3xl" />
      </div>

      {/* Floating bubbles — left & right */}
      <FloatingBubble color="mint" size={20} duration={6} className="left-4 top-10 sm:left-12" />
      <FloatingBubble color="peach" size={10} duration={8} delay={1} className="left-8 top-28 sm:left-16 sm:top-32" />
      <FloatingBubble color="coral" size={14} duration={5.5} delay={0.6} className="left-3 bottom-24 sm:left-10 sm:bottom-28" />
      <FloatingBubble color="mint" size={12} duration={7} delay={1.4} className="left-10 bottom-10 sm:left-20" />

      <FloatingBubble color="coral" size={22} duration={7} delay={0.3} className="right-4 top-10 sm:right-12" />
      <FloatingBubble color="peach" size={11} duration={6} delay={1.2} className="right-8 top-32 sm:right-16 sm:top-36" />
      <FloatingBubble color="mint" size={15} duration={6.5} delay={0.8} className="right-3 bottom-28 sm:right-10 sm:bottom-32" />
      <FloatingBubble color="coral" size={12} duration={5} delay={1.8} className="right-10 bottom-12 sm:right-20" />

      <motion.div
        className="pointer-events-none absolute top-16 left-4 z-10 sm:top-20 sm:left-10"
        aria-hidden="true"
        animate={{ y: [0, -16, 0], rotate: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/bunga.png"
          alt=""
          width={192}
          height={192}
          className="w-24 drop-shadow-lg sm:w-36"
        />
      </motion.div>

      <motion.div
        className="pointer-events-none absolute right-4 top-28 z-10 sm:right-10 sm:top-32"
        aria-hidden="true"
        animate={{ y: [0, 18, 0], rotate: [10, -10, 10] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/bunga1.png"
          alt=""
          width={208}
          height={208}
          className="w-28 drop-shadow-lg sm:w-40"
        />
      </motion.div>

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Hubungi Kami
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ada pertanyaan, saran, atau ingin berkolaborasi? Tim Wicoro siap
              membantu dan selalu senang mendengar darimu.
            </p>
          </FadeIn>
        </div>

        <div className="mt-12 grid items-start gap-6 lg:grid-cols-5">
          {/* Contact methods */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {contactMethods.map(({ icon: Icon, title, value, href }, index) => (
              <FadeIn key={title} delay={index * 0.08}>
                <a
                  href={href}
                  className="group flex items-center gap-4 rounded-3xl border bg-card p-5 shadow-md shadow-black/8 transition-all duration-300 hover:-translate-y-1 hover:border-mint-deep/40 hover:shadow-xl hover:shadow-mint-deep/20"
                >
                  <div className="relative inline-flex shrink-0">
                    <div className="absolute inset-0 -m-1 rounded-2xl border-2 border-primary/20 opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-mint-deep text-primary-foreground shadow-md shadow-primary/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <Icon className="size-5" strokeWidth={2} aria-hidden="true" />
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {title}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-semibold transition-colors duration-300 group-hover:text-primary">
                      {value}
                    </p>
                  </div>
                </a>
              </FadeIn>
            ))}

            {/* Social */}
            <FadeIn delay={0.3}>
              <div className="rounded-3xl border bg-card p-5 shadow-md shadow-black/8">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Ikuti kami
                </p>
                <div className="mt-3 flex items-center gap-2.5">
                  {socialLinks.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="group inline-flex size-10 items-center justify-center rounded-full border bg-muted text-muted-foreground transition-all hover:scale-110 hover:border-primary/40 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                    >
                      <Icon className="size-4.5 transition-transform group-hover:scale-110" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Contact form */}
          <FadeIn delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-3xl border bg-card p-6 shadow-md shadow-black/8 sm:p-8"
            >
              {/* Decorative blobs */}
              <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute -top-12 -right-12 size-32 rounded-full bg-mint/25 blur-2xl" />
                <div className="absolute -bottom-10 -left-10 size-28 rounded-full bg-coral-light/30 blur-2xl" />
              </div>

              <div className="relative space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
                      Nama
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Nama lengkapmu"
                      className="w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="nama@email.com"
                      className="w-full rounded-xl border bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/30"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
                    Pesan
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tulis pesanmu di sini..."
                    className="w-full resize-none rounded-xl border bg-background px-4 py-2.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-ring/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/80 hover:shadow-xl hover:shadow-primary/30 disabled:pointer-events-none disabled:opacity-70 sm:w-auto sm:px-7"
                >
                  {status === "sent" ? (
                    <>
                      <Check className="size-4" aria-hidden="true" />
                      Terkirim!
                    </>
                  ) : status === "sending" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send className="size-4" aria-hidden="true" />
                      Kirim Pesan
                    </>
                  )}
                </button>
              </div>
            </form>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
