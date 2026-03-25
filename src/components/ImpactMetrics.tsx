import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const metrics = [
    { label: "Lines of Code Written", value: "250K+" },
    { label: "Projects Deployed", value: "7+" },
    { label: "DSA Questions Solved", value: "150+" },
];

const ImpactMetrics = () => (
    <motion.section 
        className="bg-transparent py-16 md:py-24 relative z-10 border-t border-border/50"
        initial={{ borderTopColor: "hsl(var(--border) / 0.5)" }}
        whileInView={{ borderTopColor: ["hsl(var(--border) / 0.5)", "hsl(var(--primary) / 0.3)", "hsl(var(--border) / 0.5)"] }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-10%" }}
    >
        <div className="container mx-auto px-6 max-w-5xl">
            <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
                {metrics.map((m, i) => (
                    <div key={m.label} className="flex flex-col gap-2 relative">
                        <motion.span
                            initial={{ filter: "blur(10px)", opacity: 0, y: 20 }}
                            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8, ease: "easeOut" }}
                            className="font-display text-4xl md:text-5xl font-bold text-primary drop-shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)] tracking-tighter"
                        >
                            {m.value}
                        </motion.span>
                        <motion.span
                            initial={{ filter: "blur(5px)", opacity: 0 }}
                            whileInView={{ filter: "blur(0px)", opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 + 0.2, duration: 0.8, ease: "easeOut" }}
                            className="text-xs tracking-[0.2em] uppercase font-bold text-muted-foreground"
                        >
                            {m.label}
                        </motion.span>
                        {i !== metrics.length - 1 && (
                            <div className="hidden md:block absolute right-[-24px] top-1/2 -translate-y-1/2 w-[1px] h-12 bg-border/50" />
                        )}
                    </div>
                ))}
            </AnimatedSection>
        </div>
    </motion.section>
);

export default ImpactMetrics;
