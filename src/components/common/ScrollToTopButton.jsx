import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-none">
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`pointer-events-auto flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-tan text-brand-green border border-brand-tan/50 shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 hover:bg-brand-green hover:text-brand-cream hover:border-brand-tan ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
