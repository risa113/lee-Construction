import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Layers, Compass, Clock, CheckCircle2, Sparkles } from 'lucide-react';
import { corePillars } from '../../data/companyData';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Layers: Layers,
  Compass: Compass,
  Clock: Clock
};

export default function WhyLeeSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#F5F4EE] text-[#111317] border-b border-[#D4AF37]/20 overflow-hidden">
      
      {/* Precision Blueprint Architectural Lines & Radial Lighting */}
      <div className="absolute inset-0 architectural-grid opacity-35 pointer-events-none" />
      <div className="absolute -top-32 right-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-96 h-96 bg-[#8C621E]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8C621E] text-xs font-mono tracking-widest uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#B88E10]" />
            <span>03 / THE LEE STANDARD</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury">
            PRECISION IN <span className="gold-gradient-text">EVERY DETAIL.</span>
          </h2>

          <p className="text-[#555D6B] text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            Our building philosophy combines structural engineering discipline with architectural refinement, safeguarding your investment for generations.
          </p>
        </div>

        {/* 4 Core Pillars in Architectural Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {corePillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || ShieldCheck;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl bg-white border border-[#D4AF37]/30 hover:border-[#D4AF37] p-8 flex flex-col justify-between transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(184,142,16,0.18)]"
              >
                {/* Decorative Top Gold Trim */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent group-hover:via-[#B88E10] transition-all duration-500" />

                <div>
                  {/* Top: Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-mono font-black text-[#D4AF37]/30 group-hover:text-[#B88E10] transition-colors">
                      {pillar.number}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#F8F7F2] border border-[#D4AF37]/30 flex items-center justify-center text-[#B88E10] group-hover:scale-110 group-hover:bg-[#D4AF37] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(184,142,16,0.3)] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-extrabold uppercase tracking-wider text-[#111317] mb-3 group-hover:text-[#B88E10] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#555D6B] leading-relaxed group-hover:text-[#2B303A] transition-colors">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-[10px] font-mono text-[#B88E10] uppercase tracking-widest font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B88E10]" />
                  <span>Guaranteed Standard</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
