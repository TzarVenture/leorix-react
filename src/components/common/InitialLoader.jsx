import React, { useState, useEffect } from 'react';

const InitialLoader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade-out animation at 2.1 seconds
    const timerFade = setTimeout(() => {
      setFadeOut(true);
    }, 2100);

    // Unmount loader completely at 2.6 seconds
    const timerUnmount = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => {
      clearTimeout(timerFade);
      clearTimeout(timerUnmount);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#1E2B21] flex flex-col items-center justify-between py-12 px-6 text-brand-cream select-none transition-all duration-500 ease-out ${
        fadeOut ? 'opacity-0 scale-102 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green/80 via-[#1E2B21] to-[#121A14] pointer-events-none" />

      {/* Top watermark / Tag */}
      <div className="relative z-10 font-mono text-[10px] sm:text-xs text-brand-tan/80 uppercase tracking-widest flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-tan animate-ping" />
        <span>LEORIX BIOMECHANICAL PLATFORM</span>
      </div>

      {/* Center Stage: SVG Animated Shoe Monoplate Logo & Wordmark */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 max-w-sm sm:max-w-md w-full">
        
        {/* Animated SVG Shoe Cross-Stripe Pattern Logo */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
          
          {/* Outer rotating accent ring */}
          <div className="absolute inset-0 rounded-full border border-brand-tan/20 animate-[spin_12s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border border-dashed border-brand-tan/15 animate-[spin_18s_linear_infinite_reverse]" />

          <svg
            viewBox="0 0 200 120"
            className="w-28 h-28 sm:w-36 sm:h-36 drop-shadow-[0_0_16px_rgba(206,176,138,0.4)]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Background grid line accents */}
            <path
              d="M20 60 H180 M100 10 V110"
              stroke="#CEB08A"
              strokeWidth="0.5"
              strokeDasharray="4 4"
              opacity="0.3"
            />

            {/* Signature LEORIX Shoe Side-Stripe Curve 1 */}
            <path
              d="M 25 85 C 60 85, 95 65, 125 35 C 145 15, 175 25, 185 30"
              stroke="#CEB08A"
              strokeWidth="6"
              strokeLinecap="round"
              className="animate-draw-path-1"
            />

            {/* Signature LEORIX Shoe Side-Stripe Curve 2 (Intersecting Monoplate X) */}
            <path
              d="M 30 35 C 65 45, 105 70, 140 85 C 160 92, 175 80, 180 75"
              stroke="#F4EFE6"
              strokeWidth="5"
              strokeLinecap="round"
              className="animate-draw-path-2"
            />

            {/* Central Anchor Dot */}
            <circle cx="108" cy="62" r="4.5" fill="#CEB08A" className="animate-pulse" />
          </svg>
        </div>

        {/* Brand Wordmark */}
        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <h1 className="font-sans font-black text-3xl sm:text-4xl tracking-tighter text-brand-cream uppercase">
              LEORIX
            </h1>
            <span className="w-2.5 h-2.5 rounded-full bg-brand-tan animate-pulse shadow-[0_0_12px_#CEB08A]" />
          </div>
          <p className="font-sans text-[11px] sm:text-xs text-brand-tan/90 uppercase tracking-widest font-semibold">
            Engineered From The Sole Up
          </p>
        </div>

        {/* Sleek 2-second Progress Bar */}
        <div className="w-full max-w-[220px] sm:max-w-[260px] bg-brand-ink/80 h-1.5 rounded-full overflow-hidden border border-brand-tan/20 shadow-inner">
          <div className="h-full bg-gradient-to-r from-brand-tan/60 via-brand-tan to-brand-cream rounded-full animate-loader-progress" />
        </div>

      </div>

      {/* Footer Tagline */}
      <div className="relative z-10 font-mono text-[9px] sm:text-[10px] text-brand-tan/60 uppercase tracking-widest">
        FDDI VALIDATED PLATFORM • 2026 EDITION
      </div>

      {/* Embedded Animation Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes drawPath1 {
          0% { stroke-dasharray: 220; stroke-dashoffset: 220; opacity: 0.2; }
          50% { opacity: 1; }
          100% { stroke-dasharray: 220; stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes drawPath2 {
          0% { stroke-dasharray: 200; stroke-dashoffset: 200; opacity: 0.2; }
          40% { opacity: 0.2; }
          100% { stroke-dasharray: 200; stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes loaderProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-draw-path-1 {
          animation: drawPath1 1.8s ease-in-out forwards;
        }
        .animate-draw-path-2 {
          animation: drawPath2 1.8s ease-in-out forwards;
        }
        .animate-loader-progress {
          animation: loaderProgress 2.1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}} />

    </div>
  );
};

export default InitialLoader;
