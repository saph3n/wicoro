import { Container } from "@/components/common/container"
import { Logo } from "@/components/common/logo"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container className="flex h-16 items-center">
        <Logo />
      </Container>
    </header>
  )
}
