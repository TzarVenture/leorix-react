import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HelpCircle, Truck, ShieldCheck, FileText } from 'lucide-react';

export const FAQPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const faqs = [
    {
      q: 'What does "validated" actually mean?',
      a: 'It means our prototypes undergo independent laboratory mechanical testing and human biomechanical plantar load evaluation at the Footwear Design & Development Institute (FDDI). Claims are published from verified test reports.'
    },
    {
      q: 'When is the first drop?',
      a: 'Drop 01 is scheduled for immediate pre-launch release. Registered pioneers on our waitlist receive priority notification 48 hours prior to public opening.'
    },
    {
      q: 'How does sizing run?',
      a: 'LEORIX runs true to standard UK sizing on a single validated last geometry. Consult our interactive Size & Fit guide for exact centimeter foot measurement.'
    },
    {
      q: 'What is the shoe made of?',
      a: 'Article X features a 3D breathable jacquard mesh upper, micro-cellular PU cushioning core (55 kg/m³ density), glass-fiber reinforced midfoot shank, and high-density 62 Shore A rubber outsole.'
    },
    {
      q: 'What are your shipping and return policies?',
      a: 'We offer complimentary insured shipping across India. Standard 7-day hassle-free size exchange applies on un-worn pairs.'
    }
  ];

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink py-8 sm:py-12 select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        <div className="border-b border-brand-tan-line pb-6 sm:pb-8 space-y-3 sm:space-y-4">
          <div className="eyebrow flex items-baseline gap-3 sm:gap-4">
            <span className="eyebrow-idx font-mono text-xs sm:text-sm">01</span>
            <span className="eyebrow-lbl text-xs sm:text-sm uppercase tracking-widest">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-normal text-brand-green leading-tight">
            FAQ — Questions & Answers
          </h1>
        </div>

        <div className="space-y-4 sm:space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-brand-stone/30 space-y-2 shadow-xs">
              <h3 className="font-serif-display text-lg sm:text-xl text-brand-green font-normal">
                {f.q}
              </h3>
              <p className="text-xs text-brand-ink/80 leading-relaxed font-sans">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ShippingReturnsPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink py-8 sm:py-12 select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        <div className="border-b border-brand-tan-line pb-6 sm:pb-8 space-y-3 sm:space-y-4">
          <div className="eyebrow flex items-baseline gap-3 sm:gap-4">
            <span className="eyebrow-idx font-mono text-xs sm:text-sm">02</span>
            <span className="eyebrow-lbl text-xs sm:text-sm uppercase tracking-widest">UTILITY POLICY</span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-normal text-brand-green leading-tight">
            Shipping & Returns
          </h1>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-brand-stone/30 space-y-5 text-xs leading-relaxed shadow-xs">
          <div className="space-y-1.5">
            <h3 className="font-serif-display text-base sm:text-lg text-brand-green">Domestic Shipping (India)</h3>
            <p className="text-brand-stone leading-relaxed">
              Complimentary express shipping is included on all orders across India. Orders are dispatched within 24-48 business hours from our Jaipur logistics node.
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-serif-display text-base sm:text-lg text-brand-green">7-Day Size Exchange Policy</h3>
            <p className="text-brand-stone leading-relaxed">
              If the fit is not ideal, you may initiate a complimentary size exchange within 7 days of delivery. Items must remain un-worn in original packaging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LegalPage = () => {
  const location = useLocation();
  const isPrivacy = location.pathname.includes('privacy');

  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink py-8 sm:py-12 select-none">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-12">
        <div className="border-b border-brand-tan-line pb-6 sm:pb-8 space-y-3 sm:space-y-4">
          <div className="eyebrow flex items-baseline gap-3 sm:gap-4">
            <span className="eyebrow-idx font-mono text-xs sm:text-sm">03</span>
            <span className="eyebrow-lbl text-xs sm:text-sm uppercase tracking-widest">LEGAL STATEMENT</span>
          </div>
          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-6xl font-normal text-brand-green leading-tight">
            {isPrivacy ? 'Privacy Policy' : 'Terms of Service'}
          </h1>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-brand-stone/30 space-y-4 text-xs text-brand-stone leading-relaxed shadow-xs">
          <p>
            <strong>LEORIX</strong> is a registered brand of <strong>KUNJ Business Solutions LLP</strong>, Jaipur, Rajasthan, India.
          </p>
          <p>
            We handle user data with strict confidentiality. Email address data collected during waitlist registration is utilized exclusively for drop dispatch updates and technical laboratory reports.
          </p>
        </div>
      </div>
    </div>
  );
};
