import AnimatedSection from "./AnimatedSection";

interface Props {
  label: string;
  title: string;
  variant?: "dark" | "light";
}

const SectionHeading = ({ label, title, variant = "dark" }: Props) => (
  <AnimatedSection className="mb-10 md:mb-12">
    <p className="font-display text-[11px] font-semibold tracking-[0.2em] uppercase mb-2 text-primary">
      {label}
    </p>
    <h2
      className="font-display text-3xl md:text-4xl font-bold"
      style={{ color: variant === "dark" ? "hsl(0 0% 96%)" : "hsl(0 0% 10%)" }}
    >
      {title}
    </h2>
  </AnimatedSection>
);

export default SectionHeading;
