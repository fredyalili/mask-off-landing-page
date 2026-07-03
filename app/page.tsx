import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { LaunchGoal } from "@/components/launch-goal"
import { SignupSection } from "@/components/signup-section"
import { MediaSection } from "@/components/media-section"
import { HowToPlay } from "@/components/how-to-play"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <LaunchGoal />
      <SignupSection />
      <MediaSection />
      <HowToPlay />
      <Footer />
    </main>
  )
}
