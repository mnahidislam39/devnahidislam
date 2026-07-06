// ==========================================
// NAHID HEADER CONFIGURATION & NAVIGATION DATA
// ==========================================
const nahidHeaderConfig = {
  logo: {
    imgSrc: "assets/images/nahid-logo.png",
    text: "Nahid Islam",
    // iconHtml: `<span class="logo-inner-icon">JC</span>`,
    homeUrl: "/", // হোম পেজের লিংক (যেমন: "index.html" বা "#")
  },
  // বাঁদিকের মেনু আইটেম লিস্ট
  leftMenu: [
    // { label: "Home", url: "#nahidHeroSection", active: true },
    { label: "About", url: "#nahidExperienceSection", active: false },
    { label: "Service", url: "#nahidServicesSection", active: false },
    { label: "Portfolio", url: "#nahidPortfolioSection", active: false },
    {
      label: "Resume",
      url: "pages/resume.html",
      target: "_self",
      active: false,
    },
  ],

  // ডানদিকের মেনু আইটেম লিস্ট
  rightMenu: [
    { label: "Review", url: "#nahidTestimonialsSection", active: false },
    { label: "Pricing", url: "#nahidPricingSection", active: false },
    { label: "FAQ", url: "#nahidFaqSection", active: false },
    { label: "Contact", url: "#nahidContactSection", active: false },
  ],
};

// ==========================================
// NAHID HERO SECTION CONFIGURATION & DATA
// ==========================================
const nahidHeroConfig = {
  badge: {
    text: "Hello!",
    sparkleSvg: `<svg class="sparkle-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3V6M12 18V21M3 12H6M18 12H21" stroke="#FE7E36" stroke-width="2" stroke-linecap="round" /></svg>`,
  },
  heading: {
    prefix: "I'm",
    name: "Nahid Islam", // হাইলাইটেড নাম
    title: "Full Stack Developer",
  },
  media: {
    imgSrc: "assets/images/nahid.png",
    altText: "Nahid Islam - Full Stack Developer",
  },
  ctas: {
    portfolioLabel: "Portfolio",
    portfolioUrl: "#",
    hireLabel: "Hire me",
    hireUrl: "#",
  },
  testimonial: {
    text: "Nahid’s exceptional development skills ensure our project’s success. Highly Recommended",
  },
  stats: {
    stars: "★★★★★",
    years: "2 Years+ ",
    label: "Experience",
  },
  decorations: {
    leftLineSvg: `<svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M5 35C15 20 25 25 35 5" stroke="#FE7E36" stroke-width="2" stroke-linecap="round" /></svg>`,
  },
};

