import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const skills = [
  { name: "Python", prof: 90 },
  { name: "C++", prof: 85 },
  { name: "FastAPI / Node.js", prof: 80 },
  { name: "React", prof: 75 },
  { name: "Deep Learning (PyTorch/TF)", prof: 85 },
  { name: "System Design", prof: 70 },
];

const SkillsSection = () => (
  <motion.section 
    id="skills" 
    className="bg-transparent py-24 md:py-32 relative z-10 border-t border-border/50"
    initial={{ borderTopColor: "hsl(var(--border) / 0.5)" }}
    whileInView={{ borderTopColor: ["hsl(var(--border) / 0.5)", "hsl(var(--primary) / 0.3)", "hsl(var(--border) / 0.5)"] }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
    viewport={{ once: true, margin: "-10%" }}
  >
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionHeading label="Proficiency" title="Tech Stack" />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
        {skills.map((skill, i) => (
          <AnimatedSection key={skill.name} delay={i * 0.1}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-mono font-medium text-foreground tracking-wide uppercase">{skill.name}</span>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.3 + 1.2 }}
                className="text-xs font-mono text-primary"
              >
                {skill.prof}%
              </motion.span>
            </div>
            {/* The Bar Background */}
            <div className="h-1.5 w-full bg-muted/30 dark:bg-white/5 rounded-full overflow-hidden relative">
              {/* The Animated Fill */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.prof}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                className="h-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)] rounded-full relative"
              >
                {/* A glowing tip */}
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full blur-[4px] mix-blend-overlay" />
              </motion.div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </motion.section>
);

export default SkillsSection;
