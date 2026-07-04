"use client"

import { useEffect } from "react"

// Reaching the Maskless Founder page means the visitor completed the email
// signup, so record their +1 for the launch counter shown on the home page.
export function MarkSignedUp() {
  useEffect(() => {
    try {
      window.localStorage.setItem("maskoff_signed_up", "true")
    } catch {
      // ignore storage access errors
    }
  }, [])

  return null
}
