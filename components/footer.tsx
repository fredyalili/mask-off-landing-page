import Image from "next/image"
import Link from "next/link"
import { Instagram, Globe } from "lucide-react"
import { instagramUrl, instagramHandle, websiteUrl, websiteLabel } from "@/lib/config"

export function Footer() {
  return (
    <footer className="py-14 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
          <Image
            src="/logo.svg"
            alt="Mask Off"
            width={120}
            height={32}
            className="h-7 w-auto invert"
          />

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="h-5 w-5" />
              {instagramHandle}
            </Link>
            <Link
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-5 w-5" />
              {websiteLabel}
            </Link>
          </div>

          <p className="text-accent font-medium">Fewer than 5 emails before launch.</p>

          <p className="text-sm text-muted-foreground">
            &copy; 2026 Mask Off. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
