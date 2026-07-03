"use client"

import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"

export function BeehiivSignup() {
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (!containerRef.current) return

    // Clear any existing content
    containerRef.current.innerHTML = ""

    // Create and append the Beehiiv embed script
    const script = document.createElement("script")
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js"
    script.async = true
    script.dataset.beehiivForm = "d1aa3e6e-fa4a-40b4-9120-20818346c198"
    containerRef.current.appendChild(script)

    // Beehiiv embedded forms live inside an iframe and emit a postMessage
    // when a subscription succeeds. Listen for it and forward the user to the
    // $1 Maskless Club page.
    function handleMessage(event: MessageEvent) {
      if (typeof event.origin !== "string" || !event.origin.includes("beehiiv")) {
        return
      }

      const data = event.data
      const payload = typeof data === "string" ? data.toLowerCase() : JSON.stringify(data ?? "").toLowerCase()

      // Match the common success signals Beehiiv sends on a completed signup.
      if (
        payload.includes("success") ||
        payload.includes("subscribed") ||
        payload.includes("subscription") ||
        payload.includes("thank")
      ) {
        router.push("/maskless-club")
      }
    }

    window.addEventListener("message", handleMessage)

    return () => {
      window.removeEventListener("message", handleMessage)
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [router])

  return <div ref={containerRef} className="w-full" />
}
