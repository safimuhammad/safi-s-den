"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
}

export function GlitchText({ text, className }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 5000)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <span className={cn("relative inline-block", isGlitching && "animate-pulse", className)} data-text={text}>
      {text}
      {isGlitching && (
        <>
          <span
            className="absolute top-0 left-0 w-full h-full text-cyan-400 opacity-70"
            style={{
              clipPath: "polygon(0 30%, 100% 30%, 100% 50%, 0 50%)",
              transform: "translate(2px, 0)",
              animation: "glitch 0.2s infinite",
            }}
          >
            {text}
          </span>
          <span
            className="absolute top-0 left-0 w-full h-full text-fuchsia-400 opacity-70"
            style={{
              clipPath: "polygon(0 65%, 100% 65%, 100% 80%, 0 80%)",
              transform: "translate(-2px, 0)",
              animation: "glitch 0.15s infinite reverse",
            }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  )
}

