export type ServiceDetail = {
  slug: string;
  title: string;
  category: "Software & Systems" | "Creative & E-Commerce";
  eyebrow: string;
  intro: string;
  overview: string;
  problem: string;
  solution: string;
  deliverables: string[];
  process: { title: string; text: string }[];
  outcomes: string[];
  technologies: string[];
  faqs: { question: string; answer: string }[];
};

export const serviceDetails: ServiceDetail[] = [
  // ── SOFTWARE & SYSTEMS ──
  {
    slug: "website-development",
    title: "Website Development",
    category: "Software & Systems",
    eyebrow: "High-Performance Next.js Websites Engineered to Convert",
    intro: "We design and build fast, responsive, SEO-optimized web applications that communicate your brand authority, capture leads, and turn visitors into long-term clients.",
    overview: "In today's digital landscape, a website is your primary business storefront. PixoraSofttech delivers custom Next.js and React web applications built with clean architecture, sub-second loading speeds, semantic SEO foundations, and conversion-focused user flows.",
    problem: "Many businesses rely on slow, outdated website templates that look generic, fail mobile responsiveness standards, load in 5+ seconds, and suffer high visitor bounce rates without driving inquiries or sales.",
    solution: "We combine modern frontend frameworks (Next.js, React, Tailwind CSS), optimized asset delivery, structured metadata, and custom UI components into a high-converting web platform tailored specifically to your audience.",
    deliverables: [
      "Custom responsive Next.js / React web application",
      "Pixel-perfect UI design system & Tailwind CSS components",
      "Core Web Vitals & PageSpeed 95+ performance optimization",
      "On-page SEO setup, meta tagging, and schema markup",
      "Contact form, appointment scheduling, or lead capture engine",
      "Content Management System (CMS) integration & handover"
    ],
    process: [
      { title: "Discovery & Strategy", text: "We analyze your target market, competitors, core value proposition, and user conversion paths to define page structure." },
      { title: "UI/UX & Wireframing", text: "We design clean visual mockups and interactive prototypes ensuring seamless navigation across desktop, tablet, and mobile devices." },
      { title: "Production Development", text: "We write clean, modular Next.js code with zero-downtime build pipelines, dynamic routing, and fast API connections." },
      { title: "QA Testing & Launch", text: "We execute cross-browser testing, accessibility compliance checks, SSL setup, and deployment to high-speed global CDNs." }
    ],
    outcomes: [
      "Immediate elevation in digital brand credibility",
      "Sub-2-second average page load times across devices",
      "Significant increase in visitor conversion rates & leads",
      "Higher search engine ranking potential via structured SEO"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Vercel / AWS"],
    faqs: [
      { question: "How long does a custom website build take?", answer: "Most custom website projects are completed within 3 to 5 weeks depending on page count and special functionality." },
      { question: "Will my website be mobile-friendly and fast?", answer: "Yes, every site we build is mobile-first, responsive, and performance-tuned to achieve 90+ Google PageSpeed scores." },
      { question: "Can I update content on my site after launch?", answer: "Absolutely. We integrate easy-to-use CMS solutions or provide direct admin access so you can update text and images anytime." }
    ]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    category: "Software & Systems",
    eyebrow: "Cross-Platform iOS & Android Apps Built for Scale",
    intro: "We build intuitive, high-performance iOS and Android mobile applications that connect users directly to your products, services, and live data.",
    overview: "From ride-hailing and e-commerce apps to fitness trackers and enterprise field tools, PixoraSofttech crafts native-feel mobile applications using React Native and Flutter. We focus on low latency, offline resilience, secure authentication, and delightful micro-interactions.",
    problem: "Mobile app initiatives frequently fail when user interfaces are clunky, battery drain is excessive, backend API sync is unreliable, or launch timelines are delayed by building separate native codebases.",
    solution: "We leverage modern cross-platform mobile frameworks with single-codebase efficiency, optimized native bridges, offline caching, push notifications, and biometrically secured payment flows.",
    deliverables: [
      "iOS and Android mobile app builds ready for App Store & Google Play",
      "Complete mobile UI/UX design system & interactive prototypes",
      "Secure backend REST/GraphQL API & database integration",
      "Push notification, payment gateway, and social auth setup",
      "App Store Optimization (ASO) and submission guidance"
    ],
    process: [
      { title: "Product Blueprinting", text: "We define core user personas, key user journeys, offline requirements, and API integration specifications." },
      { title: "Mobile UI Design", text: "We craft human-interface-compliant mobile screens with dark/light themes and intuitive gestures." },
      { title: "Cross-Platform Engineering", text: "We develop the app using React Native or Flutter, wiring up native device capabilities like GPS, camera, and biometrics." },
      { title: "Testing & Store Publishing", text: "We conduct TestFlight and beta testing rounds, resolve edge cases, and manage store approval submission." }
    ],
    outcomes: [
      "Unified app experience on both iOS & Android devices",
      "Faster time-to-market with cross-platform code efficiency",
      "High app retention through responsive UI and instant feedback",
      "Secure, scalable cloud architecture backing mobile traffic"
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Firebase", "Stripe API", "Google Maps API"],
    faqs: [
      { question: "What types of mobile apps can you build?", answer: "We build commerce, booking, fitness, transport, community, and business apps tailored to your users and the way your service works." },
      { question: "Do you build for both iOS and Android?", answer: "Yes. We can build for both platforms with a shared cross-platform codebase or choose a native approach based on the product requirements." },
      { question: "Can the app use features like maps, camera, and notifications?", answer: "Yes. We can integrate device capabilities such as location, camera, push notifications, biometrics, and payment services where they fit the app." },
      { question: "Can you publish the app to the App Store and Google Play?", answer: "Yes. We prepare the app for review and support the submission and release process for Apple App Store and Google Play." },
      { question: "Do you support the app after launch?", answer: "Yes. We can help maintain the app, address issues, update dependencies, and plan improvements as your users and needs grow." }
    ]
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    category: "Software & Systems",
    eyebrow: "Enterprise Portals, Dashboards & Business Automation",
    intro: "We architect custom SaaS products, admin dashboards, internal operations software, and automated backend platforms built around your precise business workflows.",
    overview: "Generic off-the-shelf software often forces your organization to compromise its operational processes. PixoraSofttech builds tailor-made enterprise web software that consolidates workflows, automates manual data entry, and gives management real-time visibility.",
    problem: "Teams lose countless hours copying data across disconnected spreadsheets, WhatsApp messages, and legacy software that lacks custom permissions, reporting tools, and system integrations.",
    solution: "We conduct deep operational process mapping, then design modular software with role-based access control, relational database management, automated trigger workflows, and intuitive dashboard analytics.",
    deliverables: [
      "Custom enterprise web application & management dashboard",
      "Role-based access control (RBAC) & user authentication",
      "Relational database design (PostgreSQL / MongoDB)",
      "Automated email, SMS, and webhook notification engines",
      "Data export, PDF report generation, and analytics modules",
      "Cloud infrastructure provisioning & continuous deployment"
    ],
    process: [
      { title: "Workflow Audit", text: "We map out your business operations, department dependencies, data bottlenecks, and automation goals." },
      { title: "Software Architecture", text: "We design data schemas, security permission levels, backend API endpoints, and interface wireframes." },
      { title: "Iterative Sprint Development", text: "We engineer software modules in transparent 2-week sprints with regular demo reviews." },
      { title: "Deployment & Staff Onboarding", text: "We migrate legacy data, deploy to secure cloud servers, and conduct hands-on staff training." }
    ],
    outcomes: [
      "Elimination of manual paper and spreadsheet record keeping",
      "Real-time operational dashboards for business leadership",
      "Streamlined multi-department workflows with audit trails",
      "Substantial reduction in administrative overhead costs"
    ],
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Docker", "AWS"],
    faqs: [
      { question: "What kinds of custom software can you build?", answer: "We build web applications, SaaS products, internal tools, dashboards, APIs, and integrations based on your users and business workflows." },
      { question: "How long does a custom software project take?", answer: "Timelines depend on the features, integrations, and scope. We agree on a clear delivery plan after understanding your requirements." },
      { question: "How do you estimate the cost of a project?", answer: "We scope the requirements, integrations, and delivery stages with you before sharing a project estimate. The final cost depends on the solution we agree to build." },
      { question: "Can custom software integrate with our existing tools?", answer: "Yes, we build custom REST or GraphQL integrations to connect with your existing CRMs, accounting software, and databases." },
      { question: "Can the software grow as our business changes?", answer: "We design the architecture around your current needs while keeping future users, features, and integrations in mind." },
      { question: "Do you provide support after launch?", answer: "Yes, we can help monitor, maintain, and improve your software after launch. The support plan is agreed as part of your project." }
    ]
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    category: "Software & Systems",
    eyebrow: "Scalable SaaS Products Built Around Your Users",
    intro: "We design and build secure SaaS platforms with subscription billing, customer workspaces, analytics, and the architecture to grow with your business.",
    overview: "A successful SaaS product brings a clear customer problem together with a dependable, easy-to-use platform. We help shape the product, build its core workflows, and prepare it to serve customers as adoption grows.",
    problem: "SaaS teams can struggle with unclear product scope, disconnected customer workspaces, complicated billing, and platforms that become difficult to extend as usage grows.",
    solution: "We build SaaS products around clear user journeys, secure tenant-aware architecture, flexible permissions, reliable integrations, and operational visibility.",
    deliverables: [
      "Multi-tenant SaaS web application and customer workspaces",
      "User authentication, team roles, and account management",
      "Subscription plans, recurring billing, and invoices",
      "Product analytics, reporting, and admin dashboards",
      "API integrations, notifications, and automated workflows",
      "Cloud deployment, monitoring, and post-launch support"
    ],
    process: [
      { title: "Product Discovery", text: "We clarify your customers, product goals, business model, and the core workflows for the first release." },
      { title: "Architecture & UX", text: "We plan tenant boundaries, user roles, data structures, integrations, and the product experience." },
      { title: "Build & Validate", text: "We build in focused releases, share working demos, and use feedback to improve the product." },
      { title: "Launch & Scale", text: "We prepare production, monitor the launch, and support reliability and product improvements as usage grows." }
    ],
    outcomes: [
      "A clear, usable product experience for your customers",
      "Secure workspaces and access controls for each organization",
      "Subscription and billing flows aligned with your business model",
      "A platform foundation ready for new features and customer growth"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    faqs: [
      { question: "What kinds of SaaS products can you build?", answer: "We build subscription platforms, customer portals, vertical SaaS products, team tools, and multi-tenant business applications tailored to your users and operating model." },
      { question: "Can you build subscriptions, billing, and user roles?", answer: "Yes. We can implement plans, recurring payments, invoices, account permissions, and separate workspaces for your customer organizations." },
      { question: "How long does it take to build a SaaS product?", answer: "It depends on the product scope. We define an initial release with the core user flows, then plan additional features and integrations in stages." },
      { question: "Can the platform scale as the number of customers grows?", answer: "We plan the platform around your needs today while making room for more users, data, integrations, and product features as adoption grows." },
      { question: "Do you provide support after launch?", answer: "Yes. We can help monitor, maintain, secure, and improve the platform after launch through an ongoing support plan that fits your team." }
    ]
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    category: "Software & Systems",
    eyebrow: "Research-Backed Interfaces Designed for High Engagement",
    intro: "We transform complex digital product requirements into beautiful, intuitive, and accessible user experiences that delight users and drive conversion.",
    overview: "Great digital products succeed because of thoughtful user experience design. PixoraSofttech combines user research, wireframing, high-fidelity UI design, dynamic prototyping, and scalable design systems to create digital products that feel natural to use.",
    problem: "Confusing navigation, cluttered screens, and inconsistent design components frustrate users, causing high app drop-offs, abandoned carts, and expensive post-launch code re-writes.",
    solution: "We validate ideas visually before writing code. Our UI/UX design process maps user journeys, creates interactive Figma prototypes, enforces accessibility standards, and delivers developer-ready design tokens.",
    deliverables: [
      "User persona mapping & user journey flowcharts",
      "Interactive low-fidelity & high-fidelity wireframes",
      "Clickable Figma prototypes for user testing & stakeholder review",
      "Comprehensive UI component design system (colors, typography, icons)",
      "Developer handoff documentation & asset packages"
    ],
    process: [
      { title: "User Research & Audit", text: "We study target user behavior, product goals, brand guidelines, and usability pain points." },
      { title: "Information Architecture", text: "We structure page hierarchy, menu navigation, user task flows, and interactive logic." },
      { title: "High-Fidelity Interface Design", text: "We design polished screens with modern typography, dark/light modes, micro-animations, and visual balance." },
      { title: "Design System & Handoff", text: "We organize UI components into a structured Figma library for seamless frontend development." }
    ],
    outcomes: [
      "Significant reduction in user task completion times",
      "Higher conversion rates and user satisfaction scores",
      "Faster development velocity with standardized UI design systems",
      "Confidence in product usability prior to code implementation"
    ],
    technologies: ["Figma", "Design Systems", "Prototyping", "User Research", "WCAG Accessibility"],
    faqs: [
      { question: "What do you include in a UI/UX design project?", answer: "Projects can include user research, information architecture, user flows, wireframes, high-fidelity screens, clickable prototypes, and a reusable design system." },
      { question: "Do you design for both web and mobile?", answer: "Yes. We design responsive web experiences and mobile interfaces, adapting layouts and interactions to the needs of each device." },
      { question: "Will we receive a clickable prototype?", answer: "Yes. We can create an interactive prototype in Figma so your team can review and test key journeys before development begins." },
      { question: "Can you create a reusable design system?", answer: "Yes. We can organize colors, typography, components, and usage guidance into a consistent library your team can extend." },
      { question: "How do you make designs accessible?", answer: "We consider readable contrast, clear hierarchy, keyboard and screen reader needs, and inclusive interaction patterns throughout the design process." }
    ]
  },
  {
    slug: "cloud-solutions",
    title: "Cloud & AI Solutions",
    category: "Software & Systems",
    eyebrow: "Secure Cloud Systems, APIs & Practical AI Integrations",
    intro: "We design secure cloud infrastructure, connect applications through reliable APIs, automate deployments, and add practical AI features that help your products scale.",
    overview: "Modern web and mobile applications require robust backend infrastructure. PixoraSofttech provides end-to-end cloud engineering—including serverless functions, container orchestration, database clustering, CDN caching, and automated backup management.",
    problem: "Disconnected systems, manual deployments, limited monitoring, rising cloud costs, and unclear AI use cases can make products harder to operate and scale.",
    solution: "We assess your systems, design a fit-for-purpose cloud architecture, connect services through secure APIs, automate delivery, and implement AI features around real product needs.",
    deliverables: [
      "Cloud architecture and infrastructure provisioning on AWS, Google Cloud, or Azure",
      "Secure API design, implementation, and third-party integrations",
      "CI/CD pipelines, containers, and infrastructure automation",
      "Monitoring, backups, access controls, and recovery planning",
      "AI-assisted search, content processing, or workflow automation where useful",
      "Performance, reliability, and cloud cost optimization"
    ],
    process: [
      { title: "Systems & Goals Audit", text: "We review your infrastructure, applications, APIs, data flows, security needs, and opportunities for useful AI." },
      { title: "Cloud Architecture", text: "We plan a secure, scalable cloud foundation with suitable services, data stores, and deployment patterns." },
      { title: "Build & Integrate", text: "We provision infrastructure, connect APIs and services, automate delivery, and implement agreed AI workflows." },
      { title: "Deploy & Optimize", text: "We validate security and reliability, deploy to production, and tune performance, monitoring, and cloud costs." }
    ],
    outcomes: [
      "Secure and reliable infrastructure matched to your product needs",
      "Connected applications and data through maintainable APIs",
      "Repeatable releases with automated deployment workflows",
      "AI features focused on useful, measurable product tasks"
    ],
    technologies: ["AWS", "Google Cloud", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Nginx"],
    faqs: [
      { question: "Which cloud providers do you work with?", answer: "We work with AWS, Google Cloud, and Azure, choosing services to match your security, performance, and operating requirements." },
      { question: "Can you migrate an existing application to the cloud?", answer: "Yes. We can plan and carry out a migration with backups, validation, and a release approach designed to limit disruption." },
      { question: "Can you connect our APIs and third-party tools?", answer: "Yes. We build and connect secure APIs and integrate external tools so your systems can exchange data and automate workflows." },
      { question: "How do you decide where AI can help?", answer: "We look for specific tasks where AI can improve search, processing, or automation, then assess data, accuracy, security, and operational fit." },
      { question: "Do you provide monitoring and support after deployment?", answer: "Yes. We can configure monitoring and alerts, help maintain the environment, and improve reliability and cloud costs over time." }
    ]
  },
  {
    slug: "cyber-security",
    title: "Cyber Security",
    category: "Software & Systems",
    eyebrow: "Proactive Vulnerability Audits, Penetration Testing & Data Hardening",
    intro: "We audit, secure, and monitor your web platforms, mobile apps, and APIs against cyber threats, data breaches, and OWASP Top 10 vulnerabilities.",
    overview: "Data breaches and security flaws can destroy customer trust overnight. PixoraSofttech delivers practical cyber security services—ranging from vulnerability assessments and penetration testing to secure code reviews and compliance readiness.",
    problem: "Security vulnerabilities often hide undetected in application source code, unpatched server dependencies, and insecure API endpoints until exploited by malicious actors.",
    solution: "We perform automated and manual security testing, identify attack vectors, patch software vulnerabilities, enforce HTTPS/TLS encryption, and establish real-time security monitoring.",
    deliverables: [
      "Comprehensive vulnerability assessment & penetration test report",
      "OWASP Top 10 security audit for web & mobile applications",
      "Prioritized remediation roadmap with code-level fix guides",
      "API authentication & data encryption review",
      "SSL/TLS certificate management & security headers enforcement",
      "Real-time threat monitoring & incident response protocols"
    ],
    process: [
      { title: "Security Scope & Mapping", text: "We identify all digital assets, databases, API endpoints, user auth flows, and data compliance standards." },
      { title: "Penetration Testing & Scanning", text: "We execute static/dynamic code analysis and simulated attack vectors to discover security flaws." },
      { title: "Reporting & Patching Support", text: "We deliver clear executive reports ranking risks by severity and provide exact code patches." },
      { title: "Verification & Monitoring", text: "We re-test patched systems to certify security compliance and configure continuous monitoring." }
    ],
    outcomes: [
      "Total visibility of application and server security posture",
      "Immediate elimination of critical vulnerabilities and exploits",
      "Protection of sensitive customer personal data & payment info",
      "Compliance readiness for international data privacy standards"
    ],
    technologies: ["OWASP", "Burp Suite", "Nmap", "Penetration Testing", "SSL/TLS", "Security Audits"],
    faqs: [
      { question: "Will security testing disrupt our live application?", answer: "No, we perform penetration testing safely in staging environments or during scheduled low-traffic maintenance windows." },
      { question: "Do you provide a full security report after testing?", answer: "Yes, we deliver a detailed report outlining identified vulnerabilities, risk scores, and step-by-step remediation instructions." }
    ]
  },

  // ── CREATIVE & E-COMMERCE ──
  {
    slug: "branding-identity-design",
    title: "Branding & Identity Design",
    category: "Creative & E-Commerce",
    eyebrow: "Memorable Visual Identities That Command Trust",
    intro: "We craft cohesive brand identities—from logo marks and color palettes to typography systems and brand guidelines—that differentiate your business and build lasting consumer trust.",
    overview: "A strong brand identity communicates quality before a single word is read. PixoraSofttech designs strategic brand visual systems tailored for modern digital platforms, product packaging, and corporate media.",
    problem: "Inconsistent brand visuals, outdated logos, and generic color schemes confuse customers, weaken market positioning, and fail to differentiate your business from competitors.",
    solution: "We develop complete visual brand identities rooted in market research, crafting distinctive logo marks, harmonious color palettes, typography rules, and clear usage guidelines.",
    deliverables: [
      "Primary logo design, secondary lockups & favicon marks",
      "Curated HSL/RGB/CMYK color palette & contrast ratios",
      "Typography selection & hierarchy guidelines",
      "Comprehensive digital Brand Book (PDF)",
      "Social media profile assets & business card mockups",
      "Vector source files (.AI, .SVG, .PNG, .PDF)"
    ],
    process: [
      { title: "Brand Strategy & Moodboards", text: "We explore your business values, target demographic, and market competitors to establish a creative vision." },
      { title: "Concept Exploration", text: "We sketch and digitize multiple unique logo concepts and visual directions." },
      { title: "Refinement & Systems", text: "We perfect the chosen logo mark, define exact color formulas, and select brand typography." },
      { title: "Guidelines Delivery", text: "We compile your complete Brand Style Guide with full vector assets ready for digital and print use." }
    ],
    outcomes: [
      "Instant brand recognition across physical and digital customer touchpoints",
      "Higher perceived product value allowing premium price positioning",
      "Unified design consistency across web, social media, and packaging",
      "Complete asset library for internal teams and agency partners"
    ],
    technologies: ["Adobe Illustrator", "Figma", "Brand Strategy", "Vector Design"],
    faqs: [
      { question: "What files will I receive for my brand logo?", answer: "You will receive vector master files (.AI, .SVG, .EPS) as well as high-res PNG and PDF files for web and print." },
      { question: "Do you include brand usage guidelines?", answer: "Yes, every brand identity project includes a comprehensive Brand Guidelines PDF covering colors, fonts, logo spacing, and do's/don'ts." }
    ]
  },
  {
    slug: "amazon-listing-design",
    title: "Amazon Listing Design",
    category: "Creative & E-Commerce",
    eyebrow: "High-Converting Amazon Image Stacks That Drive Sales",
    intro: "We create conversion-driven Amazon main images, infographic callouts, lifestyle composites, and feature displays that maximize click-through and purchase conversion rates.",
    overview: "On Amazon, your product gallery images are your primary sales pitch. PixoraSofttech designs high-impact Amazon image stacks that communicate key product benefits instantly, overcome buyer objections, and outperform competitor listings.",
    problem: "Amazon sellers lose thousands in sales due to low-quality product photos, illegible feature text, non-compliant main images, and galleries that fail to explain product advantages.",
    solution: "We build 7-image Amazon listing stacks engineered for mobile shoppers: compliant pure-white hero images, visual benefit callouts, dimension diagrams, and emotional lifestyle composites.",
    deliverables: [
      "Main Hero Image (Amazon 100% white background compliant)",
      "Feature callout infographics highlighting key product benefits",
      "Dimension, spec, and ingredient/material comparison graphics",
      "Photorealistic lifestyle image composites",
      "A/B split test image variants for click-through rate testing",
      "Amazon Seller Central upload-ready high-res JPEGs (2000x2000px+)"
    ],
    process: [
      { title: "Competitor & Review Audit", text: "We analyze competitor listings and customer reviews to uncover the top buying drivers and common objections." },
      { title: "Storyboard & Layout Planning", text: "We script the 7-image sequence to ensure a logical sales narrative from image 1 to 7." },
      { title: "Retouching & Graphic Design", text: "We perform photo retouching, render photorealistic shadows, and add sharp graphic callouts." },
      { title: "Final Polish & Delivery", text: "We export pixel-perfect images optimized for Amazon's zoom feature and mobile display." }
    ],
    outcomes: [
      "Increased click-through rate (CTR) on Amazon search results",
      "Higher conversion rate (CVR) leading to better organic BSR rankings",
      "Reduced customer return rates by setting clear product expectations",
      "Mobile-optimized visual presentation built for mobile shoppers"
    ],
    technologies: ["Adobe Photoshop", "E-Commerce Design", "Amazon Seller Central", "3D Render Composite"],
    faqs: [
      { question: "Are your images 100% compliant with Amazon's listing guidelines?", answer: "Yes, our main hero images strictly follow Amazon's pure-white background (RGB 255,255,255) and dimension rules." },
      { question: "How many images are included in a listing package?", answer: "A full listing package includes a complete 7-image stack tailored for your product." }
    ]
  },
  {
    slug: "amazon-a-plus-content",
    title: "Amazon A+ Content",
    category: "Creative & E-Commerce",
    eyebrow: "Premium Amazon A+ & EBC Layouts That Boost Conversions",
    intro: "We design custom Amazon A+ Content (Enhanced Brand Content) modules and Premium A+ layouts that tell your brand story and cross-sell product lines.",
    overview: "Amazon A+ Content allows brand registered sellers to transform product descriptions into rich visual landing pages. PixoraSofttech designs custom graphic modules, brand story sections, and product comparison charts.",
    problem: "Plain text product descriptions fail to engage buyers, missing out on Amazon's 3-10% conversion rate lift potential offered by professional A+ Content.",
    solution: "We design custom, full-width A+ graphic modules incorporating brand history, key feature deep-dives, comparison matrices, and cross-catalog links.",
    deliverables: [
      "Custom Amazon A+ / EBC graphic module banners",
      "Interactive product comparison chart graphics",
      "Amazon Brand Story banner suite & cross-link modules",
      "Copywriting & graphic asset integration",
      "Seller Central upload-ready image assets & alt text guide"
    ],
    process: [
      { title: "A+ Content Strategy", text: "We choose the optimal Amazon A+ module layout sequence for your product category." },
      { title: "Graphic Design & Copywriting", text: "We craft compelling visual banners and persuasive copy emphasizing unique selling points." },
      { title: "Mobile & Desktop Verification", text: "We verify module scaling across both desktop and Amazon mobile app viewports." },
      { title: "Seller Central Publishing", text: "We assist with uploading and submitting the module assets directly to your Amazon account." }
    ],
    outcomes: [
      "Average 3-10% increase in product sales conversion rate",
      "Higher cross-catalog sales via visual comparison tables",
      "Stronger brand registry authority on Amazon product pages",
      "Enhanced SEO ranking signals within Amazon's search algorithm"
    ],
    technologies: ["Adobe Photoshop", "Amazon EBC / A+", "E-Commerce Branding", "Copywriting"],
    faqs: [
      { question: "Do I need Amazon Brand Registry for A+ Content?", answer: "Yes, Amazon requires sellers to have Brand Registry to publish A+ Content or Premium A+ Content." },
      { question: "Do you design comparison charts to cross-sell my other products?", answer: "Yes, comparison charts are included in our A+ packages to drive sales to your full product catalog." }
    ]
  },
  {
    slug: "product-infographics",
    title: "Product Infographics",
    category: "Creative & E-Commerce",
    eyebrow: "Data-Rich Visual Callouts That Highlight Core Product Value",
    intro: "We turn complex product specifications, materials, and instructions into clean, eye-catching infographics that communicate value in seconds.",
    overview: "Visual information is processed 60,000 times faster than text. PixoraSofttech designs crisp, professional product infographics for e-commerce stores, product manuals, pitch decks, and digital advertising campaigns.",
    problem: "Customers rarely read long walls of technical product description text, leading to misunderstandings about product specs, sizing, or proper usage.",
    solution: "We distill product specifications into bold visual diagrams, clear icon callouts, ingredient breakdowns, and step-by-step instructional graphics.",
    deliverables: [
      "High-resolution product infographic graphics",
      "Custom vector icon sets representing product features",
      "Dimension, capacity, and material callout diagrams",
      "Before-and-after visual comparison graphics",
      "Multi-platform format exports (Web, Print, Amazon, Shopify)"
    ],
    process: [
      { title: "Spec Breakdown", text: "We analyze your product's technical details, sizing, ingredients, or mechanism." },
      { title: "Visual Conceptualization", text: "We sketch clear diagrammatic layouts and icon callouts to explain key points." },
      { title: "Graphic Execution", text: "We render polished graphics with exact dimensions, custom icons, and brand colors." },
      { title: "Final Export", text: "We deliver web-optimized and print-ready high-res files." }
    ],
    outcomes: [
      "Instant customer comprehension of product benefits and sizing",
      "Reduced customer support inquiries regarding technical specs",
      "Increased buyer purchase confidence and conversion rates",
      "Professional visual presentation for online marketplaces and retail"
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Infographic Design", "Vector Graphics"],
    faqs: [
      { question: "What information do I need to provide for an infographic?", answer: "Just send us your product specs, key features, dimensions, or bullet points, and we will translate them into visual graphics." },
      { question: "Can I use these infographics on Shopify and social media?", answer: "Yes, we provide formatted exports for Shopify, Amazon, Instagram, and print marketing." }
    ]
  },
  {
    slug: "lifestyle-images",
    title: "Lifestyle Images",
    category: "Creative & E-Commerce",
    eyebrow: "Emotional & Relatable Product Visuals That Connect",
    intro: "We create realistic, high-quality lifestyle image composites that show your product in authentic environments, building emotional connection with buyers.",
    overview: "Shoppers want to visualize how a product fits into their daily lives. PixoraSofttech crafts photorealistic lifestyle imagery by blending product photography with curated environment stock, custom lighting, and realistic shadows.",
    problem: "Plain white background product photos lack emotional context, making it difficult for consumers to imagine using the product in real-world settings.",
    solution: "We build high-end lifestyle composites featuring realistic room settings, outdoor environments, and human interaction cues with seamless photo manipulation.",
    deliverables: [
      "Photorealistic lifestyle image composites",
      "Professional photo retouching, color grading & shadow rendering",
      "Category-specific background environments (Kitchen, Gym, Office, Outdoors)",
      "High-resolution web & print format exports"
    ],
    process: [
      { title: "Creative Direction", text: "We select background aesthetics, target user settings, and mood lighting that match your target audience." },
      { title: "Product Extraction & Retouching", text: "We isolate your product image, perform color correction, and smooth surface textures." },
      { title: "Composite Blending & Shadows", text: "We place the product into the setting, matching perspective, contact shadows, and ambient reflections." },
      { title: "Final Grading", text: "We apply cohesive color grading for a natural, magazine-quality finish." }
    ],
    outcomes: [
      "Stronger emotional engagement and buyer desire",
      "Higher click-through rates on digital ad campaigns",
      "Premium brand perception without expensive physical location shoots",
      "Versatile assets for website banners, social posts, and catalog covers"
    ],
    technologies: ["Adobe Photoshop", "Photo Composite", "Color Grading", "Digital Manipulation"],
    faqs: [
      { question: "Do I need to send physical products to your studio?", answer: "If you already have high-res product photos, we can create lifestyle composites digitally! Otherwise, you can ship samples to us." },
      { question: "Do the lifestyle images look authentic?", answer: "Yes! We specialize in advanced perspective matching, lighting harmonization, and photorealistic shadow creation." }
    ]
  },
  {
    slug: "social-media-design",
    title: "Social Media Design",
    category: "Creative & E-Commerce",
    eyebrow: "Scroll-Stopping Social Posts, Ads & Content Templates",
    intro: "We design high-converting social media ad creatives, story sets, carousel posts, and reusable templates for Instagram, Facebook, LinkedIn, and TikTok.",
    overview: "To stand out in crowded social feeds, brands need thumb-stopping visual content. PixoraSofttech produces strategic social media graphics and ad creative suites designed to boost click-throughs, engagement, and follower growth.",
    problem: "Inconsistent post templates, low-quality ad graphics, and generic Canva templates diminish brand authority and result in high cost-per-click (CPC) on paid ad campaigns.",
    solution: "We craft custom social design kits tailored to your brand identity—including performance ad banners, multi-slide educational carousels, and modular social templates.",
    deliverables: [
      "High-converting paid ad creatives (Feed, Story, & Reel formats)",
      "Multi-slide educational carousel post design",
      "Editable Canva or Photoshop template kits",
      "Animated GIF or micro-video social teasers",
      "Optimized banner exports for Instagram, Facebook, LinkedIn & X"
    ],
    process: [
      { title: "Content Strategy & Themes", text: "We establish content pillars, campaign objectives, and visual themes for your social channels." },
      { title: "Creative Production", text: "We design striking graphics, typography layouts, and promotional callouts tailored for quick scrolling." },
      { title: "Ad Variant Creation", text: "We produce multiple hook and layout variations for paid ad performance testing." },
      { title: "Asset Delivery", text: "We export platform-optimized assets and deliver editable template files." }
    ],
    outcomes: [
      "Lower Cost-Per-Click (CPC) and higher Return-On-Ad-Spend (ROAS)",
      "Consistent, recognizable brand aesthetic across social channels",
      "Increased user engagement, saves, and social shares",
      "Streamlined internal content creation using reusable templates"
    ],
    technologies: ["Adobe Photoshop", "Figma", "Canva Templates", "Ad Creative Strategy"],
    faqs: [
      { question: "Can you provide editable templates so our team can edit text later?", answer: "Yes! We can provide editable Canva or Figma templates alongside final ready-to-post graphics." },
      { question: "Do you design ad creatives for Meta (Facebook/Instagram) ads?", answer: "Yes, we specialize in high-converting ad graphics optimized for Meta, LinkedIn, and Google Display networks." }
    ]
  },
  {
    slug: "logo-design",
    title: "Logo Design",
    category: "Creative & E-Commerce",
    eyebrow: "Distinctive, Timeless Logos Crafted for Long-Term Brand Equity",
    intro: "We design iconic, versatile logos that embody your company vision, look sharp on any scale, and stand out in your industry.",
    overview: "Your logo is the visual cornerstone of your business identity. PixoraSofttech creates custom, vector-crafted logo designs that are memorable, scalable, and adaptable across web screens, mobile apps, apparel, and signage.",
    problem: "Generic logo generator templates look cheap, lack brand meaning, fail at small sizes, and create trademark ownership liabilities.",
    solution: "We follow a rigorous graphic design process—researching brand symbolism, hand-sketching concepts, digitizing precise geometric vector paths, and testing versatility across light and dark backgrounds.",
    deliverables: [
      "Original custom logo concepts (3 distinct creative directions)",
      "Primary logo, stacked secondary logo, and compact icon mark",
      "Vector master source files (.AI, .EPS, .SVG, .PDF)",
      "High-resolution transparent PNG and JPG files",
      "Basic logo usage specification sheet (Clear space, min size, color codes)"
    ],
    process: [
      { title: "Brief & Discovery", text: "We gather insights about your business values, target market, industry, and aesthetic preferences." },
      { title: "Concept Sketching", text: "We explore multiple conceptual directions and present 3 distinct logo concepts." },
      { title: "Refinement", text: "We fine-tune the chosen concept's typography, line weights, geometry, and color balance based on feedback." },
      { title: "Master File Package", text: "We export the complete vector package in all color variations (full color, monochrome black, white)." }
    ],
    outcomes: [
      "A unique, trademark-ready visual mark for your business",
      "Flawless legibility from small app icons to large outdoor billboards",
      "Instant professional credibility when pitching clients or investors",
      "Full 100% commercial copyright ownership transferred to you"
    ],
    technologies: ["Adobe Illustrator", "Vector Design", "Typography", "Logo Branding"],
    faqs: [
      { question: "How many logo concepts do I get to choose from?", answer: "We present 3 unique conceptual directions for you to review and choose your preferred concept." },
      { question: "Do I get full copyright ownership of the final logo?", answer: "Yes, upon final approval, 100% commercial rights and master vector source files belong entirely to you." }
    ]
  },
  {
    slug: "packaging-design",
    title: "Packaging Design",
    category: "Creative & E-Commerce",
    eyebrow: "Shelf-Ready Packaging & Box Dieline Design That Sells",
    intro: "We design stunning retail packaging, product boxes, pouch labels, and bottle stickers with precise dieline accuracy ready for commercial printing.",
    overview: "Unboxing is a powerful brand moment. PixoraSofttech crafts eye-catching product packaging designs that attract shoppers on retail shelves and delight online buyers upon arrival.",
    problem: "Poor packaging design with incorrect print dielines leads to misaligned prints, wasted print production budgets, and low shelf appeal.",
    solution: "We work directly with your supplier dieline files, applying sharp typography, compliant product text, finishing effects (foil, spot UV), and print-ready CMYK press files.",
    deliverables: [
      "Custom product packaging design mapped to exact printer dielines",
      "3D photorealistic packaging mockups for e-commerce listing preview",
      "Print-ready CMYK PDF vector files with bleeds, cutlines & fold guides",
      "Ingredient, barcode, nutritional table, and compliance text layout",
      "Spot UV, foil stamp, and matte/gloss finish callout layers"
    ],
    process: [
      { title: "Dieline & Specs Review", text: "We verify your manufacturer's dieline template, dimensions, material specs, and print finish options." },
      { title: "Concept & Graphics Layout", text: "We create packaging graphics that highlight brand elements, core claims, and regulatory text." },
      { title: "3D Visual Proofing", text: "We generate photorealistic 3D box/bottle renders so you can inspect the design from all angles." },
      { title: "Press File Production", text: "We export high-res CMYK vector files prepared strictly to professional commercial printer specs." }
    ],
    outcomes: [
      "Standout shelf presence in retail stores and e-commerce photos",
      "Zero printer errors or dieline misalignment during physical production",
      "Unforgettable unboxing experience that encourages social sharing",
      "Compliance-ready layout for barcodes, nutrition facts, and warnings"
    ],
    technologies: ["Adobe Illustrator", "Photoshop", "Packaging Dielines", "3D Rendering"],
    faqs: [
      { question: "What files do I need to get started on packaging design?", answer: "Please provide your printer's dieline template (PDF/AI), logo, product dimensions, and text copy." },
      { question: "Will you provide print-ready files for my manufacturer?", answer: "Yes! We deliver print-ready CMYK vector PDFs with embedded fonts, bleeds, and color profiles for your print factory." }
    ]
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    category: "Creative & E-Commerce",
    eyebrow: "Versatile Digital & Print Graphic Design for Corporate Needs",
    intro: "We create high-impact marketing collateral—including pitch decks, sales brochures, event banners, flyers, and digital media—tailored to your brand style.",
    overview: "From sales decks that close enterprise deals to marketing brochures for trade shows, PixoraSofttech provides comprehensive graphic design services for print and digital channels.",
    problem: "Poorly formatted slide decks and amateur marketing flyers damage business credibility during key sales pitches and marketing campaigns.",
    solution: "We translate your message into polished visual collateral with custom graphics, clean typography, consistent color branding, and high-res layout structuring.",
    deliverables: [
      "Custom sales pitch deck & corporate presentation design (PowerPoint / Figma)",
      "Multi-page corporate brochures, catalogs & whitepapers",
      "Event banners, pop-up displays & trade show booth graphics",
      "Flyers, posters, business cards & stationery packages",
      "Print-ready CMYK files and interactive digital PDFs"
    ],
    process: [
      { title: "Creative Brief", text: "We review your content outline, target audience, format requirements, and branding guidelines." },
      { title: "Layout & Formatting", text: "We structure page hierarchy, design custom graphics, and align visual balance." },
      { title: "Review & Tweaks", text: "We refine layouts based on your feedback until every page looks exceptional." },
      { title: "Final File Delivery", text: "We deliver web-optimized digital files and high-res press files." }
    ],
    outcomes: [
      "Professional corporate image during sales meetings and trade events",
      "Clear visual communication of key business statistics and offerings",
      "Versatile marketing collateral library for sales teams",
      "Flawless print quality with correct resolution and color profiles"
    ],
    technologies: ["Adobe InDesign", "Illustrator", "Photoshop", "Figma", "PowerPoint Design"],
    faqs: [
      { question: "Can you redesign our existing PowerPoint presentation deck?", answer: "Yes, we redesign sales decks and investor pitch decks into polished, visual presentations." },
      { question: "Do you handle both print and digital graphic projects?", answer: "Yes, we prepare assets for digital use (interactive PDFs, web banners) as well as commercial print (flyers, brochures, banners)." }
    ]
  }
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
