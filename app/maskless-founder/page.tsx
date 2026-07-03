import type { Metadata } from "next"
import Link from "next/link"
import { Check, Sparkles, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { masklessClubUrl } from "@/lib/config"

export const metadata: Metadata = {
  title: "Become a $1 Maskless Founder — Mask Off",
  description:
    "Become a founding supporter of Mask Off for $1 before the Kickstarter campaign launches.",
}

const benefits = [
  "Founding supporter status",
  "Help push Mask Off toward the 500-person launch goal",
  "Get the Maskless Card free when you back any physical deck during the Kickstarter campaign",
  "During the campaign, the Maskless Card will be available separately for $10",
]

export default function MasklessFounderPage() {
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

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-3">
                You&apos;re on the launch list.
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Want to become a founding supporter?
              </p>

              <h2 className="text-2xl md:text-3xl font-bold text-balance mb-4">
                Become a $1 Maskless Founder
              </h2>
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

              <p className="text-muted-foreground/80 text-sm mt-6 text-balance">
                Email signup is free. The $1 Maskless Founder option is optional.
              </p>
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
