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

          {/*
            Beehiiv embedded form (Name + Email).
            NOTE: Configure Beehiiv to redirect successful signups to /maskless-club
            using Beehiiv's post-submit redirect settings (Form settings → Redirect URL).
          */}
          <div className="flex justify-center">
            <BeehiivSignup />
          </div>
        </div>
      </div>
    </section>
  )
}
