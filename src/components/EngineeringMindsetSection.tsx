import { Cpu, Layers, Zap, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const principles = [
  { icon: Cpu, title: "First Principles", desc: "Built neural networks from scratch—no black boxes." },
  { icon: Layers, title: "Systems Thinking", desc: "Design modular, scalable architectures by default." },
  { icon: Zap, title: "Ship & Iterate", desc: "End-to-end ownership from prototype to deployment." },
  { icon: Target, title: "Impact Driven", desc: "Every line of code solves a real user problem." },
];

const EngineeringMindsetSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="Philosophy" title="Engineering Mindset" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {principles.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.08}>
            <div className="glass rounded-xl p-4 text-center hover:border-primary/20 transition-all duration-300 h-full">
              <p.icon size={20} className="text-primary mx-auto mb-2.5" />
              <h4 className="font-display text-xs font-semibold text-foreground mb-1">{p.title}</h4>
              <p className="text-[11px] text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default EngineeringMindsetSection;
