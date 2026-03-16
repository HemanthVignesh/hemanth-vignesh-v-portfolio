import { motion } from "framer-motion";
import { FileText, ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center section-dark overflow-hidden">
    <div className="container mx-auto px-6 pt-24 pb-20">
      <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="text-sm text-muted-foreground mb-4 tracking-wide">
            AI/ML Engineer <span className="highlight">//</span> Full Stack Developer
          </p>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight">
            Hemanth
            <br />
            Vignesh <span className="highlight">V</span>
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-md mt-6 leading-relaxed">
            Building practical AI systems and scalable products with engineering depth.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:brightness-110 transition-all"
            >
              View Projects <ArrowDown size={14} />
            </a>
            <a
              href="/Hemanth_Vignesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-secondary transition-colors"
            >
              <FileText size={14} /> Resume
            </a>
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            <span>IIT Kharagpur GES '25</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>Filo Edtech Intern</span>
            <span className="hidden sm:inline text-border">|</span>
            <span>LPU CSE — AI/ML</span>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:block"
        >
          <div className="w-64 h-80 lg:w-72 lg:h-96 rounded-2xl bg-muted border border-border overflow-hidden relative">
            {/* Replace src with your photo */}
            <img
              src="public/ChatGPT Image Mar 16, 2026, 10_06_22 AM.jpeg"
              alt="Hemanth Vignesh V"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
