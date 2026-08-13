import React, { useState } from 'react';
import { useStore } from '../../context/StoreContext';
import { ShieldCheck, ArrowRight, CheckCircle2, Sparkles, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConversionBlock = () => {
  const { mode, joinWaitlist, hasJoinedWaitlist, waitlistEmails } = useStore();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (joinWaitlist(email)) {
      setSubmitted(true);
      setEmail('');
    }
  };

  const pioneerCount = 1420 + waitlistEmails.length;

  return (
    <section id="waitlist" className="py-16 sm:py-24 bg-brand-cream text-brand-ink border-b border-brand-tan-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow */}
        <div className="eyebrow flex items-baseline gap-4 border-t border-brand-tan-line pt-3 mb-8">
          <span className="eyebrow-idx font-mono text-brand-green">08</span>
          <span className="eyebrow-lbl text-brand-stone">PRIORITY ACCESS & CONVERSION</span>
        </div>

        {/* Phase A Waitlist Block */}
        {mode === 'phaseA' ? (
          <div className="bg-brand-green text-brand-cream p-6 sm:p-12 lg:p-16 rounded-3xl border border-brand-tan/40 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 relative z-10 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-tan/20 border border-brand-tan/40 text-brand-tan rounded-full text-xs font-mono font-bold uppercase tracking-widest">
                <Sparkles className="w-4 h-4 text-brand-tan" />
                <span>Priority Access · Drop 01</span>
              </div>

              <h2 className="font-serif-display text-3xl xs:text-4xl sm:text-6xl font-normal leading-tight text-brand-tan">
                Be first —{' '}
                <em className="italic font-medium text-white block sm:inline">and see the proof first.</em>
              </h2>

              <p className="font-sans text-xs xs:text-sm sm:text-lg text-white/90 leading-relaxed max-w-xl">
                Join the list for early access to the first drop, founder pricing, and the validation data as it's published.
              </p>

              {/* Counters */}
              <div className="grid grid-cols-3 gap-2 sm:gap-6 pt-3 font-mono text-xs text-brand-tan border-t border-brand-tan/20">
                <div className="text-left">
                  <span className="block text-xl sm:text-2xl font-bold text-white font-serif-display">{pioneerCount}</span>
                  <span className="text-[9px] sm:text-[10px] text-brand-cream/70 uppercase tracking-widest">Registered</span>
                </div>
                <div className="text-left border-x border-brand-tan/30 px-2 sm:px-4">
                  <span className="block text-xl sm:text-2xl font-bold text-white font-serif-display">India</span>
                  <span className="text-[9px] sm:text-[10px] text-brand-cream/70 uppercase tracking-widest">Coverage</span>
                </div>
                <div className="text-left">
                  <span className="block text-xl sm:text-2xl font-bold text-white font-serif-display">Drop 01</span>
                  <span className="text-[9px] sm:text-[10px] text-brand-cream/70 uppercase tracking-widest">Limited</span>
                </div>
              </div>
            </div>

            {/* Right Column: Signup Form */}
            <div className="lg:col-span-5 bg-brand-ink p-6 sm:p-8 rounded-3xl border border-brand-tan/40 space-y-4 relative z-10 shadow-2xl">
              <h3 className="font-serif-display text-xl text-brand-tan font-normal">
                Register for Priority Drop
              </h3>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                No spam. Only confirmed launch dates, size availability, and FDDI report releases.
              </p>

              {submitted || hasJoinedWaitlist ? (
                <div className="p-4 bg-brand-tan/20 border border-brand-tan/50 rounded-2xl text-brand-tan space-y-2">
                  <div className="flex items-center gap-2 font-bold text-xs">
                    <CheckCircle2 className="w-5 h-5 text-brand-tan" />
                    <span>Priority Spot Confirmed!</span>
                  </div>
                  <p className="text-xs text-white/90">
                    We've logged your address. You'll receive notification 48 hours before public launch.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-brand-cream/70 uppercase tracking-widest mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@domain.com"
                      required
                      className="w-full bg-brand-green/50 border border-brand-tan/40 px-4 py-3 text-xs text-white placeholder:text-brand-stone/60 focus:outline-none focus:border-brand-tan rounded-full"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 rounded-full shadow-xl"
                  >
                    <span>Join the list →</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        ) : (
          /* Phase B Live Store Conversion Block */
          <div className="bg-brand-green text-white p-8 sm:p-16 rounded-3xl border border-brand-tan/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="space-y-4 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-tan/20 text-brand-tan rounded-full text-xs font-mono font-bold uppercase tracking-wider">
                <Lock className="w-3.5 h-3.5" />
                <span>The Vault Membership</span>
              </div>
              <h2 className="font-serif-display text-3xl sm:text-5xl font-normal text-brand-tan">
                Early access for future drops.
              </h2>
              <p className="text-xs sm:text-sm text-white/90">
                The Vault gives members priority reservations on limited colorway releases and access to raw FDDI laboratory data reports.
              </p>
            </div>

            <Link
              to="/vault"
              className="w-full md:w-auto px-8 py-4 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors rounded-full shadow-xl flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>Access The Vault →</span>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default ConversionBlock;
