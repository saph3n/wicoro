import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

const lessons = [
  { href: "/belajar/materi-1", label: "Huruf & Alfabet", chip: "Materi 1" },
  { href: "/belajar/materi-2", label: "Angka", chip: "Materi 2" },
  { href: "/belajar/materi-3", label: "Salam Sehari-hari", chip: "Materi 3" },
  { href: "/belajar/materi-4", label: "Ekspresi Dasar", chip: "Materi 4" },
  { href: "/belajar/materi-5", label: "Percakapan", chip: "Materi 5" },
  { href: "/belajar/materi-6", label: "Kuis Interaktif", chip: "Materi 6" },
]

interface LessonNavProps {
  current: number
}

export function LessonNav({ current }: LessonNavProps) {
  const prev = lessons[current - 1]
  const next = lessons[current + 1]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="flex items-center justify-between gap-3">
        {prev ? (
          <Link
            href={prev.href}
            className="group inline-flex items-center gap-3 rounded-3xl border bg-card px-5 py-4 shadow-md shadow-black/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex size-10 items-center justify-center rounded-2xl bg-mint text-mint-deep transition-transform duration-300 group-hover:-translate-x-1">
              <ArrowLeft className="size-5" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block text-xs font-medium text-muted-foreground">{prev.chip}</span>
              <span className="block text-sm font-semibold group-hover:text-primary">{prev.label}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={next.href}
            className="group inline-flex items-center gap-3 rounded-3xl border bg-card px-5 py-4 shadow-md shadow-black/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="text-right">
              <span className="block text-xs font-medium text-muted-foreground">{next.chip}</span>
              <span className="block text-sm font-semibold group-hover:text-primary">{next.label}</span>
            </span>
            <span className="flex size-10 items-center justify-center rounded-2xl bg-coral-light text-[#cf6f95] transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="size-5" aria-hidden="true" />
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  )
}
