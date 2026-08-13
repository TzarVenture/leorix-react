import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { HERO_PRODUCT } from '../../data/products';
import heroBg from '../../../img/hero_Bg.png';

const HeroScrubSection = () => {
  const { mode } = useStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeColor = HERO_PRODUCT.colors[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? HERO_PRODUCT.colors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === HERO_PRODUCT.colors.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      className="relative w-full h-[calc(100vh-88px)] sm:h-[calc(100vh-92px)] min-h-[480px] max-h-[850px] bg-brand-green text-brand-cream overflow-hidden flex flex-col justify-between"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Pendulum animation keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes pendulumIn {
          0% {
            transform: rotate(-18deg) scale(0.72) translateX(-80px);
            filter: blur(6px);
            opacity: 0;
          }
          65% {
            transform: rotate(5deg) scale(1.04) translateX(10px);
            filter: blur(0px);
            opacity: 1;
          }
          85% {
            transform: rotate(-2deg) scale(1.01) translateX(-4px);
          }
          100% {
            transform: rotate(0deg) scale(1) translateX(0);
            opacity: 1;
          }
        }
        .pendulum-enter {
          animation: pendulumIn 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
        }
      `}} />

      {/* ── Headline Block — Top Center (Equalized Spacing from Navbar) ── */}
      <div className="relative z-20 flex-shrink-0 flex flex-col items-center justify-center text-center px-4 pt-6 sm:pt-8 md:pt-10 lg:pt-12 space-y-3 sm:space-y-4">
        
        {/* Single Line Main Heading on Desktop/Laptop */}
        <h1 className="font-sans font-black text-lg sm:text-2xl md:text-3xl lg:text-[2.2rem] xl:text-[2.6rem] 2xl:text-[2.85rem] tracking-tight text-brand-cream uppercase leading-tight max-w-full sm:whitespace-nowrap">
          Looks Designed. Built to Be Proven.
        </h1>

        {/* Subheading with Balanced Spacing */}
        <p className="font-sans text-xs sm:text-sm md:text-base lg:text-lg text-brand-tan font-medium max-w-xl sm:max-w-2xl md:max-w-3xl leading-snug sm:leading-relaxed">
          Where refined design meets engineering precision, tested and validated for everyday performance.
        </p>

        {/* Dynamic Brand CTA Button (Phase A vs Phase B) */}
        <div className="pt-2 sm:pt-3">
          {mode === 'phaseA' ? (
            <Link
              to="/vault"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-brand-tan text-brand-green font-sans font-bold text-xs uppercase tracking-widest hover:bg-brand-cream hover:scale-105 active:scale-95 transition-all shadow-lg border border-brand-tan/40"
            >
              <span>Join Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/shop/men"
              className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-brand-tan text-brand-green font-sans font-bold text-xs uppercase tracking-widest hover:bg-brand-cream hover:scale-105 active:scale-95 transition-all shadow-lg border border-brand-tan/40"
            >
              <span>Shop Article X</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>

      </div>

      {/* ── Shoe Stage — Centered & Resting Flush at Bottom Edge ── */}
      <div className="relative z-10 flex-1 min-h-0 flex items-end justify-center px-3 sm:px-8 md:px-12 gap-2 sm:gap-6 pb-0 overflow-hidden">

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="flex-shrink-0 self-center p-2.5 sm:p-3.5 rounded-full bg-brand-ink/70 border border-brand-tan/30 text-brand-cream hover:bg-brand-tan hover:text-brand-green hover:scale-110 active:scale-95 transition-all shadow-xl select-none z-30"
          aria-label="Previous Colorway"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Centered Shoe Container — Proportionally sized for cropped PNGs */}
        <div className="relative flex items-end justify-center flex-1 max-w-2xl sm:max-w-3xl lg:max-w-4xl h-full min-h-0">
          <img
            key={activeColor.code}
            src={activeColor.image}
            alt={`LEORIX Article X — ${activeColor.name}`}
            className="pendulum-enter w-auto max-w-[260px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[580px] xl:max-w-[660px] max-h-[26vh] sm:max-h-[32vh] md:max-h-[36vh] lg:max-h-[40vh] object-contain object-bottom select-none translate-y-0.5"
            style={{
              filter: 'drop-shadow(0 16px 28px rgba(0,0,0,0.50))'
            }}
          />
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="flex-shrink-0 self-center p-2.5 sm:p-3.5 rounded-full bg-brand-ink/70 border border-brand-tan/30 text-brand-cream hover:bg-brand-tan hover:text-brand-green hover:scale-110 active:scale-95 transition-all shadow-xl select-none z-30"
          aria-label="Next Colorway"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

      </div>

    </section>
  );
};

export default HeroScrubSection;
