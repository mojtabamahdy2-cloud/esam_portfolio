import { HeroSection } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/About';
import { ServicesSection } from '@/components/sections/Services';
import { AbayatSection } from '@/components/sections/AbayatSection';
import { ProjectsSection } from '@/components/sections/Projects';
import { SkillsSection } from '@/components/sections/Skills';
import { ContactSection } from '@/components/sections/Contact';

export default function PortfolioPage() {
  return (
    <div className="relative flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AbayatSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
