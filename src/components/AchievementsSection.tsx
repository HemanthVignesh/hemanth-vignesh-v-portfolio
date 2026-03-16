import { Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const items = [
  { title: "Global Entrepreneurship Summit 2025", issuer: "E-Cell IIT Kharagpur", date: "Sep 2025", image: "/placeholder.svg" },
  { title: "DSA – C++ Data Structures & Algorithms", issuer: "CSE Pathashala", date: "Aug 2025", image: "/placeholder.svg" },
  { title: "Generative AI Revolution Certificate", issuer: "Aspire for Her", date: "Sep 2024", image: "/placeholder.svg" },
  { title: "Community Development Intern", issuer: "Tare Zameen Foundation", date: "Aug 2024", image: "/placeholder.svg" },
];

const AchievementsSection = () => (
  <section className="section-light py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionHeading label="Certifications" title="Recognition" variant="light" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div className="rounded-xl overflow-hidden border" style={{ borderColor: "hsl(0 0% 82%)", background: "hsl(0 0% 96%)" }}>
              {/* Certificate image – replace /placeholder.svg with your certificate image */}
              <div className="aspect-[16/9] bg-muted overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <p className="text-[11px] mb-1" style={{ color: "hsl(0 0% 50%)" }}>{item.date}</p>
                <h4 className="font-display font-semibold text-sm leading-snug" style={{ color: "hsl(var(--panel-foreground))" }}>
                  {item.title}
                </h4>
                <p className="text-xs flex items-center gap-1 mt-1" style={{ color: "hsl(0 0% 45%)" }}>
                  <Award size={10} style={{ color: "hsl(var(--primary))" }} /> {item.issuer}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AchievementsSection;
