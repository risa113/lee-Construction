import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../../data/companyData';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#FFFFFF] text-[#111317] border-b border-[#D4AF37]/20 overflow-hidden">
      
      {/* Precision Blueprint Architectural Lines */}
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8C621E] text-xs font-mono tracking-widest uppercase font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#B88E10]" />
            <span>05 / THE ROADMAP</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury">
            FROM FIRST IDEA TO <span className="gold-gradient-text">FINAL DETAIL.</span>
          </h2>

          <p className="text-[#555D6B] text-xs sm:text-sm leading-relaxed max-w-xl mx-auto">
            A structured 5-phase execution framework guaranteeing structural safety, architectural fidelity, and transparent project milestone handovers.
          </p>
        </div>

        {/* 5-Step Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          
          {processSteps.map((stepItem, idx) => (
            <motion.div
              key={stepItem.step}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl bg-[#FAFAF8] border border-[#D4AF37]/30 hover:border-[#D4AF37] p-6 flex flex-col justify-between transition-all duration-500 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:-translate-y-2 hover:shadow-[0_18px_35px_rgba(184,142,16,0.18)]"
            >
              {/* Step Number with Gold Accent */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-mono font-extrabold text-[#111317] px-3 py-1 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 shadow-sm">
                  {stepItem.step}
                </span>
                
                {idx < processSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] hidden lg:block -mr-2 group-hover:text-[#B88E10] transition-colors" />
                )}
              </div>

              {/* Step Details */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#B88E10] uppercase tracking-widest block font-bold">
                  {stepItem.subtitle}
                </span>
                <h3 className="text-base font-bold uppercase tracking-wider text-[#111317] group-hover:text-[#B88E10] transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-xs text-[#555D6B] leading-relaxed pt-2 group-hover:text-[#2B303A] transition-colors">
                  {stepItem.description}
                </p>
              </div>

              {/* Bottom Micro Status */}
              <div className="mt-6 pt-3 border-t border-gray-200 flex items-center gap-1.5 text-[10px] font-mono text-[#555D6B] group-hover:text-[#B88E10] transition-colors font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B88E10] animate-pulse" />
                <span>Phase {stepItem.step} Standard</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
