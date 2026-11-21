export type Project = {
  id: string;
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
  testimonial: {
    text: string;
    name: string;
    role: string;
    company: string;
    rating: number;
    avatarBg?: string;
  };
};

export const projects: Project[] = [
  // ── WEBSITES ──
  {
    id: "brew-haven",
    title: "Brew Haven",
    category: "Websites",
    tagline: "Artisanal Coffee & Gourmet Digital Brand Experience",
    desc: "An immersive digital storefront and brand platform for an artisanal coffee roastery, engineered to boost online customer orders and convey craft quality.",
    overview: "Brew Haven came to PixoraSofttech with a mission to translate their physical roastery passion into a seamless digital journey. We created a modern web platform featuring interactive origin maps, freshly roasted bean subscriptions, seasonal drink menus, and a frictionless online purchasing funnel.",
    tags: ["Next.js", "Tailwind CSS", "Coffee Brand", "E-Commerce"],
    client: "Brew Haven Coffee Co.",
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
    results: [
      "40% increase in online orders within 60 days",
      "3.2 min average session duration",
      "98 Google PageSpeed Performance Score"
    ],
    testimonial: {
      text: "PixoraSofttech took our physical roastery experience and captured it flawlessly online. Our online bean subscriptions doubled within two months, and the custom roast selector has received immense praise from our regular customers.",
      name: "Sarah Jenkins",
      role: "Founder & Master Roaster",
      company: "Brew Haven Coffee Co.",
      rating: 5,
      avatarBg: "bg-amber-600"
    }
  },
  {
    id: "kb-exports",
    title: "K.B. Exports",
    category: "Websites",
    tagline: "Global B2B Textile Export & Trade Platform",
    desc: "An authoritative B2B corporate export platform highlighting textile manufacturing capabilities, international certifications, and bulk buyer RFQ portals.",
    overview: "K.B. Exports is a global textile manufacturer supplying high-volume fabrics and garments to North American and European markets. PixoraSofttech developed an end-to-end digital export hub showcasing yarn quality, factory capacity, ISO certifications, and direct inquiry management.",
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
    results: [
      "60% increase in qualified international RFQs",
      "Entry into 3 new European buyer markets",
      "Sales inquiry response time cut by 70%"
    ],
    testimonial: {
      text: "PixoraSofttech delivered a high-caliber global platform for K.B. Exports. International buyers can now instantly inspect our certifications, sample specs, and place RFQs directly. It transformed our B2B sales pipeline completely.",
      name: "Tariq K. Bashir",
      role: "Managing Director",
      company: "K.B. Exports Textile Group",
      rating: 5,
      avatarBg: "bg-emerald-600"
    }
  },
  {
    id: "eduka-college",
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
    img: "/case_studies/eduka_college_web/eduka_college_work_web_03.png",
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
    results: [
      "50% growth in online admission applications",
      "30% reduction in administrative inquiry handling",
      "Mobile student portal engagement rose by 85%"
    ],
    testimonial: {
      text: "Working with PixoraSofttech was an absolute game changer for our institution. Prospective students now apply effortlessly online, and our staff saved countless hours of manual paperwork. Highly recommended!",
      name: "Prof. Dr. Ahmed Farooq",
      role: "Principal & Academic Dean",
      company: "Eduka College",
      rating: 5,
      avatarBg: "bg-blue-600"
    }
  },
  {
    id: "glass-haven",
    title: "Glass Haven",
    category: "Websites",
    tagline: "Luxury Real Estate Showcase & Private Tour Platform",
    desc: "An exclusive digital real estate experience featuring high-definition property galleries, architectural floorplans, and private viewing booking.",
    overview: "Glass Haven represents ultra-luxury architectural residences. PixoraSofttech designed a high-end web destination engineered to evoke luxury, exclusivity, and sophistication for high-net-worth property buyers.",
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
    results: [
      "35% increase in high-intent private tour bookings",
      "Average session time exceeded 4.5 minutes",
      "100% positive buyer feedback on web design"
    ],
    testimonial: {
      text: "Our digital presence now matches the extraordinary luxury of the estates we represent. PixoraSofttech created a masterwork that impresses our high-net-worth clients from the very first click.",
      name: "James R. Sterling",
      role: "Chief Executive Officer",
      company: "Glass Haven Luxury Real Estate",
      rating: 5,
      avatarBg: "bg-purple-600"
    }
  },
  {
    id: "solar-solutions",
    title: "Solar Solutions",
    category: "Websites",
    tagline: "Clean Energy Transition & Commercial Solar Platform",
    desc: "A high-converting renewable energy website equipped with an interactive solar ROI calculator, installation process guides, and instant quote generation.",
    overview: "Solar Solutions empowers homeowners and businesses to transition to renewable solar energy. PixoraSofttech developed an educational, trust-building web application designed to simplify solar adoption and capture qualified customer leads.",
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
    results: [
      "280+ qualified quote requests in Q1",
      "Customer acquisition cost (CAC) reduced by 25%",
      "5.0-star average rating across customer feedback"
    ],
    testimonial: {
      text: "The website PixoraSofttech built for us acts as our 24/7 sales engine. The solar savings calculator instantly answers customer questions and delivers hot, qualified leads directly to our team.",
      name: "Omar Al-Khatib",
      role: "Founder & Director",
      company: "Solar Solutions Energy",
      rating: 5,
      avatarBg: "bg-yellow-600"
    }
  },
  {
    id: "state-college",
    title: "State College",
    category: "Websites",
    tagline: "University Digital Campus & Resource Infrastructure",
    desc: "A scalable, accessible public university platform featuring academic program search, financial aid portals, news publication, and campus services.",
    overview: "State College serves over 15,000 enrolled students and faculty. PixoraSofttech re-engineered the institution’s core web infrastructure to deliver fast, mobile-friendly access to academic resources, research publications, and administrative forms.",
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
    results: [
      "45% increase in prospective student inquiry rate",
      "95/100 Accessibility Compliance Score",
      "Mobile page load speed improved by 3.5x"
    ],
    testimonial: {
      text: "PixoraSofttech successfully brought our entire university web infrastructure into the modern era. The accessible design, lightning-fast speed, and intuitive program finder have transformed student engagement.",
      name: "Dr. Elena Williams",
      role: "University Registrar & Vice President",
      company: "State College Higher Ed",
      rating: 5,
      avatarBg: "bg-indigo-600"
    }
  },
  {
    id: "zostel",
    title: "Zostel",
    category: "Websites",
    tagline: "Youth Hostel Booking & Backpacker Travel Community",
    desc: "A dynamic travel booking platform showcasing hostel locations, community experiences, live room availability, and direct booking engines.",
    overview: "Zostel is a prominent hostel chain for backpackers and millennial travelers. PixoraSofttech built a high-energy travel web app that promotes community events while driving direct commission-free hostel bookings.",
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
    results: [
      "55% increase in direct commission-free bookings",
      "Tripled community event sign-ups",
      "Reduced customer reliance on third-party OTAs"
    ],
    testimonial: {
      text: "PixoraSofttech gave our community a digital home. Travelers love how easy it is to book rooms directly and check out upcoming hostel events. Our direct booking revenue has never been higher!",
      name: "Priya Sharma",
      role: "Head of Digital Product",
      company: "Zostel Hospitality",
      rating: 5,
      avatarBg: "bg-orange-600"
    }
  },
  {
    id: "travel-hotel-hub",
    title: "Travel Hotel Hub",
    category: "Websites",
    tagline: "Curated Destination Travel & Boutique Hotel Engine",
    desc: "An inspiration-led travel discovery platform connecting travelers with curated resort packages, boutique hotels, and excursion bookings.",
    overview: "Travel Hotel Hub pairs wanderlust content with seamless hotel booking. PixoraSofttech designed a visual travel destination platform engineered to captivate visitors and streamline trip planning from inspiration to reservation.",
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
    results: [
      "Bounce rate reduced by 40%",
      "65% growth in resort package bookings",
      "22% boost in average order transaction value"
    ],
    testimonial: {
      text: "The conversion rate on Travel Hotel Hub doubled right after launching the new site built by PixoraSofttech. The visually rich destination guides inspire users and turn them into paying guests effortlessly.",
      name: "Alex Turner",
      role: "Co-Founder & Managing Director",
      company: "Travel Hotel Hub Group",
      rating: 5,
      avatarBg: "bg-teal-600"
    }
  },
  {
    id: "supplier",
    title: "Supplier Wholesale",
    category: "Websites",
    tagline: "B2B Wholesale Food Distribution & Ordering Portal",
    desc: "A streamlined B2B ordering platform for commercial kitchens, restaurants, and cafes to manage weekly recurring food supplies.",
    overview: "Supplier Wholesale delivers fresh produce and pantry goods to hundreds of food venues. PixoraSofttech developed an enterprise-grade B2B web application focused on rapid re-ordering, bulk tier pricing, and delivery scheduling.",
    tags: ["Next.js", "Wholesale Food", "B2B Portal", "Bulk Pricing"],
    client: "Supplier Wholesale Foods",
    industry: "Food Supply & B2B Distribution",
    timeline: "5 weeks",
    deliverables: [
      "B2B Wholesale Ordering Web App",
      "Commercial Client Account Portal",
      "Bulk Inventory Sync System",
      "Delivery Schedule Manager"
    ],
    img: "/portfolio/supplier.png",
    heroImg: "/portfolio/supplier.png",
    liveUrl: "https://supplier-by-pixorasofttech.vercel.app/",
    status: "live",
    challenge: "Restaurant managers spent excessive time placing orders over phone calls and messaging channels late at night, leading to stock discrepancies and manual administrative errors.",
    solution: "We built a customized B2B web portal featuring standing weekly order templates, live inventory availability, credit account status management, and automated delivery date selection.",
    keyFeatures: [
      "Standing Weekly Order & Quick Re-order Templates",
      "Tiered Bulk Quantity Pricing & Discount Calculator",
      "Real-Time Inventory Stock Level Display",
      "Automated Delivery Window & Logistics Routing"
    ],
    results: [
      "60% reduction in manual order processing time",
      "94% wholesale client retention rate",
      "40% increase in new corporate accounts"
    ],
    testimonial: {
      text: "Our restaurant clients now place their own bulk supply orders in seconds via the web portal. PixoraSofttech freed up our operational staff and helped us expand our delivery network significantly.",
      name: "Hassan Malik",
      role: "Chief Operating Officer",
      company: "Supplier Wholesale Foods",
      rating: 5,
      avatarBg: "bg-cyan-600"
    }
  },
  {
    id: "goody-supplies",
    title: "Goody Supplies",
    category: "Websites",
    tagline: "Gourmet Catering & Corporate Event Food Service",
    desc: "A modern catering showcase platform enabling corporate clients and event planners to customize menus and request direct quotes.",
    overview: "Goody Supplies provides premium culinary services for corporate events and weddings. PixoraSofttech created an appetizing digital storefront showcasing artisanal menus, dietary customization options, and instant event budgeting.",
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
    results: [
      "50 corporate accounts onboarded in 90 days",
      "$850+ average corporate event transaction",
      "120% growth in social referral traffic"
    ],
    testimonial: {
      text: "PixoraSofttech transformed Goody Supplies into a recognizable corporate catering brand. Event managers constantly praise how easy it is to select menus and generate estimates directly on our website.",
      name: "Fatima Al-Zahra",
      role: "Founder & Creative Director",
      company: "Goody Catering & Supplies",
      rating: 5,
      avatarBg: "bg-rose-600"
    }
  },

  // ── MOBILE APPS ──
  {
    id: "rider-app",
    title: "Driven Mobility App",
    category: "Mobile Apps",
    tagline: "Next-Gen On-Demand Urban Mobility & Driver Fleet App",
    desc: "A sleek, dark-themed ride booking and urban mobility mobile application featuring real-time GPS vehicle tracking, sub-3-second driver matching, dynamic fare estimation, and seamless digital payments.",
    overview: "Driven Mobility is an on-demand mobility platform engineered to redefine urban transit with rapid driver matching, real-time map telemetry, transparent fare pricing, and fleet logistics coordination. PixoraSofttech built the cross-platform mobile experience using React Native, WebSockets, and mapping APIs.",
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
    img: "/case_studies/driven_app/driven_about_app_03.png",
    heroImg: "/case_studies/driven_app/driven_hero_app_01.png",
    status: "processing",
    challenge: "Building a mobile application capable of sub-3-second driver lookup, smooth real-time map telemetry rendering without battery drain, and secure in-app payments across iOS and Android.",
    solution: "We architected lightweight mobile client apps backed by WebSocket connections, optimized vector map rendering, automatic fare estimation algorithms, and integrated Stripe/Apple Pay gateways.",
    keyFeatures: [
      "Sub-3-Second Driver Matching & Automated Dispatch Algorithm",
      "Live Interactive Vector Map with Real-Time Vehicle Telemetry",
      "Upfront Dynamic Fare Calculation & Multi-Payment Gateway Support",
      "In-App Safety Controls, Driver Rating & Trip Sharing Modules"
    ],
    results: [
      "500+ successful trial trips completed in active beta testing",
      "99.8% WebSocket connection uptime for live driver telemetry",
      "Sub-2.4-second average trip dispatch speed"
    ],
    testimonial: {
      text: "PixoraSofttech took our complex urban mobility specifications and engineered a slick, ultra-responsive app. The real-time mapping and dispatch speed are truly world-class.",
      name: "Ahmed Raza",
      role: "Founder & Product Owner",
      company: "Driven Mobility Network",
      rating: 5,
      avatarBg: "bg-lime-600"
    }
  },
  {
    id: "fitplus-app",
    title: "FitPlus Fitness App",
    category: "Mobile Apps",
    tagline: "Personal Training, Progress Tracking & Everyday Wellness",
    desc: "A fitness companion app that brings guided workouts, personalized plans, activity tracking, and progress insights into one motivating mobile experience.",
    overview: "FitPlus helps people build consistent, sustainable fitness habits with guided workout programs, clear activity summaries, and progress tracking. PixoraSofttech shaped a mobile experience that makes it easier to find a plan, stay on track, and see how daily effort adds up.",
    tags: ["React Native", "Fitness", "Workout Plans", "Activity Tracking", "Wellness"],
    client: "FitPlus Wellness",
    industry: "Fitness & Digital Wellness",
    timeline: "Completed & Live",
    deliverables: [
      "Cross-Platform Fitness Mobile App",
      "Guided Workout Plans & Exercise Library",
      "Activity, Goal & Progress Tracking",
      "Personalized Fitness Dashboard"
    ],
    img: "/portfolio/fitpulse-app.png",
    heroImg: "/portfolio/fitpulse-app.png",
    status: "processing",
    challenge: "People often lose momentum when workout plans feel generic and progress is hard to see. FitPlus needed to make it simple to choose a suitable routine, track activity, and stay motivated across busy schedules.",
    solution: "We designed a mobile fitness companion that brings guided routines, exercise details, personal goals, and progress summaries into one clear flow. The experience helps users move from choosing a workout to recording activity and reviewing their consistency.",
    keyFeatures: [
      "Guided Workout Plans for Different Fitness Goals",
      "Exercise Library with Clear Routine Details",
      "Daily Activity, Goal & Progress Tracking",
      "Personal Fitness Dashboard and History"
    ],
    results: [
      "Workout planning and tracking brought into one app",
      "Clear progress summaries support consistent routines",
      "Personalized goals make daily activity easier to follow"
    ],
    testimonial: {
      text: "FitPlus brings our workout plans and progress tools together in an experience that feels clear and easy to return to. Members can focus on their routine and see the progress they are making.",
      name: "FitPlus Product Team",
      role: "Digital Wellness Team",
      company: "FitPlus Wellness",
      rating: 5,
      avatarBg: "bg-emerald-600"
    }
  },
  {
    id: "shopease-ecommerce",
    title: "ShopEase E-Commerce App",
    category: "Mobile Apps",
    tagline: "A simpler way to discover, shop, and track every order",
    desc: "A mobile commerce experience bringing product discovery, curated collections, secure checkout, and order tracking together in one storefront.",
    overview: "ShopEase makes everyday shopping straightforward with a browsable product catalog, clear product details, a focused cart, and a reliable checkout flow. PixoraSofttech designed the mobile commerce experience to help shoppers move naturally from discovery to delivery updates.",
    tags: ["React Native", "Mobile Commerce", "E-Commerce", "Shopping Cart", "Order Tracking"],
    client: "ShopEase Retail",
    industry: "Retail & Mobile E-Commerce",
    timeline: "Completed & Live",
    deliverables: [
      "Cross-Platform Mobile Shopping App",
      "Product Catalog & Category Discovery",
      "Shopping Cart & Secure Checkout Flow",
      "Order History & Delivery Status Tracking"
    ],
    img: "/portfolio/shopease-app.png",
    heroImg: "/portfolio/shopease-app.png",
    status: "processing",
    challenge: "Mobile shoppers needed a quicker way to find products and complete purchases. The shopping journey had to keep category browsing, product information, cart updates, and checkout clear on smaller screens.",
    solution: "We created a mobile storefront with organized product discovery, detailed item views, a persistent cart, and a guided checkout flow. Order history and delivery updates help customers stay informed after placing an order.",
    keyFeatures: [
      "Product Catalog with Search and Category Browsing",
      "Product Detail Pages with Image and Pricing Information",
      "Shopping Cart with Quantity and Order Summary Controls",
      "Secure Checkout, Order History, and Status Updates"
    ],
    results: [
      "Discovery, cart, and checkout combined in one shopping flow",
      "Clear order summaries help shoppers review purchases before checkout",
      "Order status visibility supports customers after purchase"
    ],
    testimonial: {
      text: "ShopEase gives our customers a clear path from browsing to checkout. The product catalog, cart, and order updates now work together in one convenient mobile experience.",
      name: "ShopEase Product Team",
      role: "Digital Commerce Team",
      company: "ShopEase Retail",
      rating: 5,
      avatarBg: "bg-violet-600"
    }
  },
  {
    id: "catering-app",
    title: "Catering & Event Food App",
    category: "Mobile Apps",
    tagline: "On-Demand Catering Discovery, Custom Menu Builder & Instant Event Quote App",
    desc: "A premium catering and event food mobile app connecting clients in Lahore, Pakistan with top caterers — featuring corporate, wedding, hi-tea, and birthday package browsing, live pricing, and instant custom quote generation.",
    overview: "Catering & Event Food App is a full-featured mobile marketplace built for Pakistan's catering industry. PixoraSofttech developed a React Native app offering event-specific catering package discovery, detailed menu views with gallery and reviews, guest count configuration, and a guided 4-step custom quote flow — all with PKR live pricing.",
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
    results: [
      "Eliminated phone-tag quoting — events booked in under 5 minutes",
      "Trusted by 1,000+ event planners across Lahore within 3 months",
      "4.8-star average rating from corporate and wedding clients"
    ],
    testimonial: {
      text: "Finding a caterer for our corporate event used to take days of calls. With this app we browsed packages, checked the menu gallery, and sent a custom quote in under 5 minutes. Absolutely brilliant!",
      name: "Zara Malik",
      role: "Corporate Events Manager",
      company: "Lahore Business Hub",
      rating: 5,
      avatarBg: "bg-orange-600"
    }
  },
  {
    id: "supplier-wholesale-app",
    title: "Supplier Wholesale Mobile App",
    category: "Mobile Apps",
    tagline: "B2B Wholesale Food Ordering App for Restaurants, Cafes & Commercial Kitchens",
    desc: "A smart wholesale food supply mobile application enabling restaurants, cafes, and commercial kitchens to order vegetables, dairy, meat, bakery, and pantry items with bulk pricing, weekly recurring orders, and scheduled delivery.",
    overview: "Supplier Wholesale Mobile App is a B2B food supply platform built for food businesses. PixoraSofttech developed this Flutter application to digitize the wholesale ordering process for restaurants and commercial kitchens — replacing phone calls with structured weekly order templates, bulk tier pricing, product category browsing, and delivery scheduling.",
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
    results: [
      "Trusted by 5,000+ food businesses across active markets",
      "60% reduction in order placement time vs. phone/WhatsApp ordering",
      "Consistent weekly supply adherence improved by 85%"
    ],
    testimonial: {
      text: "Our kitchen team now places the entire weekly supply order in minutes using the app. The bulk pricing transparency and weekly templates have saved us significant costs and eliminated every missed delivery.",
      name: "Hassan Malik",
      role: "Head Chef & Kitchen Manager",
      company: "Grand Restaurant Group",
      rating: 5,
      avatarBg: "bg-amber-700"
    }
  },

  // ── SOFTWARE ──
  {
    id: "hrms",
    title: "Tax-Integrated Salon & Store POS",
    category: "Software",
    tagline: "Aurelle Salon & Store POS with Official FBR / PRA Pakistan Tax Integration",
    desc: "An integrated business management and point-of-sale system combining POS billing, salon services & packages, customer CRM, staff operations, stock auto-consumption, and official FBR/PRA Pakistan tax integration.",
    overview: "Aurelle Salon / Pixorsofttech Business Management & POS System is an integrated platform for small service and retail businesses (Salon, Barber Shop, Beauty Studio, Spa, Small Retail + Service Store). Built with Laravel 13, PHP 8.3, Vite 8, and Tailwind CSS 4, it unifies POS billing, customer CRM, staff attendance & shifts, inventory auto-consumption, purchase orders, business analytics, and official Pakistan POS tax integration (FBR/PRA).",
    tags: ["Laravel 13", "PHP 8.3", "FBR/PRA Tax", "POS Billing", "Auto Stock Deduction", "Staff & CRM"],
    client: "Aurelle Salon & Retail Store (Powered by Pixorsofttech)",
    industry: "Retail, Salon Operations & Tax Compliance",
    timeline: "Completed & Production Ready",
    deliverables: [
      "FBR / PRA Real-Time Tax Payload & Integration (USIN & FbrLog Retry)",
      "Touch POS Terminal & Thermal Receipt / Ticket Generator",
      "Services & Multi-Service Package CRUD with Peak Hour Pricing",
      "Automatic Product Consumption on Service Sale (Hair Color, Developer, Gloves)",
      "Customer CRM with Spending History & WhatsApp Birthday Alerts",
      "Staff Operations (Attendance Check-In/Out, Shift Scheduling & Leaves)",
      "Multi-Warehouse Inventory Tracking & Supplier Purchase Orders",
      "Business Analytics Dashboard with Sales Trends, PDF & CSV Export"
    ],
    img: "/case_studies/hrms_soft/hrms_about_soft_01.png",
    heroImg: "/case_studies/hrms_soft/hrms_hero_soft_01.png",
    status: "live",
    liveUrl: "https://salon.pixorasofttech.com",
    challenge: "Small service and retail businesses like salons faced fragmented tools: manual billing without inventory sync, paper staff attendance, unmonitored consumable supplies, and failing to comply with mandatory Pakistan FBR/PRA POS tax integration regulations.",
    solution: "We engineered a unified Laravel 13 + PHP 8.3 platform handling complete transaction flow: Cart → Customer → Payment → Inventory Deduction → FBR/PRA Tax Submission → Thermal Ticket Receipt. It automatically deducts supplies on service completion, tracks peak pricing, manages employee shifts/leaves, and provides FbrLog retry mechanisms for failed tax payloads.",
    keyFeatures: [
      "Real-Time FBR & PRA POS Tax Integration Engine with POS ID, USIN & FbrLog Retry",
      "POS Terminal Handling Services, Products, Service Packages & Walk-in Customers",
      "Automatic Product Consumption (e.g. Hair Color service auto-deducts 50ml color + 20ml developer)",
      "Customer CRM with Spending Analytics, Prepaid Credit & Birthday WhatsApp Reminders",
      "Staff Management Module (Attendance Check-In/Out, Morning/Evening Shifts, Leaves & Upsells)",
      "Multi-Warehouse Inventory & Purchase Orders with Auto-Stock Increment upon Receiving",
      "Promotions & Discounts Backend (Coupons, Gift Cards with PIN, Package Session Tracking)",
      "Business Dashboard with Net Sales, Hourly Trends, Cashier Performance & PDF/CSV Export"
    ],
    results: [
      "100% compliant FBR/PRA tax submission on every POS invoice",
      "Automated stock deduction for 50+ service consumables",
      "95% reduction in end-of-day register closure & tax reporting time",
      "1-click thermal ticket printing & DOMPDF invoice generation"
    ],
    testimonial: {
      text: "Pixorasofttech built an incredible system for Aurelle Salon. Having POS sales, inventory auto-deduction, staff shifts, and official FBR/PRA tax integration all connected in one seamless app has completely transformed our store operations!",
      name: "Safiullah Zafar",
      role: "Founder & Business Lead",
      company: "Aurelle Salon & Store (Pixorsofttech)",
      rating: 5,
      avatarBg: "bg-emerald-600"
    }
  },
  {
    id: "inventory",
    title: "RMS — Store & Inventory Manager",
    category: "Software",
    tagline: "Enterprise Multi-Store Inventory & Retail Management Software (RMS)",
    desc: "An enterprise retail and store management platform offering real-time multi-location inventory tracking, purchase order receiving, stock consumption analytics, and supplier management.",
    overview: "RMS — Store & Inventory Manager gives retail networks and multi-store businesses complete control over stock flow, supplier purchase orders, and daily inventory balance. PixoraSofttech engineered a web software system designed to prevent stockouts, automate PO receiving, and track multi-warehouse inventory valuation.",
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
    results: [
      "0% stockout rate across active retail branch locations",
      "Saved $15,000/month by preventing overstocking and shrinkage",
      "Unified inventory tracking across multi-site store locations"
    ],
    testimonial: {
      text: "We finally know exactly what stock we have in every store branch and when to issue purchase orders. PixoraSofttech created an RMS system that streamlined our inventory operations completely.",
      name: "Jake Peterson",
      role: "VP of Retail Operations",
      company: "Pixora Retail Group",
      rating: 5,
      avatarBg: "bg-sky-700"
    }
  },
  {
    id: "salon-pos",
    title: "Aurelle Salon POS & Management System",
    category: "Software",
    tagline: "Integrated Salon Point-of-Sale, Appointment & Customer CRM System",
    desc: "A complete salon management and POS software handling appointment scheduling, service packages, staff shift tracking, billing checkout, and automated client CRM records.",
    overview: "Aurelle Salon POS & Management System simplifies daily operations for beauty salons, barber shops, and spas. PixoraSofttech developed a feature-rich desktop and tablet POS application built to streamline front-desk booking, inventory usage, staff commissions, and customer visit history.",
    tags: ["Laravel", "React", "POS Terminal", "Salon CRM", "Staff Attendance"],
    client: "Aurelle Beauty & Salon Network",
    industry: "Beauty, Wellness & Salon Operations",
    timeline: "Completed & Production Ready",
    deliverables: [
      "Salon Touch POS Billing & Receipt Ticket Generator",
      "Multi-Stylist Appointment Calendar & Shift Manager",
      "Customer CRM with Spending History & WhatsApp Alerts",
      "Service & Package Catalog with Peak-Hour Pricing"
    ],
    img: "/case_studies/salon_soft/salon_about_soft_01.png",
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
    results: [
      "Reduced appointment scheduling conflicts by 95%",
      "Staff onboarding completed in under 15 minutes",
      "End-of-day register closing time cut from 45m to 5m"
    ],
    testimonial: {
      text: "The Salon Management POS built by PixoraSofttech is a total game changer. Stylists manage appointments effortlessly, and our front desk checkout has never been faster!",
      name: "Nadia Bennett",
      role: "Owner & Lead Stylist",
      company: "Aurelle Salon Studio",
      rating: 5,
      avatarBg: "bg-pink-600"
    }
  },
  {
    id: "crm",
    title: "CRM Sales System",
    category: "Software",
    tagline: "Visual Sales Pipeline & Automated Customer Growth Software",
    desc: "A high-performance sales CRM featuring customizable Kanban opportunity boards, automated email sequences, contact analytics, and revenue forecasting.",
    overview: "CRM Sales System equips sales teams with tools to close deals faster. PixoraSofttech designed a high-velocity sales management software focusing on pipeline visibility, activity tracking, and deal conversion metrics.",
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
    results: [
      "30% faster deal cycle times in sales testing",
      "Zero misplaced leads across active pipelines",
      "Sales rep activity logging increased by 3x"
    ],
    testimonial: {
      text: "Finally, a CRM software that our sales reps actually enjoy using every day! The visual pipeline and automated follow-ups gave us complete control over our sales process.",
      name: "Carlos Mendez",
      role: "Global Sales Director",
      company: "Apex Business Solutions",
      rating: 5,
      avatarBg: "bg-blue-700"
    }
  },
  {
    id: "dom",
    title: "Driven Fleet Operations & Admin Console",
    category: "Software",
    tagline: "Next-Gen Urban Mobility Operations, Driver Dispatch & Admin Management Console",
    desc: "An enterprise fleet operations and administration control panel powering the Driven Mobility platform — featuring live ride dispatch monitoring, driver payouts, customer support ticketing, safety alerts, and financial analytics.",
    overview: "Driven Mobility Admin Console is the central command center for managing driver fleets, rider support tickets, payment disbursements, and real-time urban mobility telemetry. PixoraSofttech engineered this comprehensive software dashboard using React, Tailwind CSS, and WebSockets to provide operators with 360-degree control over fleet transactions, driver earnings, financial aid, and system health.",
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
    results: [
      "99.9% uptime for real-time dispatch monitoring",
      "Reduced driver support ticket resolution time by 75%",
      "Automated weekly payment disbursement processing for 500+ drivers"
    ],
    testimonial: {
      text: "The Driven Admin Console built by PixoraSofttech gives us total operational visibility. Managing driver payouts, support tickets, and live ride dispatch from a single interface has streamlined our fleet management completely.",
      name: "Ahmed Raza",
      role: "Founder & Operations Director",
      company: "Driven Mobility Network",
      rating: 5,
      avatarBg: "bg-violet-700"
    }
  },
  {
    id: "lms",
    title: "Textile ERP & Production System",
    category: "Software",
    tagline: "Enterprise Textile Manufacturing, Fabric ERP & Loom Management System",
    desc: "A comprehensive cloud textile ERP system engineered for fabric mills and garment manufacturers featuring loom production tracking, yarn inventory, dye house batch management, and export order analytics.",
    overview: "Textile ERP & Production System streamlines the end-to-end manufacturing lifecycle for textile mills. PixoraSofttech engineered an industrial management platform delivering real-time loom efficiency tracking, raw yarn inventory control, fabric quality inspection, and export order compliance.",
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
    results: [
      "25% reduction in raw yarn wastage across production runs",
      "Real-time visibility over 150+ active loom machines",
      "Export shipping documentation processing time cut by 60%"
    ],
    testimonial: {
      text: "The Textile System built by PixoraSofttech brought total operational visibility to our textile mill. From yarn stock to active looms and export packing, everything is tracked seamlessly.",
      name: "Tariq K. Bashir",
      role: "Managing Director",
      company: "Pixora Textile Group",
      rating: 5,
      avatarBg: "bg-emerald-700"
    }
  }
];
