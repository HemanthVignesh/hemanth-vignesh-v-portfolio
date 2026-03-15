import { Code2, Globe, Brain, Database, Wrench } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["C++", "Python", "Java", "C"],
  },
  {
    icon: Globe,
    title: "Web & Frameworks",
    skills: ["React", "HTML", "CSS", "FastAPI", "Node.js"],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    skills: ["Scikit-learn", "NLP", "Hugging Face", "Neural Networks", "Model Training"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "RESTful APIs"],
  },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <SectionHeading label="Skills" title="Technical Arsenal" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.1}>
            <div className="glass rounded-2xl p-6 h-full hover:border-primary/30 transition-all duration-400 hover:scale-[1.02] hover:glow-blue group">
              <cat.icon
                size={24}
                className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300"
              />
              <h3 className="font-display font-semibold text-foreground mb-3 text-sm tracking-wide uppercase">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-md bg-secondary text-muted-foreground"
                  >
                    {s}
                  </span>
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
