import React, { useEffect } from 'react';
import { ShieldCheck, Cpu, Target, Award, Layers, Footprints, Wrench, Activity } from 'lucide-react';
import { FDDI_ENGAGEMENT_SCOPE, COMPONENT_SPEC_TABLE, VALIDATION_METRICS } from '../data/fddiSpecs';

const TechnologyPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getScopeIcon = (id) => {
    switch (id) {
      case 'scope-1':
        return <Footprints className="w-5 h-5 text-brand-green flex-shrink-0" />;
      case 'scope-2':
        return <Cpu className="w-5 h-5 text-brand-green flex-shrink-0" />;
      case 'scope-3':
        return <Wrench className="w-5 h-5 text-brand-green flex-shrink-0" />;
      case 'scope-4':
        return <ShieldCheck className="w-5 h-5 text-brand-green flex-shrink-0" />;
      case 'scope-5':
        return <Activity className="w-5 h-5 text-brand-green flex-shrink-0" />;
      case 'scope-6':
        return <Award className="w-5 h-5 text-brand-green flex-shrink-0" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-brand-green flex-shrink-0" />;
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink py-8 sm:py-16 lg:py-20 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-20 lg:space-y-24">
        
        {/* Section 1: Page Intro (Cream Background + High Contrast Typography) */}
        <div className="border-b border-brand-tan-line pb-8 sm:pb-12 space-y-4 sm:space-y-6">
          <div className="eyebrow flex items-baseline gap-3 sm:gap-4">
            <span className="eyebrow-idx font-mono text-brand-green text-xs sm:text-sm">01</span>
            <span className="eyebrow-lbl text-brand-stone text-xs sm:text-sm">TECHNOLOGY & PROOF</span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-7xl font-normal text-brand-green leading-tight">
            The engineering <em className="italic text-brand-ink">behind every pair.</em>
          </h1>

          <p className="font-sans text-sm sm:text-lg lg:text-xl text-brand-ink/90 max-w-3xl leading-relaxed">
            We say what we do, and we do what we say. Here is what we do — and what we're building the proof of.
          </p>
        </div>

        {/* Section 3a: The Approach (Clean White Card layout) */}
        <div id="approach" className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center bg-white p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-stone-200 shadow-sm">
          <div className="lg:col-span-5 space-y-2 sm:space-y-4">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-brand-green uppercase tracking-widest bg-brand-green/10 px-3 py-1 rounded-full">
              <Target className="w-3.5 h-3.5" />
              <span>3a. The Approach</span>
            </div>

            <h2 className="font-serif-display text-2xl sm:text-3xl lg:text-4xl font-normal text-brand-green">
              Targets first.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="font-sans text-xs sm:text-sm lg:text-base text-brand-ink leading-relaxed">
              Before design, we define what the shoe must do: measurable targets for rearfoot stability, midfoot torsion control, plantar load distribution, and comfort across a 6–8 hour day. Every later decision is judged against these.
            </p>
          </div>
        </div>

        {/* Section 3b: The Engagement (Bento Grid on White/Tan Accents) */}
        <div id="engagement" className="space-y-6 sm:space-y-8">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-green uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>3b. The FDDI Engagement — Contracted Scope</span>
          </div>

          <div className="space-y-2 sm:space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-normal text-brand-green">
              Engineered and tested at FDDI.
            </h2>
            <p className="font-sans text-xs sm:text-sm lg:text-base text-brand-ink/90 max-w-3xl leading-relaxed">
              LEORIX is developed in a structured engagement with the Footwear Design & Development Institute, across design, prototyping, and validation. The engagement is contracted to produce:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-2 sm:pt-4">
            {FDDI_ENGAGEMENT_SCOPE.map((item) => (
              <div key={item.id} className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-stone-200 space-y-3 sm:space-y-4 shadow-sm hover:border-brand-green transition-all duration-300">
                <div className="flex items-center gap-2.5 text-brand-green font-bold text-xs uppercase tracking-wider">
                  {getScopeIcon(item.id)}
                  <span>{item.title}</span>
                </div>
                <p className="text-xs text-brand-ink/80 leading-relaxed pl-7 border-l border-stone-200">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-[10px] sm:text-xs text-brand-stone font-mono italic">
            Note: Every item above is contracted scope. Outcomes are described as what the testing measures, never as a result we assume.
          </p>
        </div>

        {/* Section 3c: Validation Results (Sleek High Contrast Metrics Cards) */}
        <div id="validation" className="space-y-6 sm:space-y-8">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-green uppercase tracking-widest">
            <Award className="w-4 h-4" />
            <span>3c. Validation Results</span>
          </div>

          <div className="space-y-2 sm:space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-normal text-brand-green">
              The findings.
            </h2>
            <p className="font-sans text-xs sm:text-sm lg:text-base text-brand-ink/90 max-w-3xl">
              As each evaluation is confirmed, we publish the result and the official laboratory report it comes from.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-2 sm:pt-4">
            {VALIDATION_METRICS.map((vm, idx) => (
              <div key={idx} className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-stone-200 space-y-2 sm:space-y-3 shadow-sm hover:border-brand-green transition-all">
                <span className="text-[9px] font-mono text-brand-green bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold inline-block">
                  {vm.status}
                </span>
                <h3 className="font-serif-display text-2xl sm:text-3xl text-brand-green font-normal">
                  {vm.value}
                </h3>
                <p className="text-xs font-bold text-brand-ink uppercase tracking-wide">{vm.metric}</p>
                <p className="text-[11px] text-brand-stone font-sans leading-relaxed">{vm.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3d: Materials & Component Transparency */}
        <div id="materials" className="space-y-6 sm:space-y-8 pb-8 sm:pb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-green uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>3d. Materials & Spec Sheet Transparency</span>
          </div>

          <div className="space-y-2 sm:space-y-4">
            <h2 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-normal text-brand-green">
              Every component, on the record.
            </h2>
            <p className="font-sans text-xs sm:text-sm lg:text-base text-brand-ink/90 max-w-3xl leading-relaxed">
              We publish what each part of the shoe is made of and what it's specified to do — because "transparent" should mean you can read the spec, not just hear the word.
            </p>
          </div>

          {/* Component Spec Table (Desktop Table / Mobile Card List) */}
          <div className="hidden md:block overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-brand-green text-brand-tan font-mono uppercase tracking-wider">
                <tr>
                  <th className="p-4">Component</th>
                  <th className="p-4">Material</th>
                  <th className="p-4">Committed Spec</th>
                  <th className="p-4">Function</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-250 text-brand-ink">
                {COMPONENT_SPEC_TABLE.map((row, idx) => (
                  <tr key={idx} className="hover:bg-brand-cream/40 transition-colors">
                    <td className="p-4 font-bold text-brand-green">{row.component}</td>
                    <td className="p-4 font-medium">{row.material}</td>
                    <td className="p-4 font-mono font-bold text-brand-ink">{row.committedSpec}</td>
                    <td className="p-4 text-brand-stone font-normal">{row.function}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Spec Cards (< 768px) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
            {COMPONENT_SPEC_TABLE.map((row, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-stone-200 space-y-1.5 text-xs shadow-xs">
                <div className="flex justify-between items-center border-b border-stone-200 pb-1.5">
                  <span className="font-bold text-brand-green">{row.component}</span>
                  <span className="font-mono text-[10px] text-brand-green bg-brand-green/10 px-2 py-0.5 rounded font-bold">
                    {row.committedSpec}
                  </span>
                </div>
                <p className="text-brand-ink text-[11px]">
                  <strong className="text-brand-stone">Material:</strong> {row.material}
                </p>
                <p className="text-brand-stone text-[11px]">
                  <strong className="text-brand-stone">Function:</strong> {row.function}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default TechnologyPage;
