import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const edu = [
  { school: "Lovely Professional University", degree: "B.Tech CSE (AI/ML)", cgpa: "7.35", period: "2023 – Present" },
  { school: "Sri Chaithanya Junior College", degree: "Intermediate", cgpa: "7.5", period: "2020 – 2022" },
  { school: "Vijaya Bharathi EM High School", degree: "Matriculation", cgpa: "10.0", period: "2017 – 2020" },
];

const EducationSection = () => (
  <section className="section-dark py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionHeading label="Education" title="Academic" variant="dark" />
      <div className="space-y-4">
        {edu.map((e, i) => (
          <AnimatedSection key={e.school} delay={i * 0.08}>
            <div className="flex items-center gap-4 rounded-xl border border-border p-5 bg-secondary/20">
              <div className="shrink-0 w-2 h-2 rounded-full bg-primary" />
              <div className="flex-1">
                <h4 className="font-display font-bold text-foreground text-sm">{e.school}</h4>
                <p className="text-muted-foreground text-xs">{e.degree} · CGPA: {e.cgpa}</p>
              </div>
              <span className="text-xs text-muted-foreground hidden sm:block">{e.period}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
