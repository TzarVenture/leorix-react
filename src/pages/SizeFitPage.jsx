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
    <div className="min-h-screen bg-brand-cream text-brand-ink py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="border-b border-brand-tan-line pb-12 space-y-6">
          <div className="eyebrow flex items-baseline gap-4 border-t border-brand-tan-line pt-3">
            <span className="eyebrow-idx font-mono">01</span>
            <span className="eyebrow-lbl">SIZE & FIT GUIDE</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-7xl font-normal text-brand-green leading-tight">
            Get the fit right <em className="italic text-brand-ink">the first time.</em>
          </h1>

          <p className="font-sans text-base sm:text-lg text-brand-ink/80 max-w-2xl leading-relaxed">
            LEORIX is built on one single validated last geometry. Here's how it runs and how to size accurately.
          </p>
        </div>

        {/* Measuring at Home Instructions */}
        <div className="bg-brand-green text-brand-cream p-8 sm:p-12 rounded-3xl border border-brand-tan/40 shadow-xl space-y-6">
          <div className="flex items-center gap-2 text-brand-tan font-mono text-xs font-bold uppercase tracking-wider">
            <Ruler className="w-5 h-5 text-brand-tan" />
            <span>Measuring At Home Instructions</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs">
            <div className="bg-brand-green-dark p-6 rounded-3xl border border-brand-tan/20 space-y-2">
              <span className="font-mono font-bold text-brand-tan text-sm block">STEP 01</span>
              <h3 className="font-bold text-brand-cream text-sm">Stand On Blank Paper</h3>
              <p className="text-brand-cream/80 leading-relaxed">
                Place a sheet of paper flat against a wall. Stand upright with your heel touching the wall behind you.
              </p>
            </div>

            <div className="bg-brand-green-dark p-6 rounded-3xl border border-brand-tan/20 space-y-2">
              <span className="font-mono font-bold text-brand-tan text-sm block">STEP 02</span>
              <h3 className="font-bold text-brand-cream text-sm">Mark Longest Toe</h3>
              <p className="text-brand-cream/80 leading-relaxed">
                Use a pencil to draw a line directly in front of your longest toe (usually the big toe or second toe).
              </p>
            </div>

            <div className="bg-brand-green-dark p-6 rounded-3xl border border-brand-tan/20 space-y-2">
              <span className="font-mono font-bold text-brand-tan text-sm block">STEP 03</span>
              <h3 className="font-bold text-brand-cream text-sm">Measure Centimeters</h3>
              <p className="text-brand-cream/80 leading-relaxed">
                Measure the distance from the edge of the paper to your mark in centimeters and match it to our chart below.
              </p>
            </div>
          </div>
        </div>

        {/* Conversion Table */}
        <div className="space-y-6">
          <h2 className="font-serif-display text-2xl sm:text-4xl text-brand-green font-normal">
            International Size Conversion Chart
          </h2>

          <div className="overflow-x-auto border border-brand-stone/30 rounded-3xl bg-white shadow-sm">
            <table className="w-full text-left text-xs font-sans">
              <thead className="bg-brand-green text-brand-tan font-mono uppercase">
                <tr>
                  <th className="p-4">UK Size</th>
                  <th className="p-4">EU Size</th>
                  <th className="p-4">US Size</th>
                  <th className="p-4">Foot Length (cm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-stone/20 text-brand-ink">
                {sizeChart.map((row, idx) => (
                  <tr key={idx} className="hover:bg-brand-cream/40 transition-colors">
                    <td className="p-4 font-bold text-brand-green font-mono">{row.uk}</td>
                    <td className="p-4">{row.eu}</td>
                    <td className="p-4">{row.us}</td>
                    <td className="p-4 font-mono font-semibold text-brand-ink">{row.cm}</td>
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
