import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '../../context/StoreContext';
import { HERO_PRODUCT } from '../../data/products';
import { ChevronLeft, ChevronRight, Eye, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const InteractiveShoeSliderSection = () => {
  const { mode, addToCart } = useStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const touchStartX = useRef(null);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards = HERO_PRODUCT.colors.map((c, idx) => ({
    id: `variant-${idx}`,
    colorName: c.name,
    code: c.code,
    image: c.image,
    badge: idx === 0 ? 'Lead Silhouette' : 'Variant',
  }));

  const total = cards.length;

  const prev = () => setActiveIndex(i => (i === 0 ? total - 1 : i - 1));
  const next = () => setActiveIndex(i => (i === total - 1 ? 0 : i + 1));

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const t = setInterval(next, 4000);
    return () => clearInterval(t);
  }, [isPaused, activeIndex]);

  const touchStartY = useRef(null);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsPaused(true);
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current !== null ? touchStartY.current - e.changedTouches[0].clientY : 0;
    
    // Ultra responsive touch swipe: trigger if horizontal swipe > 20px and dominant over Y scroll
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 20) {
      if (diffX > 0) next();
      else prev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
    setIsPaused(false);
  };

  const getRelPos = (idx) => {
    let rel = idx - activeIndex;
    if (rel > total / 2) rel -= total;
    if (rel < -total / 2) rel += total;
    return rel;
  };

  // Dynamic layout constants for different screen sizes (Generous 50% Mobile Stage View)
  const isMobile = viewportWidth < 640;
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024;
  
  const cardWidth = isMobile ? 220 : (isTablet ? 240 : 270);
  const spacing = isMobile ? 200 : (isTablet ? 250 : 300);
  const containerHeight = isMobile ? '310px' : (isTablet ? '330px' : '360px');
  const shoeTop = isMobile ? '-58px' : (isTablet ? '-62px' : '-65px');
  const shoeWidth = isMobile ? 200 : (isTablet ? 200 : 220);
  const shoeHeight = isMobile ? 105 : (isTablet ? 105 : 110);

  return (
    <section
      id="variant-stage"
      className="py-5 sm:py-10 lg:py-12 bg-brand-cream border-b border-brand-tan-soft relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-display text-[18vw] font-bold text-brand-green/[0.04] whitespace-nowrap tracking-tight leading-none">
          LEORIX
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Eyebrow - Section 07 */}
        <div className="eyebrow flex items-center justify-between border-t border-brand-tan-line pt-1.5 mb-2 sm:mb-3">
          <div className="flex items-baseline gap-3">
            <span className="eyebrow-idx font-mono text-brand-green text-[11px] sm:text-xs">07</span>
            <span className="eyebrow-lbl text-brand-stone text-[10px] sm:text-xs uppercase tracking-widest">COLORWAY STAGE</span>
          </div>
          {/* Mobile Swipe Hint */}
          <span className="md:hidden text-[9px] font-mono text-brand-green bg-brand-green/10 border border-brand-green/20 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider flex items-center gap-1">
            ← Swipe →
          </span>
        </div>

        {/* Main card */}
        <div className="bg-white border border-stone-200 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* MOBILE STAGE 1 / DESKTOP RIGHT: 3D Shoe Carousel */}
            <div
              className="order-1 lg:order-2 lg:col-span-7 bg-stone-50 flex flex-col items-center justify-center overflow-hidden border-b lg:border-b-0 border-stone-200 relative select-none"
              style={{ minHeight: isMobile ? '310px' : '380px', touchAction: 'pan-y' }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {/* Studio Spotlight Radial Glow Behind Active Shoe */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(206,176,138,0.28)_0%,transparent_70%)] pointer-events-none opacity-80" />

              {/* Mobile Interactive Color Swatch Selector Bar */}
              <div className="md:hidden w-full flex items-center justify-center gap-2.5 py-2 bg-stone-100/90 border-b border-stone-200/80 relative z-30">
                <span className="text-[9px] font-mono font-bold text-brand-stone uppercase tracking-wider mr-1">
                  Colorway:
                </span>
                {cards.map((card, idx) => (
                  <button
                    key={card.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center ${
                      idx === activeIndex
                        ? 'border-brand-green scale-115 shadow-md ring-2 ring-brand-tan/60'
                        : 'border-stone-300 opacity-60 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: HERO_PRODUCT.colors[idx].hex }}
                    title={card.colorName}
                  >
                    {idx === activeIndex && (
                      <span className={`w-1.5 h-1.5 rounded-full ${HERO_PRODUCT.colors[idx].hex === '#F4EFE6' || HERO_PRODUCT.colors[idx].hex === '#EAE6DF' ? 'bg-brand-green' : 'bg-white'}`} />
                    )}
                  </button>
                ))}
              </div>

              {/* Floating Touch Arrows over 3D Stage on Mobile */}
              <button
                onClick={prev}
                className="md:hidden absolute left-2.5 top-[58%] -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white active:scale-90 transition-all shadow-md"
                aria-label="Previous colorway"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="md:hidden absolute right-2.5 top-[58%] -translate-y-1/2 z-30 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white active:scale-90 transition-all shadow-md"
                aria-label="Next colorway"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="relative w-full my-auto" style={{ height: containerHeight, perspective: '1200px' }}>
                {cards.map((card, idx) => {
                  const rel = getRelPos(idx);
                  const isVisible = Math.abs(rel) <= 2;
                  if (!isVisible) return null;

                  const isActive = rel === 0;
                  const xPx = rel * spacing;
                  const zPx = isActive ? 0 : -80;
                  const scale = isActive ? 1 : 0.82;
                  const opacity = Math.abs(rel) === 0 ? 1 : Math.abs(rel) === 1 ? 0.65 : 0.25;

                  return (
                    <div
                      key={card.id}
                      onClick={() => setActiveIndex(idx)}
                      className="absolute top-1/2 left-1/2 cursor-pointer"
                      style={{
                        width: `${cardWidth}px`,
                        transform: `translate(calc(-50% + ${xPx}px), -50%) translateZ(${zPx}px) scale(${scale})`,
                        opacity,
                        transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 0.45s ease',
                        zIndex: isActive ? 10 : 5 - Math.abs(rel),
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Floating shoe above card */}
                      <div
                        className="absolute left-1/2 -translate-x-1/2 pointer-events-none"
                        style={{ top: shoeTop, width: `${shoeWidth}px`, height: `${shoeHeight}px` }}
                      >
                        <img
                          src={card.image}
                          alt={card.colorName}
                          className="w-full h-full object-contain"
                          style={{
                            filter: 'drop-shadow(0 12px 28px rgba(0,0,0,0.22))',
                            transition: 'transform 0.45s ease',
                            transform: isActive ? 'scale(1.1) translateY(-2px)' : 'scale(1)',
                          }}
                        />
                      </div>

                      {/* Card body */}
                      <div
                        className={`rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 pt-16 xs:pt-20 sm:pt-14 ${
                          isActive
                            ? 'bg-brand-green border-2 border-brand-tan shadow-2xl'
                            : 'bg-white border border-stone-200 shadow-sm'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2 sm:mb-3">
                          <span
                            className={`text-[8px] sm:text-[9px] font-bold font-sans uppercase tracking-widest px-2 sm:px-2.5 py-0.5 rounded-full ${
                              isActive
                                ? 'bg-brand-tan/20 text-brand-tan border border-brand-tan/40'
                                : 'bg-brand-green/10 text-brand-green'
                            }`}
                          >
                            {card.badge}
                          </span>
                          <span className={`text-[8px] sm:text-[9px] font-mono font-bold uppercase ${isActive ? 'text-brand-tan' : 'text-brand-stone'}`}>
                            {card.code}
                          </span>
                        </div>

                        <h3 className={`font-display text-xs sm:text-base font-normal leading-snug ${isActive ? 'text-brand-cream' : 'text-brand-ink'}`}>
                          {card.colorName}
                        </h3>

                        <div
                          className={`mt-2.5 sm:mt-4 pt-2 sm:pt-3 border-t flex items-center justify-between text-[9px] sm:text-[10px] font-sans font-bold ${
                            isActive ? 'border-brand-tan/30 text-brand-tan' : 'border-stone-200 text-brand-stone'
                          }`}
                        >
                          <span className="hidden sm:inline text-[10px] sm:text-xs">
                            {mode === 'phaseA' ? 'Pre-launch' : '₹5,999'}
                          </span>
                          <span className="flex items-center gap-1 uppercase tracking-wider ml-auto sm:ml-0">
                            {isActive ? 'Active' : 'Select'} <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* MOBILE STAGE 2 / DESKTOP LEFT: Info Panel */}
            <div className="order-2 lg:order-1 lg:col-span-5 p-3.5 xs:p-4 sm:p-8 lg:p-10 flex flex-col gap-3 sm:gap-5 lg:border-r border-stone-200 justify-between">

              {/* Variant badge row */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-green/10 border border-brand-green/20 text-brand-green rounded-full font-sans text-[9px] sm:text-[10px] font-bold uppercase tracking-widest">
                  {activeIndex + 1} / {total}
                </span>
                <span className="font-sans text-[9px] sm:text-[10px] font-bold text-brand-stone uppercase tracking-widest">
                  {cards[activeIndex].code}
                </span>
              </div>

              {/* Product name */}
              <div>
                <h2 className="font-display text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-normal text-brand-ink leading-tight">
                  Article X
                </h2>
                <p className="font-display italic text-xs xs:text-sm sm:text-lg text-brand-green mt-0.5">
                  {cards[activeIndex].colorName}
                </p>
              </div>

              {/* Mobile 3-Column Micro Specs Grid */}
              <div className="md:hidden grid grid-cols-3 gap-2">
                {[
                  { label: 'Plantar Load', value: '42.8%', note: 'Reduction' },
                  { label: 'Midfoot', value: '12.5 Nm', note: 'Rigidity' },
                  { label: 'Outsole', value: '62 Shore', note: 'Hardness' },
                ].map((spec, i) => (
                  <div key={i} className="bg-stone-50 border border-stone-200 p-2 rounded-xl text-center shadow-xs">
                    <span className="block text-[8px] font-mono text-brand-stone uppercase font-bold tracking-tight">{spec.label}</span>
                    <span className="block text-xs font-bold text-brand-ink my-0.5">{spec.value}</span>
                    <span className="block text-[8px] text-brand-green font-semibold">{spec.note}</span>
                  </div>
                ))}
              </div>

              {/* Desktop Standard Spec Table */}
              <div className="hidden md:block border border-stone-200 rounded-2xl sm:rounded-3xl overflow-hidden text-xs font-sans">
                {[
                  ['Plantar load', '42.8% reduction'],
                  ['Midfoot rigidity', '12.5 Nm/deg'],
                  ['Outsole hardness', '62 Shore A'],
                ].map(([label, value], i, arr) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between px-3.5 py-2 sm:py-2.5 ${i < arr.length - 1 ? 'border-b border-stone-200' : ''}`}
                  >
                    <span className="text-brand-stone font-semibold uppercase tracking-wider text-[9px] sm:text-[10px]">{label}</span>
                    <span className="font-bold text-brand-ink text-[11px] sm:text-xs">{value}</span>
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center gap-2">
                {mode === 'phaseA' ? (
                  <span className="text-[9px] xs:text-[10px] sm:text-[11px] font-mono font-bold text-brand-green bg-brand-green/10 px-2.5 py-2 rounded-full uppercase tracking-wider whitespace-nowrap">
                    Phase A Pre-launch
                  </span>
                ) : (
                  <span className="font-sans font-bold text-lg xs:text-xl sm:text-2xl text-brand-ink">₹5,999</span>
                )}
                {mode === 'phaseA' ? (
                  <Link
                    to="/product/leorix-article-x"
                    className="flex-1 py-2.5 sm:py-3 bg-brand-green text-brand-cream text-[10px] sm:text-[11px] font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-1.5 hover:bg-brand-ink active:scale-95 transition-all shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Preview spec
                  </Link>
                ) : (
                  <button
                    onClick={() => addToCart(HERO_PRODUCT, 'UK 8')}
                    className="flex-1 py-2.5 sm:py-3 bg-brand-green text-brand-cream text-[10px] sm:text-[11px] font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-1.5 hover:bg-brand-ink active:scale-95 transition-all shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to bag
                  </button>
                )}
              </div>

              {/* Dots + arrows */}
              <div className="flex items-center justify-between pt-2 border-t border-stone-200">
                <div className="flex gap-1.5">
                  {cards.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex ? 'w-5 bg-brand-green' : 'w-1.5 bg-stone-300'
                      }`}
                    />
                  ))}
                </div>
                <div className="hidden sm:flex gap-2">
                  <button onClick={prev} className="p-1.5 sm:p-2 rounded-full border border-stone-300 hover:bg-brand-green hover:text-brand-cream hover:border-brand-green active:scale-90 transition-all text-brand-ink">
                    <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                  <button onClick={next} className="p-1.5 sm:p-2 rounded-full border border-stone-300 hover:bg-brand-green hover:text-brand-cream hover:border-brand-green active:scale-90 transition-all text-brand-ink">
                    <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveShoeSliderSection;
