import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <motion.section 
    id="about" 
    className="bg-transparent py-24 md:py-32 relative z-10 border-t border-white/5"
    initial={{ borderTopColor: "rgba(255, 255, 255, 0.05)" }}
    whileInView={{ borderTopColor: ["rgba(255, 255, 255, 0.05)", "rgba(0, 255, 170, 0.3)", "rgba(255, 255, 255, 0.05)"] }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
    viewport={{ once: true, margin: "-10%" }}
  >
    <div className="container mx-auto px-6 max-w-4xl">
      <AnimatedSection>
        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-primary">
          About
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
          I build <span className="text-primary">intelligent systems</span> and
          practical AI products that solve real engineering problems.
        </h2>
        <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl text-muted-foreground font-medium">
          AI/ML engineer with practical experience in neural network development, full-stack product delivery, and production-focused software engineering. Passionate about building intelligent systems that are reliable, scalable, and impactful in real-world environments.
        </p>
      </AnimatedSection>
    </div>
  </motion.section>
);

export default AboutSection;
