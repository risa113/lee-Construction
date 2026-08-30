import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Info, 
  Phone, 
  Menu, 
  X, 
  ArrowUpRight, 
  ShieldCheck, 
  MessageSquare,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { companyInfo } from '../../data/companyData';
import { siteImages } from '../../data/images';


const navItems = [
  { name: 'Home', path: '/', number: '01', label: 'Main Architectural Showcase' },
  { name: 'About', path: '/about', number: '02', label: 'Company Heritage & Ethics' },
  { name: 'Contact', path: '/contact', number: '03', label: 'Project Inquiry & Coordinates' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ========================================================= */}
      {/* DESKTOP FIXED LEFT SIDEBAR (LIGHT LUXURY)                 */}
      {/* ========================================================= */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-72 z-50 flex-col justify-between bg-[#FFFFFF] border-r border-[#D4AF37]/25 text-[#111317] select-none shadow-[4px_0_25px_rgba(0,0,0,0.03)]">
        
        {/* Subtle Architectural Blueprint Grid */}
        <div className="absolute inset-0 architectural-grid opacity-35 pointer-events-none" />
        
        {/* Ambient Warm Gold Highlights */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-[#8C621E]/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-[#D4AF37]/40 via-[#D4AF37]/15 to-[#8C621E]/30" />

        {/* TOP: Brand Logo Header */}
        <div className="relative p-6 border-b border-[#D4AF37]/20 bg-[#FDFCFA]">
          <NavLink to="/" className="group block text-left">
            <div className="flex items-center gap-3.5">
              <div className="relative w-12 h-12 bg-white rounded-xl p-1.5 shadow-[0_4px_15px_rgba(184,142,16,0.15)] flex items-center justify-center border-2 border-[#D4AF37]/40 group-hover:border-[#D4AF37] group-hover:shadow-[0_4px_20px_rgba(184,142,16,0.3)] transition-all duration-300">
                <img 
                  src={siteImages.logo} 
                  alt="Lee Construction Logo" 
                  className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h1 className="text-base font-black tracking-widest uppercase text-[#111317] font-sans flex items-center gap-1.5">
                  LEE CONSTRUCTION
                </h1>
                <p className="text-[10px] tracking-widest text-[#B88E10] uppercase font-mono mt-0.5 font-bold">
                  Where Innovation Meets
                </p>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-[#D4AF37]/15 flex items-center justify-between text-[10px] text-[#555D6B] font-mono">
              <span className="flex items-center gap-1.5 text-[#111317] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88E10] animate-pulse" />
                Thoothukudi, TN
              </span>
              <span className="text-[#8C621E] font-medium">ESTD 2026</span>
            </div>
          </NavLink>
        </div>

        {/* MIDDLE: Architectural Navigation Links */}
        <nav className="relative flex-1 px-4 py-8 flex flex-col justify-center space-y-3">
          <div className="px-3 mb-1 text-[9px] tracking-[0.25em] uppercase text-[#B88E10] font-mono font-bold">
            Navigation Index
          </div>

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group relative flex items-center justify-between px-4 py-3.5 rounded-xl text-xs font-medium tracking-wide transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-[#D4AF37]/15 to-[#F7E5A9]/20 text-[#111317] border border-[#D4AF37]/50 shadow-[0_2px_10px_rgba(184,142,16,0.1)] font-bold'
                    : 'text-[#4A515D] hover:text-[#111317] hover:bg-[#F5F4F0] border border-transparent'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <div className="flex items-center gap-3">
                    <span className={`text-[11px] font-mono font-bold transition-colors ${
                      isActive ? 'text-[#B88E10]' : 'text-[#8E96A4] group-hover:text-[#B88E10]'
                    }`}>
                      {item.number}
                    </span>
                    <div>
                      <span className="tracking-widest uppercase text-xs block font-bold">
                        {item.name}
                      </span>
                      <span className="text-[9px] text-[#7B8494] font-mono tracking-normal block font-normal group-hover:text-[#4A515D]">
                        {item.label}
                      </span>
                    </div>
                  </div>

                  {/* Active Gold Line Indicator */}
                  {isActive ? (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="w-1.5 h-6 bg-gradient-to-b from-[#D4AF37] to-[#B88E10] rounded-full shadow-[0_0_8px_#D4AF37]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8E96A4] opacity-0 group-hover:opacity-100 group-hover:text-[#B88E10] transition-all -translate-x-1 group-hover:translate-x-0" />
                  )}
                </>
              )}
            </NavLink>
          ))}

          {/* Quick Direct Actions */}
          <div className="pt-6 mt-2 border-t border-[#D4AF37]/15 space-y-2.5">
            <div className="px-3 text-[9px] tracking-[0.25em] uppercase text-[#7B8494] font-mono font-semibold">
              Direct Contact
            </div>

            <a 
              href={companyInfo.whatsAppLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs text-[#0F5B2E] hover:text-[#0a4221] bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/20 transition-all group shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-[#25D366]/25 flex items-center justify-center text-[#0F5B2E] group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-3.5 h-3.5 fill-current" />
                </div>
                <span className="font-bold text-[11px] tracking-wider uppercase">WhatsApp Us</span>
              </div>
              <span className="text-[9px] text-[#0F5B2E] font-mono px-1.5 py-0.5 rounded bg-[#25D366]/20 font-bold">Instant</span>
            </a>

            <a 
              href={`tel:${companyInfo.phoneRaw}`}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs text-[#111317] hover:text-black bg-[#F5F4F0] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#FAF8F2] transition-all group shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-lg bg-[#D4AF37]/20 flex items-center justify-center text-[#B88E10] group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-3.5 h-3.5" />
                </div>
                <span className="font-mono text-[11px] text-[#111317] font-bold">{companyInfo.phone}</span>
              </div>
              <span className="text-[9px] text-[#B88E10] font-mono px-1.5 py-0.5 rounded bg-[#D4AF37]/15 font-bold">Call</span>
            </a>
          </div>
        </nav>

        {/* BOTTOM: Luxury Architectural Coordinates */}
        <div className="relative p-5 border-t border-[#D4AF37]/15 bg-[#FDFCFA] text-xs">
          <p className="text-[10px] leading-relaxed text-[#555D6B] font-serif-luxury italic">
            "Where Innovation Meets Construction"
          </p>
          <div className="mt-2.5 flex items-center justify-between text-[9px] font-mono text-[#7B8494]">
            <span>© {new Date().getFullYear()} Lee Construction</span>
            <span className="text-[#B88E10] font-bold">Tamil Nadu</span>
          </div>
        </div>

      </aside>

      {/* ========================================================= */}
      {/* MOBILE COMPACT TOP BAR (LIGHT)                            */}
      {/* ========================================================= */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#FFFFFF]/95 backdrop-blur-xl border-b border-[#D4AF37]/25 px-4 py-3 shadow-md">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-lg p-1 border border-[#D4AF37]/40 flex items-center justify-center shadow-sm">
              <img 
                src={siteImages.logo} 
                alt="Lee Construction Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#111317] block">
                LEE CONSTRUCTION
              </span>
              <span className="text-[9px] text-[#B88E10] font-mono tracking-wider block font-bold">
                Thoothukudi, TN
              </span>
            </div>
          </NavLink>

          <div className="flex items-center gap-2">
            <a 
              href={companyInfo.whatsAppLink}
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="w-9 h-9 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#0F5B2E]"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-[#F5F4F0] text-[#111317] hover:bg-[#EBE9E1] border border-[#D4AF37]/20 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5 text-[#B88E10]" /> : <Menu className="w-5 h-5 text-[#111317]" />}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE FULL-SCREEN DRAWER (LIGHT) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-0 z-40 bg-[#FFFFFF]/98 pt-20 px-6 pb-8 flex flex-col justify-between overflow-y-auto"
          >
            <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />

            <div className="space-y-4 pt-4 relative z-10">
              <p className="text-xs font-mono tracking-[0.25em] uppercase text-[#B88E10] font-bold">
                Architectural Navigation
              </p>
              
              <div className="divide-y divide-gray-200 border-y border-[#D4AF37]/25">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-5 text-base uppercase tracking-widest font-bold transition-all ${
                        isActive ? 'text-[#B88E10] pl-3 border-l-2 border-[#B88E10] bg-[#FAF8F2]' : 'text-[#111317]'
                      }`
                    }
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-xs font-mono text-[#B88E10]">{item.number}</span>
                      {item.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#B88E10]" />
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-8 relative z-10">
              <div className="p-5 rounded-2xl bg-[#F8F7F2] border border-[#D4AF37]/30 space-y-3 shadow-md">
                <div className="text-xs font-mono text-[#B88E10] uppercase tracking-wider font-bold">Headquarters</div>
                <div className="text-xs text-[#4A515D] leading-relaxed font-medium">
                  {companyInfo.address}
                </div>
                <div className="flex gap-2.5 pt-2">
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="flex-1 py-3 rounded-xl gold-btn-gradient text-[#111317] font-bold text-xs flex items-center justify-center gap-1.5 shadow-md uppercase tracking-wider"
                  >
                    <PhoneCall className="w-3.5 h-3.5" /> Call Now
                  </a>
                  <a
                    href={companyInfo.whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md uppercase tracking-wider"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="text-center text-[10px] text-[#7B8494] font-mono">
                Lee Construction • Where Innovation Meets Construction
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
