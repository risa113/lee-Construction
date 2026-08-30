import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Eye, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/companyData';
import ProjectModal from '../ui/ProjectModal';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="relative py-24 lg:py-32 bg-[#FAFAF8] text-[#111317] border-b border-[#D4AF37]/20 overflow-hidden">
      
      {/* Background Grid Pattern & Ambient Gold Lighting */}
      <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-gray-200 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#8C621E] text-xs font-mono tracking-widest uppercase font-bold">
              <Sparkles className="w-3.5 h-3.5 text-[#B88E10]" />
              <span>04 / PORTFOLIO HIGHLIGHTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#111317] font-serif-luxury">
              SELECTED <span className="gold-gradient-text">WORK.</span>
            </h2>
          </div>
          <p className="text-[#555D6B] text-xs sm:text-sm max-w-md leading-relaxed font-normal">
            A curated showcase of luxury villas, contemporary residences, and commercial developments engineered to distinction.
          </p>
        </div>

        {/* Project Grid / Showcase Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl bg-white border border-[#D4AF37]/30 hover:border-[#D4AF37] overflow-hidden transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_50px_rgba(184,142,16,0.2)] flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Image Container with Editorial Aspect Ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-100 contrast-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-[#111317] gold-btn-gradient px-3 py-1 rounded-md shadow-md uppercase tracking-wider">
                    {project.title}
                  </span>
                  <span className="text-xs font-mono text-white bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                    {project.category}
                  </span>
                </div>

                {/* Hover Trigger "VIEW PROJECT" */}
                <div className="absolute bottom-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl gold-btn-gradient text-[#111317] font-bold text-xs uppercase tracking-wider shadow-2xl">
                    <span>VIEW PROJECT</span>
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Bottom Content Bar */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold uppercase tracking-wide text-[#111317] group-hover:text-[#B88E10] transition-colors">
                    {project.name}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-[#8E96A4] group-hover:text-[#B88E10] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>

                <p className="text-xs text-[#555D6B] line-clamp-2 leading-relaxed group-hover:text-[#2B303A] transition-colors">
                  {project.description}
                </p>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-[#555D6B]">
                  <span className="flex items-center gap-1 text-[#111317] font-bold">
                    <MapPin className="w-3.5 h-3.5 text-[#B88E10]" />
                    {project.location}
                  </span>
                  <span className="text-[#B88E10] font-bold">{project.area}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Project Replacement Advisory Tag */}
        <div className="mt-12 text-center">
          <p className="text-[11px] font-mono text-[#7B8494] max-w-xl mx-auto">
            * Showcase demonstrates architectural layout styling. High-resolution photos of completed builds will seamlessly update here upon client submission.
          </p>
        </div>

      </div>

      {/* Project Lightbox Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
