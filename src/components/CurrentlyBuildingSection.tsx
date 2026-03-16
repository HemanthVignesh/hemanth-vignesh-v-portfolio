import { Rocket } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const items = [
  "Exploring transformer architectures & fine-tuning LLMs",
  "Deepening systems design for scalable backends",
  "Strengthening competitive programming & DSA",
];

const CurrentlyBuildingSection = () => (
  <section className="section-light py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-4xl">
      <AnimatedSection>
        <div className="flex items-center gap-2.5 mb-6">
          <Rocket size={16} style={{ color: "hsl(var(--primary))" }} />
          <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "hsl(var(--primary))" }}>
            Currently Building
          </span>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-xl p-5 border"
              style={{ borderColor: "hsl(0 0% 82%)", background: "hsl(0 0% 96%)" }}
            >
              <p className="text-sm leading-relaxed" style={{ color: "hsl(0 0% 30%)" }}>{item}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default CurrentlyBuildingSection;
