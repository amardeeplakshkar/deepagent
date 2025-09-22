"use client"

import { useEffect, useRef, useState } from "react"

interface TextEffectProps {
  text: string
  intervalText?: string
  href?: string
  className?: string
  delay?: number
  glitchInterval?: number // ms between glitches
}

export function TextGlitch({
  text,
  intervalText,
  href,
  className = "",
  delay = 0,
  glitchInterval = 3000,
}: TextEffectProps) {
  const textRef = useRef<HTMLHeadingElement>(null)
  const spanRef = useRef<HTMLSpanElement>(null)
  const [displayText, setDisplayText] = useState(text)
  const [displayIntervalText, setDisplayIntervalText] = useState(intervalText || text)
  const intervalRef = useRef<any | null>(null)
  const glitchRef = useRef<any | null>(null)

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:'\",.<>?/|\\`~"

  // GSAP entry animation
  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import("gsap")

      if (textRef.current) {
        gsap.set(textRef.current, {
          backgroundSize: "0%",
          scale: 0.95,
          opacity: 0.7,
        })

        const tl = gsap.timeline({ delay })

        tl.to(textRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        }).to(
          textRef.current,
          {
            backgroundSize: "100%",
            duration: 2,
            ease: "elastic.out(1, 0.5)",
          },
          "-=0.3",
        )
      }
    }

    loadGSAP()
  }, [delay])

  // Automatic glitch cycle
  useEffect(() => {
    if (!intervalText) return

    const runGlitch = () => {
      let iteration = 0

      if (glitchRef.current) clearInterval(glitchRef.current)

      glitchRef.current = setInterval(() => {
        setDisplayIntervalText(
          intervalText
            .split("")
            .map((letter, index) => {
              if (index < iteration) return intervalText[index]
              return letters[Math.floor(Math.random() * 26)]
            })
            .join(""),
        )

        if (iteration >= intervalText.length) {
          clearInterval(glitchRef.current!)
        }

        iteration += 1 / 3
      }, 30)

      if (spanRef.current) {
        spanRef.current.style.clipPath =
          "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
      }
    }

    // run every `glitchInterval`
    intervalRef.current = setInterval(runGlitch, glitchInterval)

    // run first glitch immediately
    runGlitch()

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (glitchRef.current) clearInterval(glitchRef.current)
    }
  }, [intervalText, glitchInterval])

  const spanContent = intervalText ? (
    href ? (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="no-underline text-inherit"
      >
        {displayIntervalText}
      </a>
    ) : (
      displayIntervalText
    )
  ) : (
    text
  )

  return (
    <h1
      ref={textRef}
      className={`
        text-[10vw] font-bold leading-none tracking-tight m-0 
        text-neutral-600/20
        bg-gradient-to-r from-neutral-700 to-neutral-500 bg-clip-text bg-no-repeat
        border-b border-neutral-600/20
        flex flex-col items-start justify-center relative
        transition-all duration-500 ease-out
        cursor-pointer
        overflow-hidden
        ${className}
      `}
      style={{
        backgroundSize: "0%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        width: "100%",
        maxWidth: "100vw",
        wordBreak: "break-word",
        whiteSpace: "nowrap",
      }}
    >
      {displayText}
      <span
        ref={spanRef}
        className="
          absolute w-full h-full 
          text-black font-bold
          flex flex-col justify-center
          transition-all duration-400 ease-out
          pointer-events-none
          overflow-hidden
        "
        style={{
          clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
          transformOrigin: "center",
          backgroundColor: "#FFFF02",
          maxWidth: "100%",
          whiteSpace: "nowrap",
        }}
      >
        {spanContent}
      </span>
    </h1>
  )
}
