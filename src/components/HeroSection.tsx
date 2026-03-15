import { motion } from "framer-motion";
import { ArrowDown, FileText, Send } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Animated grid background */}
    <div className="absolute inset-0 grid-bg opacity-40 animate-grid-move" />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

    {/* Subtle glow */}
    <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />

    <div className="relative container mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-6">
          Portfolio
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[1.05] mb-6">
          Hemanth Vignesh
          <span className="text-gradient-blue block text-3xl sm:text-4xl md:text-5xl font-semibold mt-2">
            V
          </span>
        </h1>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto mb-4 font-body">
          AI/ML Engineer · Full Stack Developer · Problem Solver
        </p>
        <p className="text-muted-foreground/70 text-sm md:text-base max-w-2xl mx-auto mb-10">
          Building practical AI systems, scalable products, and engineering solutions for real-world impact.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            View Projects <ArrowDown size={16} />
          </a>
          <a
            href="/Hemanth_Vignesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition-colors"
          >
            <FileText size={16} /> Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition-colors"
          >
            <Send size={16} /> Contact Me
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
