import React from 'react';
import { useStore } from '../../context/StoreContext';
import { Sparkles, CheckCircle, Info } from 'lucide-react';

const Toast = () => {
  const { toastMessage } = useStore();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce-short max-w-sm">
      <div className="bg-brand-ink text-brand-cream border border-brand-tan px-4 py-3 rounded shadow-2xl flex items-center gap-3 text-xs font-sans">
        <Sparkles className="w-5 h-5 text-brand-tan flex-shrink-0" />
        <p className="font-medium text-brand-cream/90">{toastMessage}</p>
      </div>
    </div>
  );
};

export default Toast;
