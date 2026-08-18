import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { HERO_PRODUCT } from '../../data/products';
import heroBg from '../../../img/hero_Bg.webp';
import heroMobileBg from '../../../img/hero_mobile_bg.webp';

const HeroScrubSection = () => {
  const { mode } = useStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeColor = HERO_PRODUCT.colors[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? HERO_PRODUCT.colors.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === HERO_PRODUCT.colors.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide colorways every 4 seconds (pauses on hover/touch)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, activeIndex]);

  return (
    <section
      className="relative w-full overflow-hidden bg-brand-green text-brand-cream"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
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

      {/* ─────────────────────────────────────────────────────────────
          📱 MOBILE HERO (visible on screens < 768px / md:hidden)
          Uses hero_mobile_bg.png background matching inspiration image
      ───────────────────────────────────────────────────────────── */}
      <div
        className="md:hidden relative w-full h-[75vh] min-h-[440px] max-h-[550px] flex flex-col justify-between items-center text-center px-4 py-4 select-none"
        style={{
          backgroundImage: `url(${heroMobileBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Mobile Top: Heading & Subheading (Equalized Top Buffer from Navbar) */}
        <div className="relative z-20 flex flex-col items-center space-y-2 pt-3 xs:pt-4">
          <h1 className="font-sans font-black text-xl xs:text-2xl text-brand-cream uppercase leading-[1.08] tracking-tight max-w-xs drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            Looks Designed. Built to Be Proven.
          </h1>
          <p className="font-sans text-xs text-brand-tan font-medium max-w-xs leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            Where refined design meets engineering precision, tested and validated for everyday performance.
          </p>
        </div>

        {/* Mobile Middle: Centered Shoe Stage */}
        <div className="relative z-10 w-full flex items-center justify-between gap-1 px-1 my-auto">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="flex-shrink-0 p-2 rounded-full bg-brand-ink/80 border border-brand-tan/30 text-brand-cream active:scale-90 transition-all shadow-lg z-30"
            aria-label="Previous Colorway"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Centered Shoe Graphic */}
          <div className="relative flex-1 flex items-end justify-center min-h-[160px]">
            <div className="transition-all duration-300 ease-out hover:scale-105 cursor-pointer">
              <img
                key={`mobile-${activeColor.code}`}
                src={activeColor.image}
                alt={`LEORIX Article X — ${activeColor.name}`}
                className="pendulum-enter w-full max-w-[220px] xs:max-w-[260px] max-h-[190px] object-contain select-none translate-y-2"
                style={{
                  filter: 'drop-shadow(0 14px 24px rgba(0,0,0,0.65))'
                }}
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="flex-shrink-0 p-2 rounded-full bg-brand-ink/80 border border-brand-tan/30 text-brand-cream active:scale-90 transition-all shadow-lg z-30"
            aria-label="Next Colorway"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Bottom: CTA Button placed below shoe stage & Colorway badge */}
        <div className="relative z-20 flex flex-col items-center space-y-2 pb-2">
          {/* Colorway Pill */}
          <span className="bg-brand-ink/90 border border-brand-tan/40 text-[9px] font-mono text-brand-tan px-3 py-0.5 rounded-full uppercase tracking-widest whitespace-nowrap shadow-md backdrop-blur-md">
            {activeColor.name}
          </span>

          {/* Dynamic Brand CTA Button */}
          {mode === 'phaseA' ? (
            <Link
              to="/vault"
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-brand-tan text-brand-green font-sans font-bold text-xs uppercase tracking-widest hover:bg-brand-cream active:scale-95 transition-all shadow-xl border border-brand-tan/40"
            >
              <span>Join Early Access</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              to="/shop/men"
              className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-brand-tan text-brand-green font-sans font-bold text-xs uppercase tracking-widest hover:bg-brand-cream active:scale-95 transition-all shadow-xl border border-brand-tan/40"
            >
              <span>Shop Article X</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          💻 DESKTOP HERO (visible on screens >= 768px / hidden md:flex)
          Completely unaltered desktop version with hover animation
      ───────────────────────────────────────────────────────────── */}
      <div
        className="hidden md:flex relative w-full h-[68vh] min-h-[400px] max-h-[580px] flex-col justify-between pt-4 pb-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* ── Headline Block — Top Center ── */}
        <div className="relative z-20 flex-shrink-0 flex flex-col items-center justify-center text-center px-4 pt-3 sm:pt-4 md:pt-5 space-y-2 sm:space-y-3">
          {/* Single Line Main Heading on Desktop/Laptop */}
          <h1 className="font-sans font-black text-base sm:text-xl md:text-2xl lg:text-[1.85rem] xl:text-[2.15rem] tracking-tight text-brand-cream uppercase leading-tight max-w-full sm:whitespace-nowrap">
            Looks Designed. Built to Be Proven.
          </h1>

          {/* Subheading with Balanced Spacing */}
          <p className="font-sans text-xs sm:text-xs md:text-sm text-brand-tan font-medium max-w-md sm:max-w-xl md:max-w-2xl leading-snug">
            Where refined design meets engineering precision, tested and validated for everyday performance.
          </p>

          {/* Dynamic Brand CTA Button (Phase A vs Phase B) */}
          <div className="pt-1.5">
            {mode === 'phaseA' ? (
              <Link
                to="/vault"
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-brand-tan text-brand-green font-sans font-bold text-xs uppercase tracking-widest hover:bg-brand-cream hover:scale-105 active:scale-95 transition-all shadow-lg border border-brand-tan/40"
              >
                <span>Join Early Access</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                to="/shop/men"
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-full bg-brand-tan text-brand-green font-sans font-bold text-xs uppercase tracking-widest hover:bg-brand-cream hover:scale-105 active:scale-95 transition-all shadow-lg border border-brand-tan/40"
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
            className="flex-shrink-0 self-center p-2.5 rounded-full bg-brand-ink/70 border border-brand-tan/30 text-brand-cream hover:bg-brand-tan hover:text-brand-green hover:scale-110 active:scale-95 transition-all shadow-xl select-none z-30"
            aria-label="Previous Colorway"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Centered Shoe Container with outer Hover Wrapper */}
          <div className="relative flex items-end justify-center flex-1 max-w-xl sm:max-w-2xl lg:max-w-3xl h-full min-h-0">
            <div className="transition-all duration-300 ease-out hover:scale-105 cursor-pointer flex items-end">
              <img
                key={`desktop-${activeColor.code}`}
                src={activeColor.image}
                alt={`LEORIX Article X — ${activeColor.name}`}
                fetchpriority="high"
                decoding="async"
                className="pendulum-enter w-auto max-w-[200px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[440px] xl:max-w-[480px] max-h-[24vh] sm:max-h-[27vh] md:max-h-[30vh] lg:max-h-[32vh] object-contain object-bottom select-none translate-y-3 sm:translate-y-4"
                style={{
                  filter: 'drop-shadow(0 14px 24px rgba(0,0,0,0.50))'
                }}
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="flex-shrink-0 self-center p-2.5 rounded-full bg-brand-ink/70 border border-brand-tan/30 text-brand-cream hover:bg-brand-tan hover:text-brand-green hover:scale-110 active:scale-95 transition-all shadow-xl select-none z-30"
            aria-label="Next Colorway"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroScrubSection;
