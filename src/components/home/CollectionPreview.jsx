import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS_COLLECTION } from '../../data/products';
import { ArrowUpRight, Eye, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CollectionPreview = () => {
  const { mode, addToCart } = useStore();
  const [filter, setFilter] = useState('all');

  const filteredProducts = PRODUCTS_COLLECTION.filter((p) => {
    if (filter === 'all') return true;
    return p.gender === filter;
  });

  return (
    <section id="collection" className="py-16 sm:py-24 bg-brand-cream text-brand-ink border-b border-brand-tan-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="eyebrow flex items-baseline gap-4 border-t border-brand-tan-line pt-3 mb-6 sm:mb-8">
          <span className="eyebrow-idx font-mono text-brand-green">06</span>
          <span className="eyebrow-lbl text-brand-stone">COLLECTION PREVIEW</span>
        </div>

        {/* Header & Gender Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-6">
          <div className="space-y-3">
            <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-brand-ink">
              The first range.
            </h2>
            <p className="font-sans text-xs sm:text-base text-brand-ink max-w-lg leading-relaxed">
              Five men's and five women's variants, engineered on one single validated platform.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-2 bg-stone-50/70 p-1.5 rounded-full border border-stone-200 self-start md:self-auto font-mono text-xs font-bold uppercase">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2 rounded-full transition-all ${
                filter === 'all' ? 'bg-brand-green text-brand-cream shadow-md' : 'text-brand-stone hover:text-brand-ink'
              }`}
            >
              All Range
            </button>
            <button
              onClick={() => setFilter('men')}
              className={`px-5 py-2 rounded-full transition-all ${
                filter === 'men' ? 'bg-brand-green text-brand-cream shadow-md' : 'text-brand-stone hover:text-brand-ink'
              }`}
            >
              Men's
            </button>
            <button
              onClick={() => setFilter('women')}
              className={`px-5 py-2 rounded-full transition-all ${
                filter === 'women' ? 'bg-brand-green text-brand-cream shadow-md' : 'text-brand-stone hover:text-brand-ink'
              }`}
            >
              Women's
            </button>
          </div>
        </div>

        {/* Product Cards Grid (High Contrast Black Typography + Rounded-3xl Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-3xl border border-stone-200 flex flex-col justify-between group shadow-sm hover:shadow-2xl transition-all"
            >
              <div>
                <div className="flex justify-between items-center mb-4 text-[10px] font-mono uppercase tracking-widest">
                  <span className="bg-brand-green/10 text-brand-green px-3 py-1 rounded-full font-bold">
                    {product.badge}
                  </span>
                  <span className="text-brand-stone font-bold">
                    {product.gender === 'men' ? "Men's Edition" : "Women's Edition"}
                  </span>
                </div>

                {/* Thumbnail */}
                <div className="my-4 aspect-[4/3] flex items-center justify-center bg-stone-50 rounded-2xl p-4 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                  
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-stone-50/90 px-3 py-1 rounded-full text-[10px] font-mono text-white">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: product.colorHex }} />
                    <span>{product.colorName}</span>
                  </div>
                </div>

                <h3 className="font-serif-display font-normal text-2xl text-brand-ink mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-brand-ink mb-4 font-sans">
                  {product.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
                <div>
                  {mode === 'phaseA' ? (
                    <span className="text-[10px] font-mono font-bold text-brand-green bg-brand-green/10 px-3 py-1 rounded-full uppercase tracking-wider block">
                      Phase A Pre-launch
                    </span>
                  ) : (
                    <>
                      <span className="font-sans font-bold text-xl text-brand-ink block">
                        {product.price}
                      </span>
                      <span className="text-[9px] font-mono text-brand-stone uppercase font-semibold">
                        In Stock
                      </span>
                    </>
                  )}
                </div>

                {mode === 'phaseA' ? (
                  <Link
                    to={`/product/${product.id}`}
                    className="px-5 py-2.5 bg-brand-green text-brand-cream font-bold text-xs uppercase tracking-wider hover:bg-stone-50 transition-colors rounded-full flex items-center gap-1.5 shadow-md"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Preview</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => addToCart(product, product.sizes[0])}
                    className="px-5 py-2.5 bg-brand-green text-brand-cream font-bold text-xs uppercase tracking-wider hover:bg-stone-50 transition-colors rounded-full flex items-center gap-1.5 shadow-md"
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
    </section>
  );
};

export default CollectionPreview;
