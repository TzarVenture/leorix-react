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
    <section id="hero-product" className="py-4 sm:py-6 lg:py-8 bg-brand-cream text-brand-ink border-b border-brand-tan-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow - Fixed numbering to 06 */}
        <div className="eyebrow flex items-baseline gap-3 border-t border-brand-tan-line pt-1.5 mb-2 sm:mb-3">
          <span className="eyebrow-idx font-mono text-brand-green text-[11px] sm:text-xs">06</span>
          <span className="eyebrow-lbl text-brand-stone text-[10px] sm:text-xs uppercase tracking-widest">PRODUCT SPOTLIGHT</span>
        </div>

        {/* WearComet DTC Stage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
          
          {/* Left Column: Ambient Product Studio Stage (Forest Green High Contrast Container) */}
          <div className="lg:col-span-7 bg-brand-green p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-brand-tan/30 relative flex flex-col items-center justify-between min-h-[260px] sm:min-h-[340px] shadow-2xl overflow-hidden group">
            
            {/* Studio Spotlight Glow Behind Shoe */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(206,176,138,0.25)_0%,transparent_70%)] pointer-events-none opacity-80" />

            <div className="w-full flex items-center justify-between text-xs font-mono relative z-10">
              <span className="bg-brand-tan/20 text-brand-tan px-2.5 py-0.5 rounded-full border border-brand-tan/40 uppercase tracking-widest font-bold text-[9px] sm:text-[10px]">
                Lead Silhouette
              </span>
              <span className="text-brand-cream/80 font-sans text-[10px] sm:text-xs font-medium">
                {selectedColor.name} ({selectedColor.code})
              </span>
            </div>

            {/* Main Shoe Rendering */}
            <div className="my-2 sm:my-4 relative z-10 w-full aspect-[4/2.8] max-w-sm sm:max-w-md flex items-center justify-center">
              <img
                src={selectedColor.image}
                alt={`${HERO_PRODUCT.name} in ${selectedColor.name}`}
                className="w-full h-auto object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)] group-hover:scale-105 transition-all duration-500"
              />
            </div>

            {/* Colorway Pill Bar */}
            <div className="w-full pt-2 border-t border-brand-tan/20 flex flex-row items-center justify-between gap-2 relative z-10">
              <span className="text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-widest text-brand-tan">
                Select Colorway:
              </span>

              <div className="flex items-center gap-2 bg-brand-ink/80 px-3 py-1 rounded-full border border-brand-tan/30">
                {HERO_PRODUCT.colors.map((color) => (
                  <button
                    key={color.code}
                    onClick={() => setSelectedColor(color)}
                    className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 transition-all flex items-center justify-center flex-shrink-0 ${
                      selectedColor.code === color.code
                        ? 'border-brand-tan scale-120 shadow-md ring-1 ring-brand-tan/50'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  >
                    {selectedColor.code === color.code && (
                      <Check className={`w-2.5 h-2.5 ${color.hex === '#F4EFE6' || color.hex === '#EAE6DF' ? 'text-brand-green' : 'text-brand-cream'}`} />
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Product Narrative, Size Pills & CTAs */}
          <div className="lg:col-span-5 space-y-2.5 sm:space-y-4 text-center lg:text-left">
            
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-brand-green/10 text-brand-green border border-brand-green/20 rounded-full text-[9px] sm:text-xs font-mono font-bold uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-brand-green" />
                <span>FDDI Validated Monoplate</span>
              </div>
              <h2 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-normal text-brand-green leading-tight">
                Article X
              </h2>
              <p className="font-serif-display italic text-xs sm:text-sm text-brand-stone">
                "{HERO_PRODUCT.tagline}"
              </p>
            </div>

            <p className="font-sans text-[11px] sm:text-xs text-brand-ink/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
              {HERO_PRODUCT.descriptor}
            </p>

            {/* Price Badge */}
            <div className="py-2 border-y border-stone-200 flex items-center justify-between">
              <div className="font-sans font-bold text-xl sm:text-2xl text-brand-green">
                {HERO_PRODUCT.price}
              </div>
              <span className="text-[9px] sm:text-[10px] font-mono text-brand-stone uppercase">
                Free Shipping Across India
              </span>
            </div>

            {/* Size Selector Pills */}
            <div className="space-y-1.5 text-left">
              <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-green block text-center lg:text-left">
                Select Size (UK Standard):
              </label>
              <div className="grid grid-cols-6 gap-1.5 text-[10px] font-mono font-bold">
                {HERO_PRODUCT.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-1.5 sm:py-2 rounded-lg border transition-colors ${
                      selectedSize === sz
                        ? 'bg-brand-tan text-brand-green border-brand-tan shadow-md font-bold'
                        : 'bg-white border-stone-300 text-brand-ink hover:border-brand-tan'
                    }`}
                  >
                    {sz.replace('UK ', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* Action CTA Button - Warm Tan Gold Signature Color */}
            <div className="pt-1">
              {mode === 'phaseA' ? (
                <Link
                  to="/product/leorix-article-x"
                  className="w-full py-2.5 sm:py-3 bg-brand-tan text-brand-green font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-brand-green hover:text-brand-cream active:scale-95 transition-all flex items-center justify-center gap-1.5 rounded-full shadow-xl"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview Article X Specs →</span>
                </Link>
              ) : (
                <button
                  onClick={() => addToCart(HERO_PRODUCT, selectedSize)}
                  className="w-full py-2.5 sm:py-3 bg-brand-tan text-brand-green font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-brand-green hover:text-brand-cream active:scale-95 transition-all flex items-center justify-center gap-1.5 rounded-full shadow-xl"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
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
