import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';

import catMobile01 from '../../../img/cat-mobile-01.webp';
import catMobile02 from '../../../img/cat-mobile-02.webp';
import catMobile03 from '../../../img/cat-mobile-03.webp';
import catMobile04 from '../../../img/cat-mobile-04.webp';

import img01 from '../../../img/img01.webp';
import img02 from '../../../img/img02.webp';
import img03 from '../../../img/img03.webp';
import img04 from '../../../img/img04.webp';

const EDITORIAL_ITEMS = [
  {
    id: 'editorial-1',
    title: 'Ground X',
    mobileImage: catMobile01,
    desktopImage: img01,
    link: '/product/leorix-article-x',
  },
  {
    id: 'editorial-2',
    title: 'Pivot',
    mobileImage: catMobile02,
    desktopImage: img02,
    link: '/product/leorix-article-x',
  },
  {
    id: 'editorial-3',
    title: 'Drift',
    mobileImage: catMobile03,
    desktopImage: img03,
    link: '/product/leorix-article-x',
  },
  {
    id: 'editorial-4',
    title: 'Ballast',
    mobileImage: catMobile04,
    desktopImage: img04,
    link: '/product/leorix-article-x',
  },
];

const EditorialGridSection = () => {
  const { mode } = useStore();

  return (
    <section id="editorial-grid" className="w-full overflow-hidden bg-black text-white p-0 m-0 border-b border-brand-tan/20">
      {/* 2x2 Edge-to-Edge Grid (Mobile & Desktop Single Screen Viewport Fit) */}
      <div className="grid grid-cols-2 gap-0 w-full h-[68vh] max-h-[570px] lg:h-[83vh] lg:max-h-[690px]">
        {EDITORIAL_ITEMS.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="group relative w-full h-full overflow-hidden block select-none bg-black cursor-pointer border border-stone-800/80"
          >
            {/* Responsive <picture> Tag: Mobile WebP Images on Mobile screens, Desktop WebP Images on Desktop screens */}
            <picture className="w-full h-full block">
              <source media="(max-width: 767px)" srcset={item.mobileImage} />
              <img
                src={item.desktopImage}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </picture>

            {/* Top Gradient Overlay + Centered Bold Title */}
            <div className="absolute inset-x-0 top-0 pt-3 sm:pt-10 lg:pt-12 pb-8 sm:pb-16 px-2 sm:px-4 bg-gradient-to-b from-black/75 via-black/30 to-transparent flex flex-col items-center justify-start text-center z-10 pointer-events-none">
              <h3 className="font-sans font-black text-lg xs:text-2xl sm:text-4xl lg:text-6xl text-white uppercase tracking-tight leading-none drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)] group-hover:scale-105 transition-transform duration-500">
                {item.title}
              </h3>
            </div>

            {/* Bottom Right "SHOP NOW" / "PREVIEW SPEC" Link */}
            <div className="absolute bottom-2.5 right-3 sm:bottom-6 sm:right-8 z-10">
              <span className="font-sans font-bold text-[8px] xs:text-[9px] sm:text-xs text-white uppercase tracking-widest border-b border-white/70 pb-0.5 group-hover:border-white group-hover:text-brand-tan transition-colors drop-shadow-md">
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
