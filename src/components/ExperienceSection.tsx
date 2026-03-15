import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const ExperienceSection = () => (
  <section id="experience" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="Experience" title="Internship" />
      <AnimatedSection delay={0.1}>
        <div className="glass rounded-2xl p-8 md:p-10 hover:border-primary/30 transition-all duration-400">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase size={20} className="text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-lg font-bold text-foreground">
                Product Research & Development Intern
              </h3>
              <p className="text-primary text-sm font-medium">Filo Edtech Pvt Ltd</p>
              <p className="text-muted-foreground text-xs mb-4">Aug 2025 – Oct 2025</p>
              <ul className="space-y-2">
                {[
                  "Analyzed student usage patterns to identify engagement trends and learning behavior insights",
                  "Conducted competitor benchmarking to evaluate feature gaps and recommend UX improvements",
                  "Converted research findings into actionable recommendations improving platform engagement",
                  "Assisted in content planning and product enhancement strategies for learner retention",
                ].map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-foreground/80">
                    <span className="text-primary mt-1 shrink-0">▸</span>
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
