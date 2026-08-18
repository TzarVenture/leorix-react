import React, { useEffect } from 'react';
// import HeroScrubSection from '../components/home/HeroScrubSection';
import NewHeroSection from '../components/home/NewHeroSection';
import MarqueeTicker from '../components/common/MarqueeTicker';
import EditorialGridSection from '../components/home/EditorialGridSection';
import InteractiveShoeSliderSection from '../components/home/InteractiveShoeSliderSection';
import TheApproachSection from '../components/home/TheApproachSection';
import ValidationProofSection from '../components/home/ValidationProofSection';
import HeroProductFeature from '../components/home/HeroProductFeature';
import CollectionPreview from '../components/home/CollectionPreview';
import WhatTheyAreSayingSection from '../components/home/WhatTheyAreSayingSection';
import AsAppreciatedOnSection from '../components/home/AsAppreciatedOnSection';
import TheProblemSection from '../components/home/TheProblemSection';
import SocialProofStrip from '../components/home/SocialProofStrip';
import ConversionBlock from '../components/home/ConversionBlock';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-brand-cream overflow-hidden">
      {/* ── Module 1: Upgrade GSAP Hero Section ── */}
      {/* <HeroScrubSection /> (Commented out for reference) */}
      <NewHeroSection />

      {/* Kinetic DTC Marquee Ticker */}
      <MarqueeTicker />

      {/* Section 02: Editorial Collection Grid (2x2 WearComet Inspired Grid) */}
      <EditorialGridSection />

      {/* Section 03: The Problem (THE GAP IN FOOTWEAR Apple Bento Grid) */}
      <TheProblemSection />

      {/* Section 04: The Approach (HOW WE BUILD) */}
      <TheApproachSection />

      {/* Section 05: Validation / Proof (FDDI Biomechanical Studio) */}
      <ValidationProofSection />

      {/* Section 06: Hero Product Feature (Article X Stage) */}
      <HeroProductFeature />

      {/* Section 07: Interactive Variant Stage Card Slider */}
      <InteractiveShoeSliderSection />

      {/* Section 08: Collection Preview */}
      <CollectionPreview />

      {/* Section 09: Community Proof (WHAT THEY'RE SAYING?) */}
      <WhatTheyAreSayingSection />

      {/* Media Press Banner: AS APPRECIATED ON */}
      <AsAppreciatedOnSection />

      {/* Section 10: Social Proof Strip (FDDI Credibility) */}
      <SocialProofStrip />

      {/* Section 11: Conversion Block (Waitlist / Early Access) */}
      <ConversionBlock />
    </main>
  );
};

export default HomePage;
