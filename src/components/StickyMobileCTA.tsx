'use client';

import { Phone, MessageCircle, FileText } from 'lucide-react';

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-arctic-deep-navy/95 backdrop-blur-md border-t border-white/10 safe-area-pb">
      <div className="flex items-center justify-around py-2.5 px-2">
        <a
          href="tel:+263771539643"
          className="flex flex-col items-center gap-0.5 text-white/80 hover:text-white transition-colors py-1 px-3"
          aria-label="Call us"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-medium">Call</span>
        </a>
        <a
          href="https://wa.me/263771539643?text=Hi%20Daniel's%20Arctic%20Touch%2C%20I%20would%20like%20assistance."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-0.5 text-[#25D366] hover:text-[#1fb855] transition-colors py-1 px-3"
          aria-label="WhatsApp us"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>
        <button
          onClick={() => window.dispatchEvent(new CustomEvent('open-quote'))}
          className="flex flex-col items-center gap-0.5 text-arctic-ice-blue hover:text-arctic-electric-blue transition-colors py-1 px-3 cursor-pointer bg-transparent border-none"
          aria-label="Get a quote"
        >
          <FileText className="w-5 h-5" />
          <span className="text-[10px] font-medium">Get Quote</span>
        </button>
      </div>
    </div>
  );
}
