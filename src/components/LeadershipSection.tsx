import { Users, Calendar, Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const items = [
  { icon: Users, title: "Club Representative", desc: "Organized ML workshops and coding sessions." },
  { icon: Calendar, title: "Event Coordinator", desc: "Managed logistics for multi-event programs." },
  { icon: Trophy, title: "Cultural Achievement", desc: "2nd place – inter-college dance, LPU fest." },
];

const LeadershipSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="Leadership" title="Beyond Code" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div className="glass rounded-xl p-4 hover:border-primary/20 transition-all duration-300 text-center">
              <item.icon size={18} className="text-primary mx-auto mb-2" />
              <h4 className="font-display font-semibold text-foreground text-sm mb-1">{item.title}</h4>
              <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipSection;
