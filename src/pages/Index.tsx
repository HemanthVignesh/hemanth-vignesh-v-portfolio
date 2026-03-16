import Navbar from "@/components/Navbar";
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
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    {/* Light */}
    <AboutSection />
    {/* Dark */}
    <SkillsSection />
    {/* Light */}
    <ProjectsSection />
    {/* Dark */}
    <ExperienceSection />
    {/* Dark */}
    <EngineeringMindsetSection />
    {/* Light */}
    <CurrentlyBuildingSection />
    {/* Light */}
    <AchievementsSection />
    {/* Dark */}
    <EducationSection />
    {/* Light */}
    <LeadershipSection />
    {/* Dark */}
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
