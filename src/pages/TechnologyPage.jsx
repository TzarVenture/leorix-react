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
    <div className="min-h-screen bg-brand-cream text-brand-ink py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* Section 1: Page Intro (Cream Background + High Contrast Typography) */}
        <div className="border-b border-brand-tan-line pb-12 space-y-6">
          <div className="eyebrow flex items-baseline gap-4">
            <span className="eyebrow-idx font-mono text-brand-green">01</span>
            <span className="eyebrow-lbl text-brand-stone">TECHNOLOGY & PROOF</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-7xl font-normal text-brand-green leading-tight">
            The engineering <em className="italic text-brand-ink">behind every pair.</em>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-brand-ink/90 max-w-3xl leading-relaxed">
            We say what we do, and we do what we say. Here is what we do — and what we're building the proof of.
          </p>
        </div>

        {/* Section 3a: The Approach (Clean White Card layout) */}
        <div id="approach" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-sm">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono font-bold text-brand-green uppercase tracking-widest bg-brand-green/10 px-3 py-1 rounded-full">
              <Target className="w-3.5 h-3.5" />
              <span>3a. The Approach</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl font-normal text-brand-green">
              Targets first.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="font-sans text-sm sm:text-base text-brand-ink leading-relaxed">
              Before design, we define what the shoe must do: measurable targets for rearfoot stability, midfoot torsion control, plantar load distribution, and comfort across a 6–8 hour day. Every later decision is judged against these.
            </p>
          </div>
        </div>

        {/* Section 3b: The Engagement (Bento Grid on White/Tan Accents) */}
        <div id="engagement" className="space-y-8">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-green uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            <span>3b. The FDDI Engagement — Contracted Scope</span>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-brand-green">
              Engineered and tested at FDDI.
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-ink/90 max-w-3xl leading-relaxed">
              LEORIX is developed in a structured engagement with the Footwear Design & Development Institute, across design, prototyping, and validation. The engagement is contracted to produce:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {FDDI_ENGAGEMENT_SCOPE.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-3xl border border-stone-200 space-y-4 shadow-sm hover:border-brand-green transition-all duration-300 hover:shadow-md hover:-translate-y-1">
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
        <div id="validation" className="space-y-8">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-green uppercase tracking-widest">
            <Award className="w-4 h-4" />
            <span>3c. Validation Results</span>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-brand-green">
              The findings.
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-ink/90 max-w-3xl">
              As each evaluation is confirmed, we publish the result and the official laboratory report it comes from.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {VALIDATION_METRICS.map((vm, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl border border-stone-200 space-y-3 shadow-sm hover:border-brand-green transition-all">
                <span className="text-[9px] font-mono text-brand-green bg-brand-green/10 border border-brand-green/20 px-2 py-0.5 rounded-full uppercase tracking-widest font-bold inline-block">
                  {vm.status}
                </span>
                <h3 className="font-serif-display text-3xl text-brand-green font-normal">
                  {vm.value}
                </h3>
                <p className="text-xs font-bold text-brand-ink uppercase tracking-wide">{vm.metric}</p>
                <p className="text-[11px] text-brand-stone font-sans leading-relaxed">{vm.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3d: Materials & Component Transparency */}
        <div id="materials" className="space-y-8 pb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-green uppercase tracking-widest">
            <Layers className="w-4 h-4" />
            <span>3d. Materials & Spec Sheet Transparency</span>
          </div>

          <div className="space-y-4">
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-brand-green">
              Every component, on the record.
            </h2>
            <p className="font-sans text-sm sm:text-base text-brand-ink/90 max-w-3xl">
              We publish what each part of the shoe is made of and what it's specified to do — because "transparent" should mean you can read the spec, not just hear the word.
            </p>
          </div>

          {/* Component Spec Table (Fully rounded-3xl container) */}
          <div className="overflow-x-auto border border-stone-200 rounded-3xl bg-white shadow-sm">
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

        </div>

      </div>
    </div>
  );
};

export default TechnologyPage;
