import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import DecryptedText from "./DecryptedText";

const AboutSection = () => (
  <motion.section
    id="about"
    className="bg-transparent py-24 md:py-32 relative z-10 border-t border-white/5"
    initial={{ borderTopColor: "rgba(255, 255, 255, 0.05)" }}
    whileInView={{ borderTopColor: ["rgba(255, 255, 255, 0.05)", "rgba(0, 255, 170, 0.3)", "rgba(255, 255, 255, 0.05)"] }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
    viewport={{ once: true, margin: "-10%" }}
  >
    <div className="container mx-auto px-6 max-w-4xl">
      <AnimatedSection>
        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-6 text-primary">
          <DecryptedText text="About" speed={50} scrambleFrames={6} />
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
          <DecryptedText
            text="I build intelligent systems and"
            speed={30}
            scrambleFrames={7}
            delay={200}
          />
          {" "}
          <span className="text-primary">
            <DecryptedText
              text="practical AI products"
              speed={30}
              scrambleFrames={7}
              delay={600}
            />
          </span>
          {" "}
          <DecryptedText
            text="that solve real engineering problems."
            speed={30}
            scrambleFrames={7}
            delay={1000}
          />
        </h2>
        <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl text-muted-foreground font-medium">
          <DecryptedText
            text="AI/ML engineer with practical experience in neural network development, full-stack product delivery, and production-focused software engineering. Passionate about building intelligent systems that are reliable, scalable, and impactful in real-world environments."
            speed={12}
            scrambleFrames={5}
            delay={1400}
          />
        </p>
      </AnimatedSection>
    </div>
  </motion.section>
);

export default AboutSection;
