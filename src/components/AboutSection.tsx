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
          AI/ML engineer with practical experience in neural network development, full-stack product delivery, and production-focused software engineering. Passionate about building intelligent systems that are reliable, scalable, and impactful in real-world environments.        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
