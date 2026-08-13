import React from 'react';
import { useStore } from '../../context/StoreContext';
import { X, Trash2, Plus, Minus, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartTotal,
    mode,
    showToast
  } = useStore();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brand-ink/75 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-cream text-brand-ink shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 bg-brand-green text-brand-cream flex items-center justify-between border-b border-brand-tan/30">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-brand-tan" />
              <h2 className="font-sans font-bold text-sm uppercase tracking-wider">
                Your Shopping Bag ({cart.reduce((a, c) => a + c.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1 text-brand-cream/80 hover:text-brand-tan transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Phase A Notice Banner inside Cart */}
          {mode === 'phaseA' && (
            <div className="bg-brand-tan/20 border-b border-brand-tan/40 p-4 text-xs text-brand-green font-medium flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-bold">Phase A: Pre-Launch Mode Active</p>
                <p className="text-[11px] text-brand-ink/80 mt-0.5">
                  Drop is coming soon. The cart below is a preview. Join the waitlist for priority drop access.
                </p>
              </div>
            </div>
          )}

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <ShoppingBag className="w-12 h-12 text-brand-stone mx-auto stroke-1" />
                <p className="font-serif-display italic text-lg text-brand-ink">
                  Your bag is empty
                </p>
                <p className="text-xs text-brand-stone max-w-xs mx-auto">
                  Explore our validated footwear range and select your preferred variant.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="inline-block mt-4 px-6 py-2.5 bg-brand-green text-brand-cream font-bold text-xs uppercase tracking-wider hover:bg-brand-tan hover:text-brand-green transition-colors rounded-full"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 pb-6 border-b border-brand-stone/20"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-contain bg-brand-green/10 p-2 rounded-2xl border border-brand-tan/30"
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="font-sans font-bold text-xs uppercase tracking-wide text-brand-green">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-brand-stone font-medium">
                      Size: <span className="text-brand-ink font-bold">{item.size}</span>
                    </p>
                    <p className="font-sans font-bold text-xs text-brand-ink">
                      {item.price}
                    </p>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-brand-stone/40 rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, -1)}
                          className="px-2 py-0.5 text-brand-stone hover:text-brand-ink"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, 1)}
                          className="px-2 py-0.5 text-brand-stone hover:text-brand-ink"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id, item.size)}
                        className="text-brand-stone hover:text-red-700 transition-colors p-1"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 bg-brand-green text-brand-cream border-t border-brand-tan/30 space-y-4">
              <div className="flex justify-between items-center text-xs uppercase tracking-wider font-bold">
                <span>Subtotal</span>
                <span className="text-brand-tan text-sm">₹{cartTotal.toLocaleString('en-IN')}</span>
              </div>
              <p className="text-[10px] text-brand-cream/70">
                Taxes and shipping calculated at checkout. Free shipping across India.
              </p>

              {mode === 'phaseA' ? (
                <Link
                  to="/vault"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-3.5 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-widest hover:bg-brand-cream transition-colors flex items-center justify-center gap-2 rounded-full"
                >
                  <span>Join Waitlist for Drop 01</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <button
                  onClick={() => showToast('Redirecting to secure Indian payment gateway...')}
                  className="w-full py-3.5 bg-brand-tan text-brand-green font-bold text-xs uppercase tracking-widest hover:bg-brand-cream transition-colors flex items-center justify-center gap-2 rounded-full"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
