import { Users, Calendar, Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const items = [
  { icon: Users, title: "Club Representative", desc: "ML workshops & coding sessions." },
  { icon: Calendar, title: "Event Coordinator", desc: "Multi-event logistics management." },
  { icon: Trophy, title: "Cultural Achievement", desc: "2nd place – inter-college dance." },
];

const LeadershipSection = () => (
  <section className="section-light py-16 md:py-20">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionHeading label="Leadership" title="Beyond Code" variant="light" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div
              className="rounded-xl p-5 text-center border"
              style={{ borderColor: "hsl(0 0% 82%)", background: "hsl(0 0% 96%)" }}
            >
              <item.icon size={20} className="mx-auto mb-2" style={{ color: "hsl(var(--primary))" }} />
              <h4 className="font-display font-semibold text-sm mb-1" style={{ color: "hsl(var(--panel-foreground))" }}>
                {item.title}
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: "hsl(0 0% 45%)" }}>{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipSection;
