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
    <div className="min-h-screen bg-brand-cream text-brand-ink py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Top Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Image Gallery */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-12 rounded-3xl border border-brand-stone/30 flex flex-col items-center justify-between min-h-[460px] shadow-sm">
            
            <div className="w-full flex items-center justify-between text-xs font-mono">
              <span className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full font-bold uppercase tracking-widest">
                FDDI Monoplate Platform
              </span>
              <span className="text-brand-stone font-bold uppercase">
                {product.gender === 'men' ? "Men's Silhouette" : "Women's Silhouette"}
              </span>
            </div>

            {/* Main Showcase Image */}
            <div className="my-8 w-full aspect-[4/3] flex items-center justify-center p-4">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-contain filter drop-shadow-2xl transition-all duration-300"
              />
            </div>

            {/* Angle & Variant Swatch Switcher */}
            <div className="w-full pt-4 border-t border-brand-stone/20 flex items-center gap-3 overflow-x-auto">
              <span className="text-xs font-mono font-bold uppercase text-brand-stone whitespace-nowrap">
                Gallery Views:
              </span>
              {HERO_PRODUCT.colors.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setSelectedImage(c.image)}
                  className={`w-12 h-12 rounded-2xl border-2 p-1 bg-brand-cream/40 flex-shrink-0 transition-transform ${
                    selectedImage === c.image ? 'border-brand-green scale-105' : 'border-brand-stone/30 opacity-70'
                  }`}
                >
                  <img src={c.image} alt={c.name} className="w-full h-full object-contain" />
                </button>
              ))}
            </div>

          </div>

          {/* Right Column: Buy Box */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono text-brand-green uppercase tracking-widest block font-bold">
                LEORIX VALIDATED FOOTWEAR
              </span>
              <h1 className="font-serif-display text-3xl sm:text-5xl font-normal text-brand-green leading-tight">
                {product.name}
              </h1>
              <p className="text-xs text-brand-stone">
                {product.shortDesc || HERO_PRODUCT.descriptor}
              </p>
            </div>

            {/* Price Box */}
            <div className="py-3 border-y border-brand-stone/20 flex items-center justify-between">
              {mode === 'phaseA' ? (
                <span className="text-xs font-mono bg-brand-green/10 text-brand-green px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider">
                  Phase A Pre-Launch Mode
                </span>
              ) : (
                <span className="font-sans font-bold text-3xl text-brand-ink">
                  {product.price}
                </span>
              )}
              <span className="text-[11px] font-mono bg-brand-green/10 text-brand-green px-3 py-1.5 rounded-full font-bold uppercase">
                Free Shipping Across India
              </span>
            </div>

            {/* Size Selector */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-mono font-bold">
                <span className="uppercase tracking-widest text-brand-stone">Select Size (UK):</span>
                <Link to="/size-fit" className="text-brand-green hover:underline flex items-center gap-1">
                  <Ruler className="w-3.5 h-3.5" />
                  <span>Size & Fit Guide →</span>
                </Link>
              </div>

              <div className="grid grid-cols-5 gap-2 text-xs font-mono font-bold">
                {(product.sizes || HERO_PRODUCT.sizes).map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-3 rounded-full border transition-colors ${
                      selectedSize === sz
                        ? 'bg-brand-green text-brand-tan border-brand-green shadow'
                        : 'bg-white border-brand-stone/30 text-brand-ink hover:border-brand-tan'
                    }`}
                  >
                    {sz.replace('UK ', '')}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            {mode === 'phaseA' ? (
              <a
                href="#waitlist"
                className="w-full py-4 bg-brand-green text-brand-tan font-bold text-xs uppercase tracking-widest hover:bg-brand-ink transition-colors flex items-center justify-center gap-2 rounded-full shadow-xl"
              >
                <span>Notify Me / Join Priority List →</span>
              </a>
            ) : (
              <button
                onClick={() => addToCart(product, selectedSize)}
                className="w-full py-4 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-widest hover:bg-brand-green hover:text-brand-tan transition-colors flex items-center justify-center gap-2 rounded-full shadow-xl"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag ({selectedSize}) — {product.price}</span>
              </button>
            )}

            <div className="pt-2 text-xs text-brand-stone font-mono space-y-1">
              <p className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-green" />
                <span>Validated at Footwear Design & Development Institute (FDDI)</span>
              </p>
              <p className="pl-5 text-[11px]">
                Built on Monoplate v1 architecture for 12-hour continuous standing comfort.
              </p>
            </div>

          </div>

        </div>

        {/* Dedicated Spec & Validation Module (The Differentiator) */}
        <div id="spec-validation-module" className="bg-brand-green text-brand-cream p-8 sm:p-12 rounded-3xl border border-brand-tan/30 space-y-8 shadow-2xl">
          
          <div className="border-b border-brand-tan/30 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold text-brand-tan uppercase tracking-widest">
                THE SPEC, IN FULL
              </span>
              <h2 className="font-serif-display text-2xl sm:text-4xl text-brand-cream font-normal">
                Spec & Validation Module
              </h2>
            </div>

            <span className="text-xs font-mono bg-brand-tan/20 text-brand-tan px-3.5 py-1.5 rounded-full border border-brand-tan/40">
              FDDI Report Ref: LAB-FDDI-2026-X
            </span>
          </div>

          {/* Component Specs Table */}
          <div className="space-y-4">
            <h3 className="font-serif-display text-xl text-brand-tan font-normal">
              Component & Material Breakdown
            </h3>

            <div className="overflow-x-auto border border-brand-tan/20 rounded-3xl">
              <table className="w-full text-left text-xs font-sans">
                <thead className="bg-brand-green-dark text-brand-tan font-mono uppercase">
                  <tr>
                    <th className="p-3">Component</th>
                    <th className="p-3">Material</th>
                    <th className="p-3">Committed Spec</th>
                    <th className="p-3">Function</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-tan/15 text-brand-cream/90">
                  {COMPONENT_SPEC_TABLE.map((row, idx) => (
                    <tr key={idx}>
                      <td className="p-3 font-bold text-brand-tan">{row.component}</td>
                      <td className="p-3">{row.material}</td>
                      <td className="p-3 font-mono text-brand-cream">{row.committedSpec}</td>
                      <td className="p-3 text-brand-cream/80">{row.function}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Biomechanical Lab Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {VALIDATION_METRICS.map((vm, idx) => (
              <div key={idx} className="bg-brand-green-dark p-5 rounded-3xl border border-brand-tan/30 space-y-2">
                <span className="text-[10px] font-mono text-brand-tan uppercase tracking-widest block font-bold">
                  {vm.status}
                </span>
                <h4 className="font-serif-display text-2xl text-brand-tan">
                  {vm.value}
                </h4>
                <p className="text-xs font-bold text-brand-cream">{vm.metric}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetailPage;
