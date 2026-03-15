import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const edu = [
  {
    school: "Lovely Professional University",
    location: "Punjab, India",
    degree: "B.Tech – Computer Science & Engineering",
    cgpa: "CGPA: 7.35",
    period: "Aug 2023 – Present",
  },
  {
    school: "Sri Chaithanya Junior College",
    location: "Madanapalle, Andhra Pradesh",
    degree: "Intermediate",
    cgpa: "CGPA: 7.5",
    period: "Jun 2020 – Jul 2022",
  },
  {
    school: "Vijaya Bharathi English Medium High School",
    location: "Madanapalle, Andhra Pradesh",
    degree: "Matriculation",
    cgpa: "CGPA: 10",
    period: "Jun 2017 – Mar 2020",
  },
];

const EducationSection = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="Education" title="Academic Timeline" />
      <div className="relative pl-8 border-l border-primary/30">
        {edu.map((e, i) => (
          <AnimatedSection key={e.school} delay={i * 0.1}>
            <div className="mb-10 last:mb-0 relative">
              <div className="absolute -left-[calc(2rem+6px)] top-1 w-3 h-3 rounded-full bg-primary" />
              <div className="flex items-center gap-2 mb-1">
                <GraduationCap size={14} className="text-primary" />
                <p className="text-xs text-muted-foreground">{e.period}</p>
              </div>
              <h4 className="font-display font-bold text-foreground">{e.school}</h4>
              <p className="text-muted-foreground text-sm">{e.degree}</p>
              <p className="text-primary text-xs font-medium mt-1">{e.cgpa}</p>
              <p className="text-muted-foreground text-xs">{e.location}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default EducationSection;
