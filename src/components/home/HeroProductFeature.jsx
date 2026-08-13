import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { HERO_PRODUCT } from '../../data/products';
import { Check, ShieldCheck, ArrowRight, Eye, ShoppingBag, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroProductFeature = () => {
  const { mode, addToCart } = useStore();
  const [selectedColor, setSelectedColor] = useState(HERO_PRODUCT.colors[0]);
  const [selectedSize, setSelectedSize] = useState('UK 8');

  return (
    <section id="hero-product" className="py-16 sm:py-24 bg-brand-green text-brand-cream border-b border-brand-tan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="eyebrow flex items-baseline gap-4 border-t border-brand-tan/30 pt-3 mb-6 sm:mb-8">
          <span className="eyebrow-idx font-mono text-brand-tan">05</span>
          <span className="eyebrow-lbl text-brand-cream/60">PRODUCT SPOTLIGHT</span>
        </div>

        {/* WearComet DTC Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Ambient Product Stage */}
          <div className="lg:col-span-7 bg-brand-green-dark/80 p-6 sm:p-10 lg:p-12 rounded-3xl border border-brand-tan/30 relative flex flex-col items-center justify-between min-h-[380px] sm:min-h-[480px] shadow-2xl overflow-hidden group">
            
            <div className="w-full flex items-center justify-between text-xs font-mono relative z-10">
              <span className="bg-brand-tan/20 text-brand-tan px-3 py-1 rounded-full border border-brand-tan/40 uppercase tracking-widest font-bold text-[10px] sm:text-xs">
                Lead Silhouette
              </span>
              <span className="text-brand-cream/70 font-sans text-[11px] sm:text-xs">
                {selectedColor.name} ({selectedColor.code})
              </span>
            </div>

            {/* Main Shoe Rendering */}
            <div className="my-6 sm:my-8 relative z-10 w-full aspect-[4/3] max-w-lg flex items-center justify-center">
              <img
                src={selectedColor.image}
                alt={`${HERO_PRODUCT.name} in ${selectedColor.name}`}
                className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* WearComet 5-Colorway Pill Bar */}
            <div className="w-full pt-4 border-t border-brand-tan/20 flex flex-col sm:flex-row items-center justify-between gap-3 relative z-10">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest text-brand-tan">
                Select Colorway:
              </span>

              <div className="flex items-center gap-2.5 sm:gap-3 bg-brand-ink/80 px-4 py-2 rounded-full border border-brand-tan/30 overflow-x-auto max-w-full">
                {HERO_PRODUCT.colors.map((color) => (
                  <button
                    key={color.code}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 transition-all flex items-center justify-center flex-shrink-0 ${
                      selectedColor.code === color.code
                        ? 'border-brand-tan scale-125 shadow-lg'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor.code === color.code && (
                      <Check className={`w-3 h-3 ${color.hex === '#F4EFE6' || color.hex === '#EAE6DF' ? 'text-brand-green' : 'text-brand-cream'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Product Narrative, Size Pills & CTAs */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-tan/20 text-brand-tan rounded-full text-xs font-mono font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>FDDI Validated Monoplate</span>
              </div>
              <h2 className="font-serif-display text-3xl xs:text-4xl sm:text-6xl font-normal text-brand-cream leading-tight">
                Article X
              </h2>
              <p className="font-serif-display italic text-base sm:text-lg text-brand-tan">
                "{HERO_PRODUCT.tagline}"
              </p>
            </div>

            <p className="font-sans text-xs sm:text-base text-brand-cream/85 leading-relaxed">
              {HERO_PRODUCT.descriptor}
            </p>

            {/* Price Badge */}
            <div className="py-3 border-y border-brand-tan/20 flex items-center justify-between">
              <div className="font-sans font-bold text-2xl sm:text-3xl text-brand-tan">
                {HERO_PRODUCT.price}
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-brand-cream/70 uppercase">
                Free Shipping Across India
              </span>
            </div>

            {/* WearComet Size Selector Pills */}
            <div className="space-y-2 text-left">
              <label className="text-xs font-mono font-bold uppercase tracking-widest text-brand-tan block text-center lg:text-left">
                Select Size (UK Standard):
              </label>
              <div className="grid grid-cols-3 xs:grid-cols-6 gap-2 text-xs font-mono font-bold">
                {HERO_PRODUCT.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2.5 rounded-xl border transition-colors ${
                      selectedSize === sz
                        ? 'bg-brand-tan text-brand-green border-brand-tan shadow-lg'
                        : 'border-brand-tan/40 text-brand-cream hover:border-brand-tan'
                    }`}
                  >
                    {sz.replace('UK ', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="pt-2">
              {mode === 'phaseA' ? (
                <Link
                  to="/product/leorix-article-x"
                  className="w-full py-4 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-widest hover:bg-brand-cream transition-colors flex items-center justify-center gap-2 rounded-full shadow-2xl"
                >
                  <Eye className="w-4 h-4" />
                  <span>Preview Article X Specs →</span>
                </Link>
              ) : (
                <button
                  onClick={() => addToCart(HERO_PRODUCT, selectedSize)}
                  className="w-full py-4 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-widest hover:bg-brand-cream transition-colors flex items-center justify-center gap-2 rounded-full shadow-2xl"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Shop Article X ({selectedSize}) — {HERO_PRODUCT.price}</span>
                </button>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroProductFeature;
