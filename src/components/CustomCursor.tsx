import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        // CSS transforms for 60fps hardware acceleration
        cursorRef.current.style.transform = `translate3d(${e.clientX - 150}px, ${e.clientY - 150}px, 0)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none z-[-1]"
      style={{
        background: "radial-gradient(circle, rgba(0,255,170,0.06) 0%, rgba(0,255,170,0) 60%)",
        willChange: "transform",
      }}
    />
  );
};

export default CustomCursor;
