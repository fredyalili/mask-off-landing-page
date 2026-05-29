import Image from "next/image"
import { Users, Clock, Zap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-16 flex items-center overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-32 md:w-48 md:h-48 opacity-10 dark:opacity-5">
          <Image src="/masks/bamileke-mask.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute top-40 right-10 w-24 h-24 md:w-40 md:h-40 opacity-10 dark:opacity-5">
          <Image src="/masks/kyogen-mask.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 md:w-36 md:h-36 opacity-10 dark:opacity-5">
          <Image src="/masks/maori-mask.svg" alt="" fill className="object-contain" />
        </div>
        <div className="absolute bottom-40 right-1/4 w-20 h-20 md:w-32 md:h-32 opacity-10 dark:opacity-5">
          <Image src="/masks/tlaloc-mask.svg" alt="" fill className="object-contain" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
              A new matching card game
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight mb-6">
              Win Your<br />
              <span className="text-accent">True Self.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
              A matching card game that feels familiar and strange.
            </p>

            {/* Email Signup */}
            <div className="mb-12">
              <p className="text-sm text-muted-foreground mb-3">Sign up for launch day</p>
              <div 
                dangerouslySetInnerHTML={{
                  __html: `<script async src="https://subscribe-forms.beehiiv.com/v3/loader.js" data-beehiiv-form="d1aa3e6e-fa4a-40b4-9120-20818346c198"></script>`
                }}
              />
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Users className="h-5 w-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">2–7</p>
                  <p className="text-xs text-muted-foreground">players</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">5–10</p>
                  <p className="text-xs text-muted-foreground">minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <Zap className="h-5 w-5 text-accent" />
                </div>
                <div className="text-left">
                  <p className="font-semibold">{"<"}1 min</p>
                  <p className="text-xs text-muted-foreground">to learn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/cards.png"
                alt="Mask Off game cards fanned out showing various cultural masks"
                width={600}
                height={500}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
