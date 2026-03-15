import { Github, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Smart Bee",
    tagline: "Automatic Differentiation Engine",
    period: "Sep – Nov 2025",
    problem: "Deep learning frameworks hide backpropagation internals—hard to truly understand gradient flow.",
    build: "Built an autodiff engine from scratch in Python implementing forward/backward propagation for multi-layer perceptrons.",
    difficulty: "Manually optimized 1000+ parameters using gradient descent with zero external DL libraries.",
    impact: "Demonstrated deep understanding of loss functions, gradient computation, and network optimization fundamentals.",
    stack: ["Python", "Neural Networks", "Backpropagation", "Gradient Descent"],
    github: "https://github.com/HemanthVignesh",
  },
  {
    title: "AI Study Assistant",
    tagline: "PDF Summarization Platform",
    period: "Jun – Aug 2025",
    problem: "Students waste hours reading dense PDFs with no efficient way to extract key concepts.",
    build: "Full-stack platform using FastAPI + React with Hugging Face DistilBART for intelligent PDF summarization.",
    difficulty: "Engineered text chunking algorithm for large-PDF processing; modular architecture for scalability.",
    impact: "Reduced feature integration time by 25% through clean architecture and reusable NLP pipeline.",
    stack: ["FastAPI", "React", "Hugging Face", "NLP", "PyMuPDF"],
    github: "https://github.com/HemanthVignesh",
  },
];

const labels = [
  { key: "problem", label: "Problem" },
  { key: "build", label: "Build" },
  { key: "difficulty", label: "Difficulty" },
  { key: "impact", label: "Impact" },
] as const;

const ProjectsSection = () => (
  <section id="projects" className="py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="Projects" title="Engineering Work" />
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.12}>
            <div className="glass rounded-xl p-6 md:p-8 hover:border-primary/20 transition-all duration-300 group">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                <div>
                  <h3 className="font-display text-lg md:text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-0.5">{p.tagline}</p>
                </div>
                <span className="text-[11px] text-muted-foreground border border-border rounded px-2.5 py-1">
                  {p.period}
                </span>
              </div>

              <div className="space-y-3 mb-5">
                {labels.map(({ key, label }) => (
                  <div key={key} className="flex gap-3 text-sm">
                    <span className="shrink-0 w-16 text-[11px] font-semibold text-primary uppercase tracking-wider pt-0.5">
                      {label}
                    </span>
                    <span className="text-foreground/80 leading-relaxed">{p[key]}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border/50">
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span key={t} className="tag group-hover:text-primary transition-colors">{t}</span>
                  ))}
                </div>
                <div className="flex gap-2.5">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
