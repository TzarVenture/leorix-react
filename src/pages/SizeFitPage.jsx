import React, { useEffect } from 'react';
import { Ruler, CheckCircle2 } from 'lucide-react';

const SizeFitPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sizeChart = [
    { uk: 'UK 6', eu: 'EU 40', us: 'US 7', cm: '25.0 cm' },
    { uk: 'UK 7', eu: 'EU 41', us: 'US 8', cm: '25.8 cm' },
    { uk: 'UK 8', eu: 'EU 42', us: 'US 9', cm: '26.7 cm' },
    { uk: 'UK 9', eu: 'EU 43', us: 'US 10', cm: '27.5 cm' },
    { uk: 'UK 10', eu: 'EU 44', us: 'US 11', cm: '28.3 cm' },
    { uk: 'UK 11', eu: 'EU 45', us: 'US 12', cm: '29.2 cm' },
  ];

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink py-8 sm:py-12 lg:py-16 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        {/* Header */}
        <div className="border-b border-brand-tan-line pb-8 sm:pb-12 space-y-4 sm:space-y-6">
          <div className="eyebrow flex items-baseline gap-3 sm:gap-4 border-t border-brand-tan-line pt-3">
            <span className="eyebrow-idx font-mono text-xs sm:text-sm">01</span>
            <span className="eyebrow-lbl text-xs sm:text-sm uppercase tracking-widest">SIZE & FIT GUIDE</span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-7xl font-normal text-brand-green leading-tight">
            Get the fit right <em className="italic text-brand-ink">the first time.</em>
          </h1>

          <p className="font-sans text-xs sm:text-base lg:text-lg text-brand-ink/80 max-w-2xl leading-relaxed">
            LEORIX is built on one single validated last geometry. Here's how it runs and how to size accurately.
          </p>
        </div>

        {/* Measuring at Home Instructions */}
        <div className="bg-brand-green text-brand-cream p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-brand-tan/40 shadow-xl space-y-4 sm:space-y-6">
          <div className="flex items-center gap-2 text-brand-tan font-mono text-xs font-bold uppercase tracking-wider">
            <Ruler className="w-5 h-5 text-brand-tan flex-shrink-0" />
            <span>Measuring At Home Instructions</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 font-sans text-xs">
            <div className="bg-brand-green-dark p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-brand-tan/20 space-y-1.5 sm:space-y-2">
              <span className="font-mono font-bold text-brand-tan text-xs sm:text-sm block">STEP 01</span>
              <h3 className="font-bold text-brand-cream text-xs sm:text-sm">Stand On Blank Paper</h3>
              <p className="text-brand-cream/80 leading-relaxed text-[11px] sm:text-xs">
                Place a sheet of paper flat against a wall. Stand upright with your heel touching the wall behind you.
              </p>
            </div>

            <div className="bg-brand-green-dark p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-brand-tan/20 space-y-1.5 sm:space-y-2">
              <span className="font-mono font-bold text-brand-tan text-xs sm:text-sm block">STEP 02</span>
              <h3 className="font-bold text-brand-cream text-xs sm:text-sm">Mark Longest Toe</h3>
              <p className="text-brand-cream/80 leading-relaxed text-[11px] sm:text-xs">
                Use a pencil to draw a line directly in front of your longest toe (usually the big toe or second toe).
              </p>
            </div>

            <div className="bg-brand-green-dark p-4 sm:p-6 rounded-2xl sm:rounded-3xl border border-brand-tan/20 space-y-1.5 sm:space-y-2">
              <span className="font-mono font-bold text-brand-tan text-xs sm:text-sm block">STEP 03</span>
              <h3 className="font-bold text-brand-cream text-xs sm:text-sm">Measure Centimeters</h3>
              <p className="text-brand-cream/80 leading-relaxed text-[11px] sm:text-xs">
                Measure the distance from the edge of the paper to your mark in centimeters and match it to our chart below.
              </p>
            </div>
          </div>
        </div>

        {/* Conversion Table */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="font-serif-display text-2xl sm:text-4xl text-brand-green font-normal">
            International Size Conversion Chart
          </h2>

          <div className="overflow-x-auto border border-brand-stone/30 rounded-2xl sm:rounded-3xl bg-white shadow-sm">
            <table className="w-full text-left text-xs font-sans min-w-[480px]">
              <thead className="bg-brand-green text-brand-tan font-mono uppercase">
                <tr>
                  <th className="p-3 sm:p-4">UK Size</th>
                  <th className="p-3 sm:p-4">EU Size</th>
                  <th className="p-3 sm:p-4">US Size</th>
                  <th className="p-3 sm:p-4">Foot Length (cm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-stone/20 text-brand-ink">
                {sizeChart.map((row, idx) => (
                  <tr key={idx} className="hover:bg-brand-cream/40 transition-colors">
                    <td className="p-3 sm:p-4 font-bold text-brand-green font-mono">{row.uk}</td>
                    <td className="p-3 sm:p-4">{row.eu}</td>
                    <td className="p-3 sm:p-4">{row.us}</td>
                    <td className="p-3 sm:p-4 font-mono font-semibold text-brand-ink">{row.cm}</td>
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

export default SizeFitPage;
