import { ArrowRight, Download } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const ResumeCTA = () => (
    <section className="bg-background py-24 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6 max-w-4xl text-center relative">
            {/* Decorative ambient bounds */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <AnimatedSection className="relative z-10 flex flex-col items-center">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                    Ready to build <span className="text-primary tracking-tight">serious systems</span>?
                </h2>
                <p className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed font-medium">
                    Whether it's deploying scalable backends, fine-tuning neural networks, or shipping fast SaaS products, I am ready.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-6">
                    <a
                        href="/Hemanth_Vignesh_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center"
                    >
                        <div className="relative flex items-center justify-center h-16 w-64 rounded-full border border-primary bg-primary/10 text-primary font-bold tracking-widest uppercase transition-all duration-500 hover:bg-primary hover:text-black hover:shadow-[0_0_40px_-5px_hsl(var(--primary))] overflow-hidden cursor-pointer">
                            <span className="relative z-10 flex items-center gap-3">
                                Grab Resume <Download size={18} />
                            </span>
                        </div>
                    </a>

                    <a
                        href="#contact"
                        className="group flex items-center justify-center h-16 w-64 rounded-full border border-white/10 bg-card text-foreground font-bold tracking-widest uppercase transition-all duration-500 hover:border-white/30 hover:bg-white/5 cursor-pointer"
                    >
                        <span className="flex items-center gap-3">
                            Reach Out <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                        </span>
                    </a>
                </div>
            </AnimatedSection>
        </div>
    </section>
);

export default ResumeCTA;
