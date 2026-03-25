import { Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Smart Bee",
    tagline: "Automatic Differentiation Engine",
    period: "Sep – Nov 2025",
    problem: "DL frameworks hide backpropagation internals—hard to truly understand gradient flow.",
    build: "Built an autodiff engine from scratch implementing forward/backward propagation for MLPs.",
    difficulty: "Manually optimized 1000+ parameters using gradient descent with zero external DL libraries.",
    impact: "Deep understanding of loss functions, gradient computation, and network optimization.",
    stack: ["Python", "Neural Networks", "Backpropagation", "Gradient Descent"],
    github: "https://github.com/HemanthVignesh/smartBee",
    image: "/SmartBee ss.png",
  },
  {
    title: "AI Study Assistant",
    tagline: "PDF Summarization Platform",
    period: "Jun – Aug 2025",
    problem: "Students waste hours reading dense PDFs with no efficient way to extract key concepts.",
    build: "Full-stack platform using FastAPI + React with Hugging Face DistilBART for PDF summarization.",
    difficulty: "Engineered text chunking for large-PDF processing with modular scalable architecture.",
    impact: "Reduced feature integration time by 25% through clean architecture and reusable NLP pipeline.",
    stack: ["FastAPI", "React", "Hugging Face", "NLP"],
    github: "https://github.com/HemanthVignesh/ai-study-assistant",
    image: "/ABSA ss.png",
  },
  {
    title: "Bias Detection & Mitigation",
    tagline: "Fairness Analysis in AI Models",
    period: "Feb -Mar 2026",
    problem: "Machine learning models can produce biased predictions across demographic groups, leading to unfair and unreliable AI decisions.",
    build: "Developed an AI fairness evaluation system that detects bias in model predictions using statistical fairness metrics and applies mitigation techniques to improve balanced outcomes.",
    difficulty: "Integrated fairness analysis, preprocessing strategies, and explainable visual outputs while preserving model performance.",
    impact: "Improved understanding of responsible AI by building a practical system for fairness-aware model evaluation and ethical decision support.",
    stack: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Fairness Metrics"],
    github: "https://github.com/HemanthVignesh/Bias-detection",
    image: "/Bias detection ss.png",
  }
];

const labels = [
  { key: "problem", label: "Problem" },
  { key: "build", label: "Build" },
  { key: "difficulty", label: "Difficulty" },
  { key: "impact", label: "Impact" },
] as const;

const ProjectsSection = () => (
  <motion.section
    id="projects"
    className="bg-transparent py-24 md:py-32 relative z-10 border-t border-border/50"
    initial={{ borderTopColor: "hsl(var(--border) / 0.5)" }}
    whileInView={{ borderTopColor: ["hsl(var(--border) / 0.5)", "hsl(var(--primary) / 0.3)", "hsl(var(--border) / 0.5)"] }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
    viewport={{ once: true, margin: "-10%" }}
  >
    <div className="container mx-auto px-6 max-w-5xl">
      <SectionHeading label="Projects" title="Engineering Work" />
      <div className="grid gap-12 mt-12">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.12}>
            <div className="group relative rounded-[2rem] overflow-hidden border border-border/50 bg-card/60 backdrop-blur-md transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(var(--primary-rgb),0.3)] dark:hover:shadow-[0_0_30px_-5px_rgba(var(--primary-rgb),0.4)] hover:border-primary/50">
              {/* Project image */}
              <motion.div
                initial={{ scale: 0.95 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="aspect-[21/9] md:aspect-video bg-muted/20 overflow-hidden relative"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent transition-opacity duration-500 group-hover:opacity-40" />
              </motion.div>

              <div className="p-8 md:p-10 relative">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-all duration-300 tracking-tight">
                      {p.title}
                    </h3>
                    <p className="text-base mt-2 text-muted-foreground font-medium">{p.tagline}</p>
                  </div>
                  <span className="text-xs uppercase tracking-wider rounded-full px-4 py-1.5 font-semibold bg-secondary/80 text-secondary-foreground border border-border/50">
                    {p.period}
                  </span>
                </div>

                <div className="space-y-4 mb-10">
                  {labels.map(({ key, label }) => (
                    <div key={key} className="flex flex-col sm:flex-row sm:gap-6 text-sm md:text-base leading-relaxed">
                      <span className="shrink-0 sm:w-28 text-xs font-bold uppercase tracking-widest pt-1 text-primary/90 mb-1 sm:mb-0">
                        {label}
                      </span>
                      <span className="text-foreground/80">{p[key]}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-8 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 text-muted-foreground hover:text-primary hover:gap-3"
                  >
                    <Github size={18} /> View Source
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </motion.section>
);

export default ProjectsSection;
