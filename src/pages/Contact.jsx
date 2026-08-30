import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  ExternalLink,
  Sparkles,
  Building
} from 'lucide-react';
import { companyInfo } from '../data/companyData';
import { siteImages } from '../data/images';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Luxury Residential Villa',
    location: '',
    budget: 'Flexible / To be Estimated',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypeOptions = [
    'Luxury Residential Villa',
    'Contemporary Independent Home',
    'Commercial Building',
    'Architectural 3D & Planning',
    'Turnkey Interior Design',
    'Renovation & Remodeling'
  ];

  const budgetOptions = [
    '₹30 Lakhs – ₹50 Lakhs',
    '₹50 Lakhs – ₹1 Crore',
    '₹1 Crore – ₹2.5 Crores',
    '₹2.5 Crores+',
    'Flexible / To be Estimated'
  ];

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const constructWhatsAppInquiry = () => {
    const lines = [
      `*🏛️ NEW PROJECT INQUIRY - LEE CONSTRUCTION*`,
      `━━━━━━━━━━━━━━━━━━━━━━━`,
      `*👤 Client Name:* ${formState.name || 'Client'}`,
      `*📞 Phone:* ${formState.phone || 'Not provided'}`,
      formState.email ? `*✉️ Email:* ${formState.email}` : null,
      `*📍 Site Location:* ${formState.location || 'Thoothukudi'}`,
      `*🏗️ Project Type:* ${formState.projectType}`,
      `*💰 Estimated Budget:* ${formState.budget}`,
      formState.message ? `*📝 Scope / Requirements:*\n${formState.message}` : null,
      `━━━━━━━━━━━━━━━━━━━━━━━`,
      `_Sent via Lee Construction Official Website_`
    ].filter(Boolean).join('\n');

    return `https://wa.me/919025092805?text=${encodeURIComponent(lines)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Trigger celebration confetti
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#B88E10', '#111317', '#8C621E', '#25D366']
    });

    const targetUrl = constructWhatsAppInquiry();

    // Directly open WhatsApp in new tab / app
    window.open(targetUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };


  return (
    <div className="relative min-h-screen bg-[#FAFAF8] text-[#111317]">
      
      {/* ========================================================= */}
      {/* 1. CONTACT HERO                                           */}
      {/* ========================================================= */}
      <section className="relative min-h-[55vh] lg:min-h-[65vh] flex items-center justify-center overflow-hidden bg-[#FAFAF8] border-b border-[#D4AF37]/20">
        
        {/* Background Image */}
        <motion.div 
          initial={{ scale: 1.05 }}
          animate={{ scale: 1.12 }}
          transition={{ duration: 18, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={siteImages.heroContact}
            alt="Lee Construction Contact Us"
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
            <span>CONNECT WITH LEE CONSTRUCTION</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury"
          >
            LET'S BUILD SOMETHING <br />
            <span className="gold-gradient-text">EXCEPTIONAL.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#4A515D] text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-medium"
          >
            Reach out to our architectural and engineering team in Thoothukudi to schedule an initial project consultation or site review.
          </motion.p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. DIRECT ACTION TILES                                    */}
      {/* ========================================================= */}
      <section className="relative py-16 border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Phone Card */}
            <a
              href={`tel:${companyInfo.phoneRaw}`}
              className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 group shadow-sm flex items-start gap-4 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center text-[#B88E10] group-hover:bg-[#D4AF37] group-hover:text-black transition-all shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#B88E10] uppercase tracking-wider block font-bold">Direct Phone</span>
                <span className="text-base font-bold text-[#111317] font-mono block group-hover:text-[#B88E10] transition-colors">{companyInfo.phone}</span>
                <span className="text-xs text-[#7B8494] block font-medium">Mon – Sat: 9:30 AM – 7:30 PM</span>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={companyInfo.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#25D366]/35 hover:border-[#25D366] transition-all duration-300 group shadow-sm flex items-start gap-4 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 flex items-center justify-center text-[#0F5B2E] group-hover:bg-[#25D366] group-hover:text-white transition-all shrink-0">
                <MessageSquare className="w-5 h-5 fill-current" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#0F5B2E] uppercase tracking-wider block font-bold">WhatsApp Desk</span>
                <span className="text-base font-bold text-[#111317] block group-hover:text-[#0F5B2E] transition-colors">+91 90250 92805</span>
                <span className="text-xs text-[#7B8494] block font-medium">Instant Chat & Drawings Review</span>
              </div>
            </a>

            {/* Office Location Card */}
            <a
              href={companyInfo.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-[#FAFAF8] border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-300 group shadow-sm flex items-start gap-4 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center text-[#B88E10] group-hover:bg-[#D4AF37] group-hover:text-black transition-all shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-[#B88E10] uppercase tracking-wider block font-bold">Head Office</span>
                <span className="text-sm font-bold text-[#111317] block group-hover:text-[#B88E10] transition-colors">Thoothukudi, Tamil Nadu</span>
                <span className="text-xs text-[#7B8494] block font-medium">Matha Koil, 628001</span>
              </div>
            </a>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. MAIN INTERACTIVE FORM & MAP SPLIT                      */}
      {/* ========================================================= */}
      <section className="relative py-24 border-b border-[#D4AF37]/20 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* LEFT: Project Inquiry Form (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8C621E] text-xs font-mono tracking-widest uppercase font-bold">
                  <span>START A CONVERSATION</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury">
                  PROJECT INQUIRY & <span className="gold-gradient-text">CONSULTATION</span>
                </h2>
                <p className="text-xs sm:text-sm text-[#555D6B]">
                  Fill out the project scope below. Our architectural lead will respond with structural guidance within 24 hours.
                </p>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-white border border-[#D4AF37]/40 text-center space-y-4 shadow-xl"
                >
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/15 border border-[#25D366] flex items-center justify-center text-[#0F5B2E] mx-auto shadow-sm">
                    <MessageSquare className="w-7 h-7 fill-current" />
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wider text-[#111317]">
                    Inquiry Transmitted to WhatsApp!
                  </h3>
                  <p className="text-xs text-[#4A515D] max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-[#111317]">{formState.name}</span>. Your project details for <span className="text-[#B88E10] font-bold">{formState.projectType}</span> have been formatted and sent directly to our official WhatsApp chat.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={constructWhatsAppInquiry()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Re-open WhatsApp Chat</span>
                    </a>
                    
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3.5 rounded-xl bg-[#F5F4F0] hover:bg-[#EBE9E1] text-[#111317] font-bold text-xs uppercase tracking-wider border border-gray-300 cursor-pointer transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 p-8 rounded-3xl bg-white border border-[#D4AF37]/30 shadow-lg">
                  
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-[#111317] uppercase tracking-wider font-bold">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-gray-300 text-[#111317] placeholder-gray-400 text-xs focus:outline-none focus:border-[#B88E10] focus:ring-1 focus:ring-[#B88E10] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-[#111317] uppercase tracking-wider font-bold">Phone / WhatsApp Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formState.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-gray-300 text-[#111317] placeholder-gray-400 text-xs font-mono focus:outline-none focus:border-[#B88E10] focus:ring-1 focus:ring-[#B88E10] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email & Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-[#111317] uppercase tracking-wider font-bold">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="anand@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-gray-300 text-[#111317] placeholder-gray-400 text-xs focus:outline-none focus:border-[#B88E10] focus:ring-1 focus:ring-[#B88E10] transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-[#111317] uppercase tracking-wider font-bold">Project Location / Site *</label>
                      <input
                        type="text"
                        name="location"
                        required
                        value={formState.location}
                        onChange={handleChange}
                        placeholder="e.g. Thoothukudi / Tirunelveli"
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-gray-300 text-[#111317] placeholder-gray-400 text-xs focus:outline-none focus:border-[#B88E10] focus:ring-1 focus:ring-[#B88E10] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget Selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-[#111317] uppercase tracking-wider font-bold">Project Type</label>
                      <select
                        name="projectType"
                        value={formState.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-gray-300 text-[#111317] text-xs focus:outline-none focus:border-[#B88E10] focus:ring-1 focus:ring-[#B88E10] transition-colors"
                      >
                        {projectTypeOptions.map((opt, i) => (
                          <option key={i} value={opt} className="bg-white text-[#111317]">{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono text-[#111317] uppercase tracking-wider font-bold">Estimated Budget</label>
                      <select
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-gray-300 text-[#111317] text-xs focus:outline-none focus:border-[#B88E10] focus:ring-1 focus:ring-[#B88E10] transition-colors"
                      >
                        {budgetOptions.map((b, i) => (
                          <option key={i} value={b} className="bg-white text-[#111317]">{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Details */}
                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono text-[#111317] uppercase tracking-wider font-bold">Project Details / Requirements</label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Describe your plot dimensions, approximate square footage, architectural style preferences, or expected timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-[#FAFAF8] border border-gray-300 text-[#111317] placeholder-gray-400 text-xs focus:outline-none focus:border-[#B88E10] focus:ring-1 focus:ring-[#B88E10] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl gold-btn-gradient text-[#111317] font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-lg hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50"
                  >
                    <MessageSquare className="w-4 h-4 fill-current text-[#0F5B2E]" />
                    <span>{isSubmitting ? 'OPENING WHATSAPP...' : 'SUBMIT & OPEN IN WHATSAPP'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <p className="text-center text-[10px] font-mono text-[#7B8494]">
                    🔒 Direct submission opens WhatsApp with your pre-filled inquiry details for immediate response.
                  </p>

                </form>
              )}

            </div>

            {/* RIGHT: Embedded Google Map & Office Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-6 rounded-3xl bg-white border border-[#D4AF37]/30 space-y-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white p-1 border-2 border-[#D4AF37]/40 flex items-center justify-center shadow-sm">
                    <img src={siteImages.logo} alt="Lee Construction" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-wider text-[#111317]">LEE CONSTRUCTION</h3>
                    <p className="text-[10px] font-mono text-[#B88E10] font-bold">Where Innovation Meets Construction</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2 text-xs text-[#4A515D]">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#B88E10] shrink-0 mt-0.5" />
                    <p className="leading-relaxed font-medium text-[#111317]">
                      {companyInfo.address}
                    </p>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#B88E10] shrink-0" />
                    <a href={`tel:${companyInfo.phoneRaw}`} className="font-mono text-[#111317] hover:text-[#B88E10] font-bold transition-colors">
                      {companyInfo.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#B88E10] shrink-0" />
                    <span className="font-mono text-[#111317] font-semibold">{companyInfo.workingHours}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={companyInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-[#FAFAF8] hover:bg-[#F5F4F0] border border-[#D4AF37]/40 text-[#111317] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#B88E10]" />
                  </a>
                </div>
              </div>

              {/* Embedded Interactive Map */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#D4AF37]/35 shadow-xl bg-white">
                <iframe
                  title="Lee Construction Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.8687258385754!2d78.1492!3d8.8053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDgnMTkuMSJOIDc4wrAwOCc1Ny4xIkU!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
