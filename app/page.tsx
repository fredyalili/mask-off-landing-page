import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowToPlay } from "@/components/how-to-play"
import { MaskCarousel } from "@/components/mask-carousel"
import { MediaSection } from "@/components/media-section"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HowToPlay />
      <MaskCarousel />
      <MediaSection />
      <Newsletter />
      <Footer />
    </main>
  )
}
