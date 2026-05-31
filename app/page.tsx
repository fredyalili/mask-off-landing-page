import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { MediaSection } from "@/components/media-section"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <MediaSection />
      <Newsletter />
      <Footer />
    </main>
  )
}
