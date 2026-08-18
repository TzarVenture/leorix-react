import React from 'react';
import { Target, Cpu, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheApproachSection = () => {
  return (
    <section id="the-approach" className="py-6 sm:py-10 lg:py-12 bg-brand-green text-brand-cream border-b border-brand-tan/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow - Numbering fixed to 04 */}
        <div className="eyebrow flex items-baseline gap-3 border-t border-brand-tan/30 pt-2 mb-3 sm:mb-4">
          <span className="eyebrow-idx font-mono text-brand-tan text-[11px] sm:text-xs">04</span>
          <span className="eyebrow-lbl text-brand-cream/60 text-[10px] sm:text-xs uppercase tracking-widest">HOW WE BUILD</span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-5 sm:mb-8 space-y-2">
          <h2 className="font-serif-display text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-brand-tan">
            Design-led. Engineering-backed.{' '}
            <em className="italic font-medium text-brand-cream block sm:inline">Measured, not assumed.</em>
          </h2>
          <p className="font-sans text-[11px] xs:text-xs sm:text-sm text-brand-cream/80 max-w-xl leading-relaxed">
            Every LEORIX shoe is engineered against strict targets: rearfoot stability, midfoot torsion control, and plantar load distribution.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-brand-green-dark/40 p-3.5 xs:p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-brand-tan/25 space-y-2 hover:bg-brand-green-dark transition-all duration-300 group">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-brand-tan tracking-widest">PILLAR 01</span>
              <Target className="w-4 h-4 sm:w-5 sm:h-5 text-brand-tan group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-serif-display text-base sm:text-xl text-brand-cream font-normal">
              Defined targets
            </h3>
            <p className="font-sans text-[10px] sm:text-xs text-brand-cream/70 leading-relaxed">
              Measurable performance goals are locked before any material or color is selected.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-brand-green-dark/40 p-3.5 xs:p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-brand-tan/25 space-y-2 hover:bg-brand-green-dark transition-all duration-300 group">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-brand-tan tracking-widest">PILLAR 02</span>
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-brand-tan group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-serif-display text-base sm:text-xl text-brand-cream font-normal">
              Built to spec
            </h3>
            <p className="font-sans text-[10px] sm:text-xs text-brand-cream/70 leading-relaxed">
              Construction parameters and compounds are selected specifically to match our engineering sheets.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-brand-green-dark/40 p-3.5 xs:p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-brand-tan/25 space-y-2 hover:bg-brand-green-dark transition-all duration-300 group">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[9px] sm:text-[10px] font-bold text-brand-tan tracking-widest">PILLAR 03</span>
              <Award className="w-4 h-4 sm:w-5 sm:h-5 text-brand-tan group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-serif-display text-base sm:text-xl text-brand-cream font-normal">
              FDDI validated
            </h3>
            <p className="font-sans text-[10px] sm:text-xs text-brand-cream/70 leading-relaxed">
              Prototypes are mechanically and biomechanically tested at FDDI labs before release.
            </p>
          </div>

        </div>

        {/* CTA link */}
        <div className="mt-5 sm:mt-8 text-center">
          <Link
            to="/technology"
            className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-brand-tan text-brand-green font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-brand-cream active:scale-95 transition-all rounded-full shadow-sm"
          >
            <span>Read Methodology →</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TheApproachSection;
