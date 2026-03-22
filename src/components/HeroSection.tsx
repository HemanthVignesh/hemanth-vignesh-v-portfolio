import { motion } from "framer-motion";
import { ArrowDown, Code2, Cpu, Rocket } from "lucide-react";

const name1 = "HEMANTH".split("");
const name2 = "VIGNESH V".split("");

const letterVariants: any = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)", 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center bg-transparent overflow-hidden pt-20">
    <div className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 items-center max-w-7xl mx-auto">

        {/* LEFT: Strong Value Statement */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", x: -20 }}
          animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 flex flex-col items-start lg:items-end text-left lg:text-right"
        >
          <div className="space-y-6 max-w-sm w-full">
            <h3 className="text-primary font-display font-bold tracking-widest uppercase text-xs">
              Vision {"//"} Execution
            </h3>
            <p className="text-muted-foreground text-sm lg:text-base leading-relaxed font-medium">
              Architecting scalable backends, training intelligent models, and shipping production-ready systems that solve actual engineering problems.
            </p>
            <div className="flex flex-col gap-3 py-4 border-y border-white/10 w-full">
              <span className="flex items-center lg:justify-end gap-3 text-xs text-foreground/80 font-mono">
                <Cpu size={14} className="text-primary" /> Systems Design
              </span>
              <span className="flex items-center lg:justify-end gap-3 text-xs text-foreground/80 font-mono">
                <Code2 size={14} className="text-primary" /> Full Stack Dev
              </span>
              <span className="flex items-center lg:justify-end gap-3 text-xs text-foreground/80 font-mono">
                <Rocket size={14} className="text-primary" /> AI/ML Engineering
              </span>
            </div>
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 text-primary text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              Explore Impact <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* CENTER: Animated Identity Block */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="order-1 lg:order-2 flex flex-col items-center text-center px-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-medium text-primary tracking-widest uppercase">Initializing Subroutines</span>
          </div>

          <motion.h1 
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08, delayChildren: 0.4 }}
            className="font-display text-5xl sm:text-7xl lg:text-[7rem] font-bold text-foreground leading-[0.85] tracking-tighter flex flex-col items-center"
          >
            <span className="block drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-hidden flex">
              {name1.map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block">
                  {char}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden flex">
              {name2.map((char, index) => (
                <motion.span 
                  key={index} 
                  variants={letterVariants} 
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            className="mt-8 text-sm sm:text-base font-mono text-muted-foreground tracking-[0.3em] uppercase"
          >
            Product <span className="text-primary mx-2">/</span> Engineering
          </motion.h2>
        </motion.div>

        {/* RIGHT: Photo & Floating Skill Chips */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", x: 20 }}
          animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="order-3 lg:order-3 relative flex justify-center lg:justify-start"
        >
          <div className="relative group perspective-1000 w-64 h-80 lg:w-72 lg:h-[400px]">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full mix-blend-screen opacity-50 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Floating Border Animation */}
            <motion.div 
               animate={{ boxShadow: ["0 0 0px rgba(0,255,170,0)", "0 0 20px rgba(0,255,170,0.4)", "0 0 0px rgba(0,255,170,0)"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -inset-1 rounded-[2rem] border border-primary/30 group-hover:border-primary/80 scale-100 group-hover:scale-105 transition-all duration-700 pointer-events-none" 
            />

            {/* 3D Pop-out Container via advanced clip-path (allows top overflow but clips sides/bottom) */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              className="absolute inset-0 bg-card/60 border border-white/5 backdrop-blur-sm transition-transform duration-700 ease-out group-hover:-rotate-y-12 group-hover:rotate-x-12 z-10 overflow-visible"
              style={{ clipPath: "inset(-200px 0 0 0 round 2rem)" }}
            >
              {/* Static Base Image */}
              <img
                src="/ProffessionalPic.png"
                alt="Hemanth Vignesh V Base"
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-70 group-hover:opacity-0 transition-all duration-700 z-10"
              />
              {/* Pop-up Foreground Image */}
              <img
                src="/ProffessionalPic-removebg-preview.png"
                alt="Hemanth Vignesh V"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-[1.25] group-hover:-translate-y-12 z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-30 opacity-100 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none" />
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.05 }}
              viewport={{ once: true }}
              className="absolute -left-6 top-1/4 px-3 py-2 bg-background/80 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-mono uppercase text-foreground/80 z-40 shadow-lg shadow-black/50 cursor-pointer"
            >
              System Arch
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
              whileHover={{ y: -5, scale: 1.05 }}
              viewport={{ once: true }}
              className="absolute -right-4 bottom-1/4 px-3 py-2 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-lg text-[10px] font-mono uppercase text-primary z-40 shadow-lg shadow-primary/20 cursor-pointer"
            >
              Inference Opt
            </motion.div>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default HeroSection;
