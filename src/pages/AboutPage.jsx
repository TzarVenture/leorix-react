import React, { useEffect } from 'react';
import { Building2, MapPin, Mail, ShieldCheck } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink py-8 sm:py-12 lg:py-16 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-16">
        
        {/* Header */}
        <div className="border-b border-brand-tan-line pb-8 sm:pb-12 space-y-4 sm:space-y-6">
          <div className="eyebrow flex items-baseline gap-3 sm:gap-4 border-t border-brand-tan-line pt-3">
            <span className="eyebrow-idx font-mono text-xs sm:text-sm">01</span>
            <span className="eyebrow-lbl text-xs sm:text-sm uppercase tracking-widest">ABOUT LEORIX</span>
          </div>

          <h1 className="font-serif-display text-3xl sm:text-5xl lg:text-7xl font-normal text-brand-green leading-tight">
            An Indian footwear brand, <em className="italic text-brand-ink">built on engineering.</em>
          </h1>
        </div>

        {/* Narrative Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          <div className="lg:col-span-8 space-y-4 sm:space-y-6 font-sans text-sm sm:text-lg text-brand-ink/90 leading-relaxed">
            <p>
              LEORIX is a performance-oriented lifestyle footwear brand by <strong>KUNJ Business Solutions LLP, Jaipur</strong>.
            </p>
            <p>
              We started from a frustration: lifestyle shoes are sold on looks and adjectives, while the things that actually make a shoe good to wear — stability, cushioning that's controlled rather than just soft, comfort that lasts a full day — are rarely specified and almost never proven.
            </p>
            <p className="font-semibold text-brand-green">
              So we work the other way around. We set measurable targets, engineer to them, and validate the result with the Footwear Design & Development Institute. Design leads. Engineering proves. We say what we do, and we do what we say.
            </p>
          </div>

          {/* Company Card */}
          <div className="lg:col-span-4 bg-brand-green text-brand-cream p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-brand-tan/40 shadow-xl space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 text-brand-tan font-mono text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-brand-tan" />
              <span>Corporate Entity</span>
            </div>
            <h3 className="font-serif-display text-lg sm:text-xl text-brand-cream font-normal">
              KUNJ Business Solutions LLP
            </h3>
            <p className="text-xs text-brand-cream/80 leading-relaxed">
              Registered business entity based in Jaipur, Rajasthan, India. Operating LEORIX Footwear Labs.
            </p>
          </div>
        </div>

        {/* Contact & Directory Section */}
        <div id="contact" className="bg-white p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl border border-brand-stone/30 space-y-6 sm:space-y-8 shadow-sm">
          <h2 className="font-serif-display text-2xl sm:text-4xl text-brand-green font-normal">
            Contact & Directory
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-xs font-sans">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-green font-bold uppercase tracking-wider">
                <Mail className="w-4 h-4 text-brand-tan flex-shrink-0" />
                <span>Partnerships & Product Questions</span>
              </div>
              <p className="text-brand-stone pl-6">
                Direct email for press, retail distribution, and technical inquiries:
              </p>
              <a href="mailto:contact@leorix.in" className="text-brand-green font-bold pl-6 block hover:underline text-sm">
                contact@leorix.in
              </a>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-brand-green font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-brand-tan flex-shrink-0" />
                <span>Headquarters Address</span>
              </div>
              <p className="text-brand-stone pl-6 leading-relaxed">
                KUNJ Business Solutions LLP<br />
                Jaipur, Rajasthan, India — 302001
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
