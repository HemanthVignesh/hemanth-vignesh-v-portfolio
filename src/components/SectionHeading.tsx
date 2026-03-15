import AnimatedSection from "./AnimatedSection";

interface Props {
  label: string;
  title: string;
}

const SectionHeading = ({ label, title }: Props) => (
  <AnimatedSection className="mb-12 md:mb-16">
    <p className="text-primary font-display text-sm font-semibold tracking-widest uppercase mb-3">
      {label}
    </p>
    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
      {title}
    </h2>
  </AnimatedSection>
);

export default SectionHeading;
