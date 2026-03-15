import { Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const items = [
  "Exploring transformer architectures & fine-tuning LLMs",
  "Deepening systems design knowledge for scalable backends",
  "Strengthening competitive programming & DSA practice",
];

const CurrentlyBuildingSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="Now" title="Currently Building" />
      <AnimatedSection delay={0.1}>
        <div className="glass rounded-xl p-6 md:p-8">
          <div className="flex items-center gap-2.5 mb-4">
            <Rocket size={16} className="text-primary" />
            <span className="text-xs text-primary font-semibold tracking-wider uppercase">Active Focus Areas</span>
          </div>
          <ul className="space-y-2.5">
            {items.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm text-foreground/80">
                <span className="text-primary mt-0.5 shrink-0 text-xs">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CurrentlyBuildingSection;
