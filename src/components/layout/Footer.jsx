import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUp, 
  MapPin, 
  Phone, 
  Clock, 
  ArrowUpRight, 
  MessageSquare,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { companyInfo, servicesData } from '../../data/companyData';
import { siteImages } from '../../data/images';


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#F4F3ED] border-t border-[#D4AF37]/30 text-[#111317] pt-16 pb-12 overflow-hidden">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Top Tier: Brand Statement & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-[#D4AF37]/20 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8C621E] text-xs font-mono tracking-wider uppercase font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#B88E10]" />
              <span>Architectural Excellence In Tamil Nadu</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury">
              WHERE INNOVATION MEETS <span className="gold-gradient-text">CONSTRUCTION</span>
            </h2>
            <p className="text-[#555D6B] text-xs sm:text-sm max-w-2xl leading-relaxed">
              Crafting signature residences, contemporary architectural structures, and turnkey luxury interiors across Thoothukudi and Tamil Nadu.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <a
              href={companyInfo.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl gold-btn-gradient text-[#111317] font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg group hover:scale-[1.02] cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href={companyInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-[#D4AF37]/35 text-[#111317] font-bold text-xs uppercase tracking-wider hover:bg-[#FAF8F2] transition-all hover:border-[#D4AF37] shadow-sm"
            >
              <MapPin className="w-4 h-4 text-[#B88E10]" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* Middle Tier: Structured Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-gray-300/70 text-sm">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-white rounded-xl p-1.5 border border-[#D4AF37]/40 flex items-center justify-center shadow-sm">
                <img 
                  src={siteImages.logo} 
                  alt="Lee Construction" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-base font-black uppercase tracking-widest text-[#111317] block">
                  LEE CONSTRUCTION
                </span>
                <span className="text-[10px] text-[#B88E10] font-mono tracking-wider block font-bold">
                  Thoothukudi, Tamil Nadu
                </span>
              </div>
            </div>
            <p className="text-[#555D6B] text-xs leading-relaxed">
              Committed to dependable workmanship, modern architectural design, transparent communication, and timely project delivery.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#111317] font-semibold">
              <Clock className="w-4 h-4 text-[#B88E10]" />
              <span>{companyInfo.workingHours}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono tracking-widest uppercase text-[#B88E10] font-bold border-l-2 border-[#D4AF37] pl-2.5">
              Pages
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="text-[#555D6B] hover:text-[#111317] font-medium transition-colors flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-[#B88E10] font-bold">01</span> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-[#555D6B] hover:text-[#111317] font-medium transition-colors flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-[#B88E10] font-bold">02</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#555D6B] hover:text-[#111317] font-medium transition-colors flex items-center gap-1.5">
                  <span className="text-[10px] font-mono text-[#B88E10] font-bold">03</span> Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Directory */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono tracking-widest uppercase text-[#B88E10] font-bold border-l-2 border-[#D4AF37] pl-2.5">
              Specialized Services
            </h3>
            <ul className="space-y-2 text-xs text-[#555D6B] font-medium">
              {servicesData.slice(0, 5).map((srv) => (
                <li key={srv.id} className="hover:text-[#111317] transition-colors">
                  • {srv.title}
                </li>
              ))}
            </ul>
          </div>

          {/* Head Office Address Card */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono tracking-widest uppercase text-[#B88E10] font-bold border-l-2 border-[#D4AF37] pl-2.5">
              Head Office
            </h3>
            <div className="p-3.5 rounded-xl bg-white border border-[#D4AF37]/30 space-y-2.5 text-xs shadow-sm">
              <div className="flex items-start gap-2 text-[#111317]">
                <MapPin className="w-4 h-4 text-[#B88E10] shrink-0 mt-0.5" />
                <p className="leading-snug font-medium">
                  {companyInfo.address}
                </p>
              </div>

              <div className="flex items-center gap-2 text-[#111317] pt-1 border-t border-gray-100">
                <Phone className="w-3.5 h-3.5 text-[#B88E10] shrink-0" />
                <a href={`tel:${companyInfo.phoneRaw}`} className="hover:text-[#B88E10] transition-colors font-mono font-bold">
                  {companyInfo.phone}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#7B8494]">
          <p>© {new Date().getFullYear()} LEE CONSTRUCTION. All Rights Reserved.</p>
          
          <div className="flex items-center gap-6">
            <span className="text-[#555D6B] font-medium">Where Innovation Meets Construction</span>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-gray-300 hover:border-[#D4AF37] text-[#111317] hover:text-[#B88E10] transition-all group cursor-pointer shadow-sm"
              aria-label="Scroll to top"
            >
              <span className="font-bold">TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#B88E10]" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
