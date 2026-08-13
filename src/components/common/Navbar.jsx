import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { ShoppingBag, ChevronDown, Menu, X, Shield, Sparkles, Info } from 'lucide-react';

const Navbar = () => {
  const { mode, toggleMode, cartCount, setIsCartOpen } = useStore();
  const [isShopMenuOpen, setIsShopMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Redesigned Full-Width Premium Navbar (Non-green, sticky on scroll) */}
      <header className={`sticky top-0 z-50 w-full px-6 sm:px-12 py-3.5 border-b transition-all duration-300 ${
        scrolled 
          ? 'bg-brand-cream/95 backdrop-blur-xl border-brand-tan-soft shadow-sm'
          : 'bg-brand-cream/80 backdrop-blur-md border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo / Wordmark in High Contrast Ink */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="font-sans font-black text-xl tracking-tight text-brand-ink uppercase transition-transform group-hover:scale-102">
              LEORIX
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
          </Link>

          {/* Desktop Navigation Links - High Contrast Ink */}
          <nav className="hidden md:flex items-center space-x-10 text-xs font-semibold uppercase tracking-widest text-brand-ink">
            <div 
              className="relative" 
              onMouseEnter={() => setIsShopMenuOpen(true)} 
              onMouseLeave={() => setIsShopMenuOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 py-2 hover:text-brand-green transition-colors ${
                  location.pathname.startsWith('/shop') || location.pathname === '/vault' ? 'text-brand-green' : ''
                }`}
              >
                <span>SHOP</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isShopMenuOpen ? 'rotate-180 text-brand-green' : ''}`} />
              </button>

              {/* Shop Dropdown - Fully Rounded-3xl */}
              <div className={`absolute top-full left-0 w-52 bg-white border border-stone-200 shadow-2xl rounded-3xl p-2 mt-1 backdrop-blur-2xl transition-all duration-205 origin-top ${
                isShopMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
              }`}>
                <Link
                  to="/shop/men"
                  className="block px-4 py-2.5 rounded-full text-xs text-brand-ink hover:bg-brand-cream hover:text-brand-green transition-colors font-semibold"
                >
                  MEN'S CATALOG
                </Link>
                <Link
                  to="/shop/women"
                  className="block px-4 py-2.5 rounded-full text-xs text-brand-ink hover:bg-brand-cream hover:text-brand-green transition-colors font-semibold"
                >
                  WOMEN'S CATALOG
                </Link>
                <div className="border-t border-stone-200 my-1" />
                <Link
                  to="/vault"
                  className="block px-4 py-2.5 rounded-full text-xs text-brand-green hover:bg-brand-cream font-bold tracking-wider flex items-center justify-between"
                >
                  <span>THE VAULT</span>
                  <span className="text-[9px] bg-brand-green/10 px-2.5 py-0.5 rounded-full border border-brand-green/20 font-bold">PIONEERS</span>
                </Link>
              </div>
            </div>

            <Link
              to="/technology"
              className={`py-2 hover:text-brand-green transition-colors flex items-center gap-1.5 ${
                isActive('/technology') ? 'text-brand-green border-b-2 border-brand-green' : ''
              }`}
            >
              <Shield className="w-3.5 h-3.5" />
              <span>TECHNOLOGY</span>
            </Link>

            <Link
              to="/about"
              className={`py-2 hover:text-brand-green transition-colors ${
                isActive('/about') ? 'text-brand-green border-b-2 border-brand-green' : ''
              }`}
            >
              <span>ABOUT</span>
            </Link>
          </nav>

          {/* Right Control Panel */}
          <div className="flex items-center gap-4">
            
            {/* Dynamic Mode Switcher (Pill style) */}
            <button
              onClick={toggleMode}
              className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full border border-brand-green/20 bg-brand-green/5 text-brand-green hover:bg-brand-green hover:text-brand-cream transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{mode === 'phaseA' ? 'PHASE A' : 'PHASE B'}</span>
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-brand-cream transition-all rounded-full flex items-center justify-center border border-brand-green/20"
              aria-label="Open Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-green text-brand-cream font-bold text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center border border-brand-cream">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-brand-ink hover:text-brand-green transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-brand-green" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Smooth Mobile Menu Overlay (Cream style) */}
      <div className={`fixed inset-0 z-40 bg-brand-cream transition-all duration-300 md:hidden flex flex-col justify-between pt-24 pb-8 px-6 ${
        isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
      }`}>
        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono font-black text-brand-stone tracking-widest block uppercase">
              EXPLORE COLLECTIONS
            </span>
            <div className="grid grid-cols-2 gap-3">
              <Link
                to="/shop/men"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-4 bg-white border border-stone-200 rounded-3xl text-center hover:border-brand-green transition-colors block shadow-sm"
              >
                <span className="text-brand-ink font-bold text-xs uppercase tracking-wider block">MEN</span>
                <span className="text-[10px] text-brand-stone block mt-1">VALIDATED PLATFORM</span>
              </Link>
              <Link
                to="/shop/women"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-4 bg-white border border-stone-200 rounded-3xl text-center hover:border-brand-green transition-colors block shadow-sm"
              >
                <span className="text-brand-ink font-bold text-xs uppercase tracking-wider block">WOMEN</span>
                <span className="text-[10px] text-brand-stone block mt-1">VALIDATED PLATFORM</span>
              </Link>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <Link
              to="/vault"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between p-4 bg-white border border-brand-green/20 rounded-3xl text-brand-green font-bold text-xs uppercase tracking-widest shadow-sm"
            >
              <span>THE VAULT (EARLY ACCESS)</span>
              <Sparkles className="w-4 h-4 text-brand-green animate-pulse" />
            </Link>

            <Link
              to="/technology"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-4 bg-white border border-stone-200 rounded-3xl text-brand-ink hover:text-brand-green transition-colors font-semibold text-xs uppercase tracking-wider shadow-sm"
            >
              <Shield className="w-4 h-4 text-brand-green" />
              <span>TECHNOLOGY & PROOF</span>
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 p-4 bg-white border border-stone-200 rounded-3xl text-brand-ink hover:text-brand-green transition-colors font-semibold text-xs uppercase tracking-wider shadow-sm"
            >
              <Info className="w-4 h-4 text-brand-green" />
              <span>ABOUT LEORIX</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Footer controls */}
        <div className="space-y-4 pt-6 border-t border-brand-tan-soft">
          <button
            onClick={() => {
              toggleMode();
              setIsMobileMenuOpen(false);
            }}
            className="w-full py-3.5 bg-brand-green text-brand-cream font-black uppercase text-[10px] tracking-widest rounded-full flex items-center justify-center gap-2 shadow-lg"
          >
            <Sparkles className="w-4 h-4" />
            <span>SWITCH TO {mode === 'phaseA' ? 'PHASE B' : 'PHASE A'}</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
