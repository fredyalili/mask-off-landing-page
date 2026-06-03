import { ImageIcon } from "lucide-react"

export function MediaSection() {
  return (
    <section className="pt-12 pb-24 md:pt-16 md:pb-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
            See it in action
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Watch & Play
          </h2>
        </div>

        {/* Video */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-border">
            <iframe
              src="https://www.youtube.com/embed/CE9XGLssx_U?si=QvKQDno4dh5lP5y1"
              title="Mask Off Game Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Photo Gallery Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-card border border-border flex flex-col items-center justify-center text-muted-foreground shadow-sm"
            >
              <ImageIcon className="h-8 w-8 mb-2" />
              <p className="text-xs">Gameplay Photo {i}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
