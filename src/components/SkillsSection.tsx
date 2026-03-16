import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const categories = [
  { title: "Languages", skills: ["Python", "C++", "Java", "C"] },
  { title: "AI / ML", skills: ["Neural Networks", "NLP", "Scikit-learn", "Hugging Face"] },
  { title: "Web", skills: ["React", "FastAPI", "Node.js", "HTML/CSS"] },
  { title: "Tools", skills: ["MySQL", "MongoDB", "Git", "REST APIs"] },
];

const SkillsSection = () => (
  <section id="skills" className="section-dark py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionHeading label="Skills" title="Core Stack" variant="dark" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.08}>
            <div>
              <h3 className="font-display text-xs font-semibold text-primary tracking-widest uppercase mb-3">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
