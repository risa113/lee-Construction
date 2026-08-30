import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { companyInfo } from '../../data/companyData';
import { siteImages } from '../../data/images';

export default function CtaBanner() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden bg-[#F5F4EE] text-[#111317] border-t border-b border-[#D4AF37]/20">
      
      {/* Background Architectural Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteImages.ctaBanner}
          alt="Lee Construction Luxury Architectural Build"
          className="w-full h-full object-cover opacity-20 filter brightness-110 scale-105"
        />
      </div>

      {/* Luxury Light Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5F4EE] via-[#F5F4EE]/90 to-[#F5F4EE] z-10" />
      <div className="absolute inset-0 architectural-grid opacity-35 z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/15 rounded-full blur-3xl z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-20 space-y-8">
        
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8C621E] text-xs font-mono tracking-widest uppercase font-bold"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#B88E10]" />
          <span>START YOUR CONSULTATION</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury"
        >
          READY TO BUILD <span className="gold-gradient-text">YOUR VISION?</span>
        </motion.h2>

        {/* Gold Accent Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-28 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-[#555D6B] text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium"
        >
          Let's discuss your next luxury home, contemporary residence, commercial space, or architectural interior project.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl gold-btn-gradient text-[#111317] font-extrabold text-xs uppercase tracking-widest transition-all hover:scale-[1.03] active:scale-[0.98] shadow-xl group cursor-pointer"
          >
            <span>START A PROJECT</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href={companyInfo.whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-[#FAF8F2] border border-[#D4AF37]/40 hover:border-[#25D366] text-[#111317] font-bold text-xs uppercase tracking-widest backdrop-blur-md transition-all hover:scale-[1.03] active:scale-[0.98] shadow-md group"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366] fill-current" />
            <span>WHATSAPP CONSULTATION</span>
          </a>
        </motion.div>

        {/* Direct Call Subline */}
        <p className="text-xs font-mono text-[#7B8494] pt-4 font-semibold">
          Prefer an immediate phone call? Call us at <a href={`tel:${companyInfo.phoneRaw}`} className="text-[#B88E10] font-bold hover:underline">{companyInfo.phone}</a>
        </p>

      </div>
    </section>
  );
}
