import { Linkedin, Github, Mail, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "hemanthvignesh2@gmail.com",
    href: "mailto:hemanthvignesh2@gmail.com",
  },
  {
    icon: Phone,
    label: "Mobile",
    value: "+91 95159 85193",
    href: "tel:+919515985193",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "hemanth-vignesh",
    href: "https://linkedin.com/in/hemanth-vignesh/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "HemanthVignesh",
    href: "https://github.com/HemanthVignesh",
  },
];

const ContactSection = () => (
  <section id="contact" className="py-24 md:py-32">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="Contact" title="Let's Connect" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {contacts.map((c, i) => (
          <AnimatedSection key={c.label} delay={i * 0.08}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:border-primary/30 transition-all duration-400 hover:glow-blue group"
            >
              <div className="shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <c.icon size={20} className="text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{c.label}</p>
                <p className="text-sm font-medium text-foreground">{c.value}</p>
              </div>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
