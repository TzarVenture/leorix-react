import React from 'react';
import { AlertTriangle, CheckCircle2, XCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheProblemSection = () => {
  return (
    <section id="the-gap" className="py-6 sm:py-10 lg:py-12 bg-brand-cream text-brand-ink border-b border-brand-tan-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow - Section 03 */}
        <div className="eyebrow flex items-baseline gap-3 border-t border-brand-tan-line pt-1.5 mb-2 sm:mb-3">
          <span className="eyebrow-idx font-mono text-brand-green text-[11px] sm:text-xs">03</span>
          <span className="eyebrow-lbl text-brand-stone text-[10px] sm:text-xs uppercase tracking-widest">THE GAP IN FOOTWEAR</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
          <h2 className="font-serif-display text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.1] text-brand-ink">
            Casual shoes are styled.{' '}
            <em className="italic font-medium text-brand-green block sm:inline">Performance shoes are over-built.</em>{' '}
            Almost nothing is both.
          </h2>

          <p className="font-sans text-[11px] xs:text-xs sm:text-sm font-normal text-brand-ink/90 max-w-2xl leading-relaxed">
            Lifestyle footwear is usually designed to look good and engineered as an afterthought. Performance footwear is loaded with tech you don't need for a full day on your feet. LEORIX sits in the gap.
          </p>
        </div>

        {/* Apple Bento Grid (Unified 100% Mobile Responsive Design) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-5">
          
          {/* Card 1: Styled Casual Shoes */}
          <div className="lg:col-span-4 bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-stone-200 space-y-3 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="bg-red-100 text-red-800 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-[9px] xs:text-[10px]">
                  Category A
                </span>
                <XCircle className="w-4 h-4 text-red-600" />
              </div>

              <h3 className="font-serif-display text-base sm:text-lg lg:text-xl text-brand-ink font-normal">
                Styled Casual Shoes
              </h3>

              <p className="text-[11px] sm:text-xs text-brand-stone leading-relaxed font-sans">
                Designed for visual appearance only. Bottom unit relies on generic uncalibrated EVA foam with zero arch support.
              </p>
            </div>

            <ul className="space-y-1.5 text-[10px] xs:text-[11px] sm:text-xs font-sans text-brand-ink pt-2.5 border-t border-stone-200">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                Uncalibrated foam sinks over time
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                Arch collapses after 3-4 hours
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                Zero independent laboratory proof
              </li>
            </ul>
          </div>

          {/* Card 2: Over-Built Performance Shoes */}
          <div className="lg:col-span-4 bg-white p-4 sm:p-5 rounded-2xl sm:rounded-3xl border border-stone-200 space-y-3 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all">
            <div className="space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider text-[9px] xs:text-[10px]">
                  Category B
                </span>
                <AlertTriangle className="w-4 h-4 text-amber-600" />
              </div>

              <h3 className="font-serif-display text-base sm:text-lg lg:text-xl text-brand-ink font-normal">
                Over-Built Performance
              </h3>

              <p className="text-[11px] sm:text-xs text-brand-stone leading-relaxed font-sans">
                Engineered exclusively for sprint athletics or marathon racing. Loaded with aggressive spikes and excessive tech.
              </p>
            </div>

            <ul className="space-y-1.5 text-[10px] xs:text-[11px] sm:text-xs font-sans text-brand-ink pt-2.5 border-t border-stone-200">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                Aggressive forward rocker stiffness
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                Hyper-niche athletic aesthetics
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                Uncomfortable for continuous standing
              </li>
            </ul>
          </div>

          {/* Card 3: LEORIX (The Solution) */}
          <div className="lg:col-span-4 bg-brand-green text-brand-cream p-4 sm:p-5 rounded-2xl sm:rounded-3xl space-y-3 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="space-y-2.5 relative z-10">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="bg-brand-tan/20 text-brand-tan px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border border-brand-tan/40 text-[9px] xs:text-[10px]">
                  The LEORIX Solution
                </span>
                <CheckCircle2 className="w-4 h-4 text-brand-tan" />
              </div>

              <h3 className="font-serif-display text-lg sm:text-xl lg:text-2xl text-brand-tan font-normal">
                Monoplate Platform
              </h3>

              <p className="text-[11px] sm:text-xs text-brand-cream/90 leading-relaxed font-sans">
                Engineered specifically for everyday movement and 12-hour continuous wear. Validated at FDDI.
              </p>
            </div>

            <div className="space-y-2.5 relative z-10 pt-2.5 border-t border-brand-tan/30">
              <ul className="space-y-1.5 text-[10px] xs:text-[11px] sm:text-xs font-sans text-brand-cream">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-tan flex-shrink-0" />
                  Rearfoot stability & controlled shank
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-tan flex-shrink-0" />
                  Even plantar pressure load distribution
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-tan flex-shrink-0" />
                  Clean lifestyle design backed by proof
                </li>
              </ul>

              <Link
                to="/technology"
                className="w-full py-2.5 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-widest hover:bg-white active:scale-95 transition-all rounded-full flex items-center justify-center gap-1.5 shadow-md"
              >
                <span>Read FDDI Report Data</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default TheProblemSection;
