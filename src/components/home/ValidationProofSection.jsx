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
      const heelGrad = ctx.createRadialGradient(150, 240, 5, 150, 240, isLeorix ? 55 : 30);
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
      ctx.arc(150, 240, 65, 0, Math.PI * 2);
      ctx.fill();

      // 2. Forefoot Region
      const foreGrad = ctx.createRadialGradient(150, 90, 5, 150, 90, isLeorix ? 60 : 35);
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
      ctx.arc(150, 90, 70, 0, Math.PI * 2);
      ctx.fill();

      // Vector indicator
      ctx.strokeStyle = isLeorix ? '#CEB08A' : '#EF4444';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(150, 240, 20 + Math.sin(time) * 4, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [selectedPreset]);

  return (
    <section id="validation" className="py-16 sm:py-24 bg-brand-cream text-brand-ink border-b border-brand-tan-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="eyebrow flex items-baseline gap-4 border-t border-brand-tan-line pt-3 mb-6 sm:mb-8">
          <span className="eyebrow-idx font-mono">04</span>
          <span className="eyebrow-lbl">FDDI VALIDATION STUDIO</span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green/10 text-brand-green rounded-full text-xs font-mono font-bold uppercase tracking-wider border border-brand-green/30">
            <ShieldCheck className="w-4 h-4 text-brand-green" />
            <span>FDDI Engagement Scope</span>
          </div>

          <h2 className="font-serif-display text-3xl xs:text-4xl sm:text-6xl font-normal leading-[1.05] text-brand-green">
            Validated at FDDI —{' '}
            <em className="italic font-medium text-brand-ink block sm:inline">by design, not by adjective.</em>
          </h2>
        </div>

        {/* Studio Dark Bento Container */}
        <div className="apple-bento-dark p-6 sm:p-10 lg:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center shadow-2xl">
          
          {/* Left Canvas Heatmap Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center justify-between w-full pb-3 border-b border-brand-tan/30 text-xs">
              <span className="font-mono font-bold text-brand-tan uppercase tracking-widest flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-brand-tan" />
                <span>Plantar Simulator</span>
              </span>
              <span className="text-[10px] font-mono bg-brand-tan/20 text-brand-tan px-2 py-0.5 rounded-full border border-brand-tan/40">
                Protocol B-14
              </span>
            </div>

            {/* Interactive Canvas */}
            <div className="relative rounded-2xl overflow-hidden border border-brand-tan/40 bg-black p-2 shadow-2xl w-full max-w-[280px] aspect-[4/4.5] flex items-center justify-center">
              <canvas ref={canvasRef} width={300} height={320} className="w-full h-full rounded-xl" />

              <div className="absolute top-3 left-3 bg-brand-ink/90 border border-brand-tan/40 px-2.5 py-1 rounded-full text-[9px] font-mono text-brand-tan">
                Peak: {selectedPreset === 'leorix' ? '< 42.8 kPa (Safe)' : '88.5 kPa (High Spike)'}
              </div>
            </div>

            {/* Preset Toggle Switcher */}
            <div className="flex items-center gap-2 bg-brand-green/60 p-1.5 rounded-full border border-brand-tan/30 text-xs font-sans w-full max-w-[280px]">
              <button
                onClick={() => setSelectedPreset('leorix')}
                className={`flex-1 py-2 rounded-full text-[11px] font-bold uppercase transition-all ${
                  selectedPreset === 'leorix'
                    ? 'bg-brand-tan text-brand-green shadow-lg'
                    : 'text-brand-cream/70 hover:text-brand-cream'
                }`}
              >
                LEORIX Tuned
              </button>
              <button
                onClick={() => setSelectedPreset('flat')}
                className={`flex-1 py-2 rounded-full text-[11px] font-bold uppercase transition-all ${
                  selectedPreset === 'flat'
                    ? 'bg-red-950 text-red-200 border border-red-500/50'
                    : 'text-brand-cream/70 hover:text-brand-cream'
                }`}
              >
                Flat Insole
              </button>
            </div>
          </div>

          {/* Right Metrics Grid Column */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-serif-display text-xl sm:text-2xl text-brand-tan font-normal">
              FDDI Verification Metrics
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {VALIDATION_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className="bg-brand-green/40 p-4 sm:p-5 rounded-2xl border border-brand-tan/30 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 hover:border-brand-tan transition-colors"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono font-bold text-brand-tan uppercase tracking-widest block">
                      {metric.status}
                    </span>
                    <h4 className="font-sans font-bold text-xs sm:text-sm text-brand-cream">
                      {metric.metric}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-brand-stone">{metric.note}</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="font-serif-display font-bold text-2xl sm:text-3xl text-brand-tan block">
                      {metric.value}
                    </span>
                    <span className="text-[9px] font-mono text-brand-cream/60 uppercase">Verified</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <span className="text-xs text-brand-stone font-mono">
                Official certificates on record at FDDI Jaipur.
              </span>
              <Link
                to="/technology"
                className="w-full sm:w-auto px-6 py-2.5 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-widest hover:bg-brand-cream transition-colors rounded-full flex items-center justify-center gap-1.5"
              >
                <span>Full Technology Page</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ValidationProofSection;
