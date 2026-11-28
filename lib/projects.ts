export type Project = {
  id: string;
  caseStudySlug: string;
  legacyIds?: string[];
  title: string;
  category: "Websites" | "Mobile Apps" | "Software";
  desc: string;
  overview: string;
  tags: string[];
  client: string;
  industry: string;
  timeline: string;
  deliverables: string[];
  img: string;
  heroImg: string;
  liveUrl?: string;
  status: "live" | "processing";
  tagline: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  results: string[];
};

export const projects: Project[] = [
  // ── WEBSITES ──
  {
    id: "brew-haven",
    caseStudySlug: "brew-haven",
    legacyIds: ["brew-heaven"],
    title: "Brew Haven",
    category: "Websites",
    tagline: "Artisanal Coffee & Gourmet Digital Brand Experience",
    desc: "An immersive digital storefront and brand platform for an artisanal coffee roastery, engineered to boost online customer orders and convey craft quality.",
    overview: "Brew Haven came to PixoraSoftTech with a mission to translate their physical roastery passion into a seamless digital journey. We created a modern web platform featuring interactive origin maps, freshly roasted bean subscriptions, seasonal drink menus, and a frictionless online purchasing funnel.",
    tags: ["Next.js", "Tailwind CSS", "Coffee Brand", "E-Commerce"],
    client: "Concept project",
    industry: "Hospitality & Specialty Coffee",
    timeline: "4 weeks",
    deliverables: [
      "Custom Brand & UI System",
      "E-commerce Ordering Portal",
      "Automated Email Confirmation Journeys",
      "Speed-Optimized Next.js Frontend"
    ],
    img: "/case_studies/brew_haven_web/brew_haven_about_web_01_updated.png",
    heroImg: "/case_studies/brew_haven_web/brew_haven_about_web_01_updated.png",
    liveUrl: "https://brew-haven-beta.vercel.app/",
    status: "live",
    challenge: "Brew Haven suffered from low digital engagement and a high abandonment rate during online checkout. Their previous website failed to reflect their premium craft identity and lacked real-time order customisation options for retail bean buyers.",
    solution: "We rearchitected the web application using Next.js and Tailwind CSS with custom micro-animations. We implemented a step-by-step custom bean selector, dynamic roast strength indicators, and an optimized single-page checkout flow connected directly to their inventory POS.",
    keyFeatures: [
      "Interactive Coffee Origin & Roast Profile Selector",
      "Seamless Subscription & One-Time Ordering System",
      "Responsive Visual Storytelling & Micro-Animations",
      "Integrated Point of Sale & Inventory Sync"
    ],
    results: []
  },
  {
    id: "kb-exports",
    caseStudySlug: "kb-exports",
    title: "K.B. Exports",
    category: "Websites",
    tagline: "Global B2B Textile Export & Trade Platform",
    desc: "An authoritative B2B corporate export platform highlighting textile manufacturing capabilities, international certifications, and bulk buyer RFQ portals.",
    overview: "K.B. Exports is a global textile manufacturer supplying high-volume fabrics and garments to North American and European markets. PixoraSoftTech developed an end-to-end digital export hub showcasing yarn quality, factory capacity, ISO certifications, and direct inquiry management.",
    tags: ["React", "Textile Manufacturing", "B2B Trade Portal", "Next.js"],
    client: "K.B. Exports Textile Group",
    industry: "Textile & Garment Manufacturing",
    timeline: "5 weeks",
    deliverables: [
      "B2B Corporate Export Platform",
      "Interactive Fabric & Garment Catalog",
      "Automated RFQ Inquiry Engine",
      "Global Trade Compliance Showcase"
    ],
    img: "/case_studies/kb_exports_web/kb_exports_work_web_02.png",
    heroImg: "/case_studies/kb_exports_web/kb_exports_hero_web_01.png",
    liveUrl: "https://kb-exports-textile.vercel.app/",
    status: "live",
    challenge: "International trade buyers found it difficult to inspect fabric specifications and submit custom RFQs (Request for Quotation). The legacy site lacked technical product cataloging, resulting in slow sales communications and missed buyer leads.",
    solution: "We developed a structured B2B web application with a searchable fabric matrix, downloadable technical spec sheets, verified certification badges, and an automated multi-step buyer inquiry routing system.",
    keyFeatures: [
      "Comprehensive Fabric & Yarn Specification Matrix",
      "Multi-Tiered RFQ & Bulk Sample Ordering Portal",
      "ISO & International Sustainability Certification Hub",
      "Multi-Currency & Regional Buyer Contact Routing"
    ],
    results: []
  },
  {
    id: "eduka-college",
    caseStudySlug: "eduka-college",
    title: "Eduka College",
    category: "Websites",
    tagline: "Modern Academic Portal & Student Enrollment Hub",
    desc: "A unified academic institute platform featuring dynamic course directories, faculty portals, scholarship pathways, and digital student admission workflows.",
    overview: "Eduka College required a complete digital transformation to streamline prospective student inquiries, present 40+ degree programs, and provide current students with instant access to academic announcements and campus portals.",
    tags: ["Next.js", "Education", "CMS", "Student Portal"],
    client: "Eduka College",
    industry: "Higher Education",
    timeline: "6 weeks",
    deliverables: [
      "Full Academic Institute Portal",
      "Online Student Admission System",
      "Interactive Campus Event Calendar",
      "WCAG 2.1 AA Accessible Web Interface"
    ],
    img: "/case_studies/eduka_college_web/eduka_college_showcase_web_01.png",
    heroImg: "/case_studies/eduka_college_web/eduka_college_hero_web_01.png",
    liveUrl: "https://eduka-college.vercel.app/",
    status: "live",
    challenge: "Prospective applicants experienced confusion navigating complex course requirements and paper-based application forms. Admissions staff spent hundreds of hours manually processing student inquiries and documents.",
    solution: "We built an accessible, fast-loading Next.js platform equipped with an intuitive course finder, digital application workflow with document upload, interactive campus tours, and dynamic news/events integration.",
    keyFeatures: [
      "Interactive Course & Department Filter System",
      "Digital Student Admissions & Document Submission",
      "Faculty & Department Directory with Office Hours",
      "Student Scholarship & Financial Aid Calculator"
    ],
    results: []
  },
  {
    id: "glass-haven",
    caseStudySlug: "glass-haven",
    title: "Glass Haven",
    category: "Websites",
    tagline: "Luxury Real Estate Showcase & Private Tour Platform",
    desc: "An exclusive digital real estate experience featuring high-definition property galleries, architectural floorplans, and private viewing booking.",
    overview: "Glass Haven represents ultra-luxury architectural residences. PixoraSoftTech designed a high-end web destination engineered to evoke luxury, exclusivity, and sophistication for high-net-worth property buyers.",
    tags: ["Next.js", "Luxury Real Estate", "Framer Motion", "3D Views"],
    client: "Glass Haven Luxury Real Estate",
    industry: "Luxury Real Estate & Development",
    timeline: "5 weeks",
    deliverables: [
      "Luxury Real Estate Portal",
      "Interactive Property Showcase Engine",
      "Private Concierge Tour Booking",
      "Mobile-Optimized Luxury UI/UX"
    ],
    img: "/case_studies/glass_haven_web/glass_haven_work_web_02.png",
    heroImg: "/case_studies/glass_haven_web/glass_haven_hero_web_01.png",
    liveUrl: "https://glass-haven.vercel.app/",
    status: "live",
    challenge: "Standard real estate platforms failed to capture the architectural elegance and premium price point of Glass Haven properties, resulting in unpromising lead quality and lack of private tour engagement.",
    solution: "We crafted a full-bleed cinematic web layout featuring ultra-crisp image galleries, interactive floorplan viewer, neighborhood amenity maps, and a VIP private tour booking portal integrated with agent calendars.",
    keyFeatures: [
      "Full-Bleed High-Definition Property Galleries",
      "Interactive 2D & 3D Floorplan Explorer",
      "VIP Private Tour Scheduling & Agent Sync",
      "Curated Luxury Neighborhood & Lifestyle Guides"
    ],
    results: []
  },
  {
    id: "solar-solutions",
    caseStudySlug: "solar-solutions",
    title: "Solar Solutions",
    category: "Websites",
    tagline: "Clean Energy Transition & Commercial Solar Platform",
    desc: "A high-converting renewable energy website equipped with an interactive solar ROI calculator, installation process guides, and instant quote generation.",
    overview: "Solar Solutions empowers homeowners and businesses to transition to renewable solar energy. PixoraSoftTech developed an educational, trust-building web application designed to simplify solar adoption and capture qualified customer leads.",
    tags: ["React", "Clean Energy", "Lead Generation", "Calculator API"],
    client: "Solar Solutions Energy",
    industry: "Renewable Energy & Solar Installation",
    timeline: "4 weeks",
    deliverables: [
      "Lead Generation Web Platform",
      "Dynamic Solar ROI Calculator Engine",
      "Interactive Installation Workflow Guide",
      "Customer Portal Integration"
    ],
    img: "/case_studies/solar_solutions_web/solar_solutions_work_web_02.png",
    heroImg: "/case_studies/solar_solutions_web/solar_solutions_hero_web_01.png",
    liveUrl: "https://solar-solutions-psi.vercel.app/",
    status: "live",
    challenge: "Potential solar customers found technical jargon and quote estimation confusing, causing high drop-off rates on lead capture forms and long sales cycles.",
    solution: "We created an intuitive web experience featuring a dynamic Solar Savings Calculator, interactive 4-step installation workflow breakdown, verified customer ROI case studies, and a 2-minute instant quote builder.",
    keyFeatures: [
      "Interactive Roof & Energy Savings Calculator",
      "Instant Residential & Commercial Quote Builder",
      "Comprehensive Project Portfolio & Case Studies",
      "Customer Review & Warranty Documentation Hub"
    ],
    results: []
  },
  {
    id: "state-college",
    caseStudySlug: "state-college",
    title: "State College",
    category: "Websites",
    tagline: "University Digital Campus & Resource Infrastructure",
    desc: "A scalable, accessible public university platform featuring academic program search, financial aid portals, news publication, and campus services.",
    overview: "State College serves over 15,000 enrolled students and faculty. PixoraSoftTech re-engineered the institution’s core web infrastructure to deliver fast, mobile-friendly access to academic resources, research publications, and administrative forms.",
    tags: ["Next.js", "University", "Academic", "WCAG 2.1"],
    client: "State College Higher Ed",
    industry: "Higher Education & Research",
    timeline: "6 weeks",
    deliverables: [
      "Enterprise University Web Platform",
      "Unified Academic Department Framework",
      "Accessible UI Component Library",
      "Content Management System Infrastructure"
    ],
    img: "/case_studies/state_college_web/state_college_work_web_02.png",
    heroImg: "/case_studies/state_college_web/state_college_hero_web_01.png",
    liveUrl: "https://state-college.vercel.app/",
    status: "live",
    challenge: "The university’s legacy site was fragmented across departments, suffered slow server response times, and failed WCAG accessibility compliance standards for disabled users.",
    solution: "We consolidated department sites into a clean, modern Next.js ecosystem featuring global semantic search, WCAG 2.1 AA accessible navigation, centralized scholarship directories, and automated news feed management.",
    keyFeatures: [
      "Global Semantic Search for Courses & Campus Resources",
      "Fully Accessible (WCAG 2.1 AA Compliant) Design System",
      "Unified Scholarship & Financial Aid Search Hub",
      "Integrated Campus News, Events & Press Portal"
    ],
    results: []
  },
  {
    id: "zostel",
    caseStudySlug: "zostel",
    title: "Zostel",
    category: "Websites",
    tagline: "Youth Hostel Booking & Backpacker Travel Community",
    desc: "A dynamic travel booking platform showcasing hostel locations, community experiences, live room availability, and direct booking engines.",
    overview: "Zostel is a prominent hostel chain for backpackers and millennial travelers. PixoraSoftTech built a high-energy travel web app that promotes community events while driving direct commission-free hostel bookings.",
    tags: ["Next.js", "Travel", "Booking Engine", "Maps"],
    client: "Zostel Hospitality",
    industry: "Travel & Youth Hospitality",
    timeline: "6 weeks",
    deliverables: [
      "Travel & Hostel Booking Platform",
      "Multi-Property Inventory Management UX",
      "Community Event Publishing Hub",
      "Payment Gateway Integration"
    ],
    img: "/case_studies/zostel_web/zostel_hero_web_01_updated.png",
    heroImg: "/case_studies/zostel_web/zostel_hero_web_01_updated.png",
    liveUrl: "https://zostell-by-pixorasofttech.vercel.app/",
    status: "live",
    challenge: "Zostel relied heavily on third-party OTAs with high commission fees. They needed a direct booking site that felt as social, vibrant, and welcoming as staying in one of their hostels.",
    solution: "We developed a fast React/Next.js travel platform with interactive destination discovery maps, room category pickers, local activity calendars, and instant SMS/WhatsApp booking confirmations.",
    keyFeatures: [
      "Direct Multi-Property Room Booking Engine",
      "Interactive Destination Map & Experience Finder",
      "Hostel Community Event & Meetup Calendar",
      "Mobile-First Instant Checkout & Loyalty Sync"
    ],
    results: []
  },
  {
    id: "travel-hotel-hub",
    caseStudySlug: "travel-hotel-hub",
    title: "Travel Hotel Hub",
    category: "Websites",
    tagline: "Curated Destination Travel & Boutique Hotel Engine",
    desc: "An inspiration-led travel discovery platform connecting travelers with curated resort packages, boutique hotels, and excursion bookings.",
    overview: "Travel Hotel Hub pairs wanderlust content with seamless hotel booking. PixoraSoftTech designed a visual travel destination platform engineered to captivate visitors and streamline trip planning from inspiration to reservation.",
    tags: ["React", "Boutique Hotels", "Travel Packages", "Multi-Currency"],
    client: "Travel Hotel Hub Group",
    industry: "Travel & Hospitality",
    timeline: "5 weeks",
    deliverables: [
      "Travel & Hotel Discovery Website",
      "Curated Package Showcase System",
      "Responsive Booking Flow Engine",
      "Multi-Language & Currency Interface"
    ],
    img: "/case_studies/travel_hotel_web/travel_hotel_work_web_01.png",
    heroImg: "/case_studies/travel_hotel_web/travel_hotel_hero_web_01.png",
    liveUrl: "https://travel-hotel-hub.vercel.app/",
    status: "live",
    challenge: "High website bounce rates due to cluttered destination layouts and complicated multi-page hotel checkout forms that frustrated mobile visitors.",
    solution: "We redesigned the platform with rich destination photography cards, filtered hotel package discovery, dynamic itinerary previews, and a 3-step checkout with instant currency conversion.",
    keyFeatures: [
      "Curated Travel Itinerary & Package Builder",
      "Boutique Hotel & Resort Rating & Filter Matrix",
      "Multi-Currency & Real-Time Availability Sync",
      "Frictionless 3-Step Reservation Journey"
    ],
    results: []
  },
  {
    id: "goody-supplies",
    caseStudySlug: "goody-supplies",
    title: "Goody Supplies",
    category: "Websites",
    tagline: "Gourmet Catering & Corporate Event Food Service",
    desc: "A modern catering showcase platform enabling corporate clients and event planners to customize menus and request direct quotes.",
    overview: "Goody Supplies provides premium culinary services for corporate events and weddings. PixoraSoftTech created an appetizing digital storefront showcasing artisanal menus, dietary customization options, and instant event budgeting.",
    tags: ["React", "Catering Service", "Event Packages", "Quote Generator"],
    client: "Goody Catering & Supplies",
    industry: "Catering & Event Hospitality",
    timeline: "4 weeks",
    deliverables: [
      "Gourmet Catering Web Platform",
      "Interactive Menu Builder UI",
      "Event Budget Estimation Engine",
      "Automated Client Quote Pipeline"
    ],
    img: "/case_studies/goody_supplies_web/goody_supplies_about_web_03.png",
    heroImg: "/case_studies/goody_supplies_web/goody_supplies_hero_web_01.png",
    liveUrl: "https://goody-supplies-by-pixorasofttech.vercel.app/",
    status: "live",
    challenge: "Goody Supplies struggled to convey their premium presentation online, and event planners had difficulty calculating budget estimates for large guest lists.",
    solution: "We built a custom catering application featuring high-resolution food presentation galleries, interactive per-head cost calculators, dietary preference tags, and direct event planner booking forms.",
    keyFeatures: [
      "Interactive Per-Head Catering Budget Calculator",
      "Customizable Menu & Dietary Requirement Selection",
      "Corporate Event Gallery & Client Case Studies",
      "Instant PDF Quote Generation & Planner Inquiry"
    ],
    results: []
  },

  // ── MOBILE APPS ──
  {
    id: "rider-app",
    caseStudySlug: "rider-app",
    title: "Driven Mobility App",
    category: "Mobile Apps",
    tagline: "Next-Gen On-Demand Urban Mobility & Driver Fleet App",
    desc: "A sleek, dark-themed ride booking and urban mobility mobile application featuring real-time GPS vehicle tracking, driver matching, dynamic fare estimation, and digital payments.",
    overview: "Driven Mobility is an on-demand mobility platform engineered to redefine urban transit with rapid driver matching, real-time map telemetry, transparent fare pricing, and fleet logistics coordination. PixoraSoftTech built the cross-platform mobile experience using React Native, WebSockets, and mapping APIs.",
    tags: ["React Native", "Maps Telemetry", "WebSockets", "Stripe API", "Driver Matching"],
    client: "Driven Mobility Network",
    industry: "Mobility, Fleet & Transportation",
    timeline: "Completed & Beta Testing",
    deliverables: [
      "Cross-Platform Mobile Applications (iOS & Android)",
      "Real-Time Vehicle GPS Telemetry & Dispatch Engine",
      "Driver Matching & Trip Routing System",
      "In-App Digital Wallet & Multi-Payment Integration"
    ],
    img: "/case_studies/driven_app/driven_hero_app_01.png",
    heroImg: "/case_studies/driven_app/driven_hero_app_01.png",
    status: "processing",
    challenge: "Building a mobile application with driver lookup, smooth real-time map telemetry, and secure in-app payments across iOS and Android.",
    solution: "We architected lightweight mobile client apps backed by WebSocket connections, optimized vector map rendering, automatic fare estimation algorithms, and integrated Stripe/Apple Pay gateways.",
    keyFeatures: [
      "Driver Matching & Automated Dispatch Workflow",
      "Live Interactive Vector Map with Real-Time Vehicle Telemetry",
      "Upfront Dynamic Fare Calculation & Multi-Payment Gateway Support",
      "In-App Safety Controls, Driver Rating & Trip Sharing Modules"
    ],
    results: []
  },
  {
    id: "veloura",
    caseStudySlug: "veloura",
    title: "Veloura Salon App",
    category: "Mobile Apps",
    tagline: "Salon discovery, appointment booking, and client care in one app",
    desc: "A mobile salon experience for discovering beauty services, choosing a stylist, booking appointments, and keeping track of upcoming visits.",
    overview: "Veloura makes salon visits easier to plan. Clients can explore services, compare stylist availability, book a suitable time, and keep appointment details together in a clear mobile experience.",
    tags: ["Mobile App", "Salon Booking", "Beauty Services", "Stylist Discovery", "Appointment Management"],
    client: "Veloura",
    industry: "Beauty, Wellness & Salon Services",
    timeline: "Mobile App Case Study",
    deliverables: [
      "Mobile salon discovery and service browsing",
      "Stylist profiles and availability",
      "Appointment booking and visit details",
      "Client account and appointment management"
    ],
    img: "/case_studies/salon_app/salon_showcase_app_29.png",
    heroImg: "/case_studies/salon_app/salon_showcase_app_29.png",
    status: "processing",
    challenge: "Clients needed a straightforward way to find salon services, choose a stylist, and book appointments without juggling calls and messages.",
    solution: "Veloura brings salon service discovery, stylist information, appointment selection, and booking details into one mobile flow.",
    keyFeatures: [
      "Browse salon services and treatments",
      "Explore stylist profiles and availability`",
      "Choose appointment dates and times",
      "Review upcoming booking details"
    ],
    results: []
  },
  {
    id: "catering-app",
    caseStudySlug: "catering-app",
    title: "Catering & Event Food App",
    category: "Mobile Apps",
    tagline: "On-Demand Catering Discovery, Custom Menu Builder & Instant Event Quote App",
    desc: "A premium catering and event food mobile app connecting clients in Lahore, Pakistan with top caterers — featuring corporate, wedding, hi-tea, and birthday package browsing, live pricing, and instant custom quote generation.",
    overview: "Catering & Event Food App is a full-featured mobile marketplace built for Pakistan's catering industry. PixoraSoftTech developed a React Native app offering event-specific catering package discovery, detailed menu views with gallery and reviews, guest count configuration, and a guided 4-step custom quote flow — all with PKR live pricing.",
    tags: ["React Native", "Catering Marketplace", "Event Booking", "Custom Quote Flow", "Pakistan Market"],
    client: "Catering & Events Platform — Lahore, Pakistan",
    industry: "Food, Catering & Event Management",
    timeline: "Completed & Deployed",
    deliverables: [
      "React Native iOS & Android Mobile App",
      "Catering Package Discovery & Category Filter (Corporate, Wedding, Hi-Tea, Birthday)",
      "Package Detail Pages with Menu, Gallery & Verified Reviews",
      "4-Step Custom Quote Flow (Event Details → Menu → Add-ons → Review)"
    ],
    img: "/suppliers_food.png",
    heroImg: "/suppliers_food.png",
    status: "processing",
    challenge: "Event planners in Pakistan wasted hours calling multiple caterers to get quotes, compare menus, and confirm guest capacity — resulting in slow bookings and mismatched expectations.",
    solution: "We built a sleek React Native app featuring location-based caterer discovery, category filters (Corporate, Wedding, Hi-Tea, Birthday), detailed package pages with Overview/Menu/Gallery/Reviews tabs, and a seamless multi-step custom quote builder that captures event type, date, guest count, location, and special requirements.",
    keyFeatures: [
      "Location-Based Catering Discovery with Corporate, Wedding & Birthday Category Filters",
      "Package Detail Pages: Overview, Menu, Gallery & Customer Review Tabs",
      "Live PKR Per-Person Pricing with Minimum Guest Count & Delivery Availability",
      "4-Step Custom Quote Flow: Event Details → Menu Selection → Add-ons → Review & Submit"
    ],
    results: []
  },
  {
    id: "supplier-wholesale-app",
    caseStudySlug: "supplier-wholesale-app",
    title: "Supplier Wholesale Mobile App",
    category: "Mobile Apps",
    tagline: "B2B Wholesale Food Ordering App for Restaurants, Cafes & Commercial Kitchens",
    desc: "A smart wholesale food supply mobile application enabling restaurants, cafes, and commercial kitchens to order vegetables, dairy, meat, bakery, and pantry items with bulk pricing, weekly recurring orders, and scheduled delivery.",
    overview: "Supplier Wholesale Mobile App is a B2B food supply platform built for food businesses. PixoraSoftTech developed this Flutter application to digitize the wholesale ordering process for restaurants and commercial kitchens — replacing phone calls with structured weekly order templates, bulk tier pricing, product category browsing, and delivery scheduling.",
    tags: ["Flutter", "B2B Wholesale", "Food Supply", "Weekly Orders", "Bulk Pricing", "Restaurant App"],
    client: "Supplier Wholesale — B2B Food Platform",
    industry: "Wholesale Food Distribution & Restaurant Supply",
    timeline: "Completed & Live",
    deliverables: [
      "Flutter Cross-Platform iOS & Android App",
      "Product Category Browsing (Vegetables, Dairy, Meat, Beverages, Bakery, Pantry)",
      "Weekly Recurring Order Templates & Quick Re-order Engine",
      "Bulk Tier Pricing Display with Delivery Schedule Selector"
    ],
    img: "/suppliers.png",
    heroImg: "/suppliers.png",
    status: "processing",
    challenge: "Restaurant managers and commercial kitchen staff spent hours placing daily supply orders via phone or WhatsApp, leading to wrong quantities, missed deliveries, and no bulk pricing transparency.",
    solution: "We engineered a Flutter mobile app featuring product category grids (Vegetables, Dairy, Meat, Bakery, Pantry, Beverages), weekly order templates, bulk price-per-kg display, delivery schedule selection, and a one-tap Place Order flow — trusted by 5,000+ food businesses.",
    keyFeatures: [
      "Category Grid: Vegetables, Dairy, Meat, Beverages, Bakery & Pantry Browsing",
      "Weekly Kitchen Essentials Templates & Recurring Quick Re-order System",
      "Bulk Pricing Per KG with In-Stock Status & Quantity Box Selection",
      "Delivery Schedule Selector with Invoices & Order History Tracking"
    ],
    results: []
  },

  // ── SOFTWARE ──
  {
    id: "hrms",
    caseStudySlug: "hrms",
    title: "HRMS — Workforce Management System",
    category: "Software",
    tagline: "Staff records, attendance, schedules, and leave in one HR workspace",
    desc: "A human resources management system for organizing employee records, attendance, work schedules, and leave requests.",
    overview: "The HRMS brings employee profiles, attendance, shift scheduling, and leave tracking into one workforce management workspace. Managers can review staff coverage and activity, while employees can keep their work information current.",
    tags: ["Laravel", "Human Resources", "Employee Records", "Attendance", "Shift Scheduling", "Leave Management"],
    client: "Concept project",
    industry: "Human Resources & Workforce Operations",
    timeline: "",
    deliverables: [
      "Employee profile and staff record management",
      "Attendance check-in and check-out tracking",
      "Shift schedules and team coverage management",
      "Leave request and status tracking"
    ],
    img: "/case_studies/hrms_soft/hrms_about_soft_01.png",
    heroImg: "/case_studies/hrms_soft/hrms_hero_soft_01.png",
    status: "processing",
    challenge: "Employee information, attendance, shift coverage, and leave requests can be difficult to coordinate when they are spread across separate records and manual processes.",
    solution: "We designed an HR workspace that connects staff profiles with attendance, schedules, and leave tracking so managers can review workforce activity in one place.",
    keyFeatures: [
      "Employee profiles and staff directory",
      "Attendance check-in and check-out records",
      "Shift schedules and team coverage view",
      "Leave request tracking",
      "Workforce activity overview"
    ],
    results: []
  },
  {
    id: "messenger",
    caseStudySlug: "messenger",
    title: "Messenger Software",
    category: "Software",
    tagline: "Social Media Publishing & Automation Platform",
    desc: "A unified workspace for planning, reviewing, scheduling, and tracking social media content across connected platforms.",
    overview: "Messenger Software brings content creation, review queues, publishing schedules, automation controls, and platform activity into one coordinated workspace for social media teams.",
    tags: ["Social Media", "Content Publishing", "Automation", "Approval Workflows"],
    client: "PixoraSoftTech",
    industry: "Social Media & Digital Marketing",
    timeline: "Custom delivery",
    deliverables: [
      "Social Content Planning Workspace",
      "Review and Approval Queue",
      "Publishing Schedule and Automation Controls",
      "Cross-Platform Activity Dashboard"
    ],
    img: "/case_studies/messenger_soft/messenger_showcase_soft_10.png",
    heroImg: "/case_studies/messenger_soft/messenger_showcase_soft_10.png",
    status: "processing",
    challenge: "Social teams were coordinating drafts, approvals, publishing schedules, and platform activity across disconnected tools, making it difficult to keep campaigns consistent and visible.",
    solution: "We created a unified publishing command center with content review queues, scheduling controls, platform management, automation settings, and publishing activity tracking.",
    keyFeatures: [
      "Centralized Draft and Review Queues",
      "Scheduled Multi-Platform Publishing",
      "Automation and Approval Controls",
      "Published Content and Activity Tracking"
    ],
    results: []
  },
  {
    id: "inventory",
    caseStudySlug: "rms",
    title: "RMS — Store & Inventory Manager",
    category: "Software",
    tagline: "Enterprise Multi-Store Inventory & Retail Management Software (RMS)",
    desc: "An enterprise retail and store management platform offering real-time multi-location inventory tracking, purchase order receiving, stock consumption analytics, and supplier management.",
    overview: "RMS — Store & Inventory Manager gives retail networks and multi-store businesses complete control over stock flow, supplier purchase orders, and daily inventory balance. PixoraSoftTech engineered a web software system designed to prevent stockouts, automate PO receiving, and track multi-warehouse inventory valuation.",
    tags: ["Next.js", "PostgreSQL", "RMS Software", "Multi-Store Inventory", "Purchase Orders"],
    client: "Pixora Retail & Supply Logistics",
    industry: "Retail & Supply Chain Management",
    timeline: "Completed & Deployed",
    deliverables: [
      "RMS Centralized Inventory & Store Control Hub",
      "Supplier Management & Purchase Order Engine",
      "Low-Stock Threshold & Auto-Reorder Notifications",
      "Multi-Store Stock Transfer & Valuation Analytics"
    ],
    img: "/case_studies/rms_soft/rms_mobile_soft_01.png",
    heroImg: "/case_studies/rms_soft/rms_hero_soft_01.png",
    liveUrl: "https://rms.pixorasofttech.com",
    status: "live",
    challenge: "Multi-store retailers and distributors struggled with stockouts, delayed purchase orders, unverified supplier invoices, and lack of real-time visibility into multi-branch inventory balances.",
    solution: "We constructed an integrated RMS software platform featuring centralized inventory synchronization across stores, automated purchase order workflows, supplier performance tracking, and stock movement logs.",
    keyFeatures: [
      "Multi-Store Real-Time Inventory Control & Stock Valuation Hub",
      "Supplier Purchase Order Management & Goods Receiving Workflow",
      "Automated Low-Stock Thresholds & Reorder Warning Alerts",
      "Store-to-Store Stock Transfer Management & Audit History Logs",
      "Inventory Unit Cost & Supplier Margin Analytics Reporting"
    ],
    results: []
  },
  {
    id: "salon-pos",
    caseStudySlug: "salon",
    legacyIds: ["salon"],
    title: "Aurelle Salon POS & Management System",
    category: "Software",
    tagline: "Integrated Salon Point-of-Sale, Appointment & Customer CRM System",
    desc: "A complete salon management and POS software handling appointment scheduling, service packages, staff shift tracking, billing checkout, and automated client CRM records.",
    overview: "Aurelle Salon POS & Management System simplifies daily operations for beauty salons, barber shops, and spas. PixoraSoftTech developed a feature-rich desktop and tablet POS application built to streamline front-desk booking, inventory usage, staff commissions, and customer visit history.",
    tags: ["Laravel", "React", "POS Terminal", "Salon CRM", "Staff Attendance"],
    client: "Concept project",
    industry: "Beauty, Wellness & Salon Operations",
    timeline: "Completed & Production Ready",
    deliverables: [
      "Salon Touch POS Billing & Receipt Ticket Generator",
      "Multi-Stylist Appointment Calendar & Shift Manager",
      "Customer CRM with Spending History & WhatsApp Alerts",
      "Service & Package Catalog with Peak-Hour Pricing"
    ],
    img: "/case_studies/salon_soft/salon_about_soft_01_updated.png",
    heroImg: "/case_studies/salon_soft/salon_hero_soft_01.png",
    liveUrl: "https://salon.pixorasofttech.com",
    status: "live",
    challenge: "Salons suffered from double-booked appointments, unmonitored hair/beauty product consumption, manual staff commission calculation, and tedious daily sales reconciliation.",
    solution: "We engineered an all-in-one salon software featuring a visual appointment calendar, touch checkout for services and product packages, automated inventory consumption upon service completion, and employee attendance check-ins.",
    keyFeatures: [
      "Visual Stylist Calendar & Appointment Booking Matrix",
      "Touch-Screen POS Checkout for Services, Packages & Products",
      "Automatic Product Consumption (Color, Developer, Shampoo)",
      "Customer CRM with Visit History, Birthday Alerts & Discounts",
      "Staff Operations: Shifts, Attendance & Commission Tracking"
    ],
    results: []
  },
  {
    id: "crm",
    caseStudySlug: "crm",
    title: "CRM Sales System",
    category: "Software",
    tagline: "Visual Sales Pipeline & Automated Customer Growth Software",
    desc: "A high-performance sales CRM featuring customizable Kanban opportunity boards, automated email sequences, contact analytics, and revenue forecasting.",
    overview: "CRM Sales System equips sales teams with tools to close deals faster. PixoraSoftTech designed a high-velocity sales management software focusing on pipeline visibility, activity tracking, and deal conversion metrics.",
    tags: ["React", "Node.js", "MongoDB", "Kanban Board"],
    client: "Apex Sales Solutions",
    industry: "Sales Automation & CRM",
    timeline: "In active development",
    deliverables: [
      "Sales CRM Web Application",
      "Automated Email Sequence Engine",
      "Reporting & Revenue Analytics Module",
      "Role-Based Security & Lead Assignment Hub"
    ],
    img: "/case_studies/crm_soft/crm_about_soft_01.png",
    heroImg: "/case_studies/crm_soft/crm_hero_soft_01.png",
    status: "processing",
    challenge: "Sales reps lost track of qualified leads due to cluttered spreadsheets, lack of follow-up reminders, and poor visibility into team deal stages.",
    solution: "We constructed a modern React software platform with drag-and-drop Kanban deal boards, automated follow-up email triggers, call logging, and predictive monthly revenue forecasting.",
    keyFeatures: [
      "Drag-and-Drop Kanban Deal & Pipeline Board",
      "Automated Email Drip Sequences & Follow-up Reminders",
      "360-Degree Contact Activity & Communication History",
      "Predictive Revenue Analytics & Sales Team Leaderboards"
    ],
    results: []
  },
  {
    id: "dom",
    caseStudySlug: "delivery-dashboard",
    legacyIds: ["delivery-dashboard"],
    title: "Driven Fleet Operations & Admin Console",
    category: "Software",
    tagline: "Next-Gen Urban Mobility Operations, Driver Dispatch & Admin Management Console",
    desc: "An enterprise fleet operations and administration control panel powering the Driven Mobility platform — featuring live ride dispatch monitoring, driver payouts, customer support ticketing, safety alerts, and financial analytics.",
    overview: "Driven Mobility Admin Console is the central command center for managing driver fleets, rider support tickets, payment disbursements, and real-time urban mobility telemetry. PixoraSoftTech engineered this comprehensive software dashboard using React, Tailwind CSS, and WebSockets to provide operators with 360-degree control over fleet transactions, driver earnings, financial aid, and system health.",
    tags: ["React", "Node.js", "Fleet Operations", "Admin Console", "Payout Disbursements", "Driver Management"],
    client: "Driven Mobility Network",
    industry: "Urban Mobility & Fleet Operations",
    timeline: "Completed & Production Ready",
    deliverables: [
      "Enterprise Fleet & Driver Administration Console",
      "Real-Time Ride Dispatch Monitoring & Telemetry Hub",
      "Customer & Driver Support Ticketing System",
      "Financial Payouts, Earnings & Settlement Engine"
    ],
    img: "/case_studies/driven_soft/driven_work_soft_01.png",
    heroImg: "/case_studies/driven_soft/driven_hero_soft_01.png",
    status: "processing",
    challenge: "Mobility fleet managers needed a centralized administration dashboard to oversee thousands of live driver sessions, process weekly driver payouts, manage support escalation tickets, and resolve fare disputes in real time.",
    solution: "We constructed a high-velocity React & Tailwind admin control system equipped with real-time dispatch tracking, financial payout disbursement management, automated driver onboarding verification, and integrated customer/driver help center ticket routing.",
    keyFeatures: [
      "Centralized Driver & Rider Account Management Console",
      "Live Ride Dispatch Telemetry, Map Supervision & System Health Monitor",
      "Financial Settlement, Weekly Driver Payouts & Earnings Dashboard",
      "Help Center, Support Ticket Resolution & Safety Incident Management"
    ],
    results: []
  },
  {
    id: "lms",
    caseStudySlug: "textile-erp",
    legacyIds: ["textile-erp"],
    title: "Textile ERP & Production System",
    category: "Software",
    tagline: "Enterprise Textile Manufacturing, Fabric ERP & Loom Management System",
    desc: "A comprehensive cloud textile ERP system engineered for fabric mills and garment manufacturers featuring loom production tracking, yarn inventory, dye house batch management, and export order analytics.",
    overview: "Textile ERP & Production System streamlines the end-to-end manufacturing lifecycle for textile mills. PixoraSoftTech engineered an industrial management platform delivering real-time loom efficiency tracking, raw yarn inventory control, fabric quality inspection, and export order compliance.",
    tags: ["React", "Node.js", "Textile ERP", "Loom Analytics", "Yarn Inventory"],
    client: "Pixora Textile Mills Group",
    industry: "Textile Manufacturing & Industrial ERP",
    timeline: "Completed & Deployed",
    deliverables: [
      "Textile ERP Core Platform",
      "Real-Time Loom Efficiency Telemetry",
      "Yarn & Dye House Batch Tracking",
      "Export Order & RFQ Management System"
    ],
    img: "/case_studies/textile_erp_soft/textile_erp_work_soft_01.webp",
    heroImg: "/case_studies/textile_erp_soft/textile_erp_hero_soft_01.png",
    liveUrl: "https://textile.pixorasofttech.com",
    status: "live",
    challenge: "Textile manufacturing mills struggled with manual paper logbooks for loom efficiency, yarn stock discrepancies, unmonitored dye house batch wastage, and delayed export shipment tracking.",
    solution: "We constructed a specialized Textile ERP application providing real-time loom telemetry monitoring, automated yarn-to-fabric conversion tracking, chemical dye recipe logs, and automated export shipping documentation.",
    keyFeatures: [
      "Real-Time Loom Efficiency & Production Telemetry Engine",
      "Yarn Inventory & Dye House Recipe Batch Management",
      "Quality Control Inspection & Fabric Roll Defect Logging",
      "Export Order Tracking, RFQ & Container Shipment System"
    ],
    results: []
  }
];

export const projectCaseStudyRoutes = projects.reduce<Record<string, string>>(
  (routes, project) => {
    routes[project.id] = `/case-study/${project.caseStudySlug}`;
    return routes;
  },
  {},
);
