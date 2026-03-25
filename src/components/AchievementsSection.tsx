import { Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const items = [
  { 
    title: "Oracle Cloud Infrastructure 2025", 
    issuer: "Oracle", 
    date: "Mar 2026", 
    href: "https://www.linkedin.com/posts/hemanth-vignesh_oracle-oci-artificialintelligence-activity-7442248950381903873-lEgg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-0fnIBTPH8SLB5qFLwT8lTv-4FOB1FXFw",
    image: "/certs/oracle.png"
  },
  { 
    title: "Global Entrepreneurship Summit 2025", 
    issuer: "E-Cell IIT Kharagpur", 
    date: "Sep 2025", 
    href: "https://www.linkedin.com/posts/hemanth-vignesh_entrepreneurship-iitkharagpur-ges2025-activity-7401135859434979328-VmkK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-0fnIBTPH8SLB5qFLwT8lTv-4FOB1FXFw",
    image: "/certs/iitk.png"
  },
  { 
    title: "DSA – C++ Data Structures & Algorithms", 
    issuer: "CSE Pathashala", 
    date: "Aug 2025", 
    href: "https://www.linkedin.com/posts/hemanth-vignesh_cpp-dsa-programming-activity-7401136371769229312-xJuk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-0fnIBTPH8SLB5qFLwT8lTv-4FOB1FXFw",
    image: "/certs/dsa.png"
  },
  { 
    title: "Generative AI Revolution Certificate", 
    issuer: "Aspire for Her", 
    date: "Sep 2024", 
    href: "https://www.linkedin.com/posts/hemanth-vignesh_attended-a-workshop-on-unleashing-innovation-activity-7244569710648811521-3YK0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-0fnIBTPH8SLB5qFLwT8lTv-4FOB1FXFw",
    image: "/certs/genai.png"
  },
  { 
    title: "Community Development Intern", 
    issuer: "Tare Zameen Foundation", 
    date: "Aug 2024", 
    href: "https://www.linkedin.com/posts/hemanth-vignesh_had-a-great-working-experience-in-this-vacation-activity-7229060318935539713-vhut?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD-0fnIBTPH8SLB5qFLwT8lTv-4FOB1FXFw",
    image: "/certs/social.png"
  },
];

const AchievementsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      className="bg-transparent py-20 relative z-10 border-t border-white/5"
      initial={{ borderTopColor: "rgba(255, 255, 255, 0.05)" }}
      whileInView={{ borderTopColor: ["rgba(255, 255, 255, 0.05)", "rgba(0, 255, 170, 0.3)", "rgba(255, 255, 255, 0.05)"] }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      viewport={{ once: true, margin: "-10%" }}
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <SectionHeading label="Certifications" title="Recognition" variant="dark" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-12 w-full">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.08} className="h-full">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group h-full flex flex-col justify-between rounded-2xl border border-white/5 bg-card/40 backdrop-blur-sm p-6 hover:-translate-y-2 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(0,255,170,0.15)] relative overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-primary/10 rounded-full blur-[20px] group-hover:bg-primary/20 transition-all duration-500" />

                <div>
                  <p className="text-[10px] font-mono font-bold mb-3 text-primary tracking-widest uppercase">{item.date}</p>
                  <h4 className="font-display font-medium text-sm leading-relaxed text-foreground mb-6 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-xs flex items-center gap-2 font-medium text-muted-foreground/80 pt-4 border-t border-white/5">
                  <Award size={14} className="text-primary" /> {item.issuer}
                </p>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {hoveredIndex !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              x: mousePos.x + 20, 
              y: mousePos.y + 20 
            }}
            exit={{ opacity: 0, scale: 0.8, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 25, opacity: { duration: 0.2 } }}
            className="fixed pointer-events-none z-[100] w-64 md:w-80 h-auto rounded-xl overflow-hidden border border-primary/20 bg-background/80 backdrop-blur-lg shadow-2xl p-1"
            style={{ 
              left: 0, 
              top: 0,
              transform: "translate(-50%, -50%)" 
            }}
          >
            <div className="relative w-full aspect-[1.414/1] bg-muted overflow-hidden rounded-lg">
              <img 
                src={items[hoveredIndex].image} 
                alt={items[hoveredIndex].title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/placeholder.svg";
                }}
              />
            </div>
            <div className="p-2">
              <p className="text-[10px] font-mono font-bold text-primary truncate">
                {items[hoveredIndex].title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default AchievementsSection;

