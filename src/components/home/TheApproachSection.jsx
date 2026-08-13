import React from 'react';
import { Target, Cpu, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheApproachSection = () => {
  return (
    <section id="the-approach" className="py-20 bg-brand-green text-brand-cream border-b border-brand-tan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="eyebrow flex items-baseline gap-4 border-t border-brand-tan/30 pt-3 mb-8">
          <span className="eyebrow-idx font-mono text-brand-tan">03</span>
          <span className="eyebrow-lbl text-brand-cream/60">HOW WE BUILD</span>
        </div>

        {/* Headline */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-4">
          <h2 className="font-serif-display text-3xl sm:text-5xl font-normal leading-tight text-brand-tan">
            Design-led. Engineering-backed.{' '}
            <em className="italic font-medium text-brand-cream block sm:inline">Measured, not assumed.</em>
          </h2>
          <p className="font-sans text-xs sm:text-sm text-brand-cream/80 max-w-xl leading-relaxed">
            Every LEORIX shoe is engineered against strict targets: rearfoot stability, midfoot torsion control, and plantar load distribution.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-brand-green-dark/40 p-6 sm:p-8 rounded-3xl border border-brand-tan/25 space-y-4 hover:bg-brand-green-dark transition-all duration-300 group">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] font-bold text-brand-tan tracking-widest">PILLAR 01</span>
              <Target className="w-5 h-5 text-brand-tan group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-serif-display text-xl text-brand-cream font-normal">
              Defined targets
            </h3>
            <p className="font-sans text-xs text-brand-cream/70 leading-relaxed">
              Measurable performance goals are locked before any material or color is selected.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-brand-green-dark/40 p-6 sm:p-8 rounded-3xl border border-brand-tan/25 space-y-4 hover:bg-brand-green-dark transition-all duration-300 group">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] font-bold text-brand-tan tracking-widest">PILLAR 02</span>
              <Cpu className="w-5 h-5 text-brand-tan group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-serif-display text-xl text-brand-cream font-normal">
              Built to spec
            </h3>
            <p className="font-sans text-xs text-brand-cream/70 leading-relaxed">
              Construction parameters and compounds are selected specifically to match our engineering sheets.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-brand-green-dark/40 p-6 sm:p-8 rounded-3xl border border-brand-tan/25 space-y-4 hover:bg-brand-green-dark transition-all duration-300 group">
            <div className="flex justify-between items-start">
              <span className="font-mono text-[10px] font-bold text-brand-tan tracking-widest">PILLAR 03</span>
              <Award className="w-5 h-5 text-brand-tan group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-serif-display text-xl text-brand-cream font-normal">
              FDDI validated
            </h3>
            <p className="font-sans text-xs text-brand-cream/70 leading-relaxed">
              Prototypes are mechanically and biomechanically tested at FDDI labs before release.
            </p>
          </div>

        </div>

        {/* CTA link */}
        <div className="mt-12 text-center">
          <Link
            to="/technology"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-widest hover:bg-brand-cream transition-colors rounded-full"
          >
            <span>Read Methodology →</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TheApproachSection;
