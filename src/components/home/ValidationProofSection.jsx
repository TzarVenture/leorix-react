import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Activity, Award, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VALIDATION_METRICS } from '../../data/fddiSpecs';

const ValidationProofSection = () => {
  const [selectedPreset, setSelectedPreset] = useState('leorix');
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let time = 0;

    const render = () => {
      time += 0.04;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#1A211C';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(206, 176, 138, 0.12)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 25) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 25) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      const isLeorix = selectedPreset === 'leorix';

      // 1. Heel Contact Region
      const heelGrad = ctx.createRadialGradient(170, 200, 5, 170, 200, isLeorix ? 55 : 30);
      if (isLeorix) {
        heelGrad.addColorStop(0, 'rgba(206, 176, 138, 0.85)');
        heelGrad.addColorStop(0.5, 'rgba(46, 62, 49, 0.6)');
        heelGrad.addColorStop(1, 'transparent');
      } else {
        heelGrad.addColorStop(0, 'rgba(239, 68, 68, 0.95)');
        heelGrad.addColorStop(0.4, 'rgba(245, 158, 11, 0.8)');
        heelGrad.addColorStop(1, 'transparent');
      }
      ctx.fillStyle = heelGrad;
      ctx.beginPath();
      ctx.arc(170, 200, 65, 0, Math.PI * 2);
      ctx.fill();

      // 2. Forefoot Region
      const foreGrad = ctx.createRadialGradient(170, 80, 5, 170, 80, isLeorix ? 60 : 35);
      if (isLeorix) {
        foreGrad.addColorStop(0, 'rgba(206, 176, 138, 0.75)');
        foreGrad.addColorStop(0.6, 'rgba(46, 62, 49, 0.5)');
        foreGrad.addColorStop(1, 'transparent');
      } else {
        foreGrad.addColorStop(0, 'rgba(239, 68, 68, 0.9)');
        foreGrad.addColorStop(0.5, 'rgba(245, 158, 11, 0.7)');
        foreGrad.addColorStop(1, 'transparent');
      }
      ctx.fillStyle = foreGrad;
      ctx.beginPath();
      ctx.arc(170, 80, 65, 0, Math.PI * 2);
      ctx.fill();

      // Vector indicator
      ctx.strokeStyle = isLeorix ? '#CEB08A' : '#EF4444';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(170, 200, 18 + Math.sin(time) * 3, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedPreset]);

  return (
    <section id="validation" className="py-4 sm:py-6 lg:py-8 bg-brand-cream text-brand-ink border-b border-brand-tan-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow - Fixed numbering to 05 */}
        <div className="eyebrow flex items-baseline gap-3 border-t border-brand-tan-line pt-1.5 mb-2 sm:mb-3">
          <span className="eyebrow-idx font-mono text-brand-green text-[11px] sm:text-xs">05</span>
          <span className="eyebrow-lbl text-brand-stone text-[10px] sm:text-xs uppercase tracking-widest">FDDI VALIDATION STUDIO</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-3 sm:mb-5 space-y-1.5 sm:space-y-2">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-green/10 text-brand-green rounded-full text-[9px] sm:text-xs font-mono font-bold uppercase tracking-wider border border-brand-green/30">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
            <span>FDDI Engagement Scope</span>
          </div>

          <h2 className="font-serif-display text-lg xs:text-xl sm:text-2xl lg:text-3xl font-normal leading-tight text-brand-green">
            Biomechanics Validated —{' '}
            <em className="italic font-medium text-brand-ink block sm:inline">by design, not by adjective.</em>
          </h2>
        </div>

        {/* Studio Dark Bento Container */}
        <div className="apple-bento-dark p-4 xs:p-5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-center shadow-2xl">
          
          {/* Left Canvas Heatmap Column (Enlarged Simulator) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-2.5">
            <div className="flex items-center justify-between w-full pb-1.5 border-b border-brand-tan/30 text-xs">
              <span className="font-mono font-bold text-brand-tan text-[10px] sm:text-xs uppercase tracking-widest flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-brand-tan" />
                <span>Plantar Simulator</span>
              </span>
              <span className="text-[9px] font-mono bg-brand-tan/20 text-brand-tan px-2 py-0.5 rounded-full border border-brand-tan/40">
                Protocol B-14
              </span>
            </div>

            {/* Interactive Canvas - Larger Monitor Display */}
            <div className="relative rounded-2xl overflow-hidden border border-brand-tan/40 bg-black p-2 shadow-2xl w-full max-w-[280px] sm:max-w-[340px] aspect-[4/3.2] flex items-center justify-center">
              <canvas ref={canvasRef} width={340} height={270} className="w-full h-full rounded-xl" />

              <div className="absolute top-2.5 left-2.5 bg-brand-ink/90 border border-brand-tan/40 px-2.5 py-0.5 rounded-full text-[8px] sm:text-[9px] font-mono text-brand-tan">
                Peak: {selectedPreset === 'leorix' ? '< 42.8 kPa (Safe)' : '88.5 kPa (High Spike)'}
              </div>
            </div>

            {/* Preset Toggle Switcher */}
            <div className="flex items-center gap-2 bg-brand-green/60 p-1 rounded-full border border-brand-tan/30 text-xs font-sans w-full max-w-[280px] sm:max-w-[340px]">
              <button
                onClick={() => setSelectedPreset('leorix')}
                className={`flex-1 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase transition-all ${
                  selectedPreset === 'leorix'
                    ? 'bg-brand-tan text-brand-green shadow-md'
                    : 'text-brand-cream/70 hover:text-brand-cream'
                }`}
              >
                LEORIX Tuned
              </button>
              <button
                onClick={() => setSelectedPreset('flat')}
                className={`flex-1 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase transition-all ${
                  selectedPreset === 'flat'
                    ? 'bg-red-950 text-red-200 border border-red-500/50'
                    : 'text-brand-cream/70 hover:text-brand-cream'
                }`}
              >
                Flat Insole
              </button>
            </div>
          </div>

          {/* Right Metrics Grid Column - Re-imagined 3-Column Dashboard Grid */}
          <div className="lg:col-span-7 space-y-3">
            <h3 className="font-serif-display text-sm sm:text-lg text-brand-tan font-normal">
              FDDI Verification Metrics
            </h3>

            {/* Side-by-Side 3-Column Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {VALIDATION_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-brand-green/40 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-brand-tan/30 flex flex-col justify-between space-y-2 hover:border-brand-tan transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] sm:text-[9px] font-mono font-bold text-brand-tan uppercase tracking-widest">
                      {metric.status}
                    </span>
                    <span className="text-[8px] font-mono text-brand-cream/60 uppercase">Verified</span>
                  </div>

                  <div>
                    <span className="font-serif-display font-bold text-xl sm:text-2xl text-brand-tan block leading-tight">
                      {metric.value}
                    </span>
                    <h4 className="font-sans font-bold text-[11px] sm:text-xs text-brand-cream mt-0.5 leading-snug">
                      {metric.metric}
                    </h4>
                  </div>

                  <p className="text-[9px] sm:text-[10px] text-brand-stone leading-tight border-t border-brand-tan/15 pt-1.5">
                    {metric.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer Row */}
            <div className="pt-1.5 flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <span className="text-[10px] text-brand-stone font-mono text-center sm:text-left">
                Official certificates on record at FDDI Jaipur.
              </span>
              <Link
                to="/technology"
                className="w-full sm:w-auto px-4 py-2 bg-brand-tan text-brand-green font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-brand-cream active:scale-95 transition-all rounded-full flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>Full Tech Spec Page</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ValidationProofSection;
