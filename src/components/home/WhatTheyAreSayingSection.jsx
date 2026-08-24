import React, { useState, useEffect } from 'react';
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

import img01 from '../../../img/img01.webp';
import img02 from '../../../img/img02.webp';
import img03 from '../../../img/img03.webp';

const REVIEWS = [
  {
    id: 'rev-1',
    headline: '"BUILT FOR THE LONG HAUL!"',
    quote: "Took these on a two-week trip across Europe and didn't pack any other pair. That's the kind of trust I have in them now. Held up through rain, uneven cobblestones, and rushed airport sprints. Looked just as fresh on day fourteen as day one.",
    author: 'AJAX S.',
    role: 'Architect & Traveler',
    rating: 5,
    image: img01,
    shoeVariant: 'Article X — Alabaster White',
  },
  {
    id: 'rev-2',
    headline: '"FINALLY, STYLE MEETS STABILITY."',
    quote: "As someone who spends 10+ hours standing during site visits, traditional sneakers used to destroy my heel arches by 4 PM. LEORIX feels like a custom orthotic hidden inside a luxury silhouette.",
    author: 'KABIR V.',
    role: 'Product Designer',
    rating: 5,
    image: img02,
    shoeVariant: 'Article X — Apex Stealth Black',
  },
  {
    id: 'rev-3',
    headline: '"BIOMECHANICS YOU CAN FEEL."',
    quote: "The rearfoot lock and midfoot stiffness make a massive difference during long daily walks. No fatigue, zero break-in pain. Easily the best footwear investment I've made this year.",
    author: 'MEERA R.',
    role: 'Sports Scientist',
    rating: 5,
    image: img03,
    shoeVariant: 'Article X — Aeon Deep Forest',
  },
];

const WhatTheyAreSayingSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? REVIEWS.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === REVIEWS.length - 1 ? 0 : i + 1));

  const currentReview = REVIEWS[activeIndex];

  return (
    <section id="reviews" className="py-4 sm:py-6 lg:py-8 bg-brand-cream text-brand-ink border-b border-brand-tan-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Eyebrow — Section 10 */}
        <div className="eyebrow flex items-baseline gap-3 border-t border-brand-tan-line pt-1.5 mb-2 sm:mb-3">
          <span className="eyebrow-idx font-mono text-brand-green text-[11px] sm:text-xs">10</span>
          <span className="eyebrow-lbl text-brand-stone text-[10px] sm:text-xs uppercase tracking-widest">COMMUNITY PROOF</span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-6 gap-2">
          <div>
            <h2 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-normal text-brand-green leading-tight">
              What they're saying —{' '}
              <em className="italic font-medium text-brand-ink">built for the long haul.</em>
            </h2>
          </div>
          <span className="text-[10px] font-mono text-brand-stone uppercase tracking-widest flex-shrink-0">
            Verified Pioneer Reviews ({activeIndex + 1}/{REVIEWS.length})
          </span>
        </div>

        {/* WearComet Blueprint Bordered Card Container */}
        <div className="bg-white border-2 border-brand-green/30 sm:border-brand-green p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-500 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
            
            {/* Left Column: Real Wearer Lifestyle Image */}
            <div className="lg:col-span-5 aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden relative group shadow-md bg-stone-100">
              <img
                src={currentReview.image}
                alt={currentReview.author}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                <span className="bg-brand-ink/90 text-brand-cream border border-brand-tan/30 px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono shadow-xs backdrop-blur-xs font-semibold">
                  {currentReview.shoeVariant}
                </span>
              </div>
            </div>

            {/* Right Column: Rating, Bold Headline, Testimonial Quote & Author */}
            <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-center lg:text-left flex flex-col justify-between">
              
              <div className="space-y-2">
                {/* 5 Star Rating Row */}
                <div className="flex items-center justify-center lg:justify-start gap-1 text-brand-tan">
                  {[...Array(currentReview.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-brand-tan text-brand-tan" />
                  ))}
                </div>

                {/* Bold Quote Headline */}
                <h3 className="font-sans font-black text-xl sm:text-2xl lg:text-3xl text-brand-green uppercase tracking-tight leading-tight">
                  {currentReview.headline}
                </h3>

                {/* Quote Description */}
                <p className="font-sans text-xs sm:text-sm lg:text-base text-brand-ink/85 leading-relaxed italic max-w-xl mx-auto lg:mx-0">
                  {currentReview.quote}
                </p>
              </div>

              {/* Author & Arrow Controls Footer */}
              <div className="pt-3 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-brand-ink uppercase">
                  <span>{currentReview.author}</span>
                  <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  <span className="text-[10px] text-brand-stone font-normal font-sans">
                    · {currentReview.role}
                  </span>
                </div>

                {/* Carousel Arrow Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="p-2 sm:p-2.5 rounded-full border-2 border-brand-green text-brand-green bg-white hover:bg-brand-green hover:text-brand-cream active:scale-90 transition-all shadow-xs"
                    aria-label="Previous Review"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="p-2 sm:p-2.5 rounded-full border-2 border-brand-green text-brand-green bg-white hover:bg-brand-green hover:text-brand-cream active:scale-90 transition-all shadow-xs"
                    aria-label="Next Review"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
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

export default WhatTheyAreSayingSection;
