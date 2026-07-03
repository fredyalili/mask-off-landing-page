import Link from "next/link"
import { Check, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { masklessClubUrl } from "@/lib/config"

const benefits = [
  "Founding supporter status",
  "Help push Mask Off toward launch",
  "Get the Founding Mask card free with any physical deck pledge during the Kickstarter campaign",
  "During the campaign, this card will be available separately for $10",
]

export function MasklessClub() {
  return (
    <section id="maskless-club" className="scroll-mt-20 py-24 md:py-32 bg-secondary/40 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-3xl border border-accent/40 bg-card p-8 md:p-12 text-center shadow-lg">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
              <Sparkles className="h-7 w-7 text-accent-foreground" />
            </div>

            <p className="text-accent font-medium text-sm uppercase tracking-widest mb-3">
              Optional early support
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
              Join the $1 Maskless Club
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Become an early supporter before the campaign launches.
            </p>

            <ul className="text-left space-y-4 mb-10 max-w-md mx-auto">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15">
                    <Check className="h-4 w-4 text-accent" />
                  </span>
                  <span className="text-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button asChild size="lg" className="w-full sm:w-auto text-base h-12 px-10">
              <Link href={masklessClubUrl} target="_blank" rel="noopener noreferrer">
                Join for $1
              </Link>
            </Button>

            <p className="mt-5 text-sm text-muted-foreground">
              Optional — email signup always stays free.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
