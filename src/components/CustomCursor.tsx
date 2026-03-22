import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Ring lags behind with lerp
  const ring = useRef({ x: -100, y: -100 });
  const dot = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);

  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      dot.current.x = e.clientX;
      dot.current.y = e.clientY;
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) setHovering(true);
    };
    const onLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-cursor-hover]")) setHovering(false);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      // Ring trails 0.12 per frame
      ring.current.x = lerp(ring.current.x, dot.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, dot.current.y, 0.12);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dot.current.x - 4}px, ${dot.current.y - 4}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x - 20}px, ${ring.current.y - 20}px, 0)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <>
      {/* Small dot — snaps instantly */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      >
        <div
          style={{
            width: clicking ? 6 : 8,
            height: clicking ? 6 : 8,
            borderRadius: "50%",
            background: "rgba(0,255,170,0.95)",
            boxShadow: "0 0 8px rgba(0,255,170,0.8)",
            transition: "width 0.1s, height 0.1s",
          }}
        />
      </div>

      {/* Outer ring — follows with lerp delay */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ willChange: "transform" }}
      >
        <div
          style={{
            width: hovering ? 56 : clicking ? 28 : 40,
            height: hovering ? 56 : clicking ? 28 : 40,
            borderRadius: "50%",
            border: hovering
              ? "2px solid rgba(0,255,170,0.9)"
              : "1.5px solid rgba(0,255,170,0.5)",
            boxShadow: hovering
              ? "0 0 20px rgba(0,255,170,0.35), inset 0 0 10px rgba(0,255,170,0.08)"
              : "0 0 6px rgba(0,255,170,0.15)",
            background: hovering ? "rgba(0,255,170,0.04)" : "transparent",
            transition: "width 0.25s cubic-bezier(0.34,1.56,0.64,1), height 0.25s cubic-bezier(0.34,1.56,0.64,1), border 0.2s, box-shadow 0.2s, background 0.2s",
            // Center it: offset is handled in transform (minus half size)
            // but size changes need re-centering; we do via marginLeft/Top
            marginLeft: hovering ? -8 : clicking ? 6 : 0,
            marginTop: hovering ? -8 : clicking ? 6 : 0,
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor;
