import React from 'react';

const MEDIA_BRANDS = [
  {
    name: 'VOGUE',
    render: () => (
      <span className="font-serif font-black text-xl sm:text-2xl lg:text-3xl tracking-[0.2em] uppercase text-brand-ink opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap">
        VOGUE
      </span>
    ),
  },
  {
    name: 'GQ',
    render: () => (
      <div className="flex items-center gap-0.5 font-sans font-black text-xl sm:text-2xl lg:text-3xl tracking-tighter text-brand-ink opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap">
        <span className="bg-brand-ink text-brand-cream px-1.5 py-0.5 rounded-sm">G</span>
        <span className="text-brand-tan font-extrabold ml-0.5">Q</span>
      </div>
    ),
  },
  {
    name: 'COSMOPOLITAN',
    render: () => (
      <span className="font-sans font-black text-xs sm:text-base lg:text-lg tracking-[0.12em] uppercase text-brand-ink opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap">
        COSMOPOLITAN
      </span>
    ),
  },
  {
    name: 'ELLE',
    render: () => (
      <span className="font-serif font-bold text-xl sm:text-2xl lg:text-3xl tracking-[0.25em] uppercase text-brand-ink opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap">
        ELLE
      </span>
    ),
  },
  {
    name: 'Rolling Stone',
    render: () => (
      <span className="font-serif italic font-bold text-sm sm:text-lg lg:text-xl tracking-tight text-brand-ink opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap">
        RollingStone
      </span>
    ),
  },
  {
    name: 'GRAZIA',
    render: () => (
      <span className="font-serif font-normal text-base sm:text-xl lg:text-2xl tracking-[0.28em] uppercase text-brand-ink opacity-90 hover:opacity-100 transition-opacity whitespace-nowrap">
        GRAZIA
      </span>
    ),
  },
];

const AsAppreciatedOnSection = () => {
  return (
    <section id="media-press" className="py-4 sm:py-6 lg:py-8 bg-brand-cream text-brand-ink border-b border-brand-tan-soft relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow — Section 11 */}
        <div className="eyebrow flex items-baseline gap-3 border-t border-brand-tan-line pt-1.5 mb-2 sm:mb-3">
          <span className="eyebrow-idx font-mono text-brand-green text-[11px] sm:text-xs">11</span>
          <span className="eyebrow-lbl text-brand-stone text-[10px] sm:text-xs uppercase tracking-widest">AS APPRECIATED ON</span>
        </div>

        {/* Section Headline */}
        <div className="mb-4 sm:mb-6">
          <h2 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-normal text-brand-green leading-tight">
            Recognized across —{' '}
            <em className="italic font-medium text-brand-ink">culture & publication.</em>
          </h2>
        </div>

        {/* Continuous Horizontally Moving Marquee Ticker Track */}
        <div className="bg-white/90 py-4 sm:py-6 rounded-2xl sm:rounded-3xl border border-stone-200 shadow-sm overflow-hidden select-none">
          <div className="animate-marquee flex items-center gap-12 sm:gap-16 whitespace-nowrap">
            {/* Duplicate array for seamless infinite marquee loop */}
            {[...MEDIA_BRANDS, ...MEDIA_BRANDS, ...MEDIA_BRANDS].map((brand, idx) => (
              <div
                key={`${brand.name}-${idx}`}
                className="flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105 px-4"
                title={`Featured in ${brand.name}`}
              >
                {brand.render()}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AsAppreciatedOnSection;
