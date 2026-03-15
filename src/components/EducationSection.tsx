import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const edu = [
  { school: "Lovely Professional University", degree: "B.Tech CSE (AI/ML)", cgpa: "7.35", period: "2023 – Present" },
  { school: "Sri Chaithanya Junior College", degree: "Intermediate", cgpa: "7.5", period: "2020 – 2022" },
  { school: "Vijaya Bharathi EM High School", degree: "Matriculation", cgpa: "10.0", period: "2017 – 2020" },
];

const EducationSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="Education" title="Academic" />
      <div className="relative pl-6 border-l border-border">
        {edu.map((e, i) => (
          <AnimatedSection key={e.school} delay={i * 0.08}>
            <div className="mb-6 last:mb-0 relative">
              <div className="absolute -left-[calc(1.5rem+4px)] top-1.5 w-2 h-2 rounded-full bg-primary" />
              <p className="text-[11px] text-muted-foreground">{e.period}</p>
              <h4 className="font-display font-bold text-foreground text-sm">{e.school}</h4>
              <p className="text-muted-foreground text-xs">{e.degree} · CGPA: {e.cgpa}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
