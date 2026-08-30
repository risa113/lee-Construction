import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  DraftingCompass, 
  Home, 
  Building2, 
  Building, 
  Armchair, 
  KeyRound, 
  Eye, 
  CheckSquare, 
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { servicesData, companyInfo } from '../../data/companyData';

const iconMap = {
  DraftingCompass: DraftingCompass,
  Home: Home,
  Building2: Building2,
  Building: Building,
  Armchair: Armchair,
  KeyRound: KeyRound,
  Eye: Eye,
  CheckSquare: CheckSquare
};

export default function ServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section className="relative py-24 lg:py-32 bg-[#FAFAF8] text-[#111317] border-b border-[#D4AF37]/20 overflow-hidden">
      
      {/* Blueprint Grid Pattern */}
      <div className="absolute inset-0 architectural-grid opacity-35 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-gray-200 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8C621E] text-xs font-mono tracking-widest uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#B88E10]" />
              <span>02 / OUR CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury">
              FROM VISION TO <span className="gold-gradient-text">COMPLETION.</span>
            </h2>
          </div>
          <p className="text-[#555D6B] text-xs sm:text-sm max-w-md leading-relaxed font-normal">
            Every project is engineered with civil structural precision, architectural refinement, and luxury finishing.
          </p>
        </div>

        {/* Architectural Editorial Grid of 8 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Home;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className="group relative rounded-2xl bg-white border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-500 overflow-hidden flex flex-col justify-between min-h-[370px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(184,142,16,0.18)] hover:-translate-y-1.5"
              >
                {/* Background Image Reveal on Hover */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-5 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 filter grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
                </div>

                {/* Top: Number & Luxury Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#B88E10] px-2.5 py-1 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/35 group-hover:border-[#B88E10] group-hover:translate-x-1 transition-all duration-300">
                    {service.number}
                  </span>

                  <div className="w-11 h-11 rounded-xl bg-[#F8F7F2] border border-[#D4AF37]/30 flex items-center justify-center text-[#B88E10] group-hover:text-black group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:shadow-[0_0_15px_rgba(184,142,16,0.3)] transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-3 pt-6">
                  
                  {/* Title */}
                  <h3 className="text-lg font-bold uppercase tracking-wide text-[#111317] group-hover:text-[#B88E10] transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Expanding Gold Divider */}
                  <div className="w-8 h-[2px] bg-[#D4AF37]/40 group-hover:w-full group-hover:bg-gradient-to-r group-hover:from-[#D4AF37] group-hover:to-[#B88E10] transition-all duration-500" />

                  {/* Short Description */}
                  <p className="text-xs text-[#555D6B] leading-relaxed group-hover:text-[#2B303A] transition-colors font-normal">
                    {service.shortDesc}
                  </p>

                  {/* Feature Tags */}
                  <div className="pt-1.5 flex flex-wrap gap-1.5 opacity-80 group-hover:opacity-100 transition-opacity">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded bg-[#F5F4F0] text-[#4A515D] border border-gray-200 group-hover:border-[#D4AF37]/30 font-semibold">
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* Inquire Action */}
                  <div className="pt-3.5 border-t border-gray-100 flex items-center justify-between">
                    <a
                      href={`https://wa.me/919025092805?text=${encodeURIComponent(`Hello Lee Construction, I would like to inquire about your ${service.title} services.`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono font-bold text-[#B88E10] group-hover:text-[#8C621E] flex items-center gap-1.5 uppercase tracking-wider transition-colors"
                    >
                      <span>Inquire Build</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
