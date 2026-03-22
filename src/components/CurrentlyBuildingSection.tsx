import { Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  "Exploring transformer architectures & fine-tuning LLMs",
  "Deepening systems design for scalable backends",
  "Strengthening competitive programming & DSA",
];

const CurrentlyBuildingSection = () => (
  <section className="bg-background py-20 md:py-28 relative z-10">
    <div className="container mx-auto px-6 max-w-4xl">
      <AnimatedSection>
        <div className="flex items-center gap-2.5 mb-6">
          <Rocket size={16} className="text-primary" />
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-primary">
            Currently Building
          </span>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-2xl p-6 border border-border/50 bg-card/40 backdrop-blur-sm hover:border-primary/50 transition-colors"
            >
              <p className="text-sm leading-relaxed text-foreground/80 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CurrentlyBuildingSection;
