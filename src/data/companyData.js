import { siteImages } from './images';

export const companyInfo = {

  name: "LEE CONSTRUCTION",
  tagline: "Where Innovation Meets Construction",
  shortTagline: "Where Innovation Meets Construction",
  heroSubtitle: "Architecture, Construction & Interiors Crafted With Precision.",
  shortDescription: "Lee Construction is a premium construction and architectural design company based in Thoothukudi, specializing in luxury homes, contemporary residences, commercial, interior design, and turnkey construction projects.",
  fullDescription: "Lee Construction is a premium construction and architectural design company based in Thoothukudi, specializing in luxury homes, contemporary residences, commercial, interior design, and turnkey construction projects. We provide complete services including architectural planning, 3D visualization, structural coordination, construction management, and interior execution. Our team is committed to quality workmanship, modern design, transparent communication, and timely project delivery. We work closely with clients to create functional, elegant, and customized spaces that match their vision and lifestyle. From planning and design to construction and finishing, we ensure attention to detail at every stage of the project.",
  
  address: "269/1, West Great Cotton Road, near Old Municipal Office, Matha Koil, Thoothukudi, Tamil Nadu 628001, India",
  phone: "090250 92805",
  phoneRaw: "+919025092805",
  email: "contact@leeconstruction.in",
  workingHours: "Monday – Saturday: 9:30 AM – 7:30 PM",
  sundayHours: "Sunday: Closed",
  
  googleMapsUrl: "https://share.google/uQkE7YSmwFsfOiMPl?utm_source=chatgpt.com",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.863152864356!2d78.1492!3d8.8053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b03ee66580f4f9f%3A0xb35a092805!2sWest%20Great%20Cotton%20Rd%2C%20Thoothukudi%2C%20Tamil%20Nadu%20628001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  
  whatsAppMessage: "Hello Lee Construction, I would like to discuss a construction / architectural project. Please share more details.",
  get whatsAppLink() {
    return `https://wa.me/919025092805?text=${encodeURIComponent(this.whatsAppMessage)}`;
  }
};

export const corePillars = [
  {
    id: "quality",
    number: "01",
    title: "QUALITY",
    description: "Committed to dependable workmanship and refined finishing across every residential and commercial build.",
    icon: "ShieldCheck"
  },
  {
    id: "transparency",
    number: "02",
    title: "TRANSPARENCY",
    description: "Clear communication, transparent billing, and a straightforward project journey from start to handover.",
    icon: "Layers"
  },
  {
    id: "precision",
    number: "03",
    title: "PRECISION",
    description: "Meticulous structural coordination and architectural precision from structural planning to bespoke interior joinery.",
    icon: "Compass"
  },
  {
    id: "timely-delivery",
    number: "04",
    title: "TIMELY DELIVERY",
    description: "Structured project management milestones focused on disciplined and timely project handover.",
    icon: "Clock"
  }
];

