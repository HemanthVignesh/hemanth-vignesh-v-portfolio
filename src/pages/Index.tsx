import Navbar from "@/components/Navbar";
import Background3D from "@/components/Background3D";
import CustomCursor from "@/components/CustomCursor";
import GridBackground from "@/components/GridBackground";
import HeroSection from "@/components/HeroSection";
import ImpactMetrics from "@/components/ImpactMetrics";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import SkillsSection from "@/components/SkillsSection";
import ResumeCTA from "@/components/ResumeCTA";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen relative bg-background text-foreground font-body">
    <CustomCursor />
    <GridBackground />
    <Background3D />
    <div className="relative z-10 w-full overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ImpactMetrics />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <SkillsSection />
      <ResumeCTA />
      <ContactSection />
      <Footer />
    </div>
  </div>
);

export default Index;
