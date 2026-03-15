import AnimatedSection from "./AnimatedSection";

interface Props {
  label: string;
  title: string;
}

const SectionHeading = ({ label, title }: Props) => (
  <AnimatedSection className="mb-8 md:mb-10">
    <p className="text-primary font-display text-[11px] font-semibold tracking-[0.2em] uppercase mb-2">
      {label}
    </p>
    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
      {title}
    </h2>
  </AnimatedSection>
);

export default SectionHeading;
