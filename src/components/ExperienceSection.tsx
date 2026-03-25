import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    role: "Product Research & Development Intern",
    company: "Filo Edtech Pvt Ltd",
    period: "Aug – Oct 2025",
    bullets: [
      "Analyzed student usage patterns → identified key engagement trends",
      "Conducted competitor benchmarking → recommended UX improvements",
      "Converted research into actionable product recommendations",
      "Improved content strategy for measurable learner retention",
    ],
    type: "professional"
  },
  {
    role: "B.Tech CSE (AI/ML)",
    company: "Lovely Professional University",
    period: "2023 – Present",
    bullets: [
      "Specialization in Artificial Intelligence & Machine Learning",
      "Core Coursework: Operating Systems, Database Management, Algorithms",
      "CGPA: 7.50 / 10.0",
    ],
    type: "academic"
  },
  {
    role: "Intermediate",
    company: "Sri Chaithanya Junior College",
    period: "2020 – 2022",
    bullets: [
      "Board of Intermediate Education, Andhra Pradesh",
      "Focus: Physics, Chemistry, Mathematics",
      "Grade: 7.5 CGPA",
    ],
    type: "academic"
  },
  {
    role: "Matriculation",
    company: "Vijaya Bharathi EM High School",
    period: "2019 - 2020",
    bullets: [
      "Secondary School Certificate, Andhra Pradesh",
      "Grade: 10 CGPA",
    ],
    type: "academic"
  }
];

const ExperienceSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  return (
    <motion.section
      ref={containerRef}
      id="experience"
      className="bg-transparent py-24 md:py-32 relative z-10 border-t border-border/50"
      initial={{ borderTopColor: "hsl(var(--border) / 0.5)" }}
      whileInView={{ borderTopColor: ["hsl(var(--border) / 0.5)", "hsl(var(--primary) / 0.3)", "hsl(var(--border) / 0.5)"] }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true, margin: "-10%" }}
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionHeading label="Experience & Education" title="Journey" />

        <div className="relative mt-12 pl-4 md:pl-0">
          {/* Draw Line */}
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] origin-top z-0"
          />
          {/* Faded Background Line */}
          <div className="absolute left-[27px] md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-border/30 dark:bg-white/5 z-0" />

          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              const Icon = exp.type === "academic" ? GraduationCap : Briefcase;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                >
                  <div className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 group`}>

                    {/* Timeline Dot */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      whileInView={{ scale: [1, 1.4, 1], opacity: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="absolute left-[-1px] md:left-[calc(50%-29px)] flex items-center justify-center w-14 h-14 bg-background border-4 border-primary rounded-full z-10 text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] transition-transform duration-500 group-hover:scale-110"
                    >
                      <Icon size={20} />
                    </motion.div>

                    {/* Content Box */}
                    <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                      <div className="flex flex-col gap-1 mb-4">
                        <span className="text-primary text-xs font-mono tracking-widest uppercase">{exp.period}</span>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                          {exp.role}
                        </h3>
                        <h4 className="text-muted-foreground font-medium text-sm border border-border/50 bg-muted/30 dark:bg-white/5 inline-flex w-fit px-3 py-1 rounded-md mt-1">
                          {exp.company}
                        </h4>
                      </div>

                      <ul className={`space-y-2 inline-block text-left ${isEven ? 'md:text-right' : ''}`}>
                        {exp.bullets.map((b, i) => (
                          <li key={i} className={`flex items-start gap-2 text-sm text-muted-foreground ${isEven ? 'md:justify-end' : ''}`}>
                            <span className={`text-primary mt-1 select-none ${isEven ? 'md:order-2 hidden md:block' : ''}`}>▹</span>
                            <span className={`md:order-1 ${isEven ? 'md:mr-2' : ''}`}>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
