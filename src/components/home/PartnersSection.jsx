import React from 'react';
import { ShieldCheck, Cpu, Layers, Award, Activity, CheckCircle2 } from 'lucide-react';

const PARTNERS = [
  {
    id: 'fddi',
    name: 'FDDI',
    fullTitle: 'Footwear Design & Development Institute',
    role: 'Biomechanical Testing & Validation',
    badge: 'Govt. of India Institution',
    icon: ShieldCheck,
  },
  {
    id: 'desma',
    name: 'DESMA',
    fullTitle: 'DESMA Germany Systems',
    role: 'Direct Injection Monoplate Automation',
    badge: 'German Machinery Standard',
    icon: Cpu,
  },
  {
    id: 'satra',
    name: 'SATRA',
    fullTitle: 'SATRA Technology Centre',
    role: 'Flex & Abrasion Resistance Benchmarks',
    badge: 'Global Testing Benchmark',
    icon: Award,
  },
  {
    id: 'basf',
    name: 'BASF Labs',
    fullTitle: 'BASF Polyurethane Elastomers',
    role: 'High-Rebound Infused Cushioning Core',
    badge: 'Material Science Partner',
    icon: Layers,
  },
  {
    id: 'cordura',
    name: 'CORDURA®',
    fullTitle: 'High-Tenacity Textile Science',
    role: 'Tear-Resistant Jacquard Upper Mesh',
    badge: 'Abrasion Toughness Spec',
    icon: Activity,
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-4 sm:py-6 lg:py-8 bg-brand-cream text-brand-ink border-b border-brand-tan-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Standard LEORIX Eyebrow */}
        <div className="eyebrow flex items-baseline gap-3 border-t border-brand-tan-line pt-1.5 mb-2 sm:mb-3">
          <span className="eyebrow-idx font-mono text-brand-green text-[11px] sm:text-xs">PARTNERS</span>
          <span className="eyebrow-lbl text-brand-stone text-[10px] sm:text-xs uppercase tracking-widest">INSTITUTIONAL & TECH NETWORK</span>
        </div>

        {/* Section Headline */}
        <div className="mb-4 sm:mb-6">
          <h2 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-normal text-brand-green leading-tight">
            Engineered with world-class —{' '}
            <em className="italic font-medium text-brand-ink">institutions & material labs.</em>
          </h2>
        </div>

        {/* Partners Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {PARTNERS.map((partner) => {
            const IconComp = partner.icon;
            return (
              <div
                key={partner.id}
                className="bg-white p-4 sm:p-5 rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-lg hover:border-brand-tan transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="p-2 rounded-xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-brand-cream transition-colors">
                      <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                    <span className="text-[8px] font-mono font-bold text-brand-stone uppercase tracking-widest bg-stone-100 px-2 py-0.5 rounded-full border border-stone-200">
                      {partner.badge}
                    </span>
                  </div>

                  <h3 className="font-sans font-black text-xl text-brand-ink group-hover:text-brand-green transition-colors">
                    {partner.name}
                  </h3>

                  <p className="font-serif-display italic text-xs text-brand-stone">
                    "{partner.role}"
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-100 mt-3 flex items-center justify-between text-[9px] font-mono text-brand-ink/70">
                  <span className="truncate max-w-[130px]">{partner.fullTitle}</span>
                  <CheckCircle2 className="w-3 h-3 text-brand-green flex-shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PartnersSection;
