import { Linkedin, Github, Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const contacts = [
  { icon: Mail, label: "Email", value: "hemanthvignesh2@gmail.com", href: "mailto:hemanthvignesh2@gmail.com" },
  { icon: Phone, label: "Mobile", value: "+91 95159 85193", href: "tel:+919515985193" },
  { icon: Linkedin, label: "LinkedIn", value: "hemanth-vignesh", href: "https://linkedin.com/in/hemanth-vignesh/" },
  { icon: Github, label: "GitHub", value: "HemanthVignesh", href: "https://github.com/HemanthVignesh" },
];

const ContactSection = () => (
  <motion.section 
    id="contact" 
    className="bg-transparent py-24 relative z-10 border-t border-border/50"
    initial={{ borderTopColor: "hsl(var(--border) / 0.5)" }}
    whileInView={{ borderTopColor: ["hsl(var(--border) / 0.5)", "hsl(var(--primary) / 0.3)", "hsl(var(--border) / 0.5)"] }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
    viewport={{ once: true, margin: "-10%" }}
  >
    <div className="container mx-auto px-6 max-w-4xl">
      <AnimatedSection>
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight">Let's Connect</h2>
          <p className="text-muted-foreground text-sm mt-6 max-w-md mx-auto font-medium">
            Open to internships, placements, and engineering roles.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
        {contacts.map((c, i) => (
          <AnimatedSection key={c.label} delay={i * 0.1}>
            <motion.a
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover="hover"
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border/50 p-6 hover:border-primary/50 transition-all duration-500 bg-card/40 backdrop-blur-sm hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(var(--primary-rgb),0.15)]"
            >
              <motion.div 
                variants={{ hover: { scale: 1.15 } }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
              >
                <c.icon size={18} className="text-primary" />
              </motion.div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">{c.label}</span>
              <span className="text-xs font-mono text-foreground/80 text-center break-all">{c.value}</span>
            </motion.a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </motion.section>
);

export default ContactSection;
