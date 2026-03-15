import { Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const items = [
  {
    title: "Global Entrepreneurship Summit (GES) 2025",
    issuer: "E-Cell IIT Kharagpur",
    date: "Sep 2025",
  },
  {
    title: "DSA – C++ Data Structures & Algorithms",
    issuer: "CSE Pathashala",
    date: "Aug 2025",
  },
  {
    title: "Unleashing Innovation: The Generative AI Revolution",
    issuer: "Aspire for Her",
    date: "Sep 2024",
  },
  {
    title: "Community Development Intern",
    issuer: "Tare Zameen Foundation",
    date: "Aug 2024",
  },
];

const AchievementsSection = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="Certifications" title="Achievements" />
      <div className="relative pl-8 border-l border-primary/30">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className="mb-8 last:mb-0 relative">
              <div className="absolute -left-[calc(2rem+6px)] top-1 w-3 h-3 rounded-full bg-primary" />
              <p className="text-xs text-muted-foreground mb-1">{item.date}</p>
              <h4 className="font-display font-semibold text-foreground text-sm">
                {item.title}
              </h4>
              <p className="text-muted-foreground text-xs flex items-center gap-1.5 mt-0.5">
                <Award size={12} /> {item.issuer}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
