import { GraduationCap, Hand } from "lucide-react"

import { cn } from "@/lib/utils"

interface HandProps {
  x: number
  y: number
  rotate: number
  skin: string
  shade: string
}

function OpenPalm({ x, y, rotate, skin, shade }: HandProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <g fill={skin}>
        <path d="M 7 -30 C 6.6 -42 7.1 -48 9.2 -52 Q 11.4 -54.5 11.6 -51.5 C 12 -48 12.2 -42 12 -30 L 10.8 -25.5 L 8.2 -25.5 Z" />
        <path d="M 1.5 -31 C 1.2 -45 1.7 -53 3.8 -58 Q 6 -61 6.4 -57.5 C 6.8 -53 6.9 -45 6.7 -31 L 5.5 -26 L 2.7 -26 Z" />
        <path d="M -4.3 -31 C -4.6 -47 -4.1 -56 -2 -61.5 Q 0.2 -65 0.6 -61 C 1 -56 1.1 -47 0.9 -31 L -0.3 -26 L -3.1 -26 Z" />
        <path d="M -10.3 -30 C -10.7 -43 -10.2 -50 -8.1 -55 Q -5.9 -58 -5.7 -54.5 C -5.3 -50 -5.1 -43 -5.3 -30 L -6.5 -25.5 L -9.1 -25.5 Z" />
        <path d="M -13 -7 C -20 -9 -25 -15 -26 -21 C -27 -26 -25 -29 -22 -28 C -19 -27 -16 -21 -13 -15 C -13 -12 -13 -9 -13 -7 Z" />
        <path d="M -13 -13 C -16 -21 -16 -29 -11 -33 L 11 -33 C 16 -29 16 -21 13 -13 C 11 -1 5 6 0 6 C -5 6 -11 -1 -13 -13 Z" />
      </g>
      <g stroke={shade} strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.55">
        <path d="M -8 -29 Q -6.5 -26.5 -5 -29" />
        <path d="M -2.5 -31 Q -1 -28.5 0.5 -31" />
        <path d="M 3 -30 Q 4.5 -27.5 6 -30" />
        <path d="M 8.5 -29 Q 10 -26.5 11.5 -29" />
        <path d="M -11 -6 Q 0 -11 11 -6" />
      </g>
    </g>
  )
}

