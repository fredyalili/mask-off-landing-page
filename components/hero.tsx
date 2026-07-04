import Image from "next/image"
import Link from "next/link"
import { Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { instagramUrl } from "@/lib/config"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden">
      {/* Decorative background with mask shape SVGs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-6 w-28 h-36 md:w-48 md:h-60 opacity-60">
          <Image src="/shapes/shape-1.svg" alt="" fill className="object-contain invert" />
        </div>
        <div className="absolute top-32 right-8 w-24 h-32 md:w-44 md:h-56 opacity-60">
          <Image src="/shapes/shape-2.svg" alt="" fill className="object-contain invert" />
        </div>
        <div className="absolute bottom-32 left-1/4 w-20 h-28 md:w-40 md:h-52 opacity-50">
          <Image src="/shapes/shape-3.svg" alt="" fill className="object-contain invert" />
        </div>
        <div className="absolute bottom-16 right-1/4 w-24 h-32 md:w-44 md:h-56 opacity-50">
          <Image src="/shapes/shape-4.svg" alt="" fill className="object-contain invert" />
        </div>
        <div className="absolute top-1/2 left-4 w-16 h-24 md:w-36 md:h-48 opacity-40">
          <Image src="/shapes/shape-5.svg" alt="" fill className="object-contain invert" />
        </div>
        <div className="absolute bottom-1/3 right-6 w-20 h-28 md:w-40 md:h-52 opacity-40">
          <Image src="/shapes/shape-6.svg" alt="" fill className="object-contain invert" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none mb-6">
            MASK <span className="text-accent">OFF</span>
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-balance mb-4">
            Win Your True Self.
          </p>
          <p className="text-lg md:text-xl text-muted-foreground text-balance max-w-xl mx-auto mb-6">
            A matching card game that feels familiar and strange.
          </p>
          <p className="text-sm md:text-base text-muted-foreground uppercase tracking-widest mb-10">
            2–7 players • 5–10 minutes • Learn in under 1 minute
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto gap-2 text-base h-12 px-8">
              <Link href="#signup">
                Join the Launch List
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2 text-base h-12 px-8"
            >
              <Link href={instagramUrl} target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
                Follow on Instagram
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