// Services Data
const nahidServicesMeta = {
  sectionTitle: "What",
  accentText: "I Offer",
  sectionSubtitle:
    "High-performance web applications and custom digital engineering tailored to streamline your business operations, automate workflows, and drive measurable revenue growth.",
};
const nahidServicesData = [
  {
    id: 1,
    title: "Web Development",
    customClass: "nahid-card-web-development",
    serviceType: "dev-web",
    mainImg: "assets/images/services/web-development.jpg",
    bgImg1: "assets/images/education/edu-FP-1.png",
    bgImg2: "https://via.placeholder.com/260x360/222/fff",
    link: "#",
  },
  {
    id: 2,
    title: "WordPress Development",
    customClass: "nahid-card-wordpress",
    serviceType: "dev-wordpress",
    mainImg: "assets/images/services/wordPress-development.jpg",
    bgImg1: "assets/images/education/edu-FP-2.png",
    bgImg2: "https://via.placeholder.com/260x360/222/fff",
    link: "#",
  },
  {
    id: 3,
    title: "E-Commerce Solutions",
    customClass: "nahid-card-ecommerce",
    serviceType: "dev-ecommerce",
    mainImg: "assets/images/services/ecommerce-solutions.jpg",
    bgImg1: "https://via.placeholder.com/260x360/333/fff",
    bgImg2: "https://via.placeholder.com/260x360/222/fff",
    link: "#",
  },
  {
    id: 4,
    title: "Shopify Development",
    customClass: "nahid-card-shopify",
    serviceType: "dev-shopify",
    mainImg: "assets/images/services/shopify-dev.jpg",
    bgImg1: "https://via.placeholder.com/260x360/333/fff",
    bgImg2: "https://via.placeholder.com/260x360/222/fff",
    link: "#",
  },
  {
    id: 5,
    title: "Shopify APP Development",
    customClass: "nahid-card-shopify",
    serviceType: "dev-shopify",
    mainImg: "assets/images/services/shopify-app.jpg",
    bgImg1: "https://via.placeholder.com/260x360/333/fff",
    bgImg2: "https://via.placeholder.com/260x360/222/fff",
    link: "#",
  },
  {
    id: 6,
    title: "Maintenance & Support",
    customClass: "nahid-card-maintenance",
    serviceType: "dev-maintenance",
    mainImg: "assets/images/services/maintenance-support.jpg",
    bgImg1: "https://via.placeholder.com/260x360/333/fff",
    bgImg2: "https://via.placeholder.com/260x360/222/fff",
    link: "#",
  },
  {
    id: 7,
    title: "API Integration",
    customClass: "nahid-card-api",
    serviceType: "dev-api",
    mainImg: "assets/images/services/api-img.jpg",
    bgImg1: "https://via.placeholder.com/260x360/333/fff",
    bgImg2: "https://via.placeholder.com/260x360/222/fff",
    link: "#",
  },
];
// Experience Data
const nahidExperienceMeta = {
  sectionTitle: "My",
  accentText: "Work Experince",
};
// Experience Data
const nahidExperienceData = [
  {
    id: 1,
    company: "Cognizant, Mumbai",
    duration: "Sep 2016- July 2020",
    role: "Experince Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    dotType: "orange-pill", // Options: orange-pill, dark-pill
  },
  {
    id: 2,
    company: "Sugee Pvt limited, Mumbai",
    duration: "Sep 2020- July 2023",
    role: "UI/UX Designer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales.",
    dotType: "dark-pill",
  },
  {
    id: 3,
    company: "Cinetstox, Mumbai",
    duration: "Sep 2023",
    role: "Lead UX Designer",
    description: "", // Keep empty if no description needed
    dotType: "orange-pill",
  },
];
// Hire Me Data
const nahidHireMeta = {
  titleStart: "Why",
  titleAccent: "Hire me?",
  description:
    "I'm a Shopify-focused Full-Stack Web Developer. My primary expertise lies in Shopify store development, customization, and performance optimization, helping businesses build scalable and conversion-focused online stores. Alongside Shopify, I have strong expertise in HTML, CSS, Bootstrap, Tailwind CSS, SASS, JavaScript, jQuery, Vue.js, PHP, and Laravel, allowing me to handle both front-end and back-end development efficiently.",
  avatarImg: "assets/images/nahid.png", // Apnar high-end png image path eikhane bhashaben
  ctaText: "Hire me ↗",
  ctaLink: "#contact",
};
// Hire Me Stats
const nahidHireStats = [
  {
    id: 1,
    count: "50+",
    label: "Project Completed",
  },
  {
    id: 2,
    count: "40+",
    label: "Happy Clients",
  },
  {
    id: 3,
    count: "2+",
    label: "Years Experience",
  },
  {
    id: 4,
    count: "15+",
    label: "Technologies",
  },
];

// ==========================================
// NAHID PORTFOLIO GLOBAL CONFIGURATION
// ==========================================
const nahidPortfolioMeta = {
  sectionTitle: "My",
  accentText: "Portfolio",
  sectionSubtitle: "See All",
};
const nahidPortfolioConfig = {
  loop: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesPerView: 3, // 👈 এখানে আপনি যত দিবেন (1, 2, 3, 4) প্রতি রো-তে ততটা কার্ড শো করবে!
};

// Portfolio Data (ইমেজ পাথ এবং ডাটা অপরিবর্তিত)
const nahidPortfolioData = [
  {
    id: 1,
    title: "Fotocademia - E-commerce Platform",
    watermark: "Fotocademia",
    image: "assets/images/education/edu-FP-1.png",
    link: "#",
    tags: ["Shopify", "UI/UX Design", "E-commerce", "Minimalist"],
    description:
      "A premium conversion-driven online academy platform built for seamless photography course sales, digital ebooks distribution, and destination workshops management.",
  },
  {
    id: 2,
    title: "Fotocademia - E-commerce Platform",
    watermark: "Fotocademia",
    image: "assets/images/grow-axit-businessdRK.webp",
    link: "#",
    tags: ["Shopify", "UI/UX Design", "E-commerce", "Minimalist"],
    description:
      "A premium conversion-driven online academy platform built for seamless photography course sales, digital ebooks distribution, and destination workshops management.",
  },
  {
    id: 3,
    title: "Fotocademia - E-commerce Platform",
    watermark: "Fotocademia",
    image: "assets/images/grow-axit-businessdRK.webp",
    link: "#",
    tags: ["Shopify", "UI/UX Design", "E-commerce", "Minimalist"],
    description:
      "A premium conversion-driven online academy platform built for seamless photography course sales, digital ebooks distribution, and destination workshops management.",
  },
  {
    id: 4,
    title: "Fotocademia - E-commerce Platform",
    watermark: "Fotocademia",
    image: "assets/images/grow-axit-businessdRK.webp",
    link: "#",
    tags: ["Shopify", "UI/UX Design", "E-commerce", "Minimalist"],
    description:
      "A premium conversion-driven online academy platform built for seamless photography course sales, digital ebooks distribution, and destination workshops management.",
  },
];

