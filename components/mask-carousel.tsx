"use client"

import { useState, useCallback, useEffect } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react"
import { masks, type Mask } from "@/lib/masks"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function MaskCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "center",
    skipSnaps: false 
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  const selectedMask: Mask = masks[selectedIndex]

  return (
    <section id="masks" className="py-24 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4">
            Discover the masks
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance">
            Ancient Stories, Modern Game
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto mb-8">
          <div className="overflow-visible py-6" ref={emblaRef}>
            <div className="flex">
              {masks.map((mask, index) => (
                <div
                  key={mask.id}
                  className="flex-[0_0_50%] sm:flex-[0_0_33%] md:flex-[0_0_25%] min-w-0 px-2 md:px-4 py-4"
                >
                  <button
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={cn(
                      "w-full aspect-[3/4] rounded-2xl transition-all duration-300 cursor-pointer",
                      index === selectedIndex
                        ? "bg-card shadow-2xl scale-110 ring-2 ring-accent ring-offset-4 ring-offset-secondary/50 p-3 md:p-4"
                        : "bg-card/50 hover:bg-card hover:shadow-lg p-4 md:p-6"
                    )}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={mask.image}
                        alt={mask.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-background shadow-lg z-10 hidden md:flex"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Previous mask</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-background shadow-lg z-10 hidden md:flex"
            onClick={scrollNext}
          >
            <ChevronRight className="h-5 w-5" />
            <span className="sr-only">Next mask</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-4 md:hidden mb-8">
          <Button variant="outline" size="icon" className="rounded-full" onClick={scrollPrev}>
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full" onClick={scrollNext}>
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Selected Mask Info */}
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedMask.name}</h3>
          <p className="flex items-center justify-center gap-1 text-accent mb-4">
            <MapPin className="h-4 w-4" />
            {selectedMask.origin}
          </p>
          <p className="text-muted-foreground leading-relaxed">{selectedMask.description}</p>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {masks.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "bg-accent w-6"
                  : "bg-border hover:bg-muted-foreground"
              )}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
