import { Users, Calendar, Trophy } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: Users,
    title: "Club Representative",
    desc: "Organized workshops, coding sessions, and speaker events on neural networks, ML tools, and Python libraries.",
  },
  {
    icon: Calendar,
    title: "Event Coordinator",
    desc: "Managed logistics, participant coordination, and judge communication for multi-event programs.",
  },
  {
    icon: Trophy,
    title: "Cultural Achievement",
    desc: "Secured 2nd place in inter-college dance competition at LPU fest, representing Team Telangana.",
  },
];

const LeadershipSection = () => (
  <section className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="Leadership" title="Beyond Academics" />
      <div className="grid gap-5">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.1}>
            <div className="glass rounded-2xl p-6 flex items-start gap-4 hover:border-primary/30 transition-all duration-400">
              <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <item.icon size={18} className="text-primary" />
              </div>
              <div>
                <h4 className="font-display font-semibold text-foreground text-sm mb-1">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default LeadershipSection;
