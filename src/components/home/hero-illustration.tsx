import { GraduationCap, Hand } from "lucide-react"

import { cn } from "@/lib/utils"

interface HandProps {
  x: number
  y: number
  rotate: number
  skin: string
  shade: string
}

function RealisticHand({ x, y, rotate, skin, shade, gesture = "wave" }: HandProps & { gesture?: "wave" | "peace" }) {
  if (gesture === "wave") {
    return (
      <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
        <ellipse cx="0" cy="-8" rx="14" ry="18" fill={skin} />
        <ellipse cx="0" cy="-8" rx="12" ry="16" fill={shade} opacity="0.15" />
        <path d="M -12 -6 Q -18 -8 -22 -12 Q -24 -16 -22 -20 Q -20 -22 -17 -20 Q -14 -18 -12 -14 Z" fill={skin} />
        <path d="M -15 -12 Q -18 -14 -19 -17" stroke={shade} strokeWidth="1" fill="none" opacity="0.3" />
        <path d="M -6 -22 Q -7 -32 -6 -42 Q -5 -48 -3 -50 Q 0 -51 2 -49 Q 3 -46 2 -42 Q 1 -32 0 -22 Z" fill={skin} />
        <ellipse cx="-2" cy="-48" rx="3" ry="4" fill={skin} />
        <path d="M 0 -24 Q -1 -36 0 -48 Q 1 -55 3 -58 Q 6 -60 8 -57 Q 9 -54 8 -48 Q 7 -36 6 -24 Z" fill={skin} />
        <ellipse cx="4" cy="-56" rx="3" ry="4" fill={skin} />
        <path d="M 6 -22 Q 5 -34 6 -44 Q 7 -50 9 -52 Q 12 -54 14 -51 Q 15 -48 14 -44 Q 13 -34 12 -22 Z" fill={skin} />
        <ellipse cx="10" cy="-50" rx="3" ry="4" fill={skin} />
        <path d="M 12 -20 Q 11 -30 12 -38 Q 13 -43 15 -45 Q 17 -46 19 -44 Q 20 -41 19 -38 Q 18 -30 17 -20 Z" fill={skin} />
        <ellipse cx="15" cy="-43" rx="2.5" ry="3.5" fill={skin} />
        <path d="M -4 -30 Q -3 -28 -2 -30" stroke={shade} strokeWidth="0.8" fill="none" opacity="0.25" />
        <path d="M 2 -34 Q 3 -32 4 -34" stroke={shade} strokeWidth="0.8" fill="none" opacity="0.25" />
        <path d="M 8 -30 Q 9 -28 10 -30" stroke={shade} strokeWidth="0.8" fill="none" opacity="0.25" />
        <path d="M 14 -26 Q 15 -24 16 -26" stroke={shade} strokeWidth="0.8" fill="none" opacity="0.25" />
        <path d="M -8 -2 Q 0 -6 8 -2" stroke={shade} strokeWidth="1.2" fill="none" opacity="0.2" strokeLinecap="round" />
        <path d="M -6 2 Q 0 -1 6 2" stroke={shade} strokeWidth="1" fill="none" opacity="0.15" strokeLinecap="round" />
      </g>
    )
  }
  
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <ellipse cx="0" cy="-8" rx="14" ry="18" fill={skin} />
      <ellipse cx="0" cy="-8" rx="12" ry="16" fill={shade} opacity="0.15" />
      <path d="M -12 -6 Q -16 -4 -18 -2 Q -19 0 -17 2 Q -15 3 -13 1 Q -11 -1 -10 -4 Z" fill={skin} />
      <path d="M -6 -22 Q -7 -34 -6 -46 Q -5 -53 -3 -56 Q 0 -58 2 -55 Q 3 -52 2 -46 Q 1 -34 0 -22 Z" fill={skin} />
      <ellipse cx="-2" cy="-54" rx="3" ry="4.5" fill={skin} />
      <path d="M 0 -24 Q -1 -38 0 -52 Q 1 -60 3 -64 Q 6 -66 8 -63 Q 9 -59 8 -52 Q 7 -38 6 -24 Z" fill={skin} />
      <ellipse cx="4" cy="-62" rx="3" ry="4.5" fill={skin} />
      <path d="M 8 -18 Q 10 -22 12 -24 Q 14 -25 15 -23 Q 16 -21 15 -19 Q 13 -16 11 -14 Z" fill={skin} />
      <path d="M 12 -14 Q 14 -16 15 -18 Q 16 -19 17 -17 Q 18 -15 17 -13 Q 15 -11 13 -10 Z" fill={skin} />
      <path d="M -4 -34 Q -3 -32 -2 -34" stroke={shade} strokeWidth="0.8" fill="none" opacity="0.25" />
      <path d="M 2 -40 Q 3 -38 4 -40" stroke={shade} strokeWidth="0.8" fill="none" opacity="0.25" />
      <path d="M -8 -2 Q 0 -6 8 -2" stroke={shade} strokeWidth="1.2" fill="none" opacity="0.2" strokeLinecap="round" />
    </g>
  )
}

