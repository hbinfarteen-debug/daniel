import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PHONE_TEL, PHONE_DISPLAY } from '@/lib/constants';

const serviceLinks = [
  'Air Conditioning',
  'Cold & Freezer Rooms',
  'Diagnostics & Repairs',
  'Commercial Refrigeration',
  'Vehicle AC',
  'Domestic Refrigeration',
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-arctic-deep-navy border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand Column */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo.webp"
                alt="Daniel's Arctic Touch logo"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Professional refrigeration and air-conditioning solutions for homes, businesses and vehicles across Zimbabwe.
            </p>
            {/* Social placeholders */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-arctic-ice-blue hover:border-arctic-ice-blue/30 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-arctic-ice-blue hover:border-arctic-ice-blue/30 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-arctic-ice-blue hover:border-arctic-ice-blue/30 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider mb-4">SERVICES</h3>
            <ul className="space-y-1">
              {serviceLinks.map(link => (
                <li key={link}>
                  <a href="#services" className="text-white/50 text-sm hover:text-arctic-ice-blue transition-colors block py-1.5">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider mb-4">CONTACT</h3>
            <ul className="space-y-3">
              <li>
                <a href={PHONE_TEL} className="flex items-center gap-3 text-white/50 text-sm hover:text-arctic-ice-blue transition-colors">
                  <Phone className="w-4 h-4 text-arctic-ice-blue flex-shrink-0" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href="mailto:danryanhill18@gmail.com" className="flex items-center gap-3 text-white/50 text-sm hover:text-arctic-ice-blue transition-colors">
                  <Mail className="w-4 h-4 text-arctic-ice-blue flex-shrink-0" />
                  danryanhill18@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 text-white/50 text-sm">
                  <MapPin className="w-4 h-4 text-arctic-ice-blue flex-shrink-0" />
                  Zimbabwe
                </span>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full text-xs text-arctic-ice-blue font-medium border border-arctic-ice-blue/20">
                  24HR Assistance & Support
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-xs">&copy; 2026 Daniel&apos;s Arctic Touch. All rights reserved.</p>
          <p className="text-white/30 text-xs">The Coolest Touch in the Business</p>
        </div>
      </div>
    </footer>
  );
}
