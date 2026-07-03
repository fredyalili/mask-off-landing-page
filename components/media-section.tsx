import { ImageIcon } from "lucide-react"

export function MediaSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
            See it in action
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
            Watch People Play
          </h2>
          <p className="text-muted-foreground text-lg">
            The best way to understand Mask Off is to see people play.
          </p>
        </div>

        {/* Gameplay photos / videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-2xl bg-card border border-border flex flex-col items-center justify-center text-muted-foreground shadow-sm"
            >
              <ImageIcon className="h-8 w-8 mb-2" />
              <p className="text-xs">Gameplay {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
