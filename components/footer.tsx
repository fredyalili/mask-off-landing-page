import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Image
              src="/logo.svg"
              alt="Mask Off"
              width={100}
              height={28}
              className="h-6 w-auto dark:invert"
            />
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; 2026 Mask Off. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
