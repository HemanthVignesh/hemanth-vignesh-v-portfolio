import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*<>/\\|[]{}";

interface Props {
  text: string;
  className?: string;
  /** ms between each character resolving */
  speed?: number;
  /** ms before the animation starts after the element enters view */
  delay?: number;
  /** how many scramble frames each character shows before resolving */
  scrambleFrames?: number;
}

export default function DecryptedText({
  text,
  className = "",
  speed = 40,
  delay = 0,
  scrambleFrames = 8,
}: Props) {
  const [displayed, setDisplayed] = useState<string[]>(() => text.split("").map(() => " "));
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Trigger once in view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setStarted(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  // Scramble → resolve animation
  useEffect(() => {
    if (!started) return;

    const chars = text.split("");
    // track how many scramble frames each position has shown
    const frameCounts = new Array(chars.length).fill(0);
    // resolved[i] = true once position i shows the real char
    const resolved = new Array(chars.length).fill(false);

    let currentIndex = 0; // next character to start resolving
    let lastTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - lastTime;
      if (elapsed < speed) {
        requestAnimationFrame(tick);
        return;
      }
      lastTime = now;

      // Advance the "resolve front" by one character per tick
      if (currentIndex < chars.length) {
        currentIndex++;
      }

      setDisplayed(
        chars.map((char, i) => {
          if (char === " ") return " "; // preserve spaces immediately
          if (resolved[i]) return char;

          if (i < currentIndex) {
            frameCounts[i]++;
            if (frameCounts[i] >= scrambleFrames) {
              resolved[i] = true;
              return char;
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }
          // not yet reached — show a dim random char
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        })
      );

      if (!resolved.every(Boolean)) {
        requestAnimationFrame(tick);
      }
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [started, text, speed, scrambleFrames]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {displayed.map((char, i) => (
        <span
          key={i}
          style={{
            color:
              char !== text[i] && char !== " "
                ? "hsl(var(--primary))"
                : undefined,
            opacity: char !== text[i] && char !== " " ? 0.55 : 1,
            transition: "color 0.05s, opacity 0.05s",
            fontFamily: "inherit",
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
