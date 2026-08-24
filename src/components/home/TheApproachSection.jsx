import React from 'react';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const TheApproachSection = () => {
  return (
    <section id="the-approach" className="py-6 sm:py-10 lg:py-12 bg-brand-cream text-brand-ink border-b border-brand-tan-soft relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow — Section 09 */}
        <div className="eyebrow flex items-baseline gap-3 border-t border-brand-tan-line pt-2 mb-3 sm:mb-4">
          <span className="eyebrow-idx font-mono text-brand-green text-[11px] sm:text-xs">09</span>
          <span className="eyebrow-lbl text-brand-stone text-[10px] sm:text-xs uppercase tracking-widest font-bold">
            HOW WE BUILD
          </span>
        </div>

        {/* Headline & Body */}
        <div className="max-w-3xl mb-6 sm:mb-8 space-y-2">
          <h2 className="font-serif-display text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-brand-green">
            Design-led. Engineering-backed.{' '}
            <em className="italic font-medium text-brand-ink block sm:inline">Measured, not assumed.</em>
          </h2>
          <p className="font-sans text-xs xs:text-sm sm:text-base text-brand-ink/80 max-w-2xl leading-relaxed">
            Every Leorix shoe is engineered against strict targets: rearfoot stability, midfoot torsion control and plantar load distribution.
          </p>
        </div>

        {/* The LEORIX Solution Card (Solid Forest Green Card) */}
        <div className="bg-brand-green text-brand-cream p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-brand-tan/35 shadow-2xl space-y-6 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-tan/20 pb-5">
            <div>
              <span className="text-[10px] font-mono font-bold text-brand-tan uppercase tracking-widest block mb-1">
                The LEORIX Solution
              </span>
              <h3 className="font-serif-display text-2xl sm:text-3xl text-brand-cream font-normal">
                Monoplate Platform
              </h3>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-tan/15 border border-brand-tan/40 text-brand-tan rounded-full text-xs font-mono font-bold uppercase tracking-wider self-start sm:self-auto">
              <ShieldCheck className="w-4 h-4" />
              <span>FDDI Validated</span>
            </span>
          </div>

          <p className="font-sans text-sm sm:text-base text-brand-cream/90 max-w-2xl leading-relaxed">
            Engineered specifically for everyday movement and 12-hour continuous wear. Validated at FDDI.
          </p>

          {/* Solution Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {[
              'Rearfoot stability & controlled shank',
              'Even plantar pressure load distribution',
              'Clean lifestyle design backed by proof'
            ].map((feature, i) => (
              <div key={i} className="flex items-start gap-2.5 bg-brand-green-dark/60 p-3.5 rounded-xl border border-brand-tan/25">
                <CheckCircle2 className="w-4 h-4 text-brand-tan flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-sans font-medium text-brand-cream leading-snug">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Link */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-brand-tan/20">
            <span className="text-xs font-mono text-brand-cream/70 uppercase tracking-wider">
              Complete biomechanical test suite
            </span>

            <Link
              to="/technology"
              className="w-full sm:w-auto px-6 py-3 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-widest hover:bg-brand-cream active:scale-95 transition-all rounded-full flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Certifications & Tech Specs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TheApproachSection;
