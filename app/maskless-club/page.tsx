import type { Metadata } from "next"
import Link from "next/link"
import { Check, Sparkles, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { masklessClubUrl } from "@/lib/config"

export const metadata: Metadata = {
  title: "The $1 Maskless Club — Mask Off",
  description:
    "Become a founding supporter of Mask Off for $1 before the Kickstarter campaign launches.",
}

const benefits = [
  "Founding supporter status",
  "Help push Mask Off toward launch",
  "Get the Founding Mask card free with any physical deck pledge during the Kickstarter campaign",
  "During the campaign, this card will be available separately for $10",
]

export default function MasklessClubPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-28 pb-24 md:pt-36 md:pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="rounded-3xl border border-accent/40 bg-card p-8 md:p-12 text-center shadow-lg">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                <Sparkles className="h-7 w-7 text-accent-foreground" />
              </div>

              <p className="text-lg font-semibold mb-2">You&apos;re on the launch list.</p>
              <p className="text-muted-foreground mb-6">Want to become a founding supporter?</p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
                Meet the $1 Maskless Club.
              </h1>
              <p className="text-muted-foreground text-lg mb-8 text-balance">
                Become an early supporter before the Kickstarter campaign launches.
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
            </div>

            <div className="mt-8 text-center">
              <Button asChild variant="ghost" className="gap-2">
                <Link href="/">
                  <ArrowLeft className="h-4 w-4" />
                  Back to home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
