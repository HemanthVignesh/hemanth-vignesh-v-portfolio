import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

interface Props {
  label: string;
  title: string;
  variant?: "dark" | "light";
}

const wordVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] as any } 
  }
};

const SectionHeading = ({ label, title, variant = "dark" }: Props) => {
  const words = title.split(" ");
  return (
    <AnimatedSection className="mb-10 md:mb-12">
      <p className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase mb-2 text-primary">
        {label}
      </p>
      <motion.h2
        className="font-display text-3xl md:text-4xl font-bold text-foreground overflow-hidden flex flex-wrap gap-x-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-10%" }}
        transition={{ staggerChildren: 0.12 }}
      >
        {words.map((word, i) => (
          <motion.span key={i} variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        ))}
      </motion.h2>
    </AnimatedSection>
  );
};

export default SectionHeading;
