import { Linkedin, Github, Mail, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const contacts = [
  { icon: Mail, label: "Email", value: "hemanthvignesh2@gmail.com", href: "mailto:hemanthvignesh2@gmail.com" },
  { icon: Phone, label: "Mobile", value: "+91 95159 85193", href: "tel:+919515985193" },
  { icon: Linkedin, label: "LinkedIn", value: "hemanth-vignesh", href: "https://linkedin.com/in/hemanth-vignesh/" },
  { icon: Github, label: "GitHub", value: "HemanthVignesh", href: "https://github.com/HemanthVignesh" },
];

const ContactSection = () => (
  <section id="contact" className="py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-3xl">
      <SectionHeading label="Contact" title="Let's Connect" />
      <AnimatedSection delay={0.1}>
        <div className="glass rounded-xl p-6 md:p-8">
          <p className="text-sm text-muted-foreground mb-5">
            Open to internships, placements, and engineering roles. Let's talk.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-lg p-3 hover:bg-secondary/50 transition-colors group"
              >
                <c.icon size={16} className="text-primary shrink-0" />
                <div>
                  <p className="text-[11px] text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-medium text-foreground">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default ContactSection;
