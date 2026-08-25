import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { useAuth } from '../../context/AuthContext';
import { ShoppingBag, ChevronDown, Menu, X, Shield, Sparkles, Info, User, HelpCircle } from 'lucide-react';

const Navbar = ({ onOpenHelp }) => {
  const { mode, toggleMode, cartCount, setIsCartOpen, showToast } = useStore();
  const { user, isLoggedIn, openAuthModal, openAccountDrawer } = useAuth();
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
          
          {/* Logo / Wordmark in High Contrast Ink — Prominent Sizing on Desktop */}
          <Link to="/" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="font-['Poppins'] font-black text-xl md:text-2xl lg:text-3xl tracking-tight text-brand-ink uppercase transition-transform group-hover:scale-102">
              LEORIX
            </span>
          </Link>

          {/* Right Section: Desktop Navigation Links + Action Controls */}
          <div className="flex items-center gap-6 lg:gap-8">
            {/* Desktop Navigation Links - High Contrast Ink */}
            <nav className="hidden md:flex items-center space-x-8 text-xs font-semibold uppercase tracking-widest text-brand-ink">
              <div 
                className="relative" 
                onMouseEnter={() => setIsShopMenuOpen(true)} 
                onMouseLeave={() => setIsShopMenuOpen(false)}
              >
                <button
                  className={`group relative flex items-center gap-1.5 py-2 transition-colors duration-300 ${
                    location.pathname.startsWith('/shop') || location.pathname === '/vault' ? 'text-brand-green' : 'hover:text-brand-green'
                  }`}
                >
                  <span>SHOP</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isShopMenuOpen ? 'rotate-180 text-brand-green' : 'group-hover:translate-y-0.5'}`} />
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-brand-green rounded-full transition-all duration-300 ease-out ${
                      location.pathname.startsWith('/shop') || location.pathname === '/vault' ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>

                {/* Shop Dropdown - Fully Rounded-3xl */}
                <div className={`absolute top-full left-0 w-52 bg-white border border-stone-200 shadow-2xl rounded-3xl p-2 mt-1 backdrop-blur-2xl transition-all duration-205 origin-top ${
                  isShopMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
                }`}>
                  <Link
                    to="/shop/men"
                    className="block px-4 py-2.5 rounded-full text-xs text-brand-ink hover:bg-brand-cream hover:text-brand-green transition-colors font-semibold"
                  >
                    Men
                  </Link>
                  <Link
                    to="/shop/women"
                    className="block px-4 py-2.5 rounded-full text-xs text-brand-ink hover:bg-brand-cream hover:text-brand-green transition-colors font-semibold"
                  >
                    Women
                  </Link>
                  <div className="border-t border-stone-200 my-1" />
                  <Link
                    to="/vault"
                    className="block px-4 py-2.5 rounded-full text-xs text-brand-green hover:bg-brand-cream font-bold tracking-wider flex items-center justify-between"
                  >
                    <span>The Vault</span>
                    <span className="text-[9px] bg-brand-green/10 px-2.5 py-0.5 rounded-full border border-brand-green/20 font-bold">PIONEERS</span>
                  </Link>
                </div>
              </div>

              <Link
                to="/technology"
                className={`group relative py-2 flex items-center gap-1.5 transition-colors duration-300 ${
                  isActive('/technology') ? 'text-brand-green' : 'hover:text-brand-green'
                }`}
              >
                <Shield className="w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110" />
                <span>TECHNOLOGY</span>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-brand-green rounded-full transition-all duration-300 ease-out ${
                    isActive('/technology') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>

              <Link
                to="/about"
                className={`group relative py-2 flex items-center gap-1.5 transition-colors duration-300 ${
                  isActive('/about') ? 'text-brand-green' : 'hover:text-brand-green'
                }`}
              >
                <span>ABOUT</span>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-brand-green rounded-full transition-all duration-300 ease-out ${
                    isActive('/about') ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </nav>

            {/* Right Control Panel */}
            <div className="flex items-center gap-3.5">
              
              {/* Help & Support Button */}
              <button
                onClick={onOpenHelp}
                className="p-2.5 bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-brand-cream transition-all rounded-full flex items-center justify-center border border-brand-green/20 cursor-pointer"
                aria-label="Customer Help & Support"
                title="Help & Support Desk"
              >
                <HelpCircle className="w-4 h-4" />
              </button>

              {/* Account / Profile Icon */}
              <button
                onClick={() => (isLoggedIn ? openAccountDrawer() : openAuthModal())}
                className={`transition-all rounded-full flex items-center justify-center border select-none cursor-pointer ${
                  isLoggedIn
                    ? 'bg-brand-green text-brand-tan border-brand-tan/40 font-mono font-black text-xs w-9 h-9 shadow-sm hover:scale-105'
                    : 'p-2.5 bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-brand-cream border-brand-green/20'
                }`}
                aria-label="Account Profile"
              >
                {isLoggedIn ? (
                  user.firstName ? user.firstName.substring(0, 1).toUpperCase() : 'P'
                ) : (
                  <User className="w-4 h-4" />
                )}
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
