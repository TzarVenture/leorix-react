import React, { useState, useRef } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS_COLLECTION } from '../../data/products';
import { ChevronLeft, ChevronRight, Eye, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CollectionPreview = () => {
  const { mode, addToCart } = useStore();
  const [filter, setFilter] = useState('all');
  const scrollRef = useRef(null);

  const filteredProducts = PRODUCTS_COLLECTION.filter((p) => {
    if (filter === 'all') return true;
    return p.gender === filter;
  });

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section id="collection" className="py-4 sm:py-6 lg:py-8 bg-brand-cream text-brand-ink border-b border-brand-tan-soft relative overflow-hidden bg-grid-pattern select-none">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow + Filter Pills + Arrow Controls Horizontally Aligned in One Row */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-brand-tan-line pt-2 mb-4 sm:mb-6">
          
          {/* Eyebrow — Section 03 */}
          <div className="flex items-baseline gap-3">
            <span className="eyebrow-idx font-mono text-brand-green text-[11px] sm:text-xs">03</span>
            <span className="eyebrow-lbl text-brand-stone text-[10px] sm:text-xs uppercase tracking-widest font-bold">
              The First Range.
            </span>
          </div>

          {/* Filter Pills + Left Right Arrow Switchers */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-stone-200 font-mono text-[9px] sm:text-xs font-bold uppercase shadow-xs">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full transition-all cursor-pointer ${
                  filter === 'all' ? 'bg-brand-green text-brand-cream shadow-md' : 'text-brand-stone hover:text-brand-ink'
                }`}
              >
                All Range
              </button>
              <button
                onClick={() => setFilter('men')}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full transition-all cursor-pointer ${
                  filter === 'men' ? 'bg-brand-green text-brand-cream shadow-md' : 'text-brand-stone hover:text-brand-ink'
                }`}
              >
                Men's
              </button>
              <button
                onClick={() => setFilter('women')}
                className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full transition-all cursor-pointer ${
                  filter === 'women' ? 'bg-brand-green text-brand-cream shadow-md' : 'text-brand-stone hover:text-brand-ink'
                }`}
              >
                Women's
              </button>
            </div>

            {/* Scroll Arrow Controls */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              <button
                onClick={() => scroll('left')}
                className="p-1.5 sm:p-2 rounded-full border border-stone-300 bg-white hover:bg-brand-green hover:text-brand-cream hover:border-brand-green active:scale-90 transition-all text-brand-ink shadow-xs cursor-pointer"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-1.5 sm:p-2 rounded-full border border-stone-300 bg-white hover:bg-brand-green hover:text-brand-cream hover:border-brand-green active:scale-90 transition-all text-brand-ink shadow-xs cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* Full-Bleed Edge-to-Edge Screen Container Track */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={scrollRef}
            className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto scroll-smooth scrollbar-none pb-3 pt-1 snap-x snap-proximity"
            style={{ touchAction: 'pan-x pan-y', WebkitOverflowScrolling: 'touch' }}
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="w-[250px] xs:w-[275px] sm:w-[305px] lg:w-[325px] flex-shrink-0 snap-start bg-white p-3.5 sm:p-4.5 rounded-2xl border border-stone-200 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-center mb-2 text-[8px] sm:text-[9px] font-mono uppercase tracking-widest gap-1">
                    <span className="bg-brand-green/10 text-brand-green border border-brand-green/20 px-2.5 py-0.5 rounded-full font-bold truncate max-w-[130px]">
                      {product.badge}
                    </span>
                    <span className="text-brand-stone font-bold flex-shrink-0">
                      {product.gender === 'men' ? "Men's" : "Women's"}
                    </span>
                  </div>

                  {/* Clean Product Image Stage */}
                  <div className="my-2.5 aspect-[4/2.6] flex items-center justify-center bg-white rounded-xl p-3 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden max-h-[155px] sm:max-h-[175px]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain filter drop-shadow-md"
                    />
                  </div>
                </div>

                {/* Bottom Card Bar: Model Name + Colourway | CTA button */}
                <div className="pt-3 border-t border-stone-200 flex items-center justify-between gap-2">
                  <div>
                    <span className="text-[10.5px] sm:text-[11.5px] font-mono font-bold text-brand-green uppercase tracking-wider block leading-tight">
                      Ground X
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-mono text-brand-stone uppercase tracking-widest block font-semibold mt-0.5">
                      {product.colorName}
                    </span>
                  </div>

                  {mode === 'phaseA' ? (
                    <Link
                      to={`/product/${product.id}`}
                      className="px-4 py-1.5 bg-brand-tan text-brand-green font-bold text-[9.5px] sm:text-[10.5px] uppercase tracking-wider hover:bg-brand-green hover:text-brand-cream active:scale-95 transition-all rounded-full flex items-center gap-1 shadow-md flex-shrink-0 cursor-pointer"
                    >
                      <Eye className="w-3 h-3" />
                      <span>Preview</span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => addToCart(product, product.sizes[0])}
                      className="px-4 py-1.5 bg-brand-tan text-brand-green font-bold text-[9.5px] sm:text-[10.5px] uppercase tracking-wider hover:bg-brand-green hover:text-brand-cream active:scale-95 transition-all rounded-full flex items-center gap-1 shadow-md flex-shrink-0 cursor-pointer"
                    >
                      <ShoppingBag className="w-3 h-3" />
                      <span>Add to Bag</span>
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default CollectionPreview;
