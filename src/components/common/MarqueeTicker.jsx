import React from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

const MarqueeTicker = () => {
  const tickerItems = [
    "ENGINEERED FROM THE SOLE UP",
    "FDDI VALIDATED PLATFORM",
    "12-HOUR ALL-DAY COMFORT",
    "MONOPLATE V1 ARCHITECTURE",
    "CONTROLLED MIDFOOT TORSION",
    "PLANTAR LOAD BALANCED",
    "DESIGN-LED • ENGINEERING-BACKED"
  ];

  return (
    <div className="bg-brand-ink text-brand-tan border-y border-brand-tan/30 py-3 overflow-hidden select-none font-mono text-xs font-bold uppercase tracking-widest">
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
          <div key={index} className="flex items-center gap-6 px-4">
            <span className="flex items-center gap-2 text-brand-cream">
              <Sparkles className="w-3.5 h-3.5 text-brand-tan" />
              {item}
            </span>
            <span className="text-brand-tan/40">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeTicker;
