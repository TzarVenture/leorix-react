import React, { useEffect } from 'react';
import HeroScrubSection from '../components/home/HeroScrubSection';
import MarqueeTicker from '../components/common/MarqueeTicker';
import TheProblemSection from '../components/home/TheProblemSection';
import InteractiveShoeSliderSection from '../components/home/InteractiveShoeSliderSection';
import TheApproachSection from '../components/home/TheApproachSection';
import ValidationProofSection from '../components/home/ValidationProofSection';
import HeroProductFeature from '../components/home/HeroProductFeature';
import CollectionPreview from '../components/home/CollectionPreview';
import SocialProofStrip from '../components/home/SocialProofStrip';
import ConversionBlock from '../components/home/ConversionBlock';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-brand-cream overflow-hidden">
      {/* Module 1: Light Hero Scrub Animation */}
      <HeroScrubSection />

      {/* Kinetic DTC Marquee Ticker */}
      <MarqueeTicker />

      {/* Module 2: The Problem (THE GAP Apple Bento Grid) */}
      <TheProblemSection />

      {/* CUSTOM SKETCH SECTION: Interactive Variant Stage Card Slider */}
      <InteractiveShoeSliderSection />

      {/* Module 3: The Approach (HOW WE BUILD) */}
      <TheApproachSection />

      {/* Module 4: Validation / Proof (FDDI Biomechanical Studio) */}
      <ValidationProofSection />

      {/* Module 5: Hero Product Feature (Article X Stage) */}
      <HeroProductFeature />

      {/* Module 6: Collection Preview */}
      <CollectionPreview />

      {/* Module 7: Social Proof Strip (FDDI Credibility) */}
      <SocialProofStrip />

      {/* Module 8: Conversion Block (Waitlist / Early Access) */}
      <ConversionBlock />
    </main>
  );
};

export default HomePage;
