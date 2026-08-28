'use client';

import { Phone, MessageCircle, FileText } from 'lucide-react';
import { waUrl, WA_DEFAULT_MESSAGE } from '@/lib/constants';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-arctic-deep-navy/95 backdrop-blur-md border-t border-white/10 safe-area-pb">
      <div className="flex items-center justify-around py-2 px-2">
        <a
          href="tel:+263771539643"
          className="flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors py-2.5 px-4 min-w-[72px]"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6" />
          <span className="text-[11px] font-medium">Call</span>
        </a>
        <a
          href={waUrl(WA_DEFAULT_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 text-[#25D366] hover:text-[#1fb855] transition-colors py-2.5 px-4 min-w-[72px]"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="text-[11px] font-medium">WhatsApp</span>
        </a>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-quote'))}
          className="flex flex-col items-center gap-1 text-arctic-ice-blue hover:text-arctic-electric-blue transition-colors py-2.5 px-4 min-w-[72px] cursor-pointer bg-transparent border-none"
          aria-label="Get a quote"
        >
          <FileText className="w-6 h-6" />
          <span className="text-[11px] font-medium">Get Quote</span>
        </button>
      </div>
    </div>
  );
}
