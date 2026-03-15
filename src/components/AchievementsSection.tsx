import { Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const items = [
  { title: "Global Entrepreneurship Summit 2025", issuer: "E-Cell IIT Kharagpur", date: "Sep 2025" },
  { title: "DSA – C++ Data Structures & Algorithms", issuer: "CSE Pathashala", date: "Aug 2025" },
  { title: "Generative AI Revolution Certificate", issuer: "Aspire for Her", date: "Sep 2024" },
  { title: "Community Development Intern", issuer: "Tare Zameen Foundation", date: "Aug 2024" },
];

const AchievementsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="Certifications" title="Recognition" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div className="glass rounded-xl p-4 hover:border-primary/20 transition-all duration-300">
              <p className="text-[11px] text-muted-foreground mb-1">{item.date}</p>
              <h4 className="font-display font-semibold text-foreground text-sm leading-snug">{item.title}</h4>
              <p className="text-muted-foreground text-xs flex items-center gap-1 mt-1">
                <Award size={10} className="text-primary" /> {item.issuer}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
