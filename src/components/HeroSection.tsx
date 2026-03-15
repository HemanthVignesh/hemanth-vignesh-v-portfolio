import { motion } from "framer-motion";
import { ArrowDown, FileText, Send } from "lucide-react";

const metrics = [
  { value: "2+", label: "Projects Shipped" },
  { value: "1000+", label: "Parameters Optimized" },
  { value: "25%", label: "Efficiency Gains" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 grid-bg opacity-30 animate-grid-move" />
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[150px]" />

    <div className="relative container mx-auto px-6 pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-3xl mx-auto"
      >
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-muted-foreground tracking-wide">Open to opportunities · 2026</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.05] tracking-tight">
          Hemanth Vignesh V
        </h1>
        <p className="text-primary font-display text-base md:text-lg font-semibold mt-3 tracking-wide">
          AI/ML Engineer · Full Stack Developer
        </p>
        <p className="text-muted-foreground text-sm md:text-base max-w-xl mt-4 leading-relaxed">
          Building AI systems & scalable products with engineering depth.
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-8">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:brightness-110 transition-all"
          >
            View Projects <ArrowDown size={14} />
          </a>
          <a
            href="/Hemanth_Vignesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-secondary transition-colors"
          >
            <FileText size={14} /> Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-secondary transition-colors"
          >
            <Send size={14} /> Contact
          </a>
        </div>
      </motion.div>

      {/* Recruiter Trust Strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className="max-w-3xl mx-auto mt-16 md:mt-20"
      >
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="text-center md:text-left">
              <p className="metric-number text-gradient-blue">{m.value}</p>
              <p className="metric-label">{m.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-muted-foreground/60">
          <span>IIT Kharagpur GES '25</span>
          <span className="hidden sm:inline">·</span>
          <span>Filo Edtech Intern</span>
          <span className="hidden sm:inline">·</span>
          <span>LPU CSE — AI/ML</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
