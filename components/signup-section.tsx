import { ArrowRight } from "lucide-react"
import { BeehiivSignup } from "./beehiiv-signup"

export function SignupSection() {
  return (
    <section id="signup" className="scroll-mt-20 py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
            Free to join
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
            Join the Launch List
          </h2>
          <p className="text-muted-foreground mb-10">
            Add your name and email to be first in line when the Kickstarter goes live.
          </p>

          {/* Beehiiv embedded form (Name + Email) */}
          <div className="flex justify-center">
            <BeehiivSignup />
          </div>

          {/* Post-signup message */}
          <div className="mt-12 rounded-2xl border border-border bg-card p-6 md:p-8">
            <p className="text-lg font-semibold mb-1">You&apos;re on the launch list.</p>
            <p className="text-muted-foreground mb-5">Want to become a founding supporter?</p>
            <a
              href="#maskless-club"
              className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
            >
              Meet the $1 Maskless Club
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
