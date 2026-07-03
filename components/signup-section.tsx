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
            On a successful signup the user is automatically sent to /maskless-club
            (see BeehiivSignup's postMessage listener). For maximum reliability you
            can ALSO set the Redirect URL to /maskless-club in Beehiiv (Form
            settings → Redirect URL) so the redirect works even if the message
            event ever changes.
          */}
          <div className="flex justify-center">
            <BeehiivSignup />
          </div>

          <p className="text-muted-foreground/80 text-sm mt-6 text-balance">
            After you sign up, you&apos;ll have the option to join the $1 Maskless Club as a
            founding supporter.
          </p>
        </div>
      </div>
    </section>
  )
}
