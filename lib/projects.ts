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
    img: "/portfolio/brew-haven.png",
    heroImg: "/portfolio/brew-haven.png",
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
    img: "/portfolio/kb-exports.png",
    heroImg: "/portfolio/kb-exports.png",
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
    img: "/portfolio/eduka-college.png",
    heroImg: "/portfolio/eduka-college.png",
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
    img: "/portfolio/glass-haven.png",
    heroImg: "/portfolio/glass-haven.png",
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
    img: "/portfolio/solar-solutions.png",
    heroImg: "/portfolio/solar-solutions.png",
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
    img: "/portfolio/state-college.png",
    heroImg: "/portfolio/state-college.png",
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
    img: "/portfolio/zostel.png",
    heroImg: "/portfolio/zostel.png",
    liveUrl: "https://zostel-by-pixorasofttech.vercel.app/",
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
    img: "/portfolio/travel-hotel-hub.png",
    heroImg: "/portfolio/travel-hotel-hub.png",
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
    img: "/portfolio/goody-supplies.png",
    heroImg: "/portfolio/goody-supplies.png",
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
    title: "iRider",
    category: "Mobile Apps",
    tagline: "Next-Gen On-Demand Urban Mobility & Ride Booking App",
    desc: "A sleek, dark-themed ride booking mobile app featuring real-time GPS vehicle tracking, driver matching, and seamless digital payments.",
    overview: "iRider is an upcoming mobility app designed to redefine urban transit with rapid driver matching and transparent fare pricing. PixoraSofttech engineered the cross-platform mobile experience using React Native and WebSockets.",
    tags: ["React Native", "Maps API", "WebSockets", "Stripe"],
    client: "iRider Mobility",
    industry: "Mobility & Transportation",
    timeline: "In active development",
    deliverables: [
      "Cross-Platform Mobile Apps (iOS & Android)",
      "Real-Time Telemetry & Dispatch Architecture",
      "Rider & Driver Communication Module",
      "Secure Payment Gateway Integration"
    ],
    img: "/portfolio/irider-app.png",
    heroImg: "/portfolio/irider-app.png",
    status: "processing",
    challenge: "Building a mobile app capable of sub-3-second driver lookup, smooth real-time map rendering without battery drain, and secure in-app payments across iOS and Android.",
    solution: "We architected lightweight mobile client apps backed by WebSocket connections, optimized vector map rendering, automatic fare estimation algorithms, and integrated Stripe/Apple Pay gateways.",
    keyFeatures: [
      "Sub-3-Second Driver Matching & Dispatch Algorithm",
      "Live Interactive Map with Real-Time Vehicle Telemetry",
      "Upfront Dynamic Fare Calculation & Multi-Pay Support",
      "In-App Emergency Safety Controls & Trip Sharing"
    ],
    results: [
      "Under active beta testing with 500+ trial trips",
      "99.8% WebSocket connection reliability",
      "Average ride request dispatch under 2.4 seconds"
    ],
    testimonial: {
      text: "PixoraSofttech took our complex urban mobility specifications and engineered a slick, ultra-responsive app. The real-time mapping and dispatch speed are truly world-class.",
      name: "Ahmed Raza",
      role: "Founder & Product Owner",
      company: "iRider Mobility",
      rating: 5,
      avatarBg: "bg-lime-600"
    }
  },
  {
    id: "fitpulse",
    title: "FitPulse",
    category: "Mobile Apps",
    tagline: "Smart AI Fitness Companion & Workout Tracker",
    desc: "A personalized fitness mobile application providing custom workout regimes, macro nutrition tracking, and Apple Health/Google Fit sync.",
    overview: "FitPulse helps health enthusiasts achieve fitness goals with intelligent workout logging. PixoraSofttech built a Flutter mobile app featuring real-time exercise telemetry, progress analytics, and community challenge leaderboards.",
    tags: ["Flutter", "Firebase", "HealthKit", "AI Tracking"],
    client: "FitPulse Technologies",
    industry: "Health, Fitness & Wellness",
    timeline: "In active development",
    deliverables: [
      "Flutter iOS & Android Mobile Application",
      "Biometric & Health API Integration",
      "Custom Workout Engine & Video Library",
      "Cloud Data Sync & Analytics Infrastructure"
    ],
    img: "/portfolio/fitpulse-app.png",
    heroImg: "/portfolio/fitpulse-app.png",
    status: "processing",
    challenge: "Existing fitness apps were bloated and difficult to navigate mid-workout, leading to user drop-offs after 2 weeks of downloading.",
    solution: "We designed a distraction-free 'In-Workout' interface with quick-log set counters, rest timers, video exercise demos, and automated progress graphs linked with HealthKit.",
    keyFeatures: [
      "Distraction-Free In-Workout Set & Weight Logger",
      "AI-Driven Adaptive Workout & Routine Generator",
      "Apple Health & Google Fit Biometric Synchronization",
      "Community Fitness Leaderboard & Milestone Badges"
    ],
    results: [
      "UI/UX testing scored 4.9/5 among beta testers",
      "80% backend completion milestone reached",
      "Over 200 custom exercise video guides integrated"
    ],
    testimonial: {
      text: "The clean in-workout interface PixoraSofttech designed makes logging workouts effortless. It is exactly what the fitness community has been begging for.",
      name: "Lisa K. Vance",
      role: "Head Athletic Trainer",
      company: "FitPulse Technologies",
      rating: 5,
      avatarBg: "bg-red-600"
    }
  },
  {
    id: "shopease",
    title: "ShopEase",
    category: "Mobile Apps",
    tagline: "Frictionless Mobile E-Commerce & Instant Checkout App",
    desc: "A fast, intuitive e-commerce mobile shopping experience engineered for maximum mobile conversion and 1-tap purchasing.",
    overview: "ShopEase transforms online store browsing into a lightning-fast mobile shopping journey. PixoraSofttech built a React Native app designed to eliminate shopping cart friction and increase order values.",
    tags: ["React Native", "Stripe API", "Node.js", "Push Notifications"],
    client: "ShopEase Retail Inc.",
    industry: "Mobile E-Commerce & Retail",
    timeline: "In active development",
    deliverables: [
      "React Native iOS & Android Mobile App",
      "E-Commerce Microservice API Connectors",
      "Biometric Payment & Checkout Module",
      "Push Notification Engagement System"
    ],
    img: "/portfolio/shopease-app.png",
    heroImg: "/portfolio/shopease-app.png",
    status: "processing",
    challenge: "Mobile web shoppers experienced high cart drop-off due to slow page loads, difficult search filtering, and tedious credit card entry forms.",
    solution: "We developed a mobile app featuring instant product search, visual category recommendations, biometrically secured 1-tap checkout, and personalized push notification reminders.",
    keyFeatures: [
      "Sub-Second Elastic Search with Instant Filters",
      "1-Tap Checkout via Apple Pay / Google Pay / Saved Cards",
      "Personalized Push Notifications for Wishlist Restocks",
      "Interactive Order Tracking & Delivery Telemetry"
    ],
    results: [
      "Cart abandonment reduced by 38% in prototype tests",
      "2.1x faster checkout speed compared to mobile web",
      "High customer retention rate in beta testing"
    ],
    testimonial: {
      text: "PixoraSofttech built a mobile shopping experience that outperforms our web store in conversion rate. Purchasing takes seconds, and our customers love the clean layout.",
      name: "Maria Lopez",
      role: "Chief Executive Officer",
      company: "ShopEase Retail Inc.",
      rating: 5,
      avatarBg: "bg-fuchsia-600"
    }
  },

  // ── SOFTWARE ──
  {
    id: "salon-pos",
    title: "SalonPro",
    category: "Software",
    tagline: "All-in-One Touchscreen Salon POS & Booking System",
    desc: "A modern salon management desktop and tablet POS handling appointments, staff commission tracking, billing, and automated client SMS reminders.",
    overview: "SalonPro simplifies daily operations for hair salons and spas. PixoraSofttech developed an intuitive touch POS application built to streamline front-desk booking, inventory usage, and client history.",
    tags: ["React", "Node.js", "PostgreSQL", "POS Hardware API"],
    client: "SalonPro Systems",
    industry: "Beauty, Wellness & Salon Operations",
    timeline: "In active development",
    deliverables: [
      "Salon POS Desktop & Tablet Application",
      "Automated SMS Notification Gateway",
      "Staff Payroll & Commission Calculator",
      "Client Service & Preference History Engine"
    ],
    img: "/portfolio/salon-dashboard.png",
    heroImg: "/portfolio/salon-dashboard.png",
    status: "processing",
    challenge: "Salons suffered from frequent appointment double-bookings, manual paper records, high no-show rates, and tedious end-of-day revenue reconciliation.",
    solution: "We engineered a touch-optimized POS application featuring a drag-and-drop calendar, automated SMS appointment confirmations, staff commission calculations, and quick checkout.",
    keyFeatures: [
      "Drag-and-Drop Visual Multi-Stylist Calendar",
      "Automated SMS Appointment Confirmation & Reminders",
      "Touch-Screen Checkout with Split Payment Options",
      "Product Inventory Tracking & Automated Re-order Alerts"
    ],
    results: [
      "Reduced appointment no-shows by 40%",
      "Staff onboarding completed in under 15 minutes",
      "End-of-day register closing time cut from 45m to 5m"
    ],
    testimonial: {
      text: "SalonPro is a lifesaver. My stylists mastered the touch POS in minutes, and our appointment no-shows dropped dramatically thanks to the automated SMS reminders.",
      name: "Nadia Bennett",
      role: "Owner & Lead Stylist",
      company: "Nadia’s Beauty Studio",
      rating: 5,
      avatarBg: "bg-pink-600"
    }
  },
  {
    id: "hrms",
    title: "HRMS Platform",
    category: "Software",
    tagline: "Enterprise Human Capital & Payroll Automation System",
    desc: "A unified enterprise HR management software consolidating payroll, attendance tracking, leave requests, performance evaluations, and employee self-service.",
    overview: "HRMS Platform automates human resource operations for mid-to-large businesses. PixoraSofttech engineered a cloud software application that replaces disjointed spreadsheets with a single compliant HR portal.",
    tags: ["Next.js", "PostgreSQL", "Enterprise HR", "Payroll Engine"],
    client: "HRMS Cloud Systems",
    industry: "Human Resource & Workforce Management",
    timeline: "In active development",
    deliverables: [
      "Cloud HRMS Software Platform",
      "Automated Payroll Calculation Engine",
      "Employee Self-Service Portal",
      "Enterprise Compliance & Audit Logger"
    ],
    img: "/portfolio/hr-dashboard.png",
    heroImg: "/portfolio/hr-dashboard.png",
    status: "processing",
    challenge: "HR teams spent over 15 hours per week manually recalculating employee leave balances, processing tax withholding payrolls, and tracking annual review cycles.",
    solution: "We created an enterprise Next.js software platform equipped with automated payroll generation, biometric attendance integration, custom leave policy workflows, and self-service employee portals.",
    keyFeatures: [
      "Automated One-Click Monthly Payroll Engine",
      "Biometric Attendance & Leave Request Workflow",
      "Employee Self-Service Portal for Payslips & Tax Forms",
      "Visual 360-Degree Performance Review & KPI Dashboard"
    ],
    results: [
      "Saving 12+ administrative hours per week",
      "Replaced 3 separate software subscriptions",
      "100% accurate tax and payroll calculations in testing"
    ],
    testimonial: {
      text: "This software replaces three expensive third-party tools we were previously paying for. PixoraSofttech built an intuitive HR platform that handles our entire payroll and leave workflow seamlessly.",
      name: "David Wright",
      role: "Director of Human Resources",
      company: "Global Operations Corp",
      rating: 5,
      avatarBg: "bg-slate-700"
    }
  },
  {
    id: "crm",
    title: "CRM System",
    category: "Software",
    tagline: "Visual Sales Pipeline & Automated Customer Growth Software",
    desc: "A high-performance sales CRM featuring customizable Kanban opportunity boards, automated email sequences, contact analytics, and revenue forecasting.",
    overview: "CRM System equips sales teams with tools to close deals faster. PixoraSofttech designed a high-velocity sales management software focusing on pipeline visibility, activity tracking, and deal conversion metrics.",
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
    img: "/portfolio/light-crm-dashboard.png",
    heroImg: "/portfolio/light-crm-dashboard.png",
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
    title: "DOM Delivery",
    category: "Software",
    tagline: "Real-Time Fleet Dispatch & Delivery Order Management",
    desc: "An enterprise delivery management software offering real-time driver dispatching, live route optimization, customer tracking links, and electronic proof of delivery.",
    overview: "DOM Delivery powers urban logistics networks. PixoraSofttech developed a real-time dispatch dashboard and driver coordination software designed to optimize route efficiency and fulfill high daily order volumes.",
    tags: ["Next.js", "WebSockets", "Google Maps API", "Logistics"],
    client: "DOM Logistics Network",
    industry: "Logistics & Fleet Operations",
    timeline: "In active development",
    deliverables: [
      "Dispatcher Operations Software",
      "Driver Mobile Application Interface",
      "Live Route Optimization Engine",
      "Customer Tracking Portal"
    ],
    img: "/portfolio/delivery-dashboard.png",
    heroImg: "/portfolio/delivery-dashboard.png",
    status: "processing",
    challenge: "Dispatchers managed driver routes manually through messaging groups, resulting in missed delivery windows, excessive fuel costs, and poor customer delivery visibility.",
    solution: "We engineered a real-time software hub using WebSockets and mapping APIs that automatically assigns incoming orders to nearby drivers, calculates optimal routes, and sends live SMS tracking links to recipients.",
    keyFeatures: [
      "Automated Smart Dispatch & Driver Assignment",
      "Live Fleet Telemetry & Multi-Stop Route Optimizer",
      "Customer SMS Live Map Tracking & ETA Notifications",
      "Digital Proof of Delivery (Photo & Signature Capture)"
    ],
    results: [
      "Eliminated 95% of manual dispatch coordination",
      "22% reduction in delivery fleet fuel expenses",
      "Customer delivery satisfaction rose to 98%"
    ],
    testimonial: {
      text: "DOM Delivery took our dispatch operations from absolute chaos to complete automated precision. PixoraSofttech built a system that saves us hours every single day.",
      name: "Ravi Subhash",
      role: "Head of Logistics & Operations",
      company: "DOM Logistics Network",
      rating: 5,
      avatarBg: "bg-violet-700"
    }
  },
  {
    id: "lms",
    title: "LMS Platform",
    category: "Software",
    tagline: "Scalable E-Learning & Interactive Course Management System",
    desc: "A comprehensive cloud learning management system featuring video lesson streaming, interactive quizzes, automated grading, and branded student certificates.",
    overview: "LMS Platform enables educational organizations to deliver video courses at scale. PixoraSofttech developed an async-first learning software providing course authoring, student progress tracking, and secure media delivery.",
    tags: ["React", "Node.js", "AWS S3/CloudFront", "Video Streaming"],
    client: "LearnBetter Global Academy",
    industry: "EdTech & Online Learning",
    timeline: "In active development",
    deliverables: [
      "Cloud E-Learning Software Infrastructure",
      "Course Authoring & Media Publishing Suite",
      "Student Portal & Progress Analytics",
      "Certificate Validation Engine"
    ],
    img: "/portfolio/lms-dashboard.png",
    heroImg: "/portfolio/lms-dashboard.png",
    status: "processing",
    challenge: "The client needed to scale from 100 students to over 10,000 active learners without increasing instructional staff overhead or experiencing video streaming buffering.",
    solution: "We constructed an enterprise LMS with AWS S3/CloudFront video streaming, interactive module quizzes, automated certificate generation upon completion, and comprehensive student engagement dashboards.",
    keyFeatures: [
      "Adaptive Video Lesson Streaming & Resolution Controls",
      "Interactive Quiz Builder with Automated Grading",
      "Instant Verified Certificate Generation (PDF)",
      "Student Learning Analytics & Instructor Dashboard"
    ],
    results: [
      "Successfully scaled to 10,000+ enrolled students",
      "Zero video buffering complaints reported",
      "Instructor operational workload cut by 65%"
    ],
    testimonial: {
      text: "With the LMS built by PixoraSofttech, we can now train 100x more students without hiring additional staff. The platform is rock-solid, fast, and highly engaging.",
      name: "Emma Tremblay",
      role: "CEO & Founder",
      company: "LearnBetter Global Academy",
      rating: 5,
      avatarBg: "bg-emerald-700"
    }
  },
  {
    id: "inventory",
    title: "Inventory Manager",
    category: "Software",
    tagline: "Multi-Warehouse Stock Control & Automated Inventory Software",
    desc: "An enterprise inventory management platform offering real-time stock tracking across multi-warehouse locations, barcode scanning, purchase orders, and reorder alerts.",
    overview: "Inventory Manager gives retail and wholesale businesses total control over inventory flow. PixoraSofttech engineered a robust inventory control software designed to eliminate stockouts and overstock costs.",
    tags: ["Next.js", "PostgreSQL", "Barcode Scanner API", "Multi-Warehouse"],
    client: "RetailCo Group",
    industry: "Retail Operations & Supply Chain",
    timeline: "In active development",
    deliverables: [
      "Enterprise Inventory Management Software",
      "Multi-Location Warehouse Sync Engine",
      "Barcode Scanning Interface",
      "Purchase Order & Supplier Portal"
    ],
    img: "/portfolio/light-inventory-dashboard.png",
    heroImg: "/portfolio/light-inventory-dashboard.png",
    status: "processing",
    challenge: "A retail chain with 5 warehouse locations experienced high stockout rates and lost thousands of dollars in overstocked items due to delayed paper stock audits.",
    solution: "We created a centralized cloud software system featuring barcode scanner integration, real-time multi-location inventory sync, low-stock reorder triggers, and automated purchase order generation.",
    keyFeatures: [
      "Multi-Warehouse Real-Time Stock Tracking Hub",
      "Hardware & Mobile Barcode Scanner Integration",
      "Automated Low-Stock Thresholds & Purchase Orders",
      "Supplier Performance & Unit Cost Analytics"
    ],
    results: [
      "0% stockout rate during peak retail period",
      "Saved $15,000/month by preventing overstocking",
      "Unified inventory tracking across 5 warehouse sites"
    ],
    testimonial: {
      text: "We finally know exactly what stock we have, where it is located, and when to order more. PixoraSofttech created an inventory system that paid for itself within the first month.",
      name: "Jake Peterson",
      role: "VP of Retail Operations",
      company: "RetailCo Group",
      rating: 5,
      avatarBg: "bg-sky-700"
    }
  }
];
