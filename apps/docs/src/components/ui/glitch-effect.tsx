"use client";
import React, { useEffect, useState } from "react";

const glitchMap: Record<string, string[]> = {
  A: ["4", "@", "Λ"],
  B: ["8", "ß", "฿"],
  C: ["<", "(", "¢"],
  D: ["Ð", "d", "0"],
  E: ["3", "€", "Ξ"],
  F: ["ƒ", "f", "Ғ"],
  G: ["6", "9", "g"],
  H: ["#", "h", "}{"],
  I: ["1", "!", "|"],
  J: ["]", "j", "¿"],
  K: ["|<", "k", "κ"],
  L: ["1", "l", "£"],
  M: ["^^", "m", "ʍ"],
  N: ["И", "n", "₪"],
  O: ["0", "°", "o"],
  P: ["ρ", "p", "Þ"],
  Q: ["9", "q", "ℚ"],
  R: ["Я", "®", "ʁ"],
  S: ["5", "$", "§"],
  T: ["7", "+", "†"],
  U: ["µ", "u", "น"],
  V: ["v", "√", "ν"],
  W: ["w", "vv", "Ш"],
  X: ["%", "><", "×"],
  Y: ["¥", "γ", "`/"],
  Z: ["2", "≥", "ʐ"]
};

function randomizeWord(word: string): string {
  return word
    .split("")
    .map((ch) => {
      const upper = ch.toUpperCase();
      if (glitchMap[upper]) {
        const variants = glitchMap[upper];
        return variants[Math.floor(Math.random() * variants.length)];
      }
      return ch; // keep spaces, numbers, etc
    })
    .join("");
}

export default function GlitchEffect({
  words,
  interval = 3000,
  className = ""
}: {
  words: string[];
  interval?: number; // time main word stays
  className?: string;
}) {
  const [display, setDisplay] = useState(words[0]);
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    let glitchTimer: NodeJS.Timeout;
    let mainTimer: NodeJS.Timeout;

    function startCycle() {
      // show normal word
      setDisplay(words[0]);
      setIsGlitching(false);

      // after 3s, start glitch
      mainTimer = setTimeout(() => {
        setIsGlitching(true);

        let count = 0;
        glitchTimer = setInterval(() => {
          setDisplay(randomizeWord(words[0]));
          count++;

          if (count > 10) {
            clearInterval(glitchTimer);
            startCycle(); // loop
          }
        }, 100); // fast scrambling
      }, interval);
    }

    startCycle();
    return () => {
      clearTimeout(mainTimer);
      clearInterval(glitchTimer);
    };
  }, [words, interval]);

  return <span className={className}>{display}</span>;
}
