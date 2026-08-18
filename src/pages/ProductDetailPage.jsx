import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { PRODUCTS_COLLECTION, HERO_PRODUCT } from '../data/products';
import { COMPONENT_SPEC_TABLE, VALIDATION_METRICS } from '../data/fddiSpecs';
import { ShieldCheck, ShoppingBag, Eye, Check, Layers, ArrowRight, Ruler } from 'lucide-react';

const ProductDetailPage = () => {
  const { id } = useParams();
  const { mode, addToCart } = useStore();

  const product = PRODUCTS_COLLECTION.find((p) => p.id === id) || HERO_PRODUCT;

  const [selectedSize, setSelectedSize] = useState(HERO_PRODUCT.sizes[1] || 'UK 8');
  const [selectedImage, setSelectedImage] = useState(product.image || HERO_PRODUCT.defaultImage);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      setSelectedImage(product.image || HERO_PRODUCT.defaultImage);
    }
  }, [id, product]);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink py-6 sm:py-10 lg:py-14 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 lg:space-y-16">
        
        {/* Top Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive Image Gallery */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-brand-stone/30 flex flex-col items-center justify-between min-h-[340px] sm:min-h-[420px] lg:min-h-[460px] shadow-sm">
            
            <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono">
              <span className="bg-brand-green/10 text-brand-green px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
                FDDI Monoplate Platform
              </span>
              <span className="text-brand-stone font-bold uppercase">
                {product.gender === 'men' ? "Men's Silhouette" : "Women's Silhouette"}
              </span>
            </div>

            {/* Main Showcase Image */}
            <div className="my-4 sm:my-8 w-full aspect-[4/3] flex items-center justify-center p-2 sm:p-4">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full max-h-[220px] sm:max-h-[320px] lg:max-h-[380px] object-contain filter drop-shadow-2xl transition-all duration-300 transform-gpu"
              />
            </div>

            {/* Angle & Variant Swatch Switcher */}
            <div className="w-full pt-3 sm:pt-4 border-t border-brand-stone/20 flex items-center gap-2.5 overflow-x-auto scrollbar-none">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase text-brand-stone whitespace-nowrap">
                Gallery Views:
              </span>
              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                {HERO_PRODUCT.colors.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setSelectedImage(c.image)}
                    className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl border-2 p-1 bg-brand-cream/40 flex-shrink-0 transition-transform cursor-pointer ${
                      selectedImage === c.image ? 'border-brand-green scale-105 shadow-sm' : 'border-brand-stone/30 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={c.image} alt={c.name} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Buy Box */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            
            <div className="space-y-1.5 sm:space-y-2">
              <span className="text-[11px] font-mono text-brand-green uppercase tracking-widest block font-bold">
                LEORIX VALIDATED FOOTWEAR
              </span>
              <h1 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-normal text-brand-green leading-tight">
                {product.name}
              </h1>
              <p className="text-xs sm:text-sm text-brand-stone leading-relaxed">
                {product.shortDesc || HERO_PRODUCT.descriptor}
              </p>
            </div>

            {/* Price Box */}
            <div className="py-3 border-y border-brand-stone/20 flex flex-wrap items-center justify-between gap-2">
              {mode === 'phaseA' ? (
                <span className="text-[11px] sm:text-xs font-mono bg-brand-green/10 text-brand-green px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Phase A Pre-Launch Mode
                </span>
              ) : (
                <span className="font-sans font-bold text-2xl sm:text-3xl text-brand-ink">
                  {product.price}
                </span>
              )}
              <span className="text-[10px] sm:text-[11px] font-mono bg-brand-green/10 text-brand-green px-2.5 py-1 rounded-full font-bold uppercase">
                Free Shipping Across India
              </span>
            </div>

            {/* Size Selector */}
            <div className="space-y-2.5 sm:space-y-3">
              <div className="flex justify-between items-center text-xs font-mono font-bold">
                <span className="uppercase tracking-wider text-brand-stone">Select Size (UK):</span>
                <Link to="/size-fit" className="text-brand-green hover:underline flex items-center gap-1 text-[11px] sm:text-xs">
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size & Fit Guide →</span>
                </Link>
              </div>

              <div className="grid grid-cols-5 gap-1.5 sm:gap-2 text-xs font-mono font-bold">
                {(product.sizes || HERO_PRODUCT.sizes).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2.5 sm:py-3 rounded-xl sm:rounded-full border text-center transition-colors cursor-pointer ${
                      selectedSize === sz
                        ? 'bg-brand-green text-brand-tan border-brand-green shadow-sm'
                        : 'bg-white border-brand-stone/30 text-brand-ink hover:border-brand-tan'
                    }`}
                  >
                    {sz.replace('UK ', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-1">
              {mode === 'phaseA' ? (
                <a
                  href="#waitlist"
                  className="w-full py-3.5 sm:py-4 bg-brand-green text-brand-tan font-bold text-xs uppercase tracking-widest hover:bg-brand-ink transition-colors flex items-center justify-center gap-2 rounded-full shadow-xl cursor-pointer"
                >
                  <span>Notify Me / Join Priority List →</span>
                </a>
              ) : (
                <button
                  onClick={() => addToCart(product, selectedSize)}
                  className="w-full py-3.5 sm:py-4 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-widest hover:bg-brand-green hover:text-brand-tan transition-colors flex items-center justify-center gap-2 rounded-full shadow-xl cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag ({selectedSize}) — {product.price}</span>
                </button>
              )}
            </div>

            <div className="pt-2 text-xs text-brand-stone font-mono space-y-1">
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>Validated at Footwear Design & Development Institute (FDDI)</span>
              </p>
              <p className="pl-5 text.11px]">
                Built on Monoplate v1 architecture for 12-hour continuous standing comfort.
              </p>
            </div>

          </div>

        </div>

        {/* Dedicated Spec & Validation Module (The Differentiator) */}
        <div id="spec-validation-module" className="bg-brand-green text-brand-cream p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-brand-tan/30 space-y-6 sm:space-y-8 shadow-2xl">
          
          <div className="border-b border-brand-tan/30 pb-4 sm:pb-6 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-brand-tan uppercase tracking-widest">
                THE SPEC, IN FULL
              </span>
              <h2 className="font-serif-display text-xl sm:text-3xl lg:text-4xl text-brand-cream font-normal">
                Spec & Validation Module
              </h2>
            </div>

            <span className="text-[10px] sm:text-xs font-mono bg-brand-tan/20 text-brand-tan px-3 py-1 rounded-full border border-brand-tan/40 self-start md:self-auto">
              FDDI Report Ref: LAB-FDDI-2026-X
            </span>
          </div>

          {/* Component Specs Table (Responsive Card view on Mobile / Table on Desktop) */}
          <div className="space-y-4">
            <h3 className="font-serif-display text-lg sm:text-xl text-brand-tan font-normal">
              Component & Material Breakdown
            </h3>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto border border-brand-tan/20 rounded-2xl sm:rounded-3xl">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-brand-green-dark text-brand-tan font-mono uppercase">
                  <tr>
                    <th className="p-3.5">Component</th>
                    <th className="p-3.5">Material</th>
                    <th className="p-3.5">Committed Spec</th>
                    <th className="p-3.5">Function</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-tan/15 text-brand-cream/90">
                  {COMPONENT_SPEC_TABLE.map((row, idx) => (
                    <tr key={idx}>
                      <td className="p-3.5 font-bold text-brand-tan">{row.component}</td>
                      <td className="p-3.5">{row.material}</td>
                      <td className="p-3.5 font-mono text-brand-cream">{row.committedSpec}</td>
                      <td className="p-3.5 text-brand-cream/80">{row.function}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card List View (< 768px) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:hidden">
              {COMPONENT_SPEC_TABLE.map((row, idx) => (
                <div key={idx} className="bg-brand-green-dark p-4 rounded-xl border border-brand-tan/25 space-y-1.5 text-xs">
                  <div className="flex justify-between items-center border-b border-brand-tan/20 pb-1.5">
                    <span className="font-bold text-brand-tan">{row.component}</span>
                    <span className="font-mono text-[10px] text-brand-cream bg-brand-tan/20 px-2 py-0.5 rounded">
                      {row.committedSpec}
                    </span>
                  </div>
                  <p className="text-brand-cream/90 text-[11px]">
                    <strong className="text-brand-tan">Material:</strong> {row.material}
                  </p>
                  <p className="text-brand-cream/75 text-[11px]">
                    <strong className="text-brand-tan">Function:</strong> {row.function}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Biomechanical Lab Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6 pt-2 sm:pt-4">
            {VALIDATION_METRICS.map((vm, idx) => (
              <div key={idx} className="bg-brand-green-dark p-4 sm:p-5 rounded-2xl border border-brand-tan/30 space-y-1.5">
                <span className="text-[10px] font-mono text-brand-tan uppercase tracking-widest block font-bold">
                  {vm.status}
                </span>
                <h4 className="font-serif-display text-xl sm:text-2xl text-brand-tan">
                  {vm.value}
                </h4>
                <p className="text-[11px] sm:text-xs font-bold text-brand-cream">{vm.metric}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;
