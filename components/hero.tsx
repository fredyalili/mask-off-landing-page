import Image from "next/image"
import { Users, Clock, Zap } from "lucide-react"
import { BeehiivSignup } from "./beehiiv-signup"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 flex items-center overflow-hidden">
      {/* Decorative background with shape SVGs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-32 h-40 md:w-48 md:h-60 opacity-50">
          <Image src="/shapes/shape-1.svg" alt="" fill className="object-contain invert" />
        </div>
        <div className="absolute top-32 right-16 w-28 h-36 md:w-44 md:h-56 opacity-50">
          <Image src="/shapes/shape-2.svg" alt="" fill className="object-contain invert" />
        </div>
        <div className="absolute bottom-40 left-1/4 w-24 h-32 md:w-40 md:h-52 opacity-45">
          <Image src="/shapes/shape-3.svg" alt="" fill className="object-contain invert" />
        </div>
        <div className="absolute bottom-20 right-1/3 w-28 h-36 md:w-44 md:h-56 opacity-45">
          <Image src="/shapes/shape-4.svg" alt="" fill className="object-contain invert" />
        </div>
        <div className="absolute top-1/2 left-8 w-20 h-28 md:w-36 md:h-48 opacity-40">
          <Image src="/shapes/shape-5.svg" alt="" fill className="object-contain invert" />
        </div>
        <div className="absolute bottom-1/3 right-10 w-24 h-32 md:w-40 md:h-52 opacity-40">
          <Image src="/shapes/shape-6.svg" alt="" fill className="object-contain invert" />
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

          {/* Email Signup - Right Side */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <BeehiivSignup />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
