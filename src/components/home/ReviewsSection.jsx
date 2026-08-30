import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../../data/companyData';

export default function ReviewsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev === testimonialsData.length - 1 ? 0 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#FAFAF8] text-[#111317] border-b border-[#D4AF37]/20 overflow-hidden">
      
      {/* Background Architectural Elements & Ambient Gold Lighting */}
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-[#D4AF37]/10 via-[#8C621E]/8 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8C621E] text-xs font-mono tracking-widest uppercase font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B88E10]" />
            <span>06 / CLIENT EXPERIENCES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury">
            WHAT CLIENTS <span className="gold-gradient-text">EXPERIENCE.</span>
          </h2>

          <p className="text-[#555D6B] text-xs sm:text-sm max-w-lg mx-auto">
            Authentic client feedback collected from verified Google reviews and local project completions in Thoothukudi and Tamil Nadu.
          </p>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="relative bg-white border border-[#D4AF37]/35 rounded-3xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden">
          
          {/* Ambient Inner Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Quote Icon & 5 Stars */}
          <div className="flex items-center justify-between pb-8 border-b border-gray-100 relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#FAF8F2] border border-[#D4AF37]/40 flex items-center justify-center text-[#B88E10] shadow-sm">
              <Quote className="w-6 h-6" />
            </div>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
              <span className="ml-2 text-xs font-mono text-[#111317] font-bold">5.0 / 5.0</span>
            </div>
          </div>

          {/* Testimonial Quote with Animation */}
          <div className="py-8 min-h-[160px] flex items-center relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-4"
              >
                <p className="text-lg sm:text-2xl font-medium text-[#111317] font-serif-luxury italic leading-relaxed">
                  "{testimonialsData[currentIdx].quote}"
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="text-[#B88E10] font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B88E10]" />
                    {testimonialsData[currentIdx].source}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-[#2B303A] font-medium">{testimonialsData[currentIdx].projectType}</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-[#7B8494]">{testimonialsData[currentIdx].location}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100 relative z-10">
            <div className="flex gap-2">
              {testimonialsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentIdx === i ? 'w-8 bg-gradient-to-r from-[#D4AF37] to-[#B88E10]' : 'w-2 bg-gray-200'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl bg-[#F8F7F2] hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#111317] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-xl bg-[#F8F7F2] hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 hover:border-[#D4AF37] text-[#111317] flex items-center justify-center transition-all cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
