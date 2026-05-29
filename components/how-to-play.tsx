import { Eye, Shuffle, Trophy, Heart } from "lucide-react"

const steps = [
  {
    icon: Eye,
    title: "Look",
    description: "Study the masks laid face-up. Each one has a unique cultural identity."
  },
  {
    icon: Shuffle,
    title: "Match",
    description: "Flip cards and find matching pairs. Use your memory wisely."
  },
  {
    icon: Trophy,
    title: "Reveal",
    description: "Each mask has special powers. Strategic play wins the game."
  },
  {
    icon: Heart,
    title: "Connect",
    description: "Learn about masks from cultures around the world as you play."
  }
]

export function HowToPlay() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
            How it works
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
            Easy to learn. Hard to stay hidden.
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mask Off is a fast matching game for 2–7 players. Learn it in under a minute, play in 5–10 minutes, and discover how quickly a simple game can become personal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 rounded-2xl bg-secondary mx-auto flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                  <step.icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center">
                  {index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
