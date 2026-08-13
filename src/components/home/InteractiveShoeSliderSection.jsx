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

  // Touch swipe
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    touchStartX.current = null;
    setIsPaused(false);
  };

  const getRelPos = (idx) => {
    let rel = idx - activeIndex;
    if (rel > total / 2) rel -= total;
    if (rel < -total / 2) rel += total;
    return rel;
  };

  // Dynamic layout constants for different screen sizes
  const isMobile = viewportWidth < 640;
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024;
  
  const cardWidth = isMobile ? 180 : (isTablet ? 230 : 280);
  const spacing = isMobile ? 200 : (isTablet ? 255 : 310);
  const containerHeight = isMobile ? '280px' : (isTablet ? '320px' : '380px');
  const shoeTop = isMobile ? '-45px' : (isTablet ? '-55px' : '-70px');
  const shoeWidth = isMobile ? 150 : (isTablet ? 190 : 230);
  const shoeHeight = isMobile ? 75 : (isTablet ? 95 : 115);

  return (
    <section
      id="variant-stage"
      className="py-16 sm:py-24 bg-brand-cream border-b border-brand-tan-soft relative overflow-hidden"
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

        {/* Eyebrow */}
        <div className="eyebrow">
          <span className="eyebrow-idx">03</span>
          <span className="eyebrow-lbl">Colorway Stage</span>
        </div>

        {/* Main card */}
        <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            {/* LEFT: info panel */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col gap-5 border-b lg:border-b-0 lg:border-r border-stone-200 justify-between">

              {/* Variant badge row */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-green/10 border border-brand-green/20 text-brand-green rounded-full font-sans text-[10px] font-bold uppercase tracking-widest">
                  {activeIndex + 1} / {total}
                </span>
                <span className="font-sans text-[10px] font-bold text-brand-stone uppercase tracking-widest">
                  {cards[activeIndex].code}
                </span>
              </div>

              {/* Product name */}
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-normal text-brand-ink leading-tight">
                  Article X
                </h2>
                <p className="font-display italic text-lg text-brand-green mt-1">
                  {cards[activeIndex].colorName}
                </p>
              </div>

              {/* Spec table — real data from FDDI docs */}
              <div className="border border-stone-200 rounded-3xl overflow-hidden text-xs font-sans">
                {[
                  ['Plantar load', '42.8% reduction'],
                  ['Midfoot rigidity', '12.5 Nm/deg'],
                  ['Outsole hardness', '62 Shore A'],
                ].map(([label, value], i, arr) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between px-4 py-3 ${i < arr.length - 1 ? 'border-b border-stone-200' : ''}`}
                  >
                    <span className="text-brand-stone font-semibold uppercase tracking-wider text-[10px]">{label}</span>
                    <span className="font-bold text-brand-ink">{value}</span>
                  </div>
                ))}
              </div>

              {/* Price + CTA */}
              <div className="flex items-center gap-3">
                {mode === 'phaseA' ? (
                  <span className="text-[11px] font-mono font-bold text-brand-green bg-brand-green/10 px-3 py-2 rounded-full uppercase tracking-wider">
                    Phase A Pre-launch
                  </span>
                ) : (
                  <span className="font-sans font-bold text-2xl text-brand-ink">₹5,999</span>
                )}
                {mode === 'phaseA' ? (
                  <Link
                    to="/product/leorix-article-x"
                    className="flex-1 py-3.5 bg-brand-green text-brand-cream text-[11px] font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-2 hover:bg-brand-ink transition-colors shadow-sm"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    Preview spec
                  </Link>
                ) : (
                  <button
                    onClick={() => addToCart(HERO_PRODUCT, 'UK 8')}
                    className="flex-1 py-3.5 bg-brand-green text-brand-cream text-[11px] font-bold uppercase tracking-widest rounded-full flex items-center justify-center gap-2 hover:bg-brand-ink transition-colors shadow-sm"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Add to bag
                  </button>
                )}
              </div>

              {/* Dots + arrows */}
              <div className="flex items-center justify-between pt-3 border-t border-stone-200">
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
                <div className="flex gap-2">
                  <button onClick={prev} className="p-2 rounded-full border border-stone-300 hover:bg-brand-green hover:text-brand-cream hover:border-brand-green transition-all text-brand-ink">
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button onClick={next} className="p-2 rounded-full border border-stone-300 hover:bg-brand-green hover:text-brand-cream hover:border-brand-green transition-all text-brand-ink">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            {/* RIGHT: transform-based centered carousel (Dynamically Scaled on Desktop) */}
            <div
              className="lg:col-span-7 bg-stone-50 flex items-center justify-center overflow-hidden"
              style={{ minHeight: '400px' }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="relative w-full" style={{ height: containerHeight, perspective: '1200px' }}>
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
                            transform: isActive ? 'scale(1.12) translateY(-6px)' : 'scale(1)',
                          }}
                        />
                      </div>

                      {/* Card body - fully rounded-3xl */}
                      <div
                        className={`rounded-3xl p-5 pt-12 ${
                          isActive
                            ? 'bg-brand-green border-2 border-brand-tan shadow-2xl'
                            : 'bg-white border border-stone-200 shadow-sm'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span
                            className={`text-[9px] font-bold font-sans uppercase tracking-widest px-2.5 py-0.5 rounded-full ${
                              isActive
                                ? 'bg-brand-tan/20 text-brand-tan border border-brand-tan/40'
                                : 'bg-brand-green/10 text-brand-green'
                            }`}
                          >
                            {card.badge}
                          </span>
                          <span className={`text-[9px] font-mono font-bold uppercase ${isActive ? 'text-brand-tan' : 'text-brand-stone'}`}>
                            {card.code}
                          </span>
                        </div>

                        <h3 className={`font-display text-sm sm:text-base font-normal leading-snug ${isActive ? 'text-brand-cream' : 'text-brand-ink'}`}>
                          {card.colorName}
                        </h3>

                        <div
                          className={`mt-4 pt-3 border-t flex items-center justify-between text-[10px] font-sans font-bold ${
                            isActive ? 'border-brand-tan/30 text-brand-tan' : 'border-stone-200 text-brand-stone'
                          }`}
                        >
                          <span className="text-xs">
                            {mode === 'phaseA' ? 'Pre-launch' : '₹5,999'}
                          </span>
                          <span className="flex items-center gap-1 uppercase tracking-wider">
                            {isActive ? 'Active' : 'Select'} <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractiveShoeSliderSection;
