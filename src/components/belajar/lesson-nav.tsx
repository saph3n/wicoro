import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"

const lessons = [
  { href: "/belajar/materi-1", label: "Huruf & Alfabet", chip: "Materi 1" },
  { href: "/belajar/materi-2", label: "Angka", chip: "Materi 2" },
  { href: "/belajar/materi-3", label: "Salam Sehari-hari", chip: "Materi 3" },
  { href: "/belajar/materi-4", label: "Ekspresi Dasar", chip: "Materi 4" },
  { href: "/belajar/materi-5", label: "Kuis Interaktif", chip: "Materi 5" },
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
            className="group inline-flex items-center gap-3 rounded-2xl border bg-card px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-mint-deep/40 hover:shadow-md"
          >
            <span className="flex size-9 items-center justify-center rounded-xl bg-mint text-mint-deep transition-transform duration-300 group-hover:-translate-x-0.5">
              <ArrowLeft className="size-4" aria-hidden="true" />
            </span>
            <span className="text-left">
              <span className="block text-[11px] font-medium text-muted-foreground">{prev.chip}</span>
              <span className="block text-sm font-semibold group-hover:text-mint-deep">{prev.label}</span>
            </span>
          </Link>
        ) : (
          <span />
        )}

        {next ? (
          <Link
            href={next.href}
            className="group inline-flex items-center gap-3 rounded-2xl border bg-card px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cf6f95]/40 hover:shadow-md"
          >
            <span className="text-right">
              <span className="block text-[11px] font-medium text-muted-foreground">{next.chip}</span>
              <span className="block text-sm font-semibold group-hover:text-[#cf6f95]">{next.label}</span>
            </span>
            <span className="flex size-9 items-center justify-center rounded-xl bg-coral-light text-[#cf6f95] transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </div>
  )
}