// ==========================================
// NAHID TESTIMONIAL CONFIGURATION & DATA
// ==========================================
const nahidTestimonialConfig = {
  loop: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesPerView: 3, // 👈 এক লাইনে কয়টা কার্ড দেখাবে তা এখান থেকে কন্ট্রোল করুন (যেমন: 2, 3, 4)

  // ডাইনামিক হেডার টেক্সট ইঞ্জিন
  header: {
    titleNormalPre: "Testimonials That ", // হাইলাইটেড টেক্সটের আগের অংশ
    titleSpan: "Speak to My Results", // <span> এর ভেতরের হাইলাইটেড টেক্সট
    titleNormalPost: "", // হাইলাইটেড টেক্সটের পরের অংশ (প্রয়োজন না হলে খালি রাখুন)
    subtitle:
      "Discover how custom architecture, performance optimizations, and high-fidelity user experiences empower brands across ecosystems globally.",
  },
};

// রিভিউ কার্ডের পিওর ডাটা অ্যারে
const nahidTestimonialData = [
  {
    name: "Nahid Islam Patil",
    role: "CEO, Lirante",
    avatar: "assets/images/avatar1.webp",
    rating: 5.0,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.",
  },
  {
    name: "Amelia Harrison",
    role: "Founder, Fotocademia",
    avatar: "assets/images/avatar2.webp",
    rating: 5.0,
    review:
      "A remarkable full-stack developer who perfectly executed our ecommerce photography platform architecture. The conversion metrics boosted significantly post-launch due to optimized clean layout structure.",
  },
  {
    name: "Marcus Vance",
    role: "Director, Geek Pro Ultra",
    avatar: "assets/images/avatar3.webp",
    rating: 5.0,
    review:
      "Exceptional modern design aesthetics blended with fluid backend performance. Delivered a flawless brand digital interface within record time. Highly responsive and professional communication throughout.",
  },
  {
    name: "Sarah Jenkins",
    role: "Product Manager, Apex",
    avatar: "assets/images/avatar4.webp",
    rating: 4.8,
    review:
      "Impressive attention to detail, especially regarding custom responsive layouts and speed optimization. The fluid navigation logic and custom code execution exceeded our enterprise benchmarks.",
  },
];

