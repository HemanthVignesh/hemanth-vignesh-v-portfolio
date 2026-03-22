import { Users, Calendar, Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const items = [
  { icon: Users, title: "Club Representative", desc: "ML workshops & coding sessions." },
  { icon: Calendar, title: "Event Coordinator", desc: "Multi-event logistics management." },
  { icon: Trophy, title: "Cultural Achievement", desc: "2nd place – inter-college dance." },
];

const LeadershipSection = () => (
  <section className="bg-background py-16 md:py-20 relative z-10">
    <div className="container mx-auto px-6 max-w-4xl">
      <SectionHeading label="Leadership" title="Beyond Code" variant="dark" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.08}>
            <div
              className="group rounded-2xl p-6 text-center border border-border/50 bg-card/40 backdrop-blur-sm transition-all hover:border-primary/50 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <item.icon size={24} className="text-primary" />
              </div>
              <h4 className="font-display font-bold text-base mb-2 text-foreground">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipSection;
