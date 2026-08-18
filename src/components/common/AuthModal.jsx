import React, { useState } from 'react';
import { X, Lock, Mail, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useStore } from '../../context/StoreContext';

const SIZES = ['UK 6', 'UK 7', 'UK 8', 'UK 9', 'UK 10', 'UK 11'];

const AuthModal = () => {
  const { isAuthModalOpen, closeAuthModal, login, signup } = useAuth();
  const { addToast } = useStore();
  const [mode, setMode] = useState('login'); // 'login' | 'signup' | 'forgot'

  // Login Form State
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Signup Form State
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [shoeSize, setShoeSize] = useState('UK 9');
  const [genderPreference, setGenderPreference] = useState('Men');

  if (!isAuthModalOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail) {
      addToast('Please enter your email address.', 'info');
      return;
    }
    login(loginEmail, loginPassword);
    addToast('Welcome back, Aarav!', 'success');
  };

  const handleDemoLogin = () => {
    login('aarav.sharma@leorix.com', 'demo123');
    addToast('Logged in as Aarav Sharma (Pioneer Member #0482)', 'success');
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (!signupEmail || !firstName) {
      addToast('Please complete all required fields.', 'info');
      return;
    }
    signup({
      firstName,
      lastName,
      email: signupEmail,
      shoeSize,
      genderPreference,
    });
    addToast('Account created successfully!', 'success');
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    addToast('Password reset link sent to your email.', 'success');
    setMode('login');
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-brand-ink/60 backdrop-blur-xs z-50 transition-opacity"
        onClick={closeAuthModal}
      />

      {/* Shopify-Style Popover Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
        <div className="bg-white w-full max-w-md rounded-3xl border border-stone-300 p-6 sm:p-8 shadow-2xl relative text-brand-ink overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          
          {/* Close Button */}
          <button
            onClick={closeAuthModal}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-stone-100 text-stone-600 hover:bg-brand-green hover:text-brand-cream transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Shopify Brand Header */}
          <div className="text-center space-y-1 mb-6">
            <span className="font-sans font-black text-xl tracking-tight text-brand-green uppercase block">
              LEORIX
            </span>
            <h3 className="font-mono text-sm font-black uppercase tracking-widest text-brand-ink pt-1">
              {mode === 'login' && 'CUSTOMER LOGIN'}
              {mode === 'signup' && 'CREATE PIONEER ACCOUNT'}
              {mode === 'forgot' && 'RESET YOUR PASSWORD'}
            </h3>
            <p className="font-sans text-xs font-medium text-brand-stone max-w-xs mx-auto">
              {mode === 'login' && 'Sign in to access your LEORIX Pioneer Vault & pre-orders.'}
              {mode === 'signup' && 'Join Phase A pioneer members for early access perks.'}
              {mode === 'forgot' && 'We will send you an email to reset your password.'}
            </p>
          </div>

          {/* ── 1. SHOPIFY LOGIN FORM ── */}
          {mode === 'login' && (
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="aarav.sharma@leorix.com"
                    required
                    className="w-full text-sm font-sans font-medium pl-10 pr-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all text-brand-ink placeholder:text-stone-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setMode('forgot')}
                    className="text-xs font-sans text-stone-500 hover:text-brand-green underline transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="password"
                    value={loginPassword}
                    onChange={(e) => setLoginPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full text-sm font-sans font-medium pl-10 pr-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all text-brand-ink placeholder:text-stone-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-brand-tan text-brand-green font-mono font-black text-xs uppercase tracking-widest hover:bg-brand-green hover:text-brand-cream transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>SIGN IN</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Shop Pay Fast Pass */}
              <div className="pt-1">
                <button
                  type="button"
                  onClick={handleDemoLogin}
                  className="w-full py-3 rounded-xl bg-[#5A31F4] text-white font-mono font-bold text-xs uppercase tracking-wider hover:bg-[#4a24db] transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>SIGN IN WITH SHOP PAY</span>
                </button>
              </div>

              {/* Demo Sign In Quick Button */}
              <button
                type="button"
                onClick={handleDemoLogin}
                className="w-full py-2.5 rounded-xl bg-brand-cream text-brand-green border border-brand-tan/40 text-xs font-mono font-bold hover:bg-brand-tan/20 transition-colors flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-brand-tan" />
                <span>One-Click Demo Customer Login</span>
              </button>

              {/* Toggle to Signup */}
              <div className="pt-2 text-center border-t border-stone-200">
                <span className="text-xs font-sans text-stone-600">
                  New customer?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('signup')}
                    className="font-mono font-bold text-brand-green hover:underline uppercase"
                  >
                    Create account
                  </button>
                </span>
              </div>
            </form>
          )}

          {/* ── 2. SHOPIFY REGISTER FORM ── */}
          {mode === 'signup' && (
            <form onSubmit={handleSignupSubmit} className="space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Aarav"
                    required
                    className="w-full text-sm font-sans font-medium px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all text-brand-ink placeholder:text-stone-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Sharma"
                    className="w-full text-sm font-sans font-medium px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all text-brand-ink placeholder:text-stone-400"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  placeholder="aarav.sharma@leorix.com"
                  required
                  className="w-full text-sm font-sans font-medium px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all text-brand-ink placeholder:text-stone-400"
                />
              </div>

              <div className="space-y-1">
                <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                  Password
                </label>
                <input
                  type="password"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  required
                  className="w-full text-sm font-sans font-medium px-3.5 py-2.5 rounded-xl bg-white border border-stone-300 focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all text-brand-ink placeholder:text-stone-400"
                />
              </div>

              {/* Shoe Size Selection */}
              <div className="space-y-1">
                <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                  Preferred Footwear Size
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setShoeSize(size)}
                      className={`text-xs font-mono px-3 py-1 rounded-xl border transition-all ${
                        shoeSize === size
                          ? 'bg-brand-green text-brand-cream border-brand-green font-bold shadow-xs'
                          : 'bg-stone-100 text-brand-ink font-semibold border-stone-300 hover:border-brand-green'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-brand-tan text-brand-green font-mono font-black text-xs uppercase tracking-widest hover:bg-brand-green hover:text-brand-cream transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>CREATE ACCOUNT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Toggle to Login */}
              <div className="pt-2 text-center border-t border-stone-200">
                <span className="text-xs font-sans text-stone-600">
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setMode('login')}
                    className="font-mono font-bold text-brand-green hover:underline uppercase"
                  >
                    Sign in
                  </button>
                </span>
              </div>
            </form>
          )}

          {/* ── 3. FORGOT PASSWORD FORM ── */}
          {mode === 'forgot' && (
            <form onSubmit={handleForgotSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="font-mono text-xs font-black text-brand-green uppercase tracking-wider block">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alexander.wright@leorix.com"
                  className="w-full text-sm font-sans font-medium px-4 py-3 rounded-xl bg-white border border-stone-300 focus:border-brand-green focus:ring-1 focus:ring-brand-green focus:outline-none transition-all text-brand-ink placeholder:text-stone-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-brand-tan text-brand-green font-mono font-black text-xs uppercase tracking-widest hover:bg-brand-green hover:text-brand-cream transition-all shadow-md cursor-pointer"
              >
                SUBMIT RESET LINK
              </button>

              <div className="text-center pt-2 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setMode('login')}
                  className="text-xs font-mono font-bold text-brand-green uppercase hover:underline"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </>
  );
};

export default AuthModal;