// ==========================================
// NAHID CTA SECTION CONFIGURATION & DATA
// ==========================================
const nahidCtaConfig = {
  heading: {
    textNormal: "Have an Awsome Project Idea? ",
    textHighlight: "Let's Discuss",
  },
  form: {
    placeholder: "Enter Email Address",
    buttonText: "Send",
    // ইনপুট ফিল্ডের বামের মেইল আইকন (SVG)
    emailIconSvg: `<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>`,
  },
  // নিচের ৩টি ট্রাস্ট ব্যাজের ডাটা
  badges: [
    {
      text: "4.9/5 Average Ratings",
      iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>`,
    },
    {
      text: "25+ Winning Awards",
      iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/></svg>`,
    },
    {
      text: "Certified Product Designer",
      iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`,
    },
  ],
  // ফর্ম সাবমিট হলে কী অ্যাকশন হবে
  onSubmit: function (email) {
    console.log("Form Submitted Successfully with Email:", email);
    alert(`Thank you! We will discuss your project at: ${email}`);
  },
};

// marquee section configuration
const nahidMarqueeConfig = {
  items: [
    {
      text: "UX Design",
      iconColor: "#ff7a30",
      svg: `<svg viewBox="0 0 24 24" width="24" height="24" class="marquee-star"><path d="M12 2l2.4 7.2L22 11.6l-5.6 4.4L17.8 22 12 18.4 6.2 22l1.4-6-5.6-4.4 7.6-2.4z"/></svg>`,
    },
    {
      text: "App Design",
      iconColor: "#00ffcc",
      svg: `<svg viewBox="0 0 24 24" width="24" height="24" class="marquee-star"><path d="M12 2l2.4 7.2L22 11.6l-5.6 4.4L17.8 22 12 18.4 6.2 22l1.4-6-5.6-4.4 7.6-2.4z"/></svg>`,
    },
    {
      text: "Dashboard",
      iconColor: "#ff007f",
      svg: `<svg viewBox="0 0 24 24" width="24" height="24" class="marquee-star"><path d="M12 2l2.4 7.2L22 11.6l-5.6 4.4L17.8 22 12 18.4 6.2 22l1.4-6-5.6-4.4 7.6-2.4z"/></svg>`,
    },
    {
      text: "Wireframe",
      iconColor: "#ffcc00",
      svg: `<svg viewBox="0 0 24 24" width="24" height="24" class="marquee-star"><path d="M12 2l2.4 7.2L22 11.6l-5.6 4.4L17.8 22 12 18.4 6.2 22l1.4-6-5.6-4.4 7.6-2.4z"/></svg>`,
    },
    {
      text: "User Research",
      iconColor: "#3385ff",
      svg: `<svg viewBox="0 0 24 24" width="24" height="24" class="marquee-star"><path d="M12 2l2.4 7.2L22 11.6l-5.6 4.4L17.8 22 12 18.4 6.2 22l1.4-6-5.6-4.4 7.6-2.4z"/></svg>`,
    },
    {
      text: "Visual Identity",
      iconColor: "#a020f0",
      svg: `<svg viewBox="0 0 24 24" width="24" height="24" class="marquee-star"><path d="M12 2l2.4 7.2L22 11.6l-5.6 4.4L17.8 22 12 18.4 6.2 22l1.4-6-5.6-4.4 7.6-2.4z"/></svg>`,
    },
  ],
};

// ==========================================
// NAHID PRICING SECTION CONFIGURATION & DATA
// ==========================================
const nahidPricingConfig = {
  header: {
    titleNormal: "Choose the Perfect ",
    titleHighlight: "Pricing Plan",
    mainButtonText: "Custom Quote",
  },
};

const nahidPricingData = [
  {
    tier: "Basic Plan",
    price: "299",
    packageTitle: "Single Landing Page Design",
    delivery: "3-5 Days Delivery",
    revisions: "3 Revisions",
    features: [
      "High-Fidelity Custom Layout",
      "Mobile Responsive Structure",
      "Vanilla JS & Clean CSS Execution",
      "Basic SEO Optimization",
    ],
  },
  {
    tier: "Standard Plan",
    price: "799",
    packageTitle: "Complete Shopify/WordPress Setup",
    delivery: "7-10 Days Delivery",
    revisions: "5 Revisions",
    features: [
      "Full Multi-page Dynamic Site",
      "Advanced Shopify/WordPress Engine",
      "No-Overflow Max 1440px Width Control",
      "Speed & Performance Tuning",
      "Contact Form Integration",
    ],
  },
  {
    tier: "Premium Plan",
    price: "1499",
    packageTitle: "Custom Full-Stack Solution",
    delivery: "14-21 Days Delivery",
    revisions: "Unlimited Revisions",
    features: [
      "Laravel / Vue.js / React Architecture",
      "Custom High-End Neon/Glassmorphism UI",
      "Database & Advanced Formula Logic",
      "100% Anti-Conflict JS Architecture",
      "Premium Long-term Support",
    ],
  },
];

// ==========================================
// NAHID FAQ SECTION CONFIGURATION & DATA
// ==========================================
const nahidFaqConfig = {
  titleNormal: "Frequently Asked ",
  titleHighlight: "Questions",

  // অ্যাকোর্ডিয়ন ওপেন/ক্লোজ করার প্লাস-মাইনাস ইন্ডিকেটর (SVG)
  icons: {
    plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="faq-icon-svg"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
    minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="faq-icon-svg"><line x1="5" y1="12" x2="19" y2="12"></line></svg>`,
  },

  // প্রশ্ন ও উত্তরের লিস্ট
  questions: [
    {
      q: "What is your typical web development workflow?",
      a: "My workflow is structured into 4 phases: Requirement Gathering & Planning, Figma UI/UX Concept Design, Clean High-Performance Coding, and rigorous cross-browser testing before official launch.",
    },
    {
      q: "Do you build custom Shopify stores or use pre-made templates?",
      a: "I specialize in building custom, high-fidelity Shopify architectures tailored exactly to your brand. I prioritize speed, dynamic section controls, and precise pixel layouts over bloated third-party themes.",
    },
    {
      q: "Will my website be fully speed-optimized and mobile responsive?",
      a: "Absolutely. Every project is built using native constraints, optimized CSS layouts, and isolated clean JavaScript logic. I strictly manage layout overflows to ensure a flawless experience up to 1440px and on mobile screens.",
    },
    {
      q: "What happens if I need changes after the project is completed?",
      a: "Every plan comes with a dedicated post-launch support period. Depending on the tier you choose, I provide maintenance and feature updates to keep your ecosystem running smoothly.",
    },
  ],
};

// ==========================================
// NAHID WORKFLOW SECTION CONFIGURATION & DATA
// ==========================================
const nahidWorkflowConfig = {
  titleNormal: "My Professional ",
  titleHighlight: "Work Process",
};

const nahidWorkflowData = [
  {
    step: "01",
    title: "Discovery & Strategy",
    desc: "We discuss your brand alignment, user goals, and map out a solid project blueprint before writing any code.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12h20M12 2v20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
  },
  {
    step: "02",
    title: "High-Fidelity Design",
    desc: "Crafting a minimalist, high-end visual design system in Figma with perfect layouts and crisp typography.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"/><path d="M12 6V12L16 14"/></svg>`,
  },
  {
    step: "03",
    title: "Clean Execution",
    desc: "Developing with fast, no-overflow layouts up to 1440px using optimized code structures for pixel-perfect stability.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  },
  {
    step: "04",
    title: "QA & Dynamic Launch",
    desc: "Rigorous performance optimization, interaction debugging, and final launch of your full-scale dynamic asset.",
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
  },
];

// fotter configuration
const nahidFooterConfig = {
  connectBanner: {
    title: "Let's Work Together",
    buttonText: "GET IN TOUCH",
  },
  brand: {
    logoText: "JCREA", // আপনার টিম বা নিজের লোগো টেক্সট
    logoImage: `assets/images/nahid-logo.png`, // লোগো ইমেজ পাথ
    logoAlt: "Nahid Logo", // লোগোর অ্যালট টেক্সট
    description:
      "I manage project planning, guide developers, maintain code quality, and ensure timely project delivery. I am passionate about writing clean, maintainable, and scalable code while following modern development standards.",
  },
  newsletter: {
    title: "Get the latest information",
  },
  copyright: `Copyright© ${new Date().getFullYear()} Nahid Islam. All Rights Reserved.`,

  // ডাইনামিক সোশ্যাল লিংক মেমোরি
  socials: [
    {
      name: "facebook",
      url: "#",
      iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    },
    {
      name: "youtube",
      url: "#",
      iconSvg: `<svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>`,
    },
    {
      name: "whatsapp",
      url: "#",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
    },
    {
      name: "instagram",
      url: "#",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
    },
    {
      name: "twitter",
      url: "#",
      iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
    },
  ],

  // নেভিগেশন লিংকসমূহ (ক্লিন অবজেক্ট ট্র্যাকিং)
  navigation: [
    { label: "Service", url: "#nahidServicesSection", active: false },
    { label: "Portfolio", url: "#nahidPortfolioSection", active: false },
    {
      label: "Resume",
      url: "pages/resume.html",
      target: "_self",
      active: false,
    },
    { label: "Review", url: "#nahidTestimonialsSection", active: false },
    { label: "Pricing", url: "#nahidPricingSection", active: false },
    { label: "FAQ", url: "#nahidFaqSection", active: false },
  ],

  // কন্টাক্ট ইনফো
  contact: [
    { label: "+8801761-005639", link: "tel:+8801761-005639" },
    {
      label: "devnahidislam4@gmail.com",
      link: "mailto:devnahidislam4@gmail.com",
    },
    {
      label: "Nahid Islam Portfolio",
      link: "https://mnahidislam39.github.io/dev-nahid-islam-portfolio/",
    },
  ],

  // লিগ্যাল ডকুমেন্টস
  legal: [
    { label: "Terms & Conditions", link: "#" },
    { label: "Privacy Policy", link: "#" },
  ],
};
