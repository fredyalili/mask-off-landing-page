"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, CheckCircle2 } from "lucide-react"

export function BeehiivSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    
    try {
      // Submit to Beehiiv
      const response = await fetch("https://api.beehiiv.com/v2/publications/pub_d1aa3e6e-fa4a-40b4-9120-20818346c198/subscriptions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: false,
          send_welcome_email: true,
        }),
      })

      if (response.ok) {
        setStatus("success")
        setEmail("")
      } else {
        // Fallback: Open Beehiiv in new tab if direct API fails (CORS)
        window.open(`https://maskoff.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`, "_blank")
        setStatus("success")
      }
    } catch {
      // Fallback: Open Beehiiv in new tab if direct API fails (CORS)
      window.open(`https://maskoff.beehiiv.com/subscribe?email=${encodeURIComponent(email)}`, "_blank")
      setStatus("success")
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-2 text-accent">
        <CheckCircle2 className="h-5 w-5" />
        <span className="font-medium">Thanks for signing up!</span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="flex-1 h-12 px-4 bg-card border-border"
        disabled={status === "loading"}
      />
      <Button 
        type="submit" 
        className="h-12 px-6 bg-accent hover:bg-accent/90 text-accent-foreground"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Signing up...
          </>
        ) : (
          "Sign Up"
        )}
      </Button>
    </form>
  )
}
