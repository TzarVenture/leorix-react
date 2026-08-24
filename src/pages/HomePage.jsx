import React, { useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import NewHeroSection from '../components/home/NewHeroSection';
import MarqueeTicker from '../components/common/MarqueeTicker';
import EditorialGridSection from '../components/home/EditorialGridSection';
import CollectionPreview from '../components/home/CollectionPreview';
import HeroProductFeature from '../components/home/HeroProductFeature';
import VideoBannerSection from '../components/home/VideoBannerSection';
import ValidationProofSection from '../components/home/ValidationProofSection';
import InteractiveShoeSliderSection from '../components/home/InteractiveShoeSliderSection';
import ConversionBlock from '../components/home/ConversionBlock';
import TheApproachSection from '../components/home/TheApproachSection';
import WhatTheyAreSayingSection from '../components/home/WhatTheyAreSayingSection';
import AsAppreciatedOnSection from '../components/home/AsAppreciatedOnSection';

const HomePage = () => {
  const { mode } = useStore();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-brand-cream overflow-hidden">
      {/* Module 1: Hero Section */}
      <NewHeroSection />

      {/* Kinetic DTC Marquee Ticker */}
      <MarqueeTicker />

      {/* Module 2: Category Grid */}
      <EditorialGridSection />

      {/* Module 3: Collection Preview */}
      <CollectionPreview />

      {/* Module 4: Product Spotlight (Ground X) */}
      <HeroProductFeature />

      {/* Module 5: New Space Video Banner */}
      <VideoBannerSection />

      {/* Module 6: FDDI Validation Studio */}
      <ValidationProofSection />

      {/* Module 7: Colourway Stage */}
      <InteractiveShoeSliderSection />

      {/* Module 8: Priority Access / Conversion Block */}
      <ConversionBlock />

      {/* Module 9: The Approach (HOW WE BUILD) */}
      <TheApproachSection />

      {/* Phase 2 Live Store Only Sections ("What They're Saying" & "As Appreciated On") */}
      {mode !== 'phaseA' && (
        <>
          <WhatTheyAreSayingSection />
          <AsAppreciatedOnSection />
        </>
      )}
    </main>
  );
};

export default HomePage;
