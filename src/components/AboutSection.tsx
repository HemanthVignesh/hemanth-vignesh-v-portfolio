import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <section id="about" className="section-light py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-4xl">
      <AnimatedSection>
        <p className="text-xs font-medium tracking-[0.2em] uppercase mb-6" style={{ color: "hsl(var(--primary))" }}>
          About
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" style={{ color: "hsl(var(--panel-foreground))" }}>
          I build <span style={{ color: "hsl(var(--primary))" }}>intelligent systems</span> and
          practical AI products that solve real engineering problems.
        </h2>
        <p className="mt-6 text-base leading-relaxed max-w-2xl" style={{ color: "hsl(0 0% 40%)" }}>
          3rd-year CSE (AI/ML) student at LPU. I build neural networks from scratch, ship full-stack AI products, and care about engineering quality. Looking for roles where I can contribute real impact from day one.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
