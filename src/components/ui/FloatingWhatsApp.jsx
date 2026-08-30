import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send } from 'lucide-react';
import { companyInfo } from '../../data/companyData';
import { siteImages } from '../../data/images';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Mini popup card when opened */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 15 }}
            transition={{ duration: 0.2 }}
            className="mb-4 w-80 rounded-2xl bg-white border border-[#D4AF37]/40 shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-4 text-[#111317] backdrop-blur-2xl relative overflow-hidden"
          >
            {/* Architectural grid background */}
            <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />

            <div className="flex items-center justify-between pb-3 border-b border-gray-100 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-white p-1 border-2 border-[#D4AF37]/40 flex items-center justify-center shadow-sm">
                    <img 
                      src={siteImages.logo} 
                      alt="Lee Construction" 
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#111317]">
                    Lee Construction
                  </h4>
                  <p className="text-[10px] text-[#0F5B2E] font-mono font-bold">
                    Online • Architectural Lead
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md text-gray-400 hover:text-[#111317] hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="py-3 text-xs text-[#4A515D] space-y-2 relative z-10">
              <div className="p-3 rounded-xl bg-[#FAF8F2] border border-[#D4AF37]/25 leading-relaxed text-[11px] font-medium">
                👋 <span className="font-bold text-[#111317]">Vanakkam!</span> Welcome to Lee Construction. How can we assist with your architectural design or construction project today?
              </div>
            </div>

            <a
              href={companyInfo.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all uppercase tracking-wider cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating trigger button with gold aura */}
      <div className="relative group">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.55)] transition-all border-2 border-white/50 cursor-pointer"
          aria-label="Chat on WhatsApp"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 fill-current" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#D4AF37] ring-2 ring-[#25D366] animate-ping" />
          </div>
          <span className="text-xs font-black tracking-wider uppercase hidden sm:inline-block">
            WhatsApp Us
          </span>
        </motion.button>
      </div>
    </div>
  );
}
