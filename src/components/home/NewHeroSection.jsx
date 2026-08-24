import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import gsap from 'gsap';

// Import Hero Shoe Images & Background (Optimized WebP with PNG Fallback)
import greenShoe from '../../../img/green-shoe-hero.webp';
import whiteShoe from '../../../img/white-shoe-hero.webp';
import pureWhiteShoe from '../../../img/pure-white-shoe-hero.webp';
import heroBgNew from '../../../img/hero-bg-new.webp';

const HERO_VARIANTS = [
  {
    id: 'green-hero',
    name: 'Forest Green Accent',
    image: greenShoe,
    colorHex: '#2E3E31',
    code: 'FG-01'
  },
  {
    id: 'white-hero',
    name: 'Classic White & Tan',
    image: whiteShoe,
    colorHex: '#CEB08A',
    code: 'WT-02'
  },
  {
    id: 'pure-white-hero',
    name: 'Pure Alabaster White',
    image: pureWhiteShoe,
    colorHex: '#EAE6DF',
    code: 'PW-03'
  }
];

const NewHeroSection = () => {
  const { mode } = useStore();
  const [activeIndex, setActiveIndex] = useState(0);

  // GSAP Refs
  const stageRef = useRef(null);
  const shoeRefs = useRef([]);
  const levitationRef = useRef(null);
  const shadowRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const subTextRef = useRef(null);

  // 1. Initial Headline 2-Line GSAP Kinetic Mask Reveal & Continuous Levitation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line 1 Smooth Mask Reveal
      gsap.fromTo(
        line1Ref.current,
        { y: '115%', opacity: 0, filter: 'blur(8px)' },
        { y: '0%', opacity: 1, filter: 'blur(0px)', duration: 0.85, ease: 'power3.out' }
      );

      // Line 2 Staggered Mask Reveal
      gsap.fromTo(
        line2Ref.current,
        { y: '115%', opacity: 0, filter: 'blur(8px)' },
        { y: '0%', opacity: 1, filter: 'blur(0px)', duration: 0.9, delay: 0.18, ease: 'power3.out' }
      );

      // Subheading Fade Up
      gsap.fromTo(
        subTextRef.current,
        { y: 22, opacity: 0 },
        { y: 0, opacity: 0.9, duration: 0.7, delay: 0.38, ease: 'power2.out' }
      );

      // Continuous Floating Levitation Loop (Runs 24/7 on levitation wrapper)
      gsap.to(levitationRef.current, {
        y: -14,
        rotate: 1.5,
        duration: 2.4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });

      // Continuous Shadow Scaling Loop
      gsap.to(shadowRef.current, {
        scaleX: 0.82,
        opacity: 0.35,
        duration: 2.4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }, stageRef);

    return () => ctx.revert();
  }, []);

  // 2. Unstoppable Clockwork Auto-Timer Engine (2.0s Interval)
  useEffect(() => {
    const timer = setInterval(() => {
      if (document.visibilityState === 'visible') {
        setActiveIndex((prevIndex) => (prevIndex + 1) % HERO_VARIANTS.length);
      }
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  // 3. Pre-rendered Multi-Image Layer GSAP Transition (100% Flicker-Free Zap)
  useEffect(() => {
    HERO_VARIANTS.forEach((_, idx) => {
      const el = shoeRefs.current[idx];
      if (!el) return;

      if (idx === activeIndex) {
        // Ultra-Fast ZAP IN active shoe variant (0.35s snap)
        gsap.killTweensOf(el);
        gsap.fromTo(
          el,
          {
            x: 240,
            rotate: 24,
            scale: 0.55,
            opacity: 0,
            filter: 'blur(8px) brightness(1.5)',
            zIndex: 20,
          },
          {
            x: 0,
            rotate: 0,
            scale: 1,
            opacity: 1,
            filter: 'blur(0px) brightness(1)',
            duration: 0.35,
            ease: 'power4.out',
          }
        );
      } else {
        // Instant/Fast fade OUT inactive shoe variants
        gsap.killTweensOf(el);
        gsap.to(el, {
          opacity: 0,
          scale: 0.85,
          zIndex: 10,
          duration: 0.15,
          ease: 'power2.in',
        });
      }
    });
  }, [activeIndex]);

  return (
    <section
      ref={stageRef}
      className="relative w-full h-auto py-8 sm:py-10 md:py-8 lg:py-10 md:min-h-[420px] lg:min-h-[460px] md:max-h-[540px] lg:max-h-[580px] bg-brand-green text-brand-cream overflow-hidden flex items-center border-b border-brand-tan/20 select-none cursor-default"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(46,62,49,0.92) 35%, rgba(30,43,33,0.75)), url(${heroBgNew})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Ambient Spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(206,176,138,0.20),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          
          {/* ── LEFT COLUMN: HEADING, SUBTITLE & CTA BUTTON ── */}
          <div className="md:col-span-6 space-y-2.5 sm:space-y-3.5 text-center md:text-left flex flex-col items-center md:items-start justify-center">
            
            {/* Main Bold Heading — Mixed Case #BeLeorix */}
            <h1 className="font-sans font-black text-2xl sm:text-3xl md:text-3xl lg:text-[2.25rem] xl:text-[2.5rem] tracking-tight leading-[1.2] sm:leading-[1.24] lg:leading-[1.26] text-center md:text-left drop-shadow-md">
              <span className="block overflow-hidden pb-0.5 sm:pb-1">
                <span ref={line1Ref} className="block text-brand-tan transform-gpu normal-case">
                  #BeLeorix
                </span>
              </span>
              <span className="block overflow-hidden pb-0.5 sm:pb-1">
                <span ref={line2Ref} className="block text-brand-cream transform-gpu">
                  Designed, Engineered & Validated
                </span>
              </span>
            </h1>

            {/* Subheading — Compact & Centered on Mobile */}
            <p ref={subTextRef} className="font-sans text-xs sm:text-sm text-brand-tan font-medium max-w-xs sm:max-w-md md:max-w-xl leading-relaxed text-center md:text-left mx-auto md:mx-0 opacity-90 transform-gpu">
              Where refined design meets engineering precision, tested and validated for everyday performance
            </p>

            {/* CTA Action Button — Centered on Mobile */}
            <div className="pt-1.5 flex justify-center md:justify-start w-full">
              {mode === 'phaseA' ? (
                <Link
                  to="/vault"
                  className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-brand-tan text-brand-green font-sans font-bold text-xs uppercase tracking-widest hover:bg-brand-cream hover:scale-105 active:scale-95 transition-all shadow-xl border border-brand-tan/40 cursor-pointer"
                >
                  <span>Join priority list</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <Link
                  to="/shop/men"
                  className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-brand-tan text-brand-green font-sans font-bold text-xs uppercase tracking-widest hover:bg-brand-cream hover:scale-105 active:scale-95 transition-all shadow-xl border border-brand-tan/40 cursor-pointer"
                >
                  <span>Shop the drop</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
            </div>

          </div>

          {/* ── RIGHT COLUMN: STACKED DOM GSAP ANIMATED SHOE STAGE ── */}
          <div className="md:col-span-6 relative flex items-center justify-center min-h-[220px] sm:min-h-[260px] md:min-h-[340px]">
            
            {/* GSAP Interactive Shoe Stage */}
            <div className="relative w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[400px] md:max-w-[480px] flex items-center justify-center">
              
              {/* Radial Backdrop Glow */}
              <div className="absolute w-44 h-44 sm:w-72 sm:h-72 rounded-full bg-brand-tan/15 blur-2xl -z-10 pointer-events-none" />

              {/* Dedicated Levitation Wrapper (Infinite float loop 24/7) */}
              <div ref={levitationRef} className="relative w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[340px] flex items-center justify-center transform-gpu">
                {/* Pre-rendered Stacked Variant Images (Zero DOM re-mounting, 100% GPU accelerated) */}
                {HERO_VARIANTS.map((variant, idx) => (
                  <img
                    key={variant.id}
                    ref={(el) => (shoeRefs.current[idx] = el)}
                    src={variant.image}
                    alt={`LEORIX Article X — ${variant.name}`}
                    fetchpriority="high"
                    decoding="async"
                    className="absolute inset-0 m-auto w-full h-auto max-h-[190px] sm:max-h-[250px] md:max-h-[310px] lg:max-h-[330px] object-contain drop-shadow-[0_16px_26px_rgba(0,0,0,0.60)] select-none pointer-events-none transform-gpu opacity-0"
                  />
                ))}
              </div>

              {/* Dynamic Levitation Shadow */}
              <div
                ref={shadowRef}
                className="absolute -bottom-1 sm:-bottom-2 w-3/4 h-5 sm:h-6 bg-black/60 rounded-full blur-lg -z-10 pointer-events-none"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default NewHeroSection;
