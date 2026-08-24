import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { ArrowRight, ShieldCheck, CheckCircle2, Globe, HeartHandshake } from 'lucide-react';

const Footer = ({ onOpenHelp }) => {
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
    <footer className="bg-brand-ink text-brand-cream/80 border-t border-brand-tan/20 pt-14 pb-8 font-sans select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Brand Statement & Newsletter Waitlist Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-brand-tan/20 items-center">
          
          {/* Brand Wordmark & Philosophy */}
          <div className="lg:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="font-sans font-black text-3xl sm:text-4xl lg:text-5xl text-brand-tan uppercase tracking-tight">
                LEORIX
              </span>
              <span className="font-mono text-[9px] sm:text-[10px] bg-brand-tan/15 text-brand-tan px-2.5 py-0.5 rounded-full border border-brand-tan/30 uppercase tracking-widest font-bold">
                Design & Engineering
              </span>
            </div>

            <p className="font-serif-display italic text-base sm:text-lg text-brand-cream/90 max-w-md leading-snug">
              "We say what we do, and we do what we say."
            </p>

            <p className="text-xs text-brand-stone max-w-lg leading-relaxed">
              Performance-oriented lifestyle footwear engineered by KUNJ Business Solutions LLP, Jaipur. Built on rearfoot stability, controlled cushioning, and independent laboratory validation.
            </p>
          </div>

          {/* Newsletter Waitlist Bento Card */}
          <div className="lg:col-span-6 bg-brand-green/30 p-6 sm:p-7 rounded-2xl sm:rounded-3xl border border-brand-tan/30 space-y-3.5 shadow-xl">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-tan" />
              <h3 className="font-sans font-bold text-xs uppercase tracking-wider text-brand-tan">
                Priority Access & Lab Release Updates
              </h3>
            </div>
            <p className="text-xs text-brand-cream/90 leading-relaxed">
              Register to receive early notification prior to product drops, founder pricing, and complete laboratory test reports.
            </p>

            {submitted || hasJoinedWaitlist ? (
              <div className="flex items-center gap-2 text-xs font-semibold text-brand-tan bg-brand-tan/10 p-3 rounded-full border border-brand-tan/30">
                <CheckCircle2 className="w-4 h-4 text-brand-tan" />
                <span>Priority spot confirmed. You will be notified before drop launch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  required
                  className="flex-1 bg-brand-ink/90 border border-brand-tan/40 px-4 py-2.5 text-xs text-brand-cream placeholder:text-brand-stone/70 focus:outline-none focus:border-brand-tan transition-colors rounded-full"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-wider hover:bg-brand-cream active:scale-95 transition-all flex items-center justify-center gap-1.5 rounded-full cursor-pointer shadow-md"
                >
                  <span>Join List</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Navigation Grid — 4 Columns: Shop, Technology, About, Support */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 text-xs">
          
          {/* Column 1: Shop */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold uppercase text-[11px] tracking-widest text-brand-tan">
              Shop Range
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link to="/shop/men" className="hover:text-brand-tan transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/shop/women" className="hover:text-brand-tan transition-colors">
                  Women's Collection
                </Link>
              </li>
              <li>
                <Link to="/vault" className="text-brand-tan font-bold hover:underline inline-flex items-center gap-1.5">
                  <span>The Vault</span>
                  <span className="text-[8px] font-mono bg-brand-tan/20 px-1.5 py-0.5 rounded border border-brand-tan/30 uppercase">Members</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Technology */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold uppercase text-[11px] tracking-widest text-brand-tan">
              Technology
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link to="/technology#approach" className="hover:text-brand-tan transition-colors">
                  Monoplate Architecture
                </Link>
              </li>
              <li>
                <Link to="/technology#validation" className="hover:text-brand-tan transition-colors">
                  Biomechanical Lab Validation
                </Link>
              </li>
              <li>
                <Link to="/technology#materials" className="hover:text-brand-tan transition-colors">
                  Material & Spec Sheet
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold uppercase text-[11px] tracking-widest text-brand-tan">
              Brand & Company
            </h4>
            <ul className="space-y-2 font-medium">
              <li>
                <Link to="/about" className="hover:text-brand-tan transition-colors">
                  Our Story & Jaipur HQ
                </Link>
              </li>
              <li>
                <Link to="/about#contact" className="hover:text-brand-tan transition-colors">
                  Contact & Press Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Help & Customer Support */}
          <div className="space-y-3">
            <h4 className="font-sans font-bold uppercase text-[11px] tracking-widest text-brand-tan">
              Help & Support
            </h4>
            <ul className="space-y-2 font-medium">
              {onOpenHelp && (
                <li>
                  <button
                    onClick={onOpenHelp}
                    className="hover:text-brand-tan text-left transition-colors font-bold text-brand-cream cursor-pointer flex items-center gap-1.5"
                  >
                    <HeartHandshake className="w-3.5 h-3.5 text-brand-tan" />
                    <span>Customer Care Desk</span>
                  </button>
                </li>
              )}
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
        <div className="pt-6 border-t border-brand-tan/15 flex flex-col sm:flex-row items-center justify-between text-[11px] text-brand-stone gap-3">
          <p className="uppercase tracking-wider text-center sm:text-left">
            © {new Date().getFullYear()} KUNJ Business Solutions LLP. LEORIX is a registered brand of KUNJ Business Solutions LLP, Jaipur, India.
          </p>

          <div className="flex items-center gap-4 uppercase tracking-widest text-[10px] font-mono">
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
