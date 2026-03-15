import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const AboutSection = () => (
  <section id="about" className="py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="About" title="Quick Overview" />
      <AnimatedSection delay={0.1}>
        <div className="glass rounded-xl p-7 md:p-9 space-y-3">
          <p className="text-foreground/90 text-sm leading-relaxed">
            3rd-year <span className="text-primary font-medium">CSE (AI/ML)</span> student at LPU. I build neural networks from scratch, ship full-stack AI products, and care deeply about engineering quality.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Focused on intelligent systems, product engineering, and scalable development. Looking for roles where I can contribute real engineering impact from day one.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
