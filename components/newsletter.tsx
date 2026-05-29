import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Newsletter() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
            Stay in the game
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Be the First to Know
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Sign up for launch day updates and follow us on Instagram for behind-the-scenes content, mask reveals, and more.
          </p>

          {/* Email Signup */}
          <div className="mb-8">
            <div 
              dangerouslySetInnerHTML={{
                __html: `<script async src="https://subscribe-forms.beehiiv.com/v3/loader.js" data-beehiiv-form="d1aa3e6e-fa4a-40b4-9120-20818346c198"></script>`
              }}
            />
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <div className="h-px bg-border w-12" />
            <span className="text-sm">or</span>
            <div className="h-px bg-border w-12" />
          </div>

          <Button asChild variant="outline" size="lg" className="gap-2">
            <Link
              href="https://www.instagram.com/maskoffgame/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-5 w-5" />
              Follow on Instagram
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
