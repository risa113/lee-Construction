import React from 'react';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyLeeSection from '../components/home/WhyLeeSection';
import ProjectsSection from '../components/home/ProjectsSection';
import ProcessSection from '../components/home/ProcessSection';
import ReviewsSection from '../components/home/ReviewsSection';
import CtaBanner from '../components/home/CtaBanner';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <WhyLeeSection />
      <ProjectsSection />
      <ProcessSection />
      <ReviewsSection />
      <CtaBanner />
    </div>
  );
}
