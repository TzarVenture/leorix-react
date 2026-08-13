import React, { useState, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { Lock, Clock, Tag, Database, ArrowRight, CheckCircle2 } from 'lucide-react';

const VaultPage = () => {
  const { joinWaitlist, hasJoinedWaitlist } = useStore();
  const [email, setEmail] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    joinWaitlist(email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink py-16 sm:py-20 relative overflow-hidden flex flex-col justify-center">
      {/* Subtle background CAD-style lock overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full border-2 border-brand-green flex items-center justify-center">
          <div className="w-80 h-80 rounded-full border border-brand-green" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16 relative z-10">
        
        {/* Header - Editorial & Minimalist */}
        <div className="space-y-4 max-w-2xl border-b border-brand-tan-line pb-8">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-green uppercase tracking-widest">
            <Lock className="w-4 h-4 text-brand-green" />
            <span>Pioneer Access</span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl font-normal text-brand-green leading-tight">
            The Vault.
          </h1>

          <p className="font-serif-display italic text-lg text-brand-ink leading-relaxed">
            Early access to drops, founder pricing, and the validation data before it's public. The list becomes the inside track.
          </p>
        </div>

        {/* Member Access Perks - White Bento Cards with Hover transitions (No excess badges/green) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: 48h Window */}
          <div className="bg-white border border-stone-200 hover:border-brand-green hover:shadow-xl rounded-3xl p-8 space-y-6 transition-all duration-500 ease-out hover:-translate-y-2 group">
            <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center border border-stone-200 group-hover:bg-brand-green/10 group-hover:border-brand-green/20 transition-all duration-300">
              <Clock className="w-5 h-5 text-brand-green" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif-display text-2xl text-brand-ink group-hover:text-brand-green transition-colors font-normal">
                Priority Window
              </h3>
              <p className="text-xs text-brand-stone leading-relaxed font-sans font-normal">
                Reserve your size 48 hours before public launch drops. Guaranteed initial inventory allocation before public release.
              </p>
            </div>
          </div>

          {/* Card 2: Founder Pricing */}
          <div className="bg-white border border-stone-200 hover:border-brand-green hover:shadow-xl rounded-3xl p-8 space-y-6 transition-all duration-500 ease-out hover:-translate-y-2 group">
            <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center border border-stone-200 group-hover:bg-brand-green/10 group-hover:border-brand-green/20 transition-all duration-300">
              <Tag className="w-5 h-5 text-brand-green" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif-display text-2xl text-brand-ink group-hover:text-brand-green transition-colors font-normal">
                Founder Tier
              </h3>
              <p className="text-xs text-brand-stone leading-relaxed font-sans font-normal">
                Exclusive founder tier pricing reserved for initial registered pioneers of Drop 01. We value early adopters.
              </p>
            </div>
          </div>

          {/* Card 3: Lab Reports */}
          <div className="bg-white border border-stone-200 hover:border-brand-green hover:shadow-xl rounded-3xl p-8 space-y-6 transition-all duration-500 ease-out hover:-translate-y-2 group">
            <div className="w-12 h-12 rounded-2xl bg-brand-cream flex items-center justify-center border border-stone-200 group-hover:bg-brand-green/10 group-hover:border-brand-green/20 transition-all duration-300">
              <Database className="w-5 h-5 text-brand-green" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif-display text-2xl text-brand-ink group-hover:text-brand-green transition-colors font-normal">
                Raw Data
              </h3>
              <p className="text-xs text-brand-stone leading-relaxed font-sans font-normal">
                Direct access to complete, unredacted FDDI biomechanical stress certificates and failure-mode analysis as they are published.
              </p>
            </div>
          </div>

        </div>

        {/* Signup / Waitlist Form - Embedded White Card */}
        <div className="max-w-2xl bg-white border border-stone-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="space-y-2">
            <h2 className="font-serif-display text-2xl sm:text-3xl text-brand-green font-normal">
              Request access.
            </h2>
            <p className="text-xs text-brand-stone leading-relaxed font-sans">
              By entering the vault, you will receive notifications of certified test outcomes and availability schedules.
            </p>
          </div>

          {hasJoinedWaitlist ? (
            <div className="p-4 bg-brand-green/5 border border-brand-green/20 rounded-3xl text-brand-green flex items-start gap-3 animate-fade-in">
              <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold text-xs">Pioneer Registry Complete</p>
                <p className="text-[11px] text-brand-ink/80">
                  Your spot is confirmed. Test data and drop allocations will be sent to your email.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                required
                className="flex-1 bg-brand-cream border border-stone-300 px-5 py-3.5 text-xs text-brand-ink placeholder:text-brand-stone focus:outline-none focus:border-brand-green rounded-full transition-colors"
              />

              <button
                type="submit"
                className="px-8 py-3.5 bg-brand-green text-brand-cream font-bold text-xs uppercase tracking-widest hover:bg-brand-ink transition-colors rounded-full flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Get Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default VaultPage;