function SpreadPalm({ x, y, rotate, skin, shade }: HandProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <g fill={skin}>
        <path d="M 7 -29 C 6.3 -41 6.8 -46 9.2 -49 Q 11.6 -51 12.2 -48.5 C 12.9 -45.5 13.2 -41 12.8 -29 L 11.4 -24.5 L 8.6 -24.5 Z" />
        <path d="M 1.2 -31 C 0.7 -44 1.3 -51 3.6 -55.5 Q 6 -58.5 6.7 -55 C 7.4 -51 7.6 -44 7.2 -31 L 5.8 -26 L 2.6 -26 Z" />
        <path d="M -4.6 -31 C -5.1 -47 -4.5 -55 -2.2 -60 Q 0.2 -63.5 1 -59.5 C 1.7 -55 1.9 -47 1.4 -31 L 0 -26 L -3.2 -26 Z" />
        <path d="M -10.9 -29 C -11.9 -42 -11.2 -49 -8.4 -53.5 Q -5.7 -56.5 -4.7 -52.5 C -3.8 -48.5 -3.5 -42 -4.2 -29 L -5.8 -24.5 L -9.4 -24.5 Z" />
        <path d="M -15 -6 C -23 -8 -28 -14 -29.5 -20 C -30.5 -25 -28 -28 -25 -27 C -22 -26 -18.5 -20 -15 -13 C -15 -10 -15 -8 -15 -6 Z" />
        <path d="M -12 -13 C -15 -21 -15 -29 -10 -33 L 10 -33 C 15 -29 15 -21 12 -13 C 10 -1 5 6 0 6 C -5 6 -10 -1 -12 -13 Z" />
      </g>
      <g stroke={shade} strokeWidth="1.1" fill="none" strokeLinecap="round" opacity="0.55">
        <path d="M -8.5 -28.5 Q -7 -26 -5.5 -28.5" />
        <path d="M -2.5 -31 Q -1 -28.5 0.5 -31" />
        <path d="M 3 -30 Q 4.5 -27.5 6 -30" />
        <path d="M 9 -28 Q 10.5 -25.5 12 -28" />
        <path d="M -12 -6 Q 0 -11 12 -6" />
      </g>
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
              <stop offset="0%" stopColor="#F3CBA0" />
              <stop offset="100%" stopColor="#E2AA76" />
            </linearGradient>
            <linearGradient id="skinB" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#D09A67" />
              <stop offset="100%" stopColor="#B07849" />
            </linearGradient>
            <linearGradient id="hairA" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5A4336" />
              <stop offset="100%" stopColor="#3A2A1E" />
            </linearGradient>
            <linearGradient id="hairB" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#453B4A" />
              <stop offset="100%" stopColor="#241F2B" />
            </linearGradient>
            <linearGradient id="shirtA" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8FD0AC" />
              <stop offset="100%" stopColor="#5FB78A" />
            </linearGradient>
            <linearGradient id="shirtB" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#F8B0C4" />
              <stop offset="100%" stopColor="#EA83A2" />
            </linearGradient>
          </defs>

          {/* Background */}
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

          {/* Left character */}
          <g>
            <ellipse cx="170" cy="212" rx="8" ry="11" fill="url(#skinA)" />
            <ellipse cx="206" cy="194" rx="44" ry="48" fill="url(#hairA)" />
            <ellipse cx="206" cy="205" rx="36" ry="41" fill="url(#skinA)" />
            <path
              d="M 172 202 C 170 156 186 134 206 134 C 226 134 242 156 240 202 C 240 214 238 222 234 226 C 230 214 228 200 226 196 C 226 166 218 152 206 152 C 194 152 186 166 186 196 C 184 200 182 214 178 226 C 174 222 172 214 172 202 Z"
              fill="url(#hairA)"
            />
            <path
              d="M 170 196 C 166 214 166 228 170 240"
              stroke="#3A2A1E"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
            <circle cx="206" cy="126" r="15" fill="url(#hairA)" />
            <circle cx="206" cy="140" r="6.5" fill="#F08AA8" />
            <path d="M 192 238 L 220 238 L 216 268 L 196 268 Z" fill="url(#skinA)" />

            <path d="M 150 250 C 152 246 160 244 206 244 C 252 244 260 246 262 250 L 262 420 C 262 440 250 446 236 446 L 178 446 C 164 446 150 440 150 420 Z" fill="url(#shirtA)" />

            <path d="M 188 246 L 206 266 L 224 246" stroke="#4E9E78" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" opacity="0.85" />

            {/* Far arm - open palm wave */}
            <path d="M 172 264 C 162 242 158 226 158 210" stroke="url(#shirtA)" strokeWidth="27" strokeLinecap="round" fill="none" />
            <path d="M 158 210 C 153 190 150 176 150 164" stroke="url(#skinA)" strokeWidth="17" strokeLinecap="round" fill="none" />
            <OpenPalm x={150} y={158} rotate={-8} skin="url(#skinA)" shade="#CF9A63" />

            {/* Near arm - thumb to chest (isyarat "saya") */}
            <path d="M 246 294 C 259 278 264 260 256 250" stroke="url(#shirtA)" strokeWidth="27" strokeLinecap="round" fill="none" />
            <path d="M 258 252 C 252 244 246 240 242 238" stroke="url(#skinA)" strokeWidth="17" strokeLinecap="round" fill="none" />
            <OpenPalm x={240} y={240} rotate={0} skin="url(#skinA)" shade="#CF9A63" />

            {/* Face */}
            <path d="M 183 207 Q 191 199 200 207 Q 191 215 183 207 Z" fill="#FFFFFF" />
            <circle cx="194" cy="207" r="4.4" fill="#6B5136" />
            <circle cx="195.4" cy="207" r="2.1" fill="#241B14" />
            <circle cx="196.5" cy="205.8" r="0.9" fill="#FFFFFF" />
            <path d="M 183 207 Q 191 200 200 207" stroke="#A8704C" strokeWidth="1.3" fill="none" />
            <path d="M 213 207 Q 221 199 230 207 Q 221 215 213 207 Z" fill="#FFFFFF" />
            <circle cx="224" cy="207" r="4.4" fill="#6B5136" />
            <circle cx="225.4" cy="207" r="2.1" fill="#241B14" />
            <circle cx="226.5" cy="205.8" r="0.9" fill="#FFFFFF" />
            <path d="M 213 207 Q 221 200 230 207" stroke="#A8704C" strokeWidth="1.3" fill="none" />
            <path d="M 184 196 Q 191 192 198 195" stroke="#4A362A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M 214 195 Q 221 192 228 196" stroke="#4A362A" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M 214 210 C 217 218 214 223 210 225" stroke="#CE9567" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            <path d="M 198 232 C 205 237 215 235 221 228" stroke="#A94F3C" strokeWidth="2.3" strokeLinecap="round" fill="none" />
            <path d="M 202 233 C 207 237 213 235 217 230" stroke="#C96B55" strokeWidth="1.1" opacity="0.55" fill="none" />
            <ellipse cx="189" cy="222" rx="7" ry="4.2" fill="#F09B7E" opacity="0.5" />
            <ellipse cx="224" cy="222" rx="7" ry="4.2" fill="#F09B7E" opacity="0.5" />
            <circle cx="186" cy="219" r="1" fill="#C78F62" opacity="0.55" />
            <circle cx="190" cy="224" r="1" fill="#C78F62" opacity="0.55" />
            <circle cx="184" cy="227" r="1" fill="#C78F62" opacity="0.55" />
          </g>

          {/* Right character */}
          <g>
            <ellipse cx="468" cy="212" rx="8" ry="11" fill="url(#skinB)" />
            <path d="M 468 200 C 476 198 479 206 476 214" stroke="#E3B48D" strokeWidth="3" fill="none" strokeLinecap="round" />
            <circle cx="477" cy="212" r="2.2" fill="#F08AA8" />
            <ellipse cx="434" cy="193" rx="44" ry="47" fill="url(#hairB)" />
            <ellipse cx="434" cy="205" rx="35" ry="40" fill="url(#skinB)" />
            <circle cx="404" cy="190" r="9" fill="url(#hairB)" />
            <circle cx="420" cy="184" r="10.5" fill="url(#hairB)" />
            <circle cx="436" cy="183" r="10.5" fill="url(#hairB)" />
            <circle cx="452" cy="185" r="10" fill="url(#hairB)" />
            <circle cx="466" cy="192" r="8.5" fill="url(#hairB)" />
            <circle cx="400" cy="202" r="7.5" fill="url(#hairB)" />
            <circle cx="468" cy="202" r="7.5" fill="url(#hairB)" />
            <path d="M 424 238 L 444 238 L 440 268 L 428 268 Z" fill="url(#skinB)" />

            <path d="M 378 250 C 380 246 388 244 434 244 C 480 244 488 246 490 250 L 490 420 C 490 440 478 446 464 446 L 406 446 C 392 446 378 440 378 420 Z" fill="url(#shirtB)" />

            <path d="M 414 246 L 434 266 L 452 246" stroke="#D76A8D" strokeWidth="2" fill="none" strokeLinejoin="round" strokeLinecap="round" opacity="0.85" />

            {/* Far arm - thumbs up */}
            <path d="M 468 264 C 478 242 482 226 482 210" stroke="url(#shirtB)" strokeWidth="27" strokeLinecap="round" fill="none" />
            <path d="M 482 210 C 487 190 490 176 490 164" stroke="url(#skinB)" strokeWidth="17" strokeLinecap="round" fill="none" />
            <SpreadPalm x={491} y={158} rotate={8} skin="url(#skinB)" shade="#9A6638" />

            {/* Near arm - peace sign */}
            <path d="M 394 294 C 381 278 376 260 384 250" stroke="url(#shirtB)" strokeWidth="27" strokeLinecap="round" fill="none" />
            <path d="M 382 252 C 388 244 394 240 398 238" stroke="url(#skinB)" strokeWidth="17" strokeLinecap="round" fill="none" />
            <SpreadPalm x={400} y={242} rotate={-12} skin="url(#skinB)" shade="#9A6638" />

            {/* Face */}
            <path d="M 410 207 Q 418 199 427 207 Q 418 215 410 207 Z" fill="#FFFFFF" />
            <circle cx="416" cy="207" r="4.4" fill="#5C4A33" />
            <circle cx="414.6" cy="207" r="2.1" fill="#1F1810" />
            <circle cx="413.5" cy="205.8" r="0.9" fill="#FFFFFF" />
            <path d="M 410 207 Q 418 200 427 207" stroke="#9A6C42" strokeWidth="1.3" fill="none" />
            <path d="M 440 207 Q 448 199 457 207 Q 448 215 440 207 Z" fill="#FFFFFF" />
            <circle cx="444" cy="207" r="4.4" fill="#5C4A33" />
            <circle cx="442.6" cy="207" r="2.1" fill="#1F1810" />
            <circle cx="441.5" cy="205.8" r="0.9" fill="#FFFFFF" />
            <path d="M 440 207 Q 448 200 457 207" stroke="#9A6C42" strokeWidth="1.3" fill="none" />
            <path d="M 411 196 Q 418 192 425 195" stroke="#2E2730" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M 441 195 Q 448 192 455 196" stroke="#2E2730" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <path d="M 426 210 C 423 218 426 223 430 225" stroke="#B07C4F" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            <path d="M 422 232 C 429 236 439 234 445 228" stroke="#8C4A33" strokeWidth="2.3" strokeLinecap="round" fill="none" />
            <path d="M 426 233 C 431 237 436 235 440 230" stroke="#B06A50" strokeWidth="1.1" opacity="0.55" fill="none" />
            <ellipse cx="416" cy="222" rx="7" ry="4.2" fill="#E08464" opacity="0.5" />
            <ellipse cx="452" cy="222" rx="7" ry="4.2" fill="#E08464" opacity="0.5" />
            <circle cx="452" cy="219" r="1" fill="#B07849" opacity="0.6" />
            <circle cx="456" cy="224" r="1" fill="#B07849" opacity="0.6" />
            <circle cx="460" cy="220" r="1" fill="#B07849" opacity="0.6" />
          </g>

          {/* Signing motion arcs */}
          <g strokeWidth="3" strokeLinecap="round" fill="none">
            <path d="M 122 116 q -12 -10 0 -22" stroke="#7CC8A0" />
            <circle cx="122" cy="92" r="3" fill="#7CC8A0" stroke="none" />
            <path d="M 520 116 q 12 -10 0 -22" stroke="#F08AA8" />
            <circle cx="520" cy="92" r="3" fill="#F08AA8" stroke="none" />
          </g>

          {/* Speech bubbles */}
          <g>
            <rect x="36" y="36" width="132" height="46" rx="23" fill="#FFFFFF" stroke="#A8DCBF" strokeWidth="2" />
            <path d="M 150 82 L 164 104 L 174 80 Z" fill="#FFFFFF" stroke="#A8DCBF" strokeWidth="2" strokeLinejoin="round" />
            <text x="102" y="65" textAnchor="middle" fontSize="19" fontWeight="700" fill="#268A5E">
              Halo!
            </text>
          </g>
          <g>
            <rect x="456" y="36" width="148" height="46" rx="23" fill="#FFFFFF" stroke="#F6A8BF" strokeWidth="2" />
            <path d="M 476 82 L 464 104 L 454 80 Z" fill="#FFFFFF" stroke="#F6A8BF" strokeWidth="2" strokeLinejoin="round" />
            <text x="530" y="65" textAnchor="middle" fontSize="19" fontWeight="700" fill="#E0507C">
              Salam!
            </text>
          </g>

          {/* Sparkles and hearts */}
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
          <circle cx="110" cy="380" r="3" fill="#BFE3CD" />
          <circle cx="534" cy="250" r="4" fill="#F6A8BF" opacity="0.7" />
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
