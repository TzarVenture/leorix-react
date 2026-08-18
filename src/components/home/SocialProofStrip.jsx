import React from 'react';
import { ShieldCheck, Layers, FileText, Cpu, Activity, UserCheck, Award } from 'lucide-react';
import { FDDI_ENGAGEMENT_SCOPE } from '../../data/fddiSpecs';

const scopeIcons = {
  'scope-1': Layers,
  'scope-2': FileText,
  'scope-3': Cpu,
  'scope-4': Activity,
  'scope-5': UserCheck,
  'scope-6': Award,
};

const SocialProofStrip = () => {
  return (
    <section id="social-proof" className="py-4 sm:py-6 lg:py-8 bg-brand-green text-brand-cream border-b border-brand-tan/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow - Fixed numbering to 10 */}
        <div className="eyebrow flex items-baseline gap-3 border-t border-brand-tan/30 pt-1.5 mb-2 sm:mb-3">
          <span className="eyebrow-idx font-mono text-brand-tan text-[11px] sm:text-xs">10</span>
          <span className="eyebrow-lbl text-brand-cream/60 text-[10px] sm:text-xs uppercase tracking-widest">THE BACKING</span>
        </div>

        {/* Institutional Credibility Header */}
        <div className="bg-brand-green-dark p-6 sm:p-10 rounded-3xl border border-brand-tan/30 shadow-2xl space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-brand-tan/20">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-brand-tan uppercase tracking-widest block">
                INSTITUTIONAL PARTNER
              </span>
              <h3 className="font-serif-display text-xl sm:text-3xl text-brand-cream font-normal">
                Footwear Design & Development Institute (FDDI)
              </h3>
            </div>
            
            <div className="flex items-center gap-2 bg-brand-tan/10 px-3.5 py-1.5 rounded-full border border-brand-tan/40 text-brand-tan font-mono text-[10px] font-bold uppercase tracking-wider self-start md:self-auto">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Contracted Scope · Jaipur</span>
            </div>
          </div>

          {/* Compact 6 Deliverables Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FDDI_ENGAGEMENT_SCOPE.map((item) => {
              const IconComponent = scopeIcons[item.id] || Layers;
              return (
                <div key={item.id} className="bg-brand-green p-4 rounded-2xl border border-brand-tan/15 flex items-start gap-3 hover:border-brand-tan/40 transition-colors">
                  <IconComponent className="w-4 h-4 text-brand-tan flex-shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <h4 className="font-sans font-bold text-xs uppercase tracking-wide text-brand-cream">
                      {item.title}
                    </h4>
                    <p className="text-[10px] sm:text-xs text-brand-cream/70 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default SocialProofStrip;
