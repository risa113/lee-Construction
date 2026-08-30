import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageSquare, PhoneCall, ChevronLeft, ChevronRight } from 'lucide-react';
import { companyInfo } from '../../data/companyData';

export default function ProjectModal({ project, onClose }) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!project) return null;

  const galleryImages = project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-5xl bg-white border border-[#D4AF37]/50 rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.25)] my-auto text-[#111317]"
        >
          {/* Top Bar with Title and Close Button */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-[#FAFAF8]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#111317] px-2.5 py-0.5 rounded gold-btn-gradient">
                {project.number || "01"}
              </span>
              <div>
                <h3 className="text-base font-extrabold uppercase tracking-wider text-[#111317]">
                  {project.name || project.title}
                </h3>
                <p className="text-xs text-[#555D6B] font-mono font-semibold">
                  {project.category} • {project.location}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-gray-200/80 hover:bg-gray-300 text-gray-700 hover:text-black transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[75vh] overflow-y-auto">
            
            {/* Left: Gallery & Main Image (7 cols) */}
            <div className="lg:col-span-7 bg-[#111317] p-6 flex flex-col justify-between">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#D4AF37]/35 bg-black">
                <img
                  src={galleryImages[activeImageIdx]}
                  alt={project.name}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {galleryImages.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImageIdx((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setActiveImageIdx((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center border border-white/20 transition-all"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border transition-all ${
                        activeImageIdx === idx ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50' : 'border-white/20 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Project Details (5 cols) */}
            <div className="lg:col-span-5 p-6 lg:p-8 space-y-6 flex flex-col justify-between bg-[#FAF8F2]">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#B88E10] uppercase block mb-1 font-bold">
                    Project Architectural Overview
                  </span>
                  <h4 className="text-xl font-black uppercase tracking-wide text-[#111317]">
                    {project.category}
                  </h4>
                </div>

                <p className="text-xs text-[#4A515D] leading-relaxed font-medium">
                  {project.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-white border border-[#D4AF37]/30 shadow-sm">
                    <span className="text-[10px] font-mono text-[#B88E10] uppercase block font-bold">Scale / Area</span>
                    <span className="text-sm font-bold text-[#111317] font-mono">{project.area || "Custom"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-white border border-[#D4AF37]/30 shadow-sm">
                    <span className="text-[10px] font-mono text-[#B88E10] uppercase block font-bold">Location</span>
                    <span className="text-sm font-bold text-[#111317] truncate block">{project.location || "Thoothukudi"}</span>
                  </div>
                </div>

                {/* Highlights */}
                {project.highlights && (
                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono text-[#B88E10] uppercase tracking-wider block font-bold">
                      Architectural Highlights
                    </span>
                    <ul className="space-y-1.5">
                      {project.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-[#2B303A] font-medium flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B88E10] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-gray-200 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/919025092805?text=${encodeURIComponent(`Hello Lee Construction, I saw your ${project.name || project.title} project and would like to build something similar. Please contact me.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl gold-btn-gradient text-[#111317] font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Inquire About Similar Build</span>
                </a>

                <a
                  href={`tel:${companyInfo.phoneRaw}`}
                  className="w-full py-2.5 rounded-xl bg-white hover:bg-gray-100 border border-gray-300 text-[#111317] font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#B88E10]" />
                  <span>Call {companyInfo.phone}</span>
                </a>
              </div>

            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
