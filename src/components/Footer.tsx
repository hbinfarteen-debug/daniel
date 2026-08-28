import { Snowflake, Phone, Mail, MapPin } from 'lucide-react';

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
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Snowflake className="w-5 h-5 text-arctic-ice-blue" />
              <span className="text-white font-semibold tracking-wider text-sm">DANIEL&apos;S ARCTIC TOUCH</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Professional refrigeration and air-conditioning solutions for homes, businesses and vehicles across Zimbabwe.
            </p>
            {/* Social placeholders */}
            <div className="flex gap-3 mt-6">
              {['Facebook', 'Instagram', 'LinkedIn'].map(social => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-arctic-ice-blue hover:border-arctic-ice-blue/30 transition-all text-xs font-medium"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider mb-4">SERVICES</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map(link => (
                <li key={link}>
                  <a href="#services" className="text-white/50 text-sm hover:text-arctic-ice-blue transition-colors">
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
                <a href="tel:+263771539643" className="flex items-center gap-3 text-white/50 text-sm hover:text-arctic-ice-blue transition-colors">
                  <Phone className="w-4 h-4 text-arctic-ice-blue flex-shrink-0" />
                  +263 771 539 643
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
        <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-white/30 text-xs">&copy; 2026 Daniel&apos;s Arctic Touch. All rights reserved.</p>
          <p className="text-white/30 text-xs">The Coolest Touch in the Business</p>
        </div>
      </div>
    </footer>
  );
}
