import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';

import img01 from '../../../img/img01.png';
import img02 from '../../../img/img02.png';
import img03 from '../../../img/img03.png';
import img04 from '../../../img/img04.png';

const EDITORIAL_ITEMS = [
  {
    id: 'editorial-1',
    title: 'X LOWS',
    image: img01,
    link: '/product/leorix-article-x',
  },
  {
    id: 'editorial-2',
    title: 'APEX',
    image: img02,
    link: '/product/leorix-article-x',
  },
  {
    id: 'editorial-3',
    title: 'AEON',
    image: img03,
    link: '/product/leorix-article-x',
  },
  {
    id: 'editorial-4',
    title: 'AERES',
    image: img04,
    link: '/product/leorix-article-x',
  },
];

const EditorialGridSection = () => {
  const { mode } = useStore();

  return (
    <section id="editorial-grid" className="w-full overflow-hidden bg-black text-white p-0 m-0 border-b border-brand-tan/20">
      {/* Exact WearComet 2x2 Edge-to-Edge Grid with 0 Gap */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 w-full">
        {EDITORIAL_ITEMS.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="group relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10] overflow-hidden block select-none bg-black cursor-pointer"
          >
            {/* Background Image with Smooth Hover Zoom */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700 ease-out"
            />

            {/* Top Gradient Overlay + Centered Bold Title (Exact Comet Typography) */}
            <div className="absolute inset-x-0 top-0 pt-8 sm:pt-12 pb-16 px-4 bg-gradient-to-b from-black/70 via-black/30 to-transparent flex flex-col items-center justify-start text-center z-10 pointer-events-none">
              <h3 className="font-sans font-black text-4xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500">
                {item.title}
              </h3>
            </div>

            {/* Bottom Right "SHOP NOW" / "PREVIEW SPEC" Link (Exact Comet Styling) */}
            <div className="absolute bottom-5 right-6 sm:bottom-7 sm:right-8 z-10">
              <span className="font-sans font-bold text-[10px] sm:text-xs text-white uppercase tracking-widest border-b border-white/70 pb-0.5 group-hover:border-white group-hover:text-brand-tan transition-colors drop-shadow-md">
                {mode === 'phaseA' ? 'PREVIEW SPEC' : 'SHOP NOW'}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default EditorialGridSection;
