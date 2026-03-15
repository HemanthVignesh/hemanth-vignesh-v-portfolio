import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="About" title="Who I Am" />
      <AnimatedSection delay={0.15}>
        <div className="glass rounded-2xl p-8 md:p-10 space-y-4">
          <p className="text-foreground/90 leading-relaxed">
            I'm a <span className="text-primary font-medium">3rd-year Computer Science Engineering</span> student at Lovely Professional University, specializing in <span className="text-primary font-medium">Artificial Intelligence & Machine Learning</span>.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Passionate about building intelligent systems, scalable web products, and engineering solutions that create real-world impact. With hands-on experience in neural networks, NLP, and full-stack development, I bring both depth and breadth to every project.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Currently seeking internship and placement opportunities where I can contribute to innovative engineering teams and continue growing as a builder.
          </p>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default AboutSection;