export const servicesData = [
  {
    id: "architectural-design",
    number: "01",
    title: "Architectural Design",
    shortDesc: "Custom blueprints, modern architectural spatial layouts, and luxury residential elevations.",
    fullDesc: "Bespoke architectural design services tailored to tropical Tamil Nadu climates, functional family flows, and iconic modern elevations with sustainable materials.",
    icon: "DraftingCompass",
    image: siteImages.serviceArch,
    features: ["Custom Spatial Planning", "Elevations & Façades", "Site & Sunpath Analysis", "Vastu-Compliant Layouts"]
  },
  {
    id: "luxury-home-construction",
    number: "02",
    title: "Luxury Home Construction",
    shortDesc: "High-end bespoke villas and premium residential developments crafted with superior materials.",
    fullDesc: "Complete construction of signature luxury villas with high-strength structural engineering, earthquake-resistant design, and premium imported or heritage finishes.",
    icon: "Home",
    image: siteImages.serviceLuxury,
    features: ["Signature Villas", "Premium Foundation & RCC", "Waterproofing Standards", "High-End Stone & Wood Work"]
  },
  {
    id: "contemporary-residences",
    number: "03",
    title: "Contemporary Residences",
    shortDesc: "Sleek, minimalist residential builds balancing open architecture, natural light, and modern comfort.",
    fullDesc: "Distinctive contemporary homes featuring cantilevered roofs, glass-curtain facades, double-height living areas, and energy-conscious architectural ventilation.",
    icon: "Building2",
    image: siteImages.serviceContemporary,
    features: ["Minimalist Architecture", "Double-Height Atriums", "Natural Light Optimization", "Smart Home Ready"]
  },
  {
    id: "commercial-construction",
    number: "04",
    title: "Commercial Construction",
    shortDesc: "Robust corporate offices, retail spaces, showrooms, and commercial architectural landmarks.",
    fullDesc: "Turnkey commercial engineering for business establishments in Thoothukudi and Tamil Nadu with high load capacities, fire-safety compliance, and striking street presence.",
    icon: "Building",
    image: siteImages.serviceCommercial,
    features: ["Office Complexes & Retail", "Structural Steel & Concrete", "Acoustic & HVAC Provisions", "Regulatory Approvals"]
  },
  {
    id: "interior-design",
    number: "05",
    title: "Interior Design",
    shortDesc: "Refined spatial styling, custom modular kitchens, mood lighting, and bespoke luxury woodwork.",
    fullDesc: "Curated interior architecture delivering cohesive palettes, concealed ambient illumination, Italian marble and teak accents, and space-maximizing bespoke cabinetry.",
    icon: "Armchair",
    image: siteImages.serviceInterior,
    features: ["Bespoke Luxury Joinery", "Modular Kitchens & Wardrobes", "Architectural Lighting Schemes", "False Ceiling & Wall Finishes"]
  },
  {
    id: "turnkey-construction",
    number: "06",
    title: "Turnkey Construction",
    shortDesc: "Complete hassle-free project execution from blueprint approval to final key handover.",
    fullDesc: "Single-point accountability where we manage all permits, material procurement, structural coordination, interior finishing, and electrical/plumbing execution.",
    icon: "KeyRound",
    image: siteImages.serviceTurnkey,
    features: ["Single-Point Management", "Fixed Timelines & Cost Control", "Material Sourcing & Testing", "Zero-Hassle Handover"]
  },
  {
    id: "3d-visualization",
    number: "07",
    title: "3D Visualization",
    shortDesc: "Hyper-realistic 3D architectural renders, VR walkthroughs, and cinematic day/night lighting models.",
    fullDesc: "Photorealistic digital twins of your planned residence or commercial facility before a single brick is laid, allowing total clarity in design decision-making.",
    icon: "Eye",
    image: siteImages.service3D,
    features: ["Photorealistic Exterior Renders", "Interior Walkthrough Renders", "Material & Lighting Simulation", "Virtual Reality Preview"]
  },
  {
    id: "construction-management",
    number: "08",
    title: "Construction Management",
    shortDesc: "On-site quality supervision, structural coordination, safety audits, and milestone management.",
    fullDesc: "Rigorous construction engineering protocols ensuring concrete strength testing, MEP alignment, site safety standards, and strict milestone tracking.",
    icon: "CheckSquare",
    image: siteImages.serviceManagement,
    features: ["Civil Engineering Oversight", "Structural QA/QC Inspections", "Vendor & Material Audits", "Milestone Tracking"]
  }
];


export const processSteps = [
  {
    step: "01",
    title: "CONSULTATION",
    subtitle: "Vision & Site Analysis",
    description: "Understanding the client's vision, lifestyle needs, budget framework, and analyzing plot terrain and environmental context."
  },
  {
    step: "02",
    title: "DESIGN",
    subtitle: "Concept & 3D Modeling",
    description: "Developing custom architectural drawings, elevations, 3D photorealistic renderings, and spatial flow optimization."
  },
  {
    step: "03",
    title: "PLANNING",
    subtitle: "Engineering & Procurement",
    description: "Coordinating structural calculations, material specifications, bill of quantities (BOQ), and transparent execution timelines."
  },
  {
    step: "04",
    title: "CONSTRUCTION",
    subtitle: "Precision Site Execution",
    description: "Executing the structural build and civil engineering with continuous quality assurance, supervisor oversight, and milestone updates."
  },
  {
    step: "05",
    title: "FINISHING",
    subtitle: "Refinement & Handover",
    description: "Delivering polished interior joinery, testing all electrical/plumbing fixtures, comprehensive snag clearance, and turnkey key handover."
  }
];

