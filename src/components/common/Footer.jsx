import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

const Footer = () => {
  const { joinWaitlist, hasJoinedWaitlist } = useStore();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (joinWaitlist(email)) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand-ink text-brand-cream/80 border-t border-brand-tan/20 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand Statement & Newsletter Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-tan/20">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-sans font-black text-3xl sm:text-4xl text-brand-tan uppercase tracking-tight">
              LEORIX
            </h2>
            <p className="font-serif-display italic text-lg text-brand-cream/90 max-w-md">
              "We say what we do, and we do what we say."
            </p>
            <p className="text-xs text-brand-stone max-w-lg leading-relaxed">
              Performance-oriented lifestyle footwear engineered by KUNJ Business Solutions LLP, Jaipur. Built on stability, controlled cushioning, and independent validation by the Footwear Design & Development Institute (FDDI).
            </p>
          </div>

          <div className="lg:col-span-6 bg-brand-green/40 p-6 sm:p-8 rounded-3xl border border-brand-tan/30 space-y-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-tan" />
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-tan">
                Join The Priority List
              </h3>
            </div>
            <p className="text-xs text-brand-cream/90">
              Get the first drop, founder pricing, and the FDDI validation lab data before it's published.
            </p>

            {submitted || hasJoinedWaitlist ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-tan bg-brand-tan/10 p-3 rounded-full border border-brand-tan/30">
                <CheckCircle2 className="w-4 h-4" />
                <span>You are registered for early access & release updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 bg-brand-ink/90 border border-brand-tan/40 px-4 py-2.5 text-xs text-brand-cream placeholder:text-brand-stone focus:outline-none focus:border-brand-tan transition-colors rounded-full"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-wider hover:bg-brand-cream transition-colors flex items-center justify-center gap-1.5 rounded-full"
                >
                  <span>Join</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Navigation Grid — 4 Columns: Shop, Technology, About, Help */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs">
          
          {/* Column 1: Shop */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold uppercase text-[11px] tracking-widest text-brand-tan">
              Shop
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop/men" className="hover:text-brand-tan transition-colors">
                  Men Collection
                </Link>
              </li>
              <li>
                <Link to="/shop/women" className="hover:text-brand-tan transition-colors">
                  Women Collection
                </Link>
              </li>
              <li>
                <Link to="/vault" className="text-brand-tan font-semibold hover:underline flex items-center gap-1">
                  <span>The Vault</span>
                  <span className="text-[9px] bg-brand-tan/20 px-1 rounded">Members</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Technology */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold uppercase text-[11px] tracking-widest text-brand-tan">
              Technology
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/technology#approach" className="hover:text-brand-tan transition-colors">
                  The Approach (3 Pillars)
                </Link>
              </li>
              <li>
                <Link to="/technology#validation" className="hover:text-brand-tan transition-colors">
                  FDDI Validation Reports
                </Link>
              </li>
              <li>
                <Link to="/technology#materials" className="hover:text-brand-tan transition-colors">
                  Component Spec Table
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold uppercase text-[11px] tracking-widest text-brand-tan">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-brand-tan transition-colors">
                  Our Story & Jaipur LLP
                </Link>
              </li>
              <li>
                <Link to="/about#contact" className="hover:text-brand-tan transition-colors">
                  Contact & Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Help & Utility */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold uppercase text-[11px] tracking-widest text-brand-tan">
              Help
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/size-fit" className="hover:text-brand-tan transition-colors">
                  Size & Fit Guide
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-brand-tan transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link to="/shipping-returns" className="hover:text-brand-tan transition-colors">
                  Shipping & Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal & Copyright Bar */}
        <div className="pt-8 border-t border-brand-tan/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-stone gap-4">
          <p className="uppercase tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()} KUNJ Business Solutions LLP. LEORIX is a registered brand of KUNJ Business Solutions LLP, Jaipur.
          </p>
          <div className="flex items-center gap-4 uppercase tracking-widest">
            <Link to="/privacy-policy" className="hover:text-brand-cream transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link to="/terms-of-service" className="hover:text-brand-cream transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