interface HeroIllustrationProps {
  className?: string
}

export function HeroIllustration({ className }: HeroIllustrationProps) {
  return (
    <div className={cn("relative", className)}>
      <div
        aria-hidden="true"
        className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-mint/50 via-mint-deep/20 to-coral-light/60 blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[2rem] border bg-white/80 p-3 shadow-2xl shadow-primary/15 backdrop-blur sm:p-5">
        <svg
          viewBox="0 0 640 520"
          role="img"
          aria-label="Dua orang berkomunikasi menggunakan Bahasa Isyarat Indonesia"
          className="h-auto w-full"
        >
          <defs>
            <radialGradient id="bgGrad" cx="50%" cy="42%" r="62%">
              <stop offset="0%" stopColor="#E9F7EF" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </radialGradient>
            <linearGradient id="skinA" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F5D5B8" />
              <stop offset="100%" stopColor="#E8B896" />
            </linearGradient>
            <linearGradient id="skinB" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D4A574" />
              <stop offset="100%" stopColor="#C08A5C" />
            </linearGradient>
            <linearGradient id="hairA" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#4A3528" />
              <stop offset="100%" stopColor="#2C1F16" />
            </linearGradient>
            <linearGradient id="hairB" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3D3342" />
              <stop offset="100%" stopColor="#1E1820" />
            </linearGradient>
            <linearGradient id="shirtA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8FD0AC" />
              <stop offset="100%" stopColor="#5FB78A" />
            </linearGradient>
            <linearGradient id="shirtB" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F8B0C4" />
              <stop offset="100%" stopColor="#EA83A2" />
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
              <feOffset dx="0" dy="2" result="offsetblur"/>
              <feComponentTransfer>
                <feFuncA type="linear" slope="0.3"/>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <circle cx="320" cy="262" r="205" fill="url(#bgGrad)" />
          <ellipse cx="195" cy="335" rx="125" ry="112" fill="#D8F0E2" opacity="0.55" />
          <ellipse cx="455" cy="350" rx="130" ry="120" fill="#FBDCE7" opacity="0.5" />
          <circle
            cx="320"
            cy="272"
            r="150"
            fill="none"
            stroke="#BFE3CD"
            strokeWidth="1.5"
            strokeDasharray="3 12"
            strokeLinecap="round"
            opacity="0.8"
          />
          <ellipse cx="320" cy="448" rx="210" ry="16" fill="#E9F5EC" />
          <ellipse cx="206" cy="450" rx="74" ry="10" fill="#CFE4D4" opacity="0.7" />
          <ellipse cx="434" cy="450" rx="74" ry="10" fill="#EBC9D4" opacity="0.7" />

          <g filter="url(#softShadow)">
            <ellipse cx="206" cy="238" rx="16" ry="18" fill="url(#skinA)" />
            <path d="M 150 250 C 152 246 160 244 206 244 C 252 244 260 246 262 250 L 262 420 C 262 440 250 446 236 446 L 178 446 C 164 446 150 440 150 420 Z" fill="url(#shirtA)" />
            <path d="M 188 246 L 206 266 L 224 246" stroke="#4E9E78" strokeWidth="2.2" fill="none" strokeLinejoin="round" strokeLinecap="round" opacity="0.7" />
            <ellipse cx="206" cy="320" rx="48" ry="85" fill="#68B88E" opacity="0.12" />
            <ellipse cx="206" cy="205" rx="42" ry="48" fill="url(#skinA)" />
            <path d="M 164 205 C 164 165 175 140 206 136 C 237 140 248 165 248 205 L 245 215 C 242 180 230 155 206 152 C 182 155 170 180 167 215 Z" fill="url(#hairA)" />
            <ellipse cx="206" cy="148" rx="38" ry="22" fill="url(#hairA)" />
            <circle cx="170" cy="185" r="12" fill="url(#hairA)" />
            <circle cx="242" cy="185" r="12" fill="url(#hairA)" />
            <path d="M 175 165 Q 185 155 206 153 Q 227 155 237 165" fill="url(#hairA)" />
            <ellipse cx="172" cy="210" rx="7" ry="10" fill="#E8A882" />
            <ellipse cx="172" cy="210" rx="4" ry="6" fill="#DFA078" />
            <ellipse cx="188" cy="222" rx="9" ry="5" fill="#F0A890" opacity="0.6" />
            <ellipse cx="224" cy="222" rx="9" ry="5" fill="#F0A890" opacity="0.6" />
            <g>
              <ellipse cx="192" cy="207" rx="11" ry="8" fill="#FFFFFF" />
              <circle cx="192" cy="207" r="5.5" fill="#705C42" />
              <circle cx="193" cy="207" r="3" fill="#2A1F14" />
              <circle cx="194" cy="205.5" r="1.5" fill="#FFFFFF" opacity="0.9" />
              <path d="M 182 200 Q 192 196 202 200" stroke="#C8935F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 183 203 Q 192 201 201 203" stroke="#3A2A1E" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.8" />
            </g>
            <g>
              <ellipse cx="220" cy="207" rx="11" ry="8" fill="#FFFFFF" />
              <circle cx="220" cy="207" r="5.5" fill="#705C42" />
              <circle cx="221" cy="207" r="3" fill="#2A1F14" />
              <circle cx="222" cy="205.5" r="1.5" fill="#FFFFFF" opacity="0.9" />
              <path d="M 210 200 Q 220 196 230 200" stroke="#C8935F" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 211 203 Q 220 201 229 203" stroke="#3A2A1E" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.8" />
            </g>
            <path d="M 206 210 L 206 228" stroke="#D8A07A" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M 201 226 Q 206 230 211 226" stroke="#D8A07A" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <ellipse cx="202" cy="227" rx="2.5" ry="3" fill="#C8935F" opacity="0.4" />
            <ellipse cx="210" cy="227" rx="2.5" ry="3" fill="#C8935F" opacity="0.4" />
            <path d="M 195 237 Q 206 243 217 237" stroke="#B86F54" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            <path d="M 197 238 Q 206 242 215 238" stroke="#E8A88A" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.6" />
            <ellipse cx="206" cy="240" rx="8" ry="3" fill="#C97862" opacity="0.3" />
            <path d="M 172 264 C 162 242 158 226 158 210" stroke="url(#shirtA)" strokeWidth="28" strokeLinecap="round" fill="none" />
            <path d="M 158 210 C 153 190 150 176 150 164" stroke="url(#skinA)" strokeWidth="18" strokeLinecap="round" fill="none" />
            <ellipse cx="150" cy="188" rx="10" ry="8" fill="#E8B896" opacity="0.3" transform="rotate(-15 150 188)" />
            <RealisticHand x={150} y={158} rotate={-8} skin="url(#skinA)" shade="#D8A07A" gesture="wave" />
            <path d="M 240 274 C 253 268 260 258 258 248" stroke="url(#shirtA)" strokeWidth="28" strokeLinecap="round" fill="none" />
            <path d="M 258 248 C 254 242 248 239 242 238" stroke="url(#skinA)" strokeWidth="18" strokeLinecap="round" fill="none" />
            <ellipse cx="250" cy="260" rx="10" ry="8" fill="#E8B896" opacity="0.3" transform="rotate(20 250 260)" />
            <RealisticHand x={240} y={240} rotate={5} skin="url(#skinA)" shade="#D8A07A" gesture="wave" />
          </g>

          <g filter="url(#softShadow)">
            <ellipse cx="434" cy="238" rx="16" ry="18" fill="url(#skinB)" />
            <path d="M 378 250 C 380 246 388 244 434 244 C 480 244 488 246 490 250 L 490 420 C 490 440 478 446 464 446 L 406 446 C 392 446 378 440 378 420 Z" fill="url(#shirtB)" />
            <path d="M 414 246 L 434 266 L 452 246" stroke="#D76A8D" strokeWidth="2.2" fill="none" strokeLinejoin="round" strokeLinecap="round" opacity="0.7" />
            <ellipse cx="434" cy="320" rx="48" ry="85" fill="#EA83A2" opacity="0.12" />
            <ellipse cx="434" cy="205" rx="42" ry="48" fill="url(#skinB)" />
            <circle cx="408" cy="175" r="16" fill="url(#hairB)" />
            <circle cx="422" cy="168" r="18" fill="url(#hairB)" />
            <circle cx="438" cy="166" r="18" fill="url(#hairB)" />
            <circle cx="454" cy="169" r="17" fill="url(#hairB)" />
            <circle cx="468" cy="178" r="15" fill="url(#hairB)" />
            <circle cx="405" cy="190" r="14" fill="url(#hairB)" />
            <circle cx="417" cy="184" r="15" fill="url(#hairB)" />
            <circle cx="451" cy="184" r="15" fill="url(#hairB)" />
            <circle cx="463" cy="190" r="14" fill="url(#hairB)" />
            <ellipse cx="434" cy="195" rx="45" ry="32" fill="url(#hairB)" />
            <ellipse cx="468" cy="210" rx="7" ry="10" fill="#C08A5C" />
            <ellipse cx="468" cy="210" rx="4" ry="6" fill="#B07A4E" />
            <circle cx="468" cy="217" r="3.5" fill="none" stroke="#F0A890" strokeWidth="1.5" />
            <circle cx="468" cy="220" r="2.5" fill="#F0A890" />
            <ellipse cx="416" cy="222" rx="9" ry="5" fill="#E08464" opacity="0.6" />
            <ellipse cx="452" cy="222" rx="9" ry="5" fill="#E08464" opacity="0.6" />
            <g>
              <ellipse cx="418" cy="207" rx="11" ry="8" fill="#FFFFFF" />
              <circle cx="418" cy="207" r="5.5" fill="#5C4633" />
              <circle cx="417" cy="207" r="3" fill="#1F1810" />
              <circle cx="416" cy="205.5" r="1.5" fill="#FFFFFF" opacity="0.9" />
              <path d="M 408 200 Q 418 196 428 200" stroke="#B07549" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 409 203 Q 418 201 427 203" stroke="#2E2730" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.8" />
            </g>
            <g>
              <ellipse cx="450" cy="207" rx="11" ry="8" fill="#FFFFFF" />
              <circle cx="450" cy="207" r="5.5" fill="#5C4633" />
              <circle cx="449" cy="207" r="3" fill="#1F1810" />
              <circle cx="448" cy="205.5" r="1.5" fill="#FFFFFF" opacity="0.9" />
              <path d="M 440 200 Q 450 196 460 200" stroke="#B07549" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <path d="M 441 203 Q 450 201 459 203" stroke="#2E2730" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.8" />
            </g>
            <path d="M 434 210 L 434 228" stroke="#B87A52" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M 429 226 Q 434 230 439 226" stroke="#B87A52" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <ellipse cx="430" cy="227" rx="2.5" ry="3" fill="#A06B48" opacity="0.4" />
            <ellipse cx="438" cy="227" rx="2.5" ry="3" fill="#A06B48" opacity="0.4" />
            <path d="M 422 237 Q 434 243 446 237" stroke="#8C4A33" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            <path d="M 424 238 Q 434 242 444 238" stroke="#C08A5C" strokeWidth="1.3" strokeLinecap="round" fill="none" opacity="0.6" />
            <ellipse cx="434" cy="240" rx="8" ry="3" fill="#A05840" opacity="0.3" />
            <path d="M 468 264 C 478 242 482 226 482 210" stroke="url(#shirtB)" strokeWidth="28" strokeLinecap="round" fill="none" />
            <path d="M 482 210 C 487 190 490 176 490 164" stroke="url(#skinB)" strokeWidth="18" strokeLinecap="round" fill="none" />
            <ellipse cx="490" cy="188" rx="10" ry="8" fill="#C08A5C" opacity="0.3" transform="rotate(15 490 188)" />
            <RealisticHand x={491} y={158} rotate={8} skin="url(#skinB)" shade="#A06B48" gesture="wave" />
            <path d="M 400 274 C 387 268 380 258 382 248" stroke="url(#shirtB)" strokeWidth="28" strokeLinecap="round" fill="none" />
            <path d="M 382 248 C 386 242 392 239 398 238" stroke="url(#skinB)" strokeWidth="18" strokeLinecap="round" fill="none" />
            <ellipse cx="390" cy="260" rx="10" ry="8" fill="#C08A5C" opacity="0.3" transform="rotate(-20 390 260)" />
            <RealisticHand x={400} y={242} rotate={-12} skin="url(#skinB)" shade="#A06B48" gesture="peace" />
          </g>

          <g strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.8">
            <path d="M 122 116 q -12 -10 0 -22" stroke="#7CC8A0" />
            <circle cx="122" cy="92" r="3" fill="#7CC8A0" stroke="none" />
            <path d="M 520 116 q 12 -10 0 -22" stroke="#F08AA8" />
            <circle cx="520" cy="92" r="3" fill="#F08AA8" stroke="none" />
          </g>

          <g>
            <rect x="36" y="36" width="132" height="46" rx="23" fill="#FFFFFF" stroke="#A8DCBF" strokeWidth="2.5" />
            <path d="M 150 82 L 164 104 L 174 80 Z" fill="#FFFFFF" stroke="#A8DCBF" strokeWidth="2.5" strokeLinejoin="round" />
            <text x="102" y="66" textAnchor="middle" fontSize="20" fontWeight="700" fill="#268A5E" fontFamily="system-ui, -apple-system, sans-serif">
              Halo!
            </text>
          </g>
          <g>
            <rect x="456" y="36" width="148" height="46" rx="23" fill="#FFFFFF" stroke="#F6A8BF" strokeWidth="2.5" />
            <path d="M 476 82 L 464 104 L 454 80 Z" fill="#FFFFFF" stroke="#F6A8BF" strokeWidth="2.5" strokeLinejoin="round" />
            <text x="530" y="66" textAnchor="middle" fontSize="20" fontWeight="700" fill="#E0507C" fontFamily="system-ui, -apple-system, sans-serif">
              Salam!
            </text>
          </g>

          <path
            d="M0 -10 L2.5 -2.5 L10 0 L2.5 2.5 L0 10 L-2.5 2.5 L-10 0 L-2.5 -2.5 Z"
            fill="#7CC8A0"
            transform="translate(96 300) scale(0.9)"
          />
          <path
            d="M0 -10 L2.5 -2.5 L10 0 L2.5 2.5 L0 10 L-2.5 2.5 L-10 0 L-2.5 -2.5 Z"
            fill="#F08AA8"
            transform="translate(556 296) scale(0.7)"
          />
          <path
            d="M0 -10 L2.5 -2.5 L10 0 L2.5 2.5 L0 10 L-2.5 2.5 L-10 0 L-2.5 -2.5 Z"
            fill="#FFC4D6"
            transform="translate(86 178) scale(0.6)"
          />
          <path
            d="M0 -10 L2.5 -2.5 L10 0 L2.5 2.5 L0 10 L-2.5 2.5 L-10 0 L-2.5 -2.5 Z"
            fill="#7CC8A0"
            transform="translate(560 196) scale(0.85)"
          />
          <path
            d="M 0 -4 C 0 -7 -6 -7 -6 -4 C -6 -1 0 3 0 5 C 0 3 6 -1 6 -4 C 6 -7 0 -7 0 -4 Z"
            fill="#F6A8BF"
            transform="translate(300 96)"
          />
          <path
            d="M 0 -3 C 0 -5 -4.5 -5 -4.5 -3 C -4.5 -1 0 2 0 3.5 C 0 2 4.5 -1 4.5 -3 C 4.5 -5 0 -5 0 -3 Z"
            fill="#B9E8CD"
            transform="translate(540 240)"
          />
          <circle cx="110" cy="380" r="3.5" fill="#BFE3CD" />
          <circle cx="534" cy="250" r="4.5" fill="#F6A8BF" opacity="0.7" />
          <circle cx="300" cy="200" r="4" fill="#D8F0E2" />
        </svg>
      </div>

      <div className="absolute -top-5 right-2 z-10 hidden animate-float items-center gap-2 rounded-2xl border bg-white/90 px-3.5 py-2.5 shadow-xl shadow-primary/10 backdrop-blur sm:flex">
        <span className="flex size-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Hand className="size-4" />
        </span>
        <span>
          <span className="block text-xs font-semibold leading-tight">100+ Isyarat</span>
          <span className="block text-[11px] leading-tight text-muted-foreground">untuk dikuasai</span>
        </span>
      </div>

      <div className="absolute -bottom-5 -left-2 z-10 hidden animate-float-slow items-center gap-2 rounded-2xl border bg-white/90 px-3.5 py-2.5 shadow-xl shadow-primary/10 backdrop-blur sm:flex">
        <span className="flex size-8 items-center justify-center rounded-xl bg-coral/10 text-coral">
          <GraduationCap className="size-4" />
        </span>
        <span>
          <span className="block text-xs font-semibold leading-tight">Pelajaran Interaktif</span>
          <span className="block text-[11px] leading-tight text-muted-foreground">latihan harian</span>
        </span>
      </div>
    </div>
  )
}
