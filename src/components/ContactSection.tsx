import { Linkedin, Github, Mail, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const contacts = [
  { icon: Mail, label: "Email", value: "hemanthvignesh2@gmail.com", href: "mailto:hemanthvignesh2@gmail.com" },
  { icon: Phone, label: "Mobile", value: "+91 95159 85193", href: "tel:+919515985193" },
  { icon: Linkedin, label: "LinkedIn", value: "hemanth-vignesh", href: "https://linkedin.com/in/hemanth-vignesh/" },
  { icon: Github, label: "GitHub", value: "HemanthVignesh", href: "https://github.com/HemanthVignesh" },
];

const ContactSection = () => (
  <section id="contact" className="section-dark py-20 md:py-28">
    <div className="container mx-auto px-6 max-w-4xl">
      <AnimatedSection>
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-2">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Let's Connect</h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-md mx-auto">
            Open to internships, placements, and engineering roles.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
        {contacts.map((c, i) => (
          <AnimatedSection key={c.label} delay={i * 0.08}>
            <a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 rounded-xl border border-border p-5 hover:border-primary/40 transition-all duration-300 bg-secondary/20 group"
            >
              <c.icon size={20} className="text-primary" />
              <span className="text-xs text-muted-foreground">{c.label}</span>
              <span className="text-xs font-medium text-foreground text-center break-all">{c.value}</span>
            </a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ContactSection;
