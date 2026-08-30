// Central Image Configuration for Lee Construction
// Uses import.meta.env.BASE_URL for 100% compatibility with GitHub Pages, custom domains, and local preview.

const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const img = (name) => `${BASE}images/${name}`;

export const siteImages = {
  logo: img('logo.png'),
  
  // Hero & Banners
  heroMain: img('hero-arch.jpg'),
  heroAbout: img('hero-about.jpg'),
  heroContact: img('hero-contact.jpg'),
  ctaBanner: img('cta-banner.jpg'),
  
  // Section Highlights
  aboutIntro: img('about-intro.jpg'),
  aboutPhilosophy: img('about-philosophy.jpg'),
  aboutApproach: img('about-approach.jpg'),
  
  // Projects Showcase
  project1: img('project-01.jpg'),
  project2: img('project-02.jpg'),
  project3: img('project-03.jpg'),
  project4: img('project-04.jpg'),
  
  // Services
  serviceArch: img('service-arch.jpg'),
  serviceLuxury: img('service-luxury.jpg'),
  serviceContemporary: img('service-contemporary.jpg'),
  serviceCommercial: img('service-commercial.jpg'),
  serviceInterior: img('service-interior.jpg'),
  serviceTurnkey: img('service-turnkey.jpg'),
  service3D: img('service-3d.jpg'),
  serviceManagement: img('service-mgmt.jpg')
};

