import { HeroSection } from '@/components/sections/Hero';
import { AboutSection } from '@/components/sections/About';
import { ServicesSection } from '@/components/sections/Services';
import { AbayatSection } from '@/components/sections/AbayatSection';
import { SkillsSection } from '@/components/sections/Skills';
import { ContactSection } from '@/components/sections/Contact';
import { HatsSection } from '@/components/sections/HatsSection';
import { TShirtsSection } from '@/components/sections/TShirtsSection';
import { ChestVestsSection } from '@/components/sections/ChestVestsSection';
import { AbayaConceptsSection } from '@/components/sections/AbayaConceptsSection';
export default function PortfolioPage() {
  return (
    <div className="relative flex flex-col w-full">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AbayatSection />
      <AbayaConceptsSection />
      <HatsSection />
      <TShirtsSection />
      <ChestVestsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
