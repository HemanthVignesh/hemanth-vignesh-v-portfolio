import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Smart Bee",
    subtitle: "Automatic Differentiation Engine",
    period: "Sep 2025 – Nov 2025",
    description:
      "Built an automatic differentiation engine from scratch in Python, implementing core backpropagation algorithms for neural network training.",
    impact: [
      "Designed & trained a multi-layer perceptron with manual forward/backward propagation",
      "Optimized 1000+ parameters using gradient descent without external deep learning libraries",
      "Demonstrated deep understanding of loss functions, gradient computation, and network optimization",
    ],
    stack: ["Python", "Neural Networks", "Backpropagation", "Gradient Descent"],
    github: "https://github.com/HemanthVignesh",
  },
  {
    title: "AI Study Assistant",
    subtitle: "AI-Powered PDF Summarization Platform",
    period: "Jun 2025 – Aug 2025",
    description:
      "Full-stack AI-powered study assistant that extracts and summarizes educational content from PDF notes using NLP.",
    impact: [
      "Implemented backend with FastAPI, PyMuPDF, and Hugging Face Transformers (DistilBART)",
      "Built text chunking algorithm for efficient large-PDF processing",
      "Modular architecture improved scalability and reduced feature integration time by 25%",
    ],
    stack: ["FastAPI", "React", "Hugging Face", "NLP", "PyMuPDF"],
    github: "https://github.com/HemanthVignesh",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <SectionHeading label="Projects" title="Featured Work" />
      <div className="grid gap-8 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.15}>
            <div className="glass rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-all duration-400 hover:glow-blue group">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{p.subtitle}</p>
                </div>
                <span className="text-xs text-muted-foreground border border-border rounded-md px-3 py-1">
                  {p.period}
                </span>
              </div>

              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {p.description}
              </p>

              <div className="space-y-2 mb-6">
                {p.impact.map((bullet) => (
                  <div key={bullet} className="flex gap-2 text-sm text-foreground/80">
                    <span className="text-primary mt-1 shrink-0">▸</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-md bg-secondary text-muted-foreground group-hover:text-primary transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="GitHub"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Live demo"
                  >
                    <ExternalLink size={18} />
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
