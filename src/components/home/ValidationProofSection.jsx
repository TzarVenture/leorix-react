import React, { useState, useEffect, useRef } from 'react';
import { Activity, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { VALIDATION_METRICS } from '../../data/fddiSpecs';

const ValidationProofSection = () => {
  const [selectedPreset, setSelectedPreset] = useState('leorix');
  const [isAutoSwitching, setIsAutoSwitching] = useState(true);
  const canvasRef = useRef(null);

  // Auto-switching timer (Every 3.0 seconds)
  useEffect(() => {
    if (!isAutoSwitching) return;
    const interval = setInterval(() => {
      setSelectedPreset((prev) => (prev === 'leorix' ? 'flat' : 'leorix'));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoSwitching]);

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
    <section id="validation" className="py-3.5 sm:py-6 lg:py-8 bg-brand-cream text-brand-ink border-b border-brand-tan-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow — Section 06 */}
        <div className="eyebrow flex items-baseline gap-3 border-t border-brand-tan-line pt-1.5 mb-2 sm:mb-3">
          <span className="eyebrow-idx font-mono text-brand-green text-[11px] sm:text-xs">06</span>
          <span className="eyebrow-lbl text-brand-stone text-[10px] sm:text-xs uppercase tracking-widest font-bold">
            FDDI VALIDATION STUDIO
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-2.5 sm:mb-4 space-y-1 sm:space-y-1.5">
          <h2 className="font-serif-display text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-normal leading-tight text-brand-green">
            Biomechanics validated –{' '}
            <em className="italic font-medium text-brand-ink block sm:inline">by design, not by adjective.</em>
          </h2>
        </div>

        {/* Studio Dark Bento Container */}
        <div className="apple-bento-dark p-3.5 sm:p-6 lg:p-7 rounded-2xl sm:rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-6 items-center shadow-2xl">
          
          {/* Left Canvas Heatmap Column */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-2.5 sm:space-y-3">
            
            {/* 1. Heatmap Header Title (Positioned ABOVE the Buttons) */}
            <div className="flex items-center justify-between w-full pb-1 border-b border-brand-tan/30 text-xs">
              <span className="font-mono font-bold text-brand-tan text-[9.5px] sm:text-xs uppercase tracking-widest flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-brand-tan" />
                <span>Plantar Pressure Heatmap</span>
              </span>
            </div>

            {/* 2. Smooth Sliding Preset Switcher */}
            <div className="relative grid grid-cols-2 bg-brand-ink/90 p-1 rounded-full border border-brand-tan/40 text-xs font-sans w-full max-w-[275px] sm:max-w-[340px] shadow-lg select-none">
              {/* Smooth Sliding Background Active Indicator Pill */}
              <div
                className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-all duration-300 ease-out shadow-md ${
                  selectedPreset === 'flat'
                    ? 'left-1 bg-red-950 border border-red-500/50'
                    : 'left-[calc(50%+0px)] bg-brand-tan'
                }`}
              />

              {/* Button 1: Flat Insole */}
              <button
                type="button"
                onClick={() => {
                  setSelectedPreset('flat');
                  setIsAutoSwitching(false);
                }}
                className={`relative z-10 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase transition-colors text-center cursor-pointer ${
                  selectedPreset === 'flat' ? 'text-red-200 font-black' : 'text-brand-cream/80 hover:text-brand-cream'
                }`}
              >
                Flat Insole
              </button>

              {/* Button 2: LEORIX Tuned */}
              <button
                type="button"
                onClick={() => {
                  setSelectedPreset('leorix');
                  setIsAutoSwitching(false);
                }}
                className={`relative z-10 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase transition-colors text-center cursor-pointer ${
                  selectedPreset === 'leorix' ? 'text-brand-green font-black' : 'text-brand-cream/80 hover:text-brand-cream'
                }`}
              >
                LEORIX Tuned
              </button>
            </div>

            {/* 3. Interactive Insole Canvas Card */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden border border-brand-tan/40 bg-black p-1.5 sm:p-2 shadow-2xl w-full max-w-[275px] sm:max-w-[340px] aspect-[4/3] flex items-center justify-center">
              <canvas ref={canvasRef} width={340} height={255} className="w-full h-full rounded-lg" />

              <div className="absolute top-2 left-2 bg-brand-ink/90 border border-brand-tan/40 px-2.5 py-0.5 rounded-full text-[8.5px] sm:text-[9px] font-mono text-brand-tan">
                Peak: {selectedPreset === 'leorix' ? '< 42.8 kPa (Controlled)' : '88.5 kPa (High Impact)'}
              </div>
            </div>

          </div>

          {/* Right Metrics Bento Grid Column (Optimized 2-Column Bento Grid on Mobile) */}
          <div className="lg:col-span-7 space-y-2.5">
            <h3 className="font-serif-display text-xs sm:text-lg text-brand-tan font-normal">
              FDDI Verification Metrics
            </h3>

            {/* Premium Bento Grid: Hero Full-Width Card (Top) + 2 Column Micro Cards (Bottom) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
              {VALIDATION_METRICS.map((metric, idx) => (
                <div
                  key={idx}
                  className={`bg-brand-green/40 p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border border-brand-tan/30 flex flex-col justify-between space-y-1.5 hover:border-brand-tan transition-colors ${
                    idx === 0 ? 'col-span-2 sm:col-span-1 bg-brand-green/60 border-brand-tan/50' : 'col-span-1'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] sm:text-[9px] font-mono font-bold text-brand-tan uppercase tracking-widest">
                      {metric.status}
                    </span>
                    <span className="text-[8px] font-mono text-brand-cream/60 uppercase">Verified</span>
                  </div>

                  <div>
                    <span className="font-serif-display font-bold text-lg sm:text-2xl text-brand-tan block leading-tight">
                      {metric.value}
                    </span>
                    <h4 className="font-sans font-bold text-[10px] sm:text-xs text-brand-cream mt-0.5 leading-snug">
                      {metric.metric}
                    </h4>
                  </div>

                  <p className="text-[8.5px] sm:text-[10px] text-brand-stone leading-tight border-t border-brand-tan/15 pt-1">
                    {metric.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Footer Action Button: Certifications & Tech Specs */}
            <div className="pt-1 flex justify-end">
              <Link
                to="/technology"
                className="w-full sm:w-auto px-5 py-2 bg-brand-tan text-brand-green font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-brand-cream active:scale-95 transition-all rounded-full flex items-center justify-center gap-1.5 shadow-sm cursor-pointer"
              >
                <span>Certifications & Tech Specs</span>
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
