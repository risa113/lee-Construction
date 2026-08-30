import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, ChevronDown, Sparkles, Building2, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../../data/companyData';
import { siteImages } from '../../data/images';

export default function HeroSection() {
  return (
    <section className="relative min-h-[94vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#FAFAF8] text-[#111317]">
      
      {/* Background Architectural Image with Slow Cinematic Zoom */}
      <motion.div 
        initial={{ scale: 1.05 }}
        animate={{ scale: 1.14 }}
        transition={{ 
          duration: 22, 
          ease: "linear", 
          repeat: Infinity, 
          repeatType: "reverse" 
        }}
        className="absolute inset-0 z-0"
      >
        <img
          src={siteImages.heroMain}
          alt="Lee Construction Luxury Architecture"
          className="w-full h-full object-cover object-center opacity-35 filter brightness-105 contrast-105"
        />
      </motion.div>

      {/* Multi-layered Luxury Light Overlays & Architectural Grids */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF8] via-[#FAFAF8]/80 to-[#FAFAF8]/90 z-10" />
      <div className="absolute inset-0 architectural-grid opacity-40 z-10 pointer-events-none" />
      
      {/* Ambient Central & Edge Gold Radial Spotlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D4AF37]/15 rounded-full blur-3xl z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF8] to-transparent z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center">
        
        {/* Animated Brand Logo Mark Reveal with Gold Halo */}
        <motion.div
          initial={{ opacity: 0, y: -25, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="relative inline-block group">
            {/* Ambient Gold Pulse Ring */}
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#F7E5A9] via-[#D4AF37] to-[#B88E10] opacity-40 blur-md group-hover:opacity-75 transition-opacity duration-500 -z-10" />
            
            <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl p-2.5 shadow-[0_12px_30px_rgba(184,142,16,0.2)] border-2 border-[#D4AF37] mx-auto flex items-center justify-center">
              <img 
                src={siteImages.logo} 
                alt="Lee Construction Official Mark" 
                className="w-full h-full object-contain filter drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </motion.div>

        {/* Location & Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-3"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-[#8C621E] text-[10px] sm:text-xs font-mono tracking-[0.3em] uppercase font-bold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B88E10] animate-pulse" />
            <span>THOOTHUKUDI • ARCHITECTURAL EXCELLENCE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#111317] font-serif-luxury drop-shadow-sm">
            LEE <span className="gold-gradient-text">CONSTRUCTION</span>
          </h1>
        </motion.div>

        {/* Animated Architectural Gold Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.4, ease: "easeInOut" }}
          className="w-36 sm:w-56 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent my-6"
        />

        {/* Tagline & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="space-y-4 max-w-2xl"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-luxury font-bold tracking-wide text-[#111317] italic">
            "Where Innovation Meets Construction"
          </h2>
          <p className="text-xs sm:text-sm text-[#4A515D] font-medium leading-relaxed max-w-xl mx-auto">
            Architecture, Luxury Residential Builds & Turnkey Interiors Crafted With Structural Rigor & Refined Craftsmanship.
          </p>
        </motion.div>

        {/* CTA Buttons with Gold Sheen */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl gold-btn-gradient text-[#111317] font-extrabold text-xs uppercase tracking-widest transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg group cursor-pointer"
          >
            <span>START YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={companyInfo.whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-[#FAF8F2] border border-[#D4AF37]/40 hover:border-[#25D366] text-[#111317] font-bold text-xs uppercase tracking-widest backdrop-blur-md transition-all hover:scale-[1.03] active:scale-[0.98] shadow-md group"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform fill-current" />
            <span>WHATSAPP US</span>
          </a>
        </motion.div>

        {/* Category Ticker Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-14 pt-8 border-t border-[#D4AF37]/20 w-full max-w-3xl flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase font-bold"
        >
          <span className="text-[#111317] hover:text-[#B88E10] transition-colors">ARCHITECTURE</span>
          <span className="text-[#D4AF37]">•</span>
          <span className="text-[#111317] hover:text-[#B88E10] transition-colors">CONSTRUCTION</span>
          <span className="text-[#D4AF37]">•</span>
          <span className="text-[#111317] hover:text-[#B88E10] transition-colors">INTERIORS</span>
          <span className="text-[#D4AF37]">•</span>
          <span className="text-[#111317] hover:text-[#B88E10] transition-colors">TURNKEY</span>
        </motion.div>

      </div>

      {/* Bottom Scroll Cue */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-[#555D6B] hidden md:flex flex-col items-center gap-1 cursor-pointer pointer-events-none"
      >
        <span className="text-[9px] font-mono tracking-widest uppercase text-[#B88E10] font-bold">EXPLORE</span>
        <ChevronDown className="w-4 h-4 text-[#B88E10]" />
      </motion.div>

    </section>
  );
}
