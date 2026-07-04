import { Shapes, Layers, Zap, Swords } from "lucide-react"

const steps = [
  {
    icon: Shapes,
    title: "Match masks",
    description: "Play cards that match the mask on the table.",
  },
  {
    icon: Layers,
    title: "Get rid of your cards",
    description: "Empty your hand before anyone else to win.",
  },
  {
    icon: Zap,
    title: "Use power masks",
    description: "Special masks change the rules and shift momentum.",
  },
  {
    icon: Swords,
    title: "React when the table turns",
    description: "Stay sharp — the game can turn against you fast.",
  },
]

export function HowToPlay() {
  return (
    <section className="py-24 md:py-32 bg-secondary/40 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
            How it plays
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Easy to learn. Hard to stay hidden.
          </h2>
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
