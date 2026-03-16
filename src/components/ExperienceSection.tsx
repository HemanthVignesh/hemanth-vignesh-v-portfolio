import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const bullets = [
  "Analyzed student usage patterns → identified key engagement trends",
  "Conducted competitor benchmarking → recommended UX improvements",
  "Converted research into actionable product recommendations",
  "Improved content strategy for measurable learner retention",
];

const ExperienceSection = () => (
  <section id="experience" className="section-dark py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionHeading label="Experience" title="Professional" variant="dark" />
      <AnimatedSection delay={0.1}>
        <div className="rounded-2xl border border-border p-6 md:p-8 bg-secondary/30">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
              <Briefcase size={18} className="text-primary" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    Product Research & Development Intern
                  </h3>
                  <p className="text-primary text-sm font-medium">Filo Edtech Pvt Ltd</p>
                </div>
                <span className="text-[11px] text-muted-foreground border border-border rounded-full px-3 py-1">
                  Aug – Oct 2025
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-foreground/75">
                    <span className="text-primary mt-0.5 shrink-0 text-xs">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ExperienceSection;
