import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Sparkles, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const AnnouncementBar = () => {
  const { mode, toggleMode } = useStore();

  return (
    <div className="bg-brand-green text-brand-cream border-b border-brand-tan/30 text-xs py-2 px-3 sm:px-4 relative z-40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        
        <div className="flex items-center gap-2 mx-auto sm:mx-0 text-center sm:text-left">
          <span className="w-2 h-2 rounded-full bg-brand-tan animate-pulse flex-shrink-0" />
          {mode === 'phaseA' ? (
            <p className="font-sans font-medium text-[10px] xs:text-[11px] sm:text-xs">
              <span className="font-bold text-brand-cream">Pre-launch:</span>{' '}
              <span className="text-brand-tan">First drop coming soon — join the list for early access.</span>
            </p>
          ) : (
            <p className="font-sans font-medium text-[10px] xs:text-[11px] sm:text-xs">
              <span className="font-bold text-brand-cream">Live Store:</span>{' '}
              <span className="text-brand-tan">Free shipping across India on all orders.</span>
            </p>
          )}
        </div>

        <div className="hidden md:flex items-center gap-4 text-[11px] font-mono">
          <Link to="/technology" className="text-brand-cream/80 hover:text-brand-tan transition-colors flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-tan" />
            <span>FDDI Scope</span>
          </Link>

          <button
            onClick={toggleMode}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-brand-tan/50 bg-brand-tan/10 text-brand-tan hover:bg-brand-tan hover:text-brand-green transition-all font-bold uppercase text-[10px] tracking-wider"
          >
            <Sparkles className="w-3 h-3" />
            <span>Mode: {mode === 'phaseA' ? 'Phase A (Waitlist)' : 'Phase B (Live)'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default AnnouncementBar;
