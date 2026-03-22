import { motion, useScroll, useTransform } from "framer-motion";

const GridBackground = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 4000], [0, -200]);

  return (
    <motion.div
      style={{ y }}
      className="fixed -inset-y-[300px] inset-x-0 pointer-events-none z-0"
    >
      <div 
        className="absolute inset-0" 
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
        }}
      />
    </motion.div>
  );
};

export default GridBackground;
