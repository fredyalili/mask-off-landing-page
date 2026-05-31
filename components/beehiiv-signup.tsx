"use client"

import { useEffect, useRef } from "react"

export function BeehiivSignup() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    
    // Clear any existing content
    containerRef.current.innerHTML = ""
    
    // Create and append the script
    const script = document.createElement("script")
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js"
    script.async = true
    script.dataset.beehiivForm = "d1aa3e6e-fa4a-40b4-9120-20818346c198"
    containerRef.current.appendChild(script)

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""
      }
    }
  }, [])

  return <div ref={containerRef} className="w-full max-w-md" />
}
