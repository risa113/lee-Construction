import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Building, 
  ShieldCheck, 
  Layers, 
  Compass, 
  CheckCircle2, 
  ArrowRight, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { companyInfo, corePillars, companyStatsPlaceholder } from '../data/companyData';
import { siteImages } from '../data/images';
import CtaBanner from '../components/home/CtaBanner';

export default function About() {
  return (
    <div className="relative min-h-screen bg-[#FAFAF8] text-[#111317]">
      
      {/* ========================================================= */}
      {/* 1. ABOUT HERO                                             */}
      {/* ========================================================= */}
      <section className="relative min-h-[65vh] lg:min-h-[75vh] flex items-center justify-center overflow-hidden bg-[#FAFAF8] border-b border-[#D4AF37]/20">
        
        {/* Background Image with Slow Zoom */}
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.12 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={siteImages.heroAbout}
            alt="Lee Construction About Hero"
            className="w-full h-full object-cover opacity-25 filter brightness-105"
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF8] via-[#FAFAF8]/75 to-[#FAFAF8]/90 z-10" />
        <div className="absolute inset-0 architectural-grid opacity-35 z-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#D4AF37]/15 rounded-full blur-3xl z-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 py-20 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8C621E] text-xs font-mono tracking-widest uppercase font-bold"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#B88E10]" />
            <span>ABOUT LEE CONSTRUCTION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury"
          >
            BUILT WITH VISION. <br />
            <span className="gold-gradient-text">DESIGNED WITH PURPOSE.</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#4A515D] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed font-medium"
          >
            {companyInfo.shortDescription}
          </motion.p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SECTION 01: WHO WE ARE                                 */}
      {/* ========================================================= */}
      <section className="relative py-24 border-b border-[#D4AF37]/20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8C621E] text-xs font-mono tracking-widest uppercase font-bold">
                <span>01 / WHO WE ARE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury">
                AN ARCHITECTURAL STUDIO & <span className="gold-gradient-text">MASTER BUILDER.</span>
              </h2>

              <div className="space-y-4 text-[#4A515D] text-sm leading-relaxed">
                <p className="font-medium text-[#111317]">
                  Lee Construction is based in Thoothukudi, Tamil Nadu, founded on the principle that exceptional construction requires seamless harmony between visionary architectural planning and disciplined civil engineering.
                </p>
                <p>
                  From initial sketch concepts and 3D photorealistic renderings to structural concrete framing, MEP integration, and bespoke teak joinery, we manage every phase under rigorous quality standards.
                </p>
                <p>
                  We work closely with clients to create functional, elegant, and customized spaces that match their vision and lifestyle. From planning and design to construction and finishing, we ensure attention to detail at every stage of the project.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#D4AF37]/30 shadow-sm">
                  <span className="text-xs font-mono text-[#B88E10] block mb-1 font-bold">LOCATION</span>
                  <span className="text-sm font-bold text-[#111317]">Thoothukudi, Tamil Nadu</span>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF8F2] border border-[#D4AF37]/30 shadow-sm">
                  <span className="text-xs font-mono text-[#B88E10] block mb-1 font-bold">EXPERTISE</span>
                  <span className="text-sm font-bold text-[#111317]">Architecture & Turnkey Builds</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Architectural Imagery */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/35 shadow-2xl bg-white">
                <img
                  src={siteImages.aboutPhilosophy}
                  alt="Lee Construction Who We Are"
                  className="w-full h-full object-cover filter brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 border border-[#D4AF37]/35 shadow-xl">
                  <p className="text-xs font-mono text-[#B88E10] uppercase tracking-wider font-bold">
                    Our Commitment
                  </p>
                  <p className="text-sm font-bold text-[#111317] mt-1">
                    Quality Workmanship & Transparent Timelines
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SECTION 02: OUR APPROACH                               */}
      {/* ========================================================= */}
      <section className="relative py-24 bg-[#F5F4EE] border-b border-[#D4AF37]/20 overflow-hidden">
        <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Imagery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 order-2 lg:order-1 relative"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D4AF37]/35 shadow-xl bg-white">
                <img
                  src={siteImages.aboutApproach}
                  alt="Lee Construction Approach"
                  className="w-full h-full object-cover filter brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Right: Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-7 order-1 lg:order-2 space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8C621E] text-xs font-mono tracking-widest uppercase font-bold">
                <span>02 / OUR APPROACH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury">
                INTEGRATED DESIGN & <span className="gold-gradient-text">ENGINEERING DISCIPLINE.</span>
              </h2>

              <p className="text-[#4A515D] text-sm leading-relaxed font-medium">
                We eliminate the friction common between separate architectural designers and third-party contractors. By combining design vision with construction execution under one roof, we guarantee that what is drawn is exactly what is built.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  { title: "Collaborative Briefing", desc: "Understanding the client's functional goals, spatial preferences, and lifestyle." },
                  { title: "3D Visualization & Proofing", desc: "Interactive digital modeling to finalize every material texture before procurement." },
                  { title: "Structural Rigor", desc: "Soil testing, RCC calculations, high-grade concrete, and quality assurance supervision." }
                ].map((app, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-[#D4AF37]/25 space-y-1 shadow-sm">
                    <h4 className="text-xs font-bold font-mono uppercase text-[#B88E10] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B88E10]" />
                      {app.title}
                    </h4>
                    <p className="text-xs text-[#555D6B] pl-3.5 leading-relaxed">{app.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SECTION 03: WHAT WE BELIEVE                            */}
      {/* ========================================================= */}
      <section className="relative py-24 bg-[#FAFAF8] border-b border-[#D4AF37]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8C621E] text-xs font-mono tracking-widest uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#B88E10]" />
              <span>03 / WHAT WE BELIEVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury">
              FOUNDATIONAL <span className="gold-gradient-text">VALUES.</span>
            </h2>
            <p className="text-[#555D6B] text-xs sm:text-sm">
              Our principles shape every foundation we pour and every key we hand over.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((pillar) => (
              <div
                key={pillar.id}
                className="p-6 rounded-2xl bg-white border border-[#D4AF37]/25 hover:border-[#D4AF37] transition-all duration-300 space-y-3 shadow-sm hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-[#B88E10] font-bold">{pillar.number}</span>
                  <span className="w-2 h-2 rounded-full bg-[#B88E10]" />
                </div>
                <h3 className="text-base font-bold uppercase tracking-wider text-[#111317]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#555D6B] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SECTION 04: EDITABLE CLIENT STATS DATA MODULE           */}
      {/* ========================================================= */}
      <section className="relative py-20 bg-[#F5F4EE] border-b border-[#D4AF37]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#D4AF37]/35 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-200">
              {companyStatsPlaceholder.map((stat, i) => (
                <div key={i} className={`pt-6 md:pt-0 ${i > 0 ? 'md:pl-8' : ''} space-y-2`}>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-[#B88E10] drop-shadow-sm">
                    {stat.value}
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#111317]">
                    {stat.label}
                  </div>
                  <p className="text-[11px] text-[#7B8494] font-mono">
                    {stat.subtext}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono text-[#7B8494]">
              <span>* Structured Editable Data Layer: `src/data/companyData.js`</span>
              <span className="text-[#B88E10] font-bold">Ready for Live Verification Numbers</span>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. SECTION 05: WHY CLIENTS CHOOSE US & CTA                */}
      {/* ========================================================= */}
      <section className="relative py-24 bg-white border-b border-[#D4AF37]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8C621E] text-xs font-mono tracking-widest uppercase font-bold">
                <span>05 / WHY CLIENTS CHOOSE US</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury">
                THE ASSURANCE OF <span className="gold-gradient-text">LASTING VALUE.</span>
              </h2>

              <p className="text-[#4A515D] text-sm leading-relaxed font-medium">
                Building a dream residence or landmark commercial building is one of the most substantial investments you will ever make. Our clients choose Lee Construction because we treat every build with the precision, reverence, and craftsmanship it demands.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  "No hidden costs — fully documented BOQ & milestone billing.",
                  "Personalized architect consultation for custom spatial layouts.",
                  "Regular on-site progress reporting & photo updates.",
                  "Comprehensive post-handover finishing and quality guarantees."
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-[#111317]">
                    <CheckCircle2 className="w-4 h-4 text-[#B88E10] shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-7 py-4 rounded-xl gold-btn-gradient text-[#111317] font-extrabold text-xs uppercase tracking-widest transition-all shadow-lg group hover:scale-[1.03]"
                >
                  <span>DISCUSS YOUR VISION</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-2xl bg-[#F8F7F2] border border-[#D4AF37]/35 space-y-6 shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-white p-1.5 border border-[#D4AF37] flex items-center justify-center shadow-[0_0_15px_rgba(184,142,16,0.2)]">
                  <img src={siteImages.logo} alt="Lee Construction" className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-bold uppercase tracking-wider text-[#111317]">
                  "WHERE INNOVATION MEETS CONSTRUCTION"
                </h3>
                <p className="text-xs text-[#555D6B] leading-relaxed">
                  Headquartered at 269/1, West Great Cotton Road, Thoothukudi. Open for direct architectural consultations, plot reviews, and turnkey building inquiries.
                </p>
                <div className="pt-4 border-t border-gray-200 flex gap-4">
                  <a
                    href={companyInfo.whatsAppLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl bg-[#25D366] text-white text-center font-bold text-xs flex items-center justify-center gap-1.5 shadow-md"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" /> WhatsApp Us
                  </a>
                  <a
                    href={`tel:${companyInfo.phoneRaw}`}
                    className="flex-1 py-3 rounded-xl bg-white border border-gray-200 text-[#111317] text-center font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-[#FAF8F2]"
                  >
                    Call {companyInfo.phone}
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. CTA BANNER */}
      <CtaBanner />

    </div>
  );
}
