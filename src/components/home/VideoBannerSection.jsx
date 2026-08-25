import React from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';

const VideoBannerSection = () => {
  const { mode } = useStore();

  return (
    <section id="cinema-banner" className="w-full relative bg-brand-ink text-brand-cream py-16 sm:py-24 overflow-hidden border-b border-brand-tan/20">
      {/* Ambient Video / Motion Graphic Background Backdrop */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,rgba(46,62,49,0.8),rgba(26,33,28,1))]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(206,176,138,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(206,176,138,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-tan/10 text-brand-tan border border-brand-tan/30 text-[10px] sm:text-xs font-mono uppercase tracking-widest font-bold">
          <Play className="w-3 h-3 text-brand-tan fill-brand-tan" />
          <span>LEORIX FOOTWEAR LABS CINEMA</span>
        </div>

        <h2 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl text-brand-cream font-normal max-w-3xl mx-auto leading-tight">
          Engineered for movement. <em className="italic text-brand-tan block sm:inline">Defined by proof.</em>
        </h2>

        <p className="font-sans text-xs sm:text-sm text-brand-cream/80 max-w-xl mx-auto leading-relaxed">
          Where refined design meets engineering precision, tested and validated for everyday performance.
        </p>

        {/* 2 CTAs: Technology & Product */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/technology"
            className="px-6 py-3 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-widest hover:bg-white transition-all rounded-full flex items-center gap-2 shadow-xl cursor-pointer"
          >
            <span>Technology Specs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/product/leorix-article-x"
            className="px-6 py-3 bg-transparent text-brand-tan border border-brand-tan/50 font-bold text-xs uppercase tracking-widest hover:bg-brand-tan/10 transition-all rounded-full flex items-center gap-2 cursor-pointer"
          >
            <span>View Product</span>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default VideoBannerSection;
