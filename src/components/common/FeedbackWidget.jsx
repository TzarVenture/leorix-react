import React, { useState } from 'react';
import { Star, X, CheckCircle2, MessageSquare, Send } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

const CATEGORIES = [
  'Product Specs & FDDI',
  'Website Speed & Experience',
  'Sizing & Fit',
  'Pricing & Waitlist',
  'General Feedback'
];

const FeedbackWidget = () => {
  const { addToast } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [category, setCategory] = useState('');
  const [comment, setComment] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      addToast('Please select a star rating before submitting.', 'info');
      return;
    }

    // Process submission
    setIsSubmitted(true);
    addToast('Thank you! Your feedback has been received.', 'success');

    // Reset after 3.5 seconds and close popover
    setTimeout(() => {
      setIsSubmitted(false);
      setIsOpen(false);
      setRating(0);
      setCategory('');
      setComment('');
      setEmail('');
    }, 3500);
  };

  return (
    <>
      {/* ── Ultra-Slim Screen-Edge Vertical Feedback Tab ── */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open Feedback Form"
        className={`fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center justify-center gap-1.5 py-3 px-1.5 sm:px-2 rounded-l-xl bg-brand-green text-brand-cream border-l border-y border-brand-tan/40 shadow-xl hover:bg-brand-tan hover:text-brand-green hover:-translate-x-1 transition-all duration-300 group cursor-pointer select-none ${
          isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <MessageSquare className="w-3.5 h-3.5 text-brand-tan group-hover:text-brand-green transition-colors" />
        <span
          className="font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] leading-none"
          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        >
          Feedback
        </span>
      </button>

      {/* ── Overlay Backdrop (Mobile & Desktop) ── */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-brand-ink/40 backdrop-blur-xs z-50 transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ── Sleek Edge Flyout Form Modal ── */}
      {isOpen && (
        <div className="fixed right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 w-[92vw] max-w-[340px] sm:max-w-[360px] bg-white rounded-2xl sm:rounded-3xl border border-stone-300 p-4 sm:p-5 shadow-2xl text-brand-ink overflow-hidden animate-in fade-in slide-in-from-right-4 duration-300">
          
          {/* Close X Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3.5 right-3.5 p-1 rounded-full bg-stone-100 text-stone-600 hover:bg-brand-green hover:text-brand-cream transition-colors"
            aria-label="Close Feedback"
          >
            <X className="w-4 h-4" />
          </button>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Header */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-sans font-black text-base tracking-tight text-brand-green uppercase">
                    LEORIX
                  </span>
                  <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-widest font-bold text-brand-green bg-brand-cream px-2 py-0.5 rounded-full border border-brand-tan/30">
                    Pioneer Voice
                  </span>
                </div>
                <h4 className="font-serif-display text-sm sm:text-base font-normal text-brand-ink mt-0.5">
                  How is your LEORIX experience?
                </h4>
              </div>

              {/* 5-Star Rating Selector */}
              <div className="bg-brand-cream/70 p-2.5 rounded-xl border border-brand-tan/30 text-center space-y-1">
                <div className="flex items-center justify-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="p-1 transform hover:scale-125 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= (hoverRating || rating)
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-stone-300 fill-stone-100'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <p className="font-mono text-[10px] font-bold text-brand-green uppercase tracking-wider">
                  {rating === 1 && '1/5 — Needs Improvement'}
                  {rating === 2 && '2/5 — Fair'}
                  {rating === 3 && '3/5 — Good'}
                  {rating === 4 && '4/5 — Very Good'}
                  {rating === 5 && '5/5 — Excellent!'}
                  {rating === 0 && 'Tap a star to rate'}
                </p>
              </div>

              {/* Category Pills */}
              <div className="space-y-1">
                <label className="font-mono text-[10px] font-black text-brand-green uppercase tracking-wider block">
                  What is this regarding? (Optional)
                </label>
                <div className="flex flex-wrap gap-1">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(category === cat ? '' : cat)}
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full border transition-all ${
                        category === cat
                          ? 'bg-brand-green text-brand-cream border-brand-green font-bold shadow-xs'
                          : 'bg-stone-100 text-brand-ink font-semibold border-stone-300 hover:border-brand-green hover:bg-stone-200/60'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Comment Textarea */}
              <div className="space-y-1">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Tell us what you loved or what we can improve..."
                  rows={3}
                  className="w-full text-xs font-sans font-medium p-2.5 rounded-xl bg-stone-50 border border-stone-300 focus:border-brand-green focus:bg-white focus:ring-1 focus:ring-brand-green/20 focus:outline-none transition-all resize-none text-brand-ink placeholder:text-stone-500 placeholder:font-normal"
                />
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email (optional, for updates)"
                  className="w-full text-xs font-sans font-medium px-3 py-2 rounded-lg bg-stone-50 border border-stone-300 focus:border-brand-green focus:bg-white focus:ring-1 focus:ring-brand-green/20 focus:outline-none transition-all text-brand-ink placeholder:text-stone-500 placeholder:font-normal"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-2.5 rounded-full bg-brand-tan text-brand-green font-mono font-black text-xs uppercase tracking-widest hover:bg-brand-green hover:text-brand-cream transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Submit Feedback</span>
                <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </form>
          ) : (
            /* ── Success Screen ── */
            <div className="py-6 text-center space-y-2.5">
              <div className="w-12 h-12 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif-display text-lg font-normal text-brand-green">
                Thank You!
              </h4>
              <p className="font-sans text-xs font-medium text-brand-ink/80 max-w-xs mx-auto">
                Your feedback directly shapes our biomechanics lab and footwear releases.
              </p>
              <span className="font-mono text-[9px] font-bold text-brand-stone uppercase tracking-widest block pt-1">
                Closing in a moment...
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FeedbackWidget;
