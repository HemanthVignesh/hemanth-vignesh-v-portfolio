import { Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

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
    github: "https://github.com/HemanthVignesh",
    image: "/placeholder.svg",
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
    github: "https://github.com/HemanthVignesh",
    image: "/placeholder.svg",
  },
];

const labels = [
  { key: "problem", label: "Problem" },
  { key: "build", label: "Build" },
  { key: "difficulty", label: "Difficulty" },
  { key: "impact", label: "Impact" },
] as const;

const ProjectsSection = () => (
  <section id="projects" className="section-light py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionHeading label="Projects" title="Engineering Work" variant="light" />
      <div className="grid gap-8">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.12}>
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "hsl(0 0% 82%)", background: "hsl(0 0% 96%)" }}>
              {/* Project image */}
              <div className="aspect-video bg-muted overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-bold" style={{ color: "hsl(var(--panel-foreground))" }}>
                      {p.title}
                    </h3>
                    <p className="text-sm mt-0.5" style={{ color: "hsl(0 0% 45%)" }}>{p.tagline}</p>
                  </div>
                  <span className="text-[11px] rounded-full px-3 py-1 font-medium" style={{ background: "hsl(0 0% 85%)", color: "hsl(0 0% 35%)" }}>
                    {p.period}
                  </span>
                </div>

                <div className="space-y-2.5 mb-5">
                  {labels.map(({ key, label }) => (
                    <div key={key} className="flex gap-3 text-sm">
                      <span className="shrink-0 w-16 text-[11px] font-semibold uppercase tracking-wider pt-0.5" style={{ color: "hsl(var(--primary))" }}>
                        {label}
                      </span>
                      <span style={{ color: "hsl(0 0% 30%)" }} className="leading-relaxed">{p[key]}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-4" style={{ borderTop: "1px solid hsl(0 0% 82%)" }}>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <span key={t} className="tag-light">{t}</span>
                    ))}
                  </div>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-70"
                    style={{ color: "hsl(var(--panel-foreground))" }}
                  >
                    <Github size={15} /> Code
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
