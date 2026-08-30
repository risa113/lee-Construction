import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Building, Sparkles } from 'lucide-react';
import { companyInfo } from '../../data/companyData';
import { siteImages } from '../../data/images';

export default function IntroSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#FFFFFF] text-[#111317] border-b border-[#D4AF37]/20 overflow-hidden">
      
      {/* Background Subtle Grid & Ambient Lighting */}
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Large Architectural Image with Double Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-6 relative group"
          >
            {/* Architectural Double Hairline Frames in Gold & Bronze */}
            <div className="absolute -inset-3 border border-[#D4AF37]/40 rounded-3xl -z-10 translate-x-2 translate-y-2 group-hover:translate-x-3.5 group-hover:translate-y-3.5 transition-transform duration-500" />
            <div className="absolute -inset-6 border border-[#8C621E]/20 rounded-3xl -z-20 translate-x-4 translate-y-4 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-700" />
            
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)] bg-white border border-[#D4AF37]/35">
              <img
                src={siteImages.aboutIntro}
                alt="Lee Construction Architectural Craftsmanship"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-100 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Floating Architectural Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/35 shadow-xl flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-[#B88E10] uppercase tracking-[0.2em] block font-bold">
                    STRUCTURAL STANDARD
                  </span>
                  <span className="text-xs font-bold text-[#111317] uppercase tracking-wider">
                    Thoothukudi, Tamil Nadu
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center text-[#B88E10]">
                  <Building className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Editorial Text & Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8C621E] text-xs font-mono tracking-widest uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#B88E10]" />
              <span>01 / ABOUT LEE CONSTRUCTION</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury leading-tight">
              WE BUILD MORE THAN STRUCTURES. <br />
              <span className="gold-gradient-text">WE BUILD SPACES THAT LAST.</span>
            </h2>

            {/* Copy */}
            <p className="text-[#2B303A] text-sm sm:text-base leading-relaxed font-medium">
              Lee Construction is a premium construction and architectural design company based in Thoothukudi, specializing in luxury homes, contemporary residences, commercial facilities, interior design, and turnkey construction projects.
            </p>

            <p className="text-[#555D6B] text-xs sm:text-sm leading-relaxed">
              We provide complete end-to-end services including architectural planning, 3D visualization, structural coordination, construction management, and interior execution. Our team is committed to quality workmanship, modern design, transparent communication, and timely project delivery.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Architectural Planning & 3D Renders",
                "Luxury Villa & Home Construction",
                "Turnkey Handover & Milestone Tracking",
                "Custom Interior Joinery & Execution"
              ].map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-[#111317] p-2.5 rounded-xl bg-[#F8F7F2] border border-[#D4AF37]/20">
                  <div className="w-4 h-4 rounded-full bg-[#D4AF37]/20 flex items-center justify-center shrink-0 border border-[#D4AF37]/40">
                    <CheckCircle2 className="w-3 h-3 text-[#B88E10]" />
                  </div>
                  <span className="font-bold">{feat}</span>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 text-xs font-bold font-mono tracking-widest text-[#B88E10] hover:text-[#111317] uppercase border-b-2 border-[#D4AF37] pb-1 hover:border-[#111317] transition-all group"
              >
                <span>EXPLORE OUR PHILOSOPHY & STORY</span>
                <ArrowRight className="w-4 h-4 text-[#B88E10] group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
