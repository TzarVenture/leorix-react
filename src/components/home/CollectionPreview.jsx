import React, { useState, useRef } from 'react';
import { useStore } from '../../context/StoreContext';
import { PRODUCTS_COLLECTION } from '../../data/products';
import { ChevronLeft, ChevronRight, Eye, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CollectionPreview = () => {
  const { mode, addToCart } = useStore();
  const [filter, setFilter] = useState('all');
  const scrollRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const filteredProducts = PRODUCTS_COLLECTION.filter((p) => {
    if (filter === 'all') return true;
    return p.gender === filter;
  });

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Touch & Mouse Drag Handlers
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  const handleTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  return (
    <section id="collection" className="py-4 sm:py-6 lg:py-8 bg-brand-cream text-brand-ink border-b border-brand-tan-soft relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow - Section 08 */}
        <div className="eyebrow flex items-baseline gap-3 border-t border-brand-tan-line pt-1.5 mb-2 sm:mb-3">
          <span className="eyebrow-idx font-mono text-brand-green text-[11px] sm:text-xs">08</span>
          <span className="eyebrow-lbl text-brand-stone text-[10px] sm:text-xs uppercase tracking-widest">COLLECTION PREVIEW</span>
        </div>

        {/* Header & Gender Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-6 gap-3">
          <div className="space-y-1">
            <h2 className="font-serif-display text-2xl sm:text-4xl lg:text-5xl font-normal text-brand-green leading-tight">
              The first range.
            </h2>
            <p className="font-sans text-[11px] sm:text-xs text-brand-ink/80 max-w-lg leading-relaxed">
              Five men's and five women's variants, engineered on one single validated platform.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto">
            {/* Filter Tabs */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-stone-200 font-mono text-[10px] sm:text-xs font-bold uppercase shadow-xs">
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  filter === 'all' ? 'bg-brand-green text-brand-cream shadow-md' : 'text-brand-stone hover:text-brand-ink'
                }`}
              >
                All Range
              </button>
              <button
                onClick={() => setFilter('men')}
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  filter === 'men' ? 'bg-brand-green text-brand-cream shadow-md' : 'text-brand-stone hover:text-brand-ink'
                }`}
              >
                Men's
              </button>
              <button
                onClick={() => setFilter('women')}
                className={`px-3.5 py-1.5 rounded-full transition-all ${
                  filter === 'women' ? 'bg-brand-green text-brand-cream shadow-md' : 'text-brand-stone hover:text-brand-ink'
                }`}
              >
                Women's
              </button>
            </div>

            {/* Scroll Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={scrollLeft}
                className="p-2 rounded-full border border-stone-300 bg-white hover:bg-brand-green hover:text-brand-cream hover:border-brand-green active:scale-90 transition-all text-brand-ink shadow-xs"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollRight}
                className="p-2 rounded-full border border-stone-300 bg-white hover:bg-brand-green hover:text-brand-cream hover:border-brand-green active:scale-90 transition-all text-brand-ink shadow-xs"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Single-Row Horizontal Touch & Drag Carousel Track */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-3.5 sm:gap-5 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-1.5 pt-0.5 select-none cursor-grab active:cursor-grabbing"
          style={{ touchAction: 'pan-x pan-y', WebkitOverflowScrolling: 'touch' }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-[240px] xs:w-[265px] sm:w-[295px] lg:w-[315px] flex-shrink-0 snap-start bg-white p-3.5 sm:p-4 rounded-2xl border border-stone-200 flex flex-col justify-between group shadow-sm hover:shadow-xl transition-all"
            >
              <div>
                <div className="flex justify-between items-center mb-2 text-[8px] font-mono uppercase tracking-widest gap-1">
                  <span className="bg-brand-green/10 text-brand-green border border-brand-green/20 px-2 py-0.5 rounded-full font-bold truncate max-w-[120px]">
                    {product.badge}
                  </span>
                  <span className="text-brand-stone font-bold flex-shrink-0">
                    {product.gender === 'men' ? "Men's" : "Women's"}
                  </span>
                </div>

                {/* Thumbnail */}
                <div className="my-1.5 aspect-[4/2.5] flex items-center justify-center bg-stone-50 rounded-xl p-2.5 group-hover:scale-105 transition-transform duration-500 relative overflow-hidden max-h-[140px] sm:max-h-[160px]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain filter drop-shadow-md"
                  />
                  
                  <div className="absolute bottom-1.5 left-1.5 flex items-center gap-1 bg-brand-ink/90 text-brand-cream border border-brand-tan/30 px-2 py-0.5 rounded-full text-[8px] font-mono shadow-xs backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: product.colorHex }} />
                    <span className="truncate max-w-[110px]">{product.colorName}</span>
                  </div>
                </div>

                <h3 className="font-serif-display font-normal text-lg sm:text-xl text-brand-ink mb-0.5 truncate">
                  {product.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-brand-ink/80 mb-2 font-sans line-clamp-1">
                  {product.shortDesc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-stone-200 flex items-center justify-between gap-2">
                <div>
                  {mode === 'phaseA' ? (
                    <div>
                      <span className="text-[9px] font-mono font-bold text-brand-green uppercase tracking-wider block leading-tight">
                        Phase A
                      </span>
                      <span className="text-[7.5px] font-mono text-brand-stone uppercase tracking-widest block font-semibold">
                        Pre-launch
                      </span>
                    </div>
                  ) : (
                    <>
                      <span className="font-sans font-bold text-base sm:text-lg text-brand-green block leading-none">
                        {product.price}
                      </span>
                      <span className="text-[8px] font-mono text-brand-stone uppercase font-semibold">
                        In Stock
                      </span>
                    </>
                  )}
                </div>

                {mode === 'phaseA' ? (
                  <Link
                    to={`/product/${product.id}`}
                    className="px-4 py-1.5 bg-brand-tan text-brand-green font-bold text-[9px] sm:text-[10px] uppercase tracking-wider hover:bg-brand-green hover:text-brand-cream active:scale-95 transition-all rounded-full flex items-center gap-1 shadow-md flex-shrink-0"
                  >
                    <Eye className="w-3 h-3" />
                    <span>Preview</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => addToCart(product, product.sizes[0])}
                    className="px-4 py-1.5 bg-brand-tan text-brand-green font-bold text-[9px] sm:text-[10px] uppercase tracking-wider hover:bg-brand-green hover:text-brand-cream active:scale-95 transition-all rounded-full flex items-center gap-1 shadow-md flex-shrink-0"
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
    </section>
  );
};

export default CollectionPreview;
