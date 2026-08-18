import React from 'react';
import { X, User, ShoppingBag, ShieldCheck, LogOut, Award, CheckCircle2, Ticket } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useStore } from '../../context/StoreContext';

const PioneerAccountDrawer = () => {
  const { user, isAccountDrawerOpen, closeAccountDrawer, logout } = useAuth();
  const { addToast } = useStore();

  if (!isAccountDrawerOpen || !user) return null;

  const handleLogout = () => {
    logout();
    addToast('Signed out of Pioneer Vault.', 'info');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-ink/50 backdrop-blur-xs z-50 transition-opacity"
        onClick={closeAccountDrawer}
      />

      {/* Slide-over Drawer */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-brand-cream text-brand-ink border-l border-brand-tan/30 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300">
        
        {/* Top Header */}
        <div className="p-5 sm:p-6 border-b border-brand-tan-soft flex items-center justify-between bg-brand-cream">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-green text-brand-tan font-mono font-black text-sm flex items-center justify-center border border-brand-tan/40 shadow-sm">
              {user.firstName ? user.firstName.substring(0, 2).toUpperCase() : 'LR'}
            </div>
            <div>
              <h3 className="font-sans font-black text-base text-brand-ink uppercase leading-tight">
                {user.firstName} {user.lastName}
              </h3>
              <span className="font-mono text-[10px] text-brand-stone uppercase tracking-widest block">
                {user.tier}
              </span>
            </div>
          </div>

          <button
            onClick={closeAccountDrawer}
            className="p-2 rounded-full text-brand-ink hover:bg-brand-tan/20 transition-colors"
            aria-label="Close Account Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* Pioneer Status Badge Card */}
          <div className="bg-brand-green text-brand-cream p-5 rounded-3xl border border-brand-tan/40 shadow-xl space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between z-10 relative">
              <span className="font-mono text-[9px] text-brand-tan uppercase tracking-widest bg-brand-tan/10 px-2.5 py-1 rounded-full border border-brand-tan/30">
                VERIFIED MEMBER
              </span>
              <ShieldCheck className="w-5 h-5 text-brand-tan" />
            </div>

            <div className="space-y-1 z-10 relative">
              <span className="font-mono text-[10px] text-brand-cream/70 uppercase tracking-widest">
                Pioneer Member ID
              </span>
              <h4 className="font-mono text-2xl font-black text-brand-tan tracking-wider">
                #{user.pioneerNumber || '0482'}
              </h4>
            </div>

            <div className="pt-2 border-t border-brand-tan/20 flex items-center justify-between text-xs text-brand-cream/80 font-sans z-10 relative">
              <span>Status: FDDI Report Eligible</span>
              <span className="font-mono font-bold text-brand-tan">Phase A Active</span>
            </div>
          </div>

          {/* Saved Fit & Size Specs */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-black text-brand-green uppercase tracking-widest">
              SAVED FIT & BIOMECHANIC PROFILE
            </h4>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-xs">
                <span className="font-mono text-[9px] text-brand-stone uppercase tracking-wider block">
                  Shoe Size (UK)
                </span>
                <span className="font-sans font-black text-lg text-brand-green">
                  {user.shoeSize || 'UK 9'}
                </span>
              </div>

              <div className="bg-white p-3.5 rounded-2xl border border-stone-200 shadow-xs">
                <span className="font-mono text-[9px] text-brand-stone uppercase tracking-wider block">
                  Collection Preference
                </span>
                <span className="font-sans font-black text-lg text-brand-green">
                  {user.genderPreference || 'Men'}
                </span>
              </div>
            </div>
          </div>

          {/* Priority Waitlist Pre-Orders */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-black text-brand-green uppercase tracking-widest">
              WAITLIST & RESERVATIONS
            </h4>

            {user.orders && user.orders.length > 0 ? (
              user.orders.map((ord) => (
                <div key={ord.id} className="bg-white p-4 rounded-2xl border border-stone-200 shadow-xs space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-mono font-bold text-brand-green">{ord.id}</span>
                    <span className="font-mono text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-200 font-bold">
                      {ord.status}
                    </span>
                  </div>
                  <p className="font-serif-display text-sm font-medium text-brand-ink">
                    {ord.item}
                  </p>
                  <div className="flex items-center justify-between text-[11px] font-mono text-brand-stone pt-1 border-t border-stone-100">
                    <span>{ord.date}</span>
                    <span className="font-bold text-brand-green">{ord.total}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white p-4 rounded-2xl border border-stone-200 text-center space-y-1">
                <p className="font-sans text-xs text-brand-stone">No active pre-orders yet.</p>
                <span className="font-mono text-[10px] text-brand-green uppercase font-bold">
                  Browse Collection →
                </span>
              </div>
            )}
          </div>

          {/* Early Access Invite Pass */}
          <div className="bg-white p-4 rounded-2xl border border-brand-tan/40 shadow-xs flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-brand-cream text-brand-green">
              <Ticket className="w-5 h-5 text-brand-tan" />
            </div>
            <div>
              <span className="font-mono text-[10px] font-bold text-brand-green uppercase tracking-widest block">
                EARLY DROP INVITE PASS
              </span>
              <span className="font-mono text-xs text-brand-stone">
                Code: <strong className="text-brand-ink font-bold">PIONEER-DROP-01</strong>
              </span>
            </div>
          </div>

        </div>

        {/* Footer Logout Button */}
        <div className="p-5 sm:p-6 border-t border-brand-tan-soft bg-white">
          <button
            onClick={handleLogout}
            className="w-full py-3 rounded-full bg-stone-100 text-stone-700 font-mono font-bold text-xs uppercase tracking-widest hover:bg-red-50 hover:text-red-600 transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out of Pioneer Vault</span>
          </button>
        </div>

      </div>
    </>
  );
};

export default PioneerAccountDrawer;
