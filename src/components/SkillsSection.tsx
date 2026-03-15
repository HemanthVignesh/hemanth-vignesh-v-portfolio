import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const categories = [
  { title: "Languages", skills: ["Python", "C++", "Java", "C"] },
  { title: "AI / ML", skills: ["Neural Networks", "NLP", "Scikit-learn", "Hugging Face", "Backpropagation"] },
  { title: "Web", skills: ["React", "FastAPI", "Node.js", "HTML/CSS"] },
  { title: "Data & Tools", skills: ["MySQL", "MongoDB", "Git", "REST APIs"] },
];

const SkillsSection = () => (
  <section id="skills" className="py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="Skills" title="Core Stack" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.08}>
            <div className="glass rounded-xl p-5 h-full hover:border-primary/20 transition-all duration-300">
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