export const testimonialsData = [
  {
    id: 1,
    quote: "Lee construction provides excellent quality work and professional service.",
    source: "Google Verified Review",
    projectType: "Residential Construction Project",
    rating: 5,
    location: "Thoothukudi"
  },
  {
    id: 2,
    quote: "The quality of work and commitment are impressive.",
    source: "Google Verified Review",
    projectType: "Architectural & Civil Build",
    rating: 5,
    location: "Tamil Nadu"
  },
  {
    id: 3,
    quote: "Working with Lee constructions was seamless from day one. Their attention to detail, clear communication, and commitment to quality made our build completely stress-free.",
    source: "Google Verified Review",
    projectType: "Custom Home Build",
    rating: 5,
    location: "Thoothukudi"
  },
  {
    id: 4,
    quote: "Such a nice and humble people out there. Guided us through all the process and informed everything they're upto right from the beginning.",
    source: "Google Verified Review",
    projectType: "Turnkey Residential Project",
    rating: 5,
    location: "Thoothukudi"
  }
];

export const projectsData = [
  {
    id: "project-01",
    number: "01",
    title: "Project 01",
    name: "The Grand Horizon Villa",
    category: "Luxury Residence",
    type: "Residential Villa",
    location: "Thoothukudi, Tamil Nadu",
    area: "4,800 Sq.Ft.",
    description: "A signature multi-level luxury residence blending contemporary rectilinear concrete framing with warm teak cladding, floor-to-ceiling glass expanses, and an elevated terrace garden.",
    image: siteImages.project1,
    gallery: [
      siteImages.project1,
      siteImages.project2,
      siteImages.serviceInterior
    ],
    highlights: ["Custom cantilevered architecture", "Double-height central living", "Private courtyard garden", "Integrated solar & rainwater harvesting"]
  },
  {
    id: "project-02",
    number: "02",
    title: "Project 02",
    name: "The Monolith Pavilion",
    category: "Contemporary Home",
    type: "Contemporary Residence",
    location: "Tamil Nadu",
    area: "3,650 Sq.Ft.",
    description: "Clean geometric volumes and minimalist luxury living. Engineered for maximum passive ventilation and ambient daylighting with curated stone textures and water features.",
    image: siteImages.project2,
    gallery: [
      siteImages.project2,
      siteImages.serviceContemporary
    ],
    highlights: ["Minimalist monolithic facade", "Natural stone & glass finishes", "Acoustic private suites", "Smart climate control integration"]
  },
  {
    id: "project-03",
    number: "03",
    title: "Project 03",
    name: "Aura Commercial Square",
    category: "Commercial Space",
    type: "Commercial Hub & Offices",
    location: "Thoothukudi, Tamil Nadu",
    area: "12,500 Sq.Ft.",
    description: "A prestigious commercial corporate building featuring high-span structural steel framing, structural glazing, optimized commercial floor plans, and grand entryway reception.",
    image: siteImages.project3,
    gallery: [
      siteImages.project3,
      siteImages.serviceCommercial
    ],
    highlights: ["High-visibility frontage", "Energy-efficient structural glass", "Multi-tenant flexible layouts", "Underground parking & high-speed elevators"]
  },
  {
    id: "project-04",
    number: "04",
    title: "Project 04",
    name: "The Velvet Teak Residence",
    category: "Interior Project",
    type: "Luxury Interior Styling & Execution",
    location: "Thoothukudi",
    area: "3,200 Sq.Ft.",
    description: "Comprehensive interior turnkey execution characterized by bespoke Italian marble flooring, fluted wall paneling, custom-built kitchen cabinetry, and layered lighting scenes.",
    image: siteImages.project4,
    gallery: [
      siteImages.project4,
      siteImages.serviceInterior,
      siteImages.aboutIntro
    ],
    highlights: ["Italian marble & fluted paneling", "Concealed LED architectural profiles", "Imported sanitaryware & brass fittings", "Hand-crafted modular storage"]
  }
];


export const companyStatsPlaceholder = [
  {
    label: "Quality Craftsmanship",
    value: "100%",
    subtext: "Standard of Engineering & Finishing",
    isPlaceholder: false
  },
  {
    label: "Architectural Focus",
    value: "End-to-End",
    subtext: "Design to Handover Services",
    isPlaceholder: false
  },
  {
    label: "Customer Commitment",
    value: "Transparent",
    subtext: "Communication & Real-time Updates",
    isPlaceholder: false
  },
  {
    label: "Service Footprint",
    value: "Thoothukudi & TN",
    subtext: "Serving Regional & Coastal Locations",
    isPlaceholder: false
  }
];
