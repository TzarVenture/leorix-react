import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { PRODUCTS_COLLECTION } from '../data/products';
import { Filter, Eye, ShoppingBag, ArrowRight } from 'lucide-react';

const ShopPage = () => {
  const { gender } = useParams(); // 'men' or 'women'
  const { mode, addToCart } = useStore();

  const currentGender = gender || 'men';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [gender]);

  const items = PRODUCTS_COLLECTION.filter(item => {
    if (gender === 'men') return item.gender === 'men';
    if (gender === 'women') return item.gender === 'women';
    return true;
  });

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink py-6 sm:py-10 lg:py-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="border-b border-brand-tan-line pb-6 sm:pb-8 mb-6 sm:mb-8 space-y-3 sm:space-y-4">
          <div className="eyebrow flex items-baseline gap-3 sm:gap-4">
            <span className="eyebrow-idx font-mono text-xs sm:text-sm">01</span>
            <span className="eyebrow-lbl text-xs sm:text-sm uppercase tracking-widest">
              {currentGender === 'men' ? "MEN'S COLLECTION" : "WOMEN'S COLLECTION"}
            </span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-normal text-brand-green capitalize">
            {currentGender}'s Footwear
          </h1>

          <p className="font-sans text-xs sm:text-base text-brand-ink/80 max-w-xl leading-relaxed">
            Built on the single validated LEORIX platform. Rearfoot stability, controlled midfoot torsion, and long-duration wear comfort.
          </p>

          {/* Gender Navigation Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-2 sm:pt-4 text-[11px] sm:text-xs font-mono font-bold uppercase">
            <Link
              to="/shop/men"
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-colors ${
                currentGender === 'men'
                  ? 'bg-brand-green text-brand-tan border-brand-green shadow-xs'
                  : 'bg-white text-brand-stone border-brand-stone/30 hover:border-brand-tan'
              }`}
            >
              Men Catalog ({PRODUCTS_COLLECTION.filter(p => p.gender === 'men').length})
            </Link>
            <Link
              to="/shop/women"
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border transition-colors ${
                currentGender === 'women'
                  ? 'bg-brand-green text-brand-tan border-brand-green shadow-xs'
                  : 'bg-white text-brand-stone border-brand-stone/30 hover:border-brand-tan'
              }`}
            >
              Women Catalog ({PRODUCTS_COLLECTION.filter(p => p.gender === 'women').length})
            </Link>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl sm:rounded-3xl border border-brand-stone/30 p-4 sm:p-6 flex flex-col justify-between hover:border-brand-tan transition-all duration-300 shadow-sm hover:shadow-xl group"
            >
              <div>
                <div className="flex justify-between items-center mb-3 text-[10px] font-mono uppercase tracking-widest">
                  <span className="bg-brand-green/10 text-brand-green px-2.5 py-0.5 rounded-full font-bold">
                    {product.badge}
                  </span>
                  <span className="text-brand-stone font-bold">{product.colorName}</span>
                </div>

                <div className="my-4 sm:my-6 aspect-[4/3] flex items-center justify-center bg-brand-cream/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain filter drop-shadow-lg"
                  />
                </div>

                <h3 className="font-serif-display font-normal text-xl sm:text-2xl text-brand-green mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-brand-stone mb-4 leading-relaxed">
                  {product.shortDesc}
                </p>
              </div>

              <div className="pt-3 sm:pt-4 border-t border-brand-stone/20 flex flex-wrap items-center justify-between gap-2">
                <div>
                  {mode === 'phaseA' ? (
                    <span className="text-[10px] font-mono font-bold text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-full uppercase tracking-wider block">
                      Phase A Pre-launch
                    </span>
                  ) : (
                    <>
                      <span className="font-sans font-bold text-lg sm:text-xl text-brand-ink block">
                        {product.price}
                      </span>
                      <span className="text-[9px] font-mono text-brand-stone uppercase">
                        FDDI Validated Monoplate
                      </span>
                    </>
                  )}
                </div>

                {mode === 'phaseA' ? (
                  <Link
                    to={`/product/${product.id}`}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 bg-brand-green text-brand-tan font-bold text-xs uppercase tracking-wider hover:bg-brand-tan hover:text-brand-green transition-colors rounded-full flex items-center gap-1.5 cursor-pointer"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Preview</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => addToCart(product, product.sizes[0])}
                    className="px-4 py-2 sm:px-5 sm:py-2.5 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-wider hover:bg-brand-green hover:text-brand-tan transition-colors rounded-full flex items-center gap-1.5 cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ShopPage;
