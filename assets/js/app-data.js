// ==========================================
// HEADER NAVIGATION DATA
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
    { label: "About", url: "#why-hire-me", active: false },
    { label: "Service", url: "#nahidServicesSection", active: false },
    { label: "Portfolio", url: "#nahidPortfolioSection", active: false },
    { label: "Start Project", url: "#nahidContactSection", active: false },
  ],

  // ডানদিকের মেনু আইটেম লিস্ট
  rightMenu: [
    {
      label: "Resume",
      url: "pages/resume.html",
      target: "_self",
      active: false,
    },
    { label: "Review", url: "#nahidTestimonialsSection", active: false },
    // { label: "Pricing", url: "#nahidPricingSection", active: false },
    { label: "FAQ", url: "#nahidFaqSection", active: false },
    { label: "Contact", url: "#nahidFooter", active: false },
  ],
};

// ==========================================
// HERO SECTION CONFIGURATION & DATA
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
    portfolioUrl: "#nahidPortfolioSection",
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

// ==========================================
// SERVICES SECTION DATA
// ==========================================
const nahidServicesMeta = {
  sectionTitle: "My",
  accentText: "Services",
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

// ==========================================
// EXPERIENCE SECTION DATA
// ==========================================
const nahidExperienceMeta = {
  sectionTitle: "My",
  accentText: "Work Experince",
};
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

// ==========================================
// HIRE ME SECTION DATA
// ==========================================
const nahidHireMeta = {
  titleStart: "Why",
  titleAccent: "Hire me?",
  description:
    "I'm a Shopify-focused Full-Stack Web Developer. My primary expertise lies in Shopify store development, customization, and performance optimization, helping businesses build scalable and conversion-focused online stores. Alongside Shopify, I have strong expertise in HTML, CSS, Bootstrap, Tailwind CSS, SASS, JavaScript, jQuery, Vue.js, PHP, and Laravel, allowing me to handle both front-end and back-end development efficiently.",
  avatarImg: "assets/images/nahid.png", // Apnar high-end png image path eikhane bhashaben
  ctaText: "Hire me ↗",
  ctaLink: "#contact",
};
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
// PORTFOLIO SECTION DATA
// ==========================================
const nahidPortfolioMeta = {
  sectionTitle: "My",
  accentText: "Portfolio",
  portfolioDescription:
    "A selection of recent work showcasing expertise across web development, e-commerce, and custom solutions.",
  sectionSubtitle: "See All",
};
const nahidPortfolioConfig = {
  loop: true,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesPerView: 3, // 👈 এখানে আপনি যত দিবেন (1, 2, 3, 4) প্রতি রো-তে ততটা কার্ড শো করবে!
};
const nahidPortfolioData = [
  {
    id: 1,
    title: "portfoilo",
    watermark: "portfoilo",
    image: "assets/images/portfoilo.webp",
    link: "#",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    description:
      "A premium conversion-driven online academy platform built for seamless photography course sales, digital ebooks distribution, and destination workshops management.",
  },
  {
    id: 2,
    title: "grow-axit-business",
    watermark: "grow-axit-business",
    image: "assets/images/grow-axit-business.webp",
    link: "#",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
    description:
      "A premium conversion-driven online academy platform built for seamless photography course sales, digital ebooks distribution, and destination workshops management.",
  },
  {
    id: 3,
    title: "Grow Business",
    watermark: "Grow Business",
    image: "assets/images/grow-business.webp",
    link: "#",
    tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
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
// CTA SECTION DATA
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

// ==========================================
// MARQUEE SECTION DATA
// ==========================================
const nahidMarqueeConfig = {
  items: [
    {
      text: "Web Design & Development",
      iconColor: "#ff7a30",
      svg: ``,
      img: "assets/images/icons/coding.webp",
    },
    /*
    {
      text: "App Development",
      iconColor: "#00ffcc",
      svg: ``,
      img: "assets/images/icons/app.webp",
    },
    {
      text: "Dashboard",
      iconColor: "#ff007f",
      svg: ``,
      img: "assets/images/icons/",
    },
    */
    {
      text: "E-commerce",
      iconColor: "#ffcc00",
      svg: ``,
      img: "assets/images/icons/ecommerce.webp",
    },
    {
      text: "Shopify Development",
      iconColor: "#3385ff",
      svg: ``,
      img: "assets/images/icons/shopify.webp",
    },
    {
      text: "WordPress Development",
      iconColor: "#a020f0",
      svg: ``,
      img: "assets/images/icons/wordpress.webp",
    },
    {
      text: "web optimization",
      iconColor: "#a020f0",
      svg: ``,
      img: "assets/images/icons/optimization.webp",
    },
    /*
    {
      text: "web application",
      iconColor: "#a020f0",
      svg: ``,
      img: "assets/images/icons/",
    },
    {
      text: "api integration",
      iconColor: "#a020f0",
      svg: ``,
      img: "assets/images/icons/",
    },
    */
  ],
};

// ==========================================
//  PRICING SECTION DATA
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
// FAQ SECTION DATA
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
// WORKFLOW SECTION DATA
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

// ==========================================
// FOOTER SECTION DATA
// ==========================================
const nahidFooterConfig = {
  connectBanner: {
    title: "Let's Work Together",
    desc: "Let's bring your store design and automation ideas to life. Click below to start a quick chat on WhatsApp, and let's discuss how we can grow your business!",
    popupBtnText: "Chat on WhatsApp",
    buttonText: "Get In Touch",
    buttonUrl: "https://wa.me/8801761005639",
  },
  brand: {
    logoText: "Nahid", // আপনার টিম বা নিজের লোগো টেক্সট
    logoImage: `assets/images/nahid-logo.png`, // লোগো ইমেজ পাথ
    logoAlt: "Nahid Logo", // লোগোর অ্যালট টেক্সট
    description:
      "I manage project planning, guide developers, maintain code quality, and ensure timely project delivery. I am passionate about writing clean, maintainable, and scalable code while following modern development standards.",
  },
  newsletter: {
    title: "Get the latest information",
  },
  copyright: ` © ${new Date().getFullYear()} Nahid Islam. All Rights Reserved.`,

  // ডাইনামিক সোশ্যাল লিংক মেমোরি
  socials: [
    {
      name: "facebook",
      url: "https://www.facebook.com/nahidislamfbp",
      iconSvg: `<svg width="20" height="20" viewBox="0 0 0.6 0.6" xmlns="http://www.w3.org/2000/svg"><title>facebook_line</title><g fill="none" fill-rule="evenodd"><path d="M0.6 0v0.6H0V0zM0.315 0.581l0 0 -0.002 0.001 -0.001 0 0 0 -0.002 -0.001q0 0 -0.001 0l0 0 0 0.011 0 0.001 0 0 0.003 0.002 0 0 0 0 0.003 -0.002 0 0 0 0 0 -0.011q0 0 0 0m0.007 -0.003 0 0 -0.005 0.002 0 0 0 0 0 0.011 0 0 0 0 0.005 0.002q0 0 0.001 0l0 0 -0.001 -0.015q0 0 -0.001 -0.001m-0.018 0a0.001 0.001 0 0 0 -0.001 0l0 0 -0.001 0.015q0 0 0 0.001l0 0 0.005 -0.002 0 0 0 0 0 -0.011 0 0 0 0z"/><path d="M0.1 0.3a0.2 0.2 0 1 1 0.225 0.198V0.35h0.05a0.025 0.025 0 1 0 0 -0.05h-0.05v-0.05a0.025 0.025 0 0 1 0.025 -0.025h0.013a0.025 0.025 0 1 0 0 -0.05H0.35a0.075 0.075 0 0 0 -0.075 0.075v0.05H0.225a0.025 0.025 0 1 0 0 0.05h0.05v0.148A0.2 0.2 0 0 1 0.1 0.3m0.2 0.25c0.138 0 0.25 -0.112 0.25 -0.25S0.438 0.05 0.3 0.05 0.05 0.162 0.05 0.3s0.112 0.25 0.25 0.25" fill="#ffffff"/></g></svg>`,
    },
    /*
     {
       name: "Instagram",
       url: "https://www.instagram.com/mnahidislam39",
       iconSvg: `<svg width="20px" height="20px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 3.5H12M4.5 0.5H10.5C12.7091 0.5 14.5 2.29086 14.5 4.5V10.5C14.5 12.7091 12.7091 14.5 10.5 14.5H4.5C2.29086 14.5 0.5 12.7091 0.5 10.5V4.5C0.5 2.29086 2.29086 0.5 4.5 0.5ZM7.5 10.5C5.84315 10.5 4.5 9.15685 4.5 7.5C4.5 5.84315 5.84315 4.5 7.5 4.5C9.15685 4.5 10.5 5.84315 10.5 7.5C10.5 9.15685 9.15685 10.5 7.5 10.5Z" stroke="#ffffff"/>
        </svg>`,
     },
    {
       name: "whatsapp",
       url: "https://wa.me/8801761005639",
       iconSvg: `<svg fill="#fff" width="20px" height="20px" viewBox="-0.05 -0.05 0.6 0.6" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-whatsapp"><path d="M0.238 0C0.105 0.007 0 0.116 0.001 0.248a0.245 0.245 0 0 0 0.027 0.112L0.002 0.487a0.01 0.01 0 0 0 0.012 0.011l0.126 -0.03a0.25 0.25 0 0 0 0.107 0.026c0.136 0.002 0.249 -0.105 0.253 -0.24C0.504 0.111 0.384 -0.007 0.238 0zm0.15 0.384a0.195 0.195 0 0 1 -0.138 0.057 0.195 0.195 0 0 1 -0.087 -0.02l-0.018 -0.009 -0.077 0.018 0.016 -0.078 -0.009 -0.017A0.19 0.19 0 0 1 0.055 0.248c0 -0.052 0.02 -0.1 0.057 -0.137a0.196 0.196 0 0 1 0.138 -0.057c0.052 0 0.101 0.02 0.138 0.057a0.192 0.192 0 0 1 0.057 0.137c0 0.051 -0.021 0.101 -0.057 0.137z"/><path d="m0.371 0.301 -0.048 -0.014a0.018 0.018 0 0 0 -0.018 0.005l-0.012 0.012a0.018 0.018 0 0 1 -0.019 0.004c-0.023 -0.009 -0.071 -0.052 -0.083 -0.073a0.017 0.017 0 0 1 0.001 -0.019l0.01 -0.013a0.018 0.018 0 0 0 0.002 -0.018L0.184 0.139a0.018 0.018 0 0 0 -0.028 -0.006c-0.013 0.011 -0.029 0.028 -0.031 0.048 -0.003 0.034 0.011 0.076 0.066 0.127 0.063 0.059 0.114 0.067 0.147 0.059 0.019 -0.004 0.034 -0.023 0.043 -0.037a0.018 0.018 0 0 0 -0.01 -0.027"/></svg>`,
    },
     */
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/mnahidislam39",
      iconSvg: `<svg fill="#fff" width="20px" height="20px" viewBox="-0.05 -0.05 0.6 0.6" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin" class="jam jam-linkedin"><path d="M0.499 0.293v0.184h-0.107v-0.172c0 -0.043 -0.015 -0.073 -0.054 -0.073 -0.03 0 -0.047 0.02 -0.055 0.039 -0.003 0.007 -0.004 0.016 -0.004 0.026v0.18h-0.107s0.001 -0.292 0 -0.322h0.107v0.046l-0.001 0.001h0.001v-0.001c0.014 -0.022 0.04 -0.053 0.096 -0.053 0.07 0 0.123 0.046 0.123 0.145M0.061 0.001C0.024 0.001 0 0.025 0 0.056c0 0.031 0.023 0.056 0.059 0.056h0.001c0.037 0 0.06 -0.025 0.06 -0.056C0.12 0.025 0.097 0.001 0.061 0.001zM0.006 0.477h0.107V0.156H0.006z"/></svg>`,
    },
    {
      name: "github",
      url: "https://github.com/mnahidislam39",
      iconSvg: `<svg fill="#fff" width="20px" height="20px" viewBox="0 0 0.6 0.6" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M0.3 0.056a0.25 0.25 0 0 0 -0.079 0.487c0.013 0.002 0.017 -0.005 0.017 -0.012 0 -0.006 0 -0.026 0 -0.047 -0.063 0.012 -0.079 -0.015 -0.084 -0.029a0.091 0.091 0 0 0 -0.026 -0.035c-0.009 -0.005 -0.021 -0.016 0 -0.017a0.05 0.05 0 0 1 0.038 0.026 0.053 0.053 0 0 0 0.073 0.021 0.053 0.053 0 0 1 0.016 -0.033c-0.056 -0.006 -0.114 -0.028 -0.114 -0.123a0.098 0.098 0 0 1 0.026 -0.067 0.09 0.09 0 0 1 0.003 -0.066s0.021 -0.007 0.069 0.026a0.236 0.236 0 0 1 0.125 0c0.048 -0.033 0.069 -0.026 0.069 -0.026a0.09 0.09 0 0 1 0.003 0.066 0.097 0.097 0 0 1 0.026 0.067c0 0.096 -0.058 0.117 -0.114 0.123a0.059 0.059 0 0 1 0.017 0.046c0 0.033 0 0.06 0 0.069 0 0.007 0.005 0.014 0.017 0.012A0.25 0.25 0 0 0 0.3 0.056"/></svg>`,
    },
    {
      name: "Behance",
      url: "https://www.behance.net/mnahidislam39",
      iconSvg: `<svg fill="#fff" width="20px" height="20px" viewBox="0 0 0.6 0.6" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="M0.553 0.376a0.025 0.025 0 0 0 -0.03 0.018A0.075 0.075 0 0 1 0.375 0.375v-0.025h0.175a0.025 0.025 0 0 0 0.025 -0.025 0.125 0.125 0 1 0 -0.25 0v0.05a0.125 0.125 0 0 0 0.246 0.031 0.025 0.025 0 0 0 -0.018 -0.03M0.45 0.25a0.075 0.075 0 0 1 0.053 0.022A0.076 0.076 0 0 1 0.52 0.3h-0.141a0.075 0.075 0 0 1 0.07 -0.05m-0.05 -0.075h0.1a0.025 0.025 0 0 0 0 -0.05h-0.1a0.025 0.025 0 0 0 0 0.05M0.248 0.293A0.1 0.1 0 0 0 0.175 0.125h-0.125a0.025 0.025 0 0 0 -0.025 0.025v0.325a0.025 0.025 0 0 0 0.025 0.025h0.138a0.112 0.112 0 0 0 0.06 -0.207M0.075 0.175h0.1a0.05 0.05 0 1 1 0 0.1h-0.1Zm0.113 0.275h-0.113v-0.125h0.113a0.063 0.063 0 0 1 0 0.125"/></svg>`,
    },
  ],

  // নেভিগেশন লিংকসমূহ (ক্লিন অবজেক্ট ট্র্যাকিং)
  navigation: [
    { label: "About", url: "#why-hire-me", active: false },
    { label: "Service", url: "#nahidServicesSection", active: false },
    { label: "Portfolio", url: "#nahidPortfolioSection", active: false },
    { label: "Start Project", url: "#nahidContactSection", active: false },
    { label: "Review", url: "#nahidTestimonialsSection", active: false },
    // { label: "Pricing", url: "#nahidPricingSection", active: false },
    { label: "FAQ", url: "#nahidFaqSection", active: false },
  ],

  // কন্টাক্ট ইনফো
  contact: [
    { label: "+8801761-005639", link: "tel:+8801761-005639" },
    {
      label: "devnahidislam4@gmail.com",
      link: "mailto:devnahidislam4@gmail.com",
    },
  ],

  // লিগ্যাল ডকুমেন্টস
  legal: [
    {
      label: "TERMS & CONDITIONS",
      link: "javascript:void(0);",
      // প্রতিটি পলিসির ভেতরের আলাদা পয়েন্টগুলো শুধু অবজেক্ট আকারে দিবেন
      content: [
        {
          // icon: "file", // জাভাস্ক্রিপ্ট নিজে এই নামে আইকন বসিয়ে নিবে
          title: "1. Agreement to Terms",
          text: "By accessing or using this website and portfolio services, you agree to be bound by these Terms and Conditions. If you disagree with any part, please refrain from using our services.",
        },
        {
          title: "2. Intellectual Property Rights",
          text: "Unless otherwise stated, all source code, designs, graphics, and portfolio materials displayed here are the intellectual property of Nahid Islam. Unauthorized duplication or redistribution without permission is strictly prohibited.",
        },
        {
          title: "3. Project Standard & Code Quality",
          text: "We commit to delivering projects with pixel-perfect design precision, modern standards (clean CSS using hyphens, robust JavaScript logic), and maximum architecture optimization within fixed deadlines.",
        },
        {
          title: "4. Limitation of Liability",
          text: "In no event shall we be liable for any direct, indirect, or consequential damages arising from the use or inability to use our dynamic web solutions or deployed assets once delivered.",
        },
      ],
    },
    {
      label: "PRIVACY POLICY",
      link: "javascript:void(0);",
      content: [
        {
          title: "1. Data We Collect",
          text: "We only collect personal information that you voluntarily provide to us when you subscribe to our newsletter or use the 'Get In Touch' interaction forms.",
        },
        {
          title: "2. How We Use Your Data",
          text: "Your details are securely analyzed and processed exclusively to reply to your business inquiries, manage project scoping, and deliver requested technical updates.",
        },
      ],
    },
  ],
};
