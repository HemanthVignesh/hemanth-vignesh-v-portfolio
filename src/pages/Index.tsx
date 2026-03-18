import Navbar from "@/components/Navbar";
import Background3D from "@/components/Background3D";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import EngineeringMindsetSection from "@/components/EngineeringMindsetSection";
import CurrentlyBuildingSection from "@/components/CurrentlyBuildingSection";
import AchievementsSection from "@/components/AchievementsSection";
import LeadershipSection from "@/components/LeadershipSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen relative">
    <Background3D />
    <div className="relative z-10">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EngineeringMindsetSection />
      <CurrentlyBuildingSection />
      <AchievementsSection />
      <EducationSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </div>
  </div>
);

export default Index;
