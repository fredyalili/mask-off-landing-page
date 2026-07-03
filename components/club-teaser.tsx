import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ClubTeaser() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center rounded-2xl border border-border bg-card p-6 md:p-8">
          <p className="text-muted-foreground mb-5 text-balance">
            Already joined the launch list? You can also become a $1 Maskless Club founding
            supporter.
          </p>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/maskless-club">
              Learn about the $1 Maskless Club
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
