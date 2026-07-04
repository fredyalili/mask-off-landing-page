"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { signupCount, signupGoal } from "@/lib/config"

const SIGNED_UP_KEY = "maskoff_signed_up"

export function LaunchGoal() {
  // Everyone starts at the base count from config. If this visitor has already
  // signed up (flag stored on the Maskless Founder page), we add their +1 so
  // they can see the number they moved.
  const [youCounted, setYouCounted] = useState(false)

  useEffect(() => {
    try {
      setYouCounted(window.localStorage.getItem(SIGNED_UP_KEY) === "true")
    } catch {
      // ignore storage access errors
    }
  }, [])

  const displayCount = signupCount + (youCounted ? 1 : 0)
  const percentage = Math.min(100, Math.round((displayCount / signupGoal) * 100))

  return (
    <section className="py-20 md:py-28 border-y border-border bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-4">
            Kickstarter launches when 500 people sign up.
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Every signup brings Mask Off closer to print.
          </p>

          {/* Progress */}
          <div className="mb-4 flex items-end justify-between">
            <span className="text-2xl md:text-3xl font-bold">
              {displayCount} <span className="text-muted-foreground font-normal">/ {signupGoal}</span>
            </span>
            <span className="text-accent text-2xl md:text-3xl font-bold">{percentage}%</span>
          </div>

          <div
            className="h-4 w-full rounded-full bg-muted overflow-hidden"
            role="progressbar"
            aria-valuenow={displayCount}
            aria-valuemin={0}
            aria-valuemax={signupGoal}
            aria-label="Signups toward Kickstarter launch goal"
          >
            <div
              className="h-full rounded-full bg-accent transition-all duration-500"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <p className="mt-3 text-sm text-muted-foreground">
            {youCounted ? "signed up so far — you're one of them" : "signed up so far"}
          </p>

          <div className="mt-10">
            <Button asChild size="lg" className="gap-2 text-base h-12 px-8">
              <Link href="#signup">
                Join the Launch List
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
