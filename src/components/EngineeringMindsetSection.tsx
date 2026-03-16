import { Cpu, Layers, Zap, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const principles = [
  { icon: Cpu, title: "First Principles", desc: "Built neural networks from scratch—no black boxes." },
  { icon: Layers, title: "Systems Thinking", desc: "Modular, scalable architectures by default." },
  { icon: Zap, title: "Ship & Iterate", desc: "End-to-end ownership from prototype to deploy." },
  { icon: Target, title: "Impact Driven", desc: "Every line of code solves a real problem." },
];

const EngineeringMindsetSection = () => (
  <section className="section-dark py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionHeading label="Philosophy" title="Engineering Mindset" variant="dark" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {principles.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.08}>
            <div className="rounded-xl border border-border p-5 text-center hover:border-primary/30 transition-all duration-300 bg-secondary/20">
              <p.icon size={22} className="text-primary mx-auto mb-3" />
              <h4 className="font-display text-sm font-semibold text-foreground mb-1">{p.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default EngineeringMindsetSection;
