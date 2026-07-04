// Nahid Dynamic Header Rendering
function initNahidDynamicHeader() {
  const config =
    typeof nahidHeaderConfig !== "undefined" ? nahidHeaderConfig : null;
  if (!config) return;

  const leftMenuContainer = document.getElementById("nahidHeaderLeftMenu");
  const rightMenuContainer = document.getElementById("nahidHeaderRightMenu");
  const logoContainer = document.getElementById("nahidHeaderLogo");

  // ১. হেল্পার ফাংশন: মেনু আইটেম জেনারেটর
  const generateMenuItems = (container, itemsArray) => {
    if (!container || !itemsArray) return;
    container.innerHTML = ""; // ওল্ড রিসেট

    itemsArray.forEach((item) => {
      const a = document.createElement("a");
      a.href = item.url || "#";
      a.className = "nav-item";
      if (item.active) a.classList.add("active");
      if (item.target) a.setAttribute("target", item.target);
      a.textContent = item.label;
      container.appendChild(a);
    });
  };

  // লোগো রেন্ডার সেকশন (Direct Link from App Data)
  if (logoContainer && config.logo) {
    // app-data.js থেকে সরাসরি ইউআরএল নেওয়া হচ্ছে, ফাঁকা থাকলে ডিফল্ট রুট "/" বা "#" পাবে
    const homeLink =
      config.logo.homeUrl && config.logo.homeUrl.trim() !== ""
        ? config.logo.homeUrl
        : "#";

    // মেইন কন্টেইনারের ভেতরে অ্যানকর ট্যাগ তৈরি
    logoContainer.innerHTML = `<a href="${homeLink}" class="brand-logo-link"></a>`;
    const logoLinkWrapper = logoContainer.querySelector(".brand-logo-link");

    // কন্ডিশনাল চেকিং: ইমেজ থাকলে শুধু ইমেজ, না থাকলে শুধু টেক্সট-আইকন
    if (config.logo.imgSrc && config.logo.imgSrc.trim() !== "") {
      logoLinkWrapper.innerHTML = `
      <img src="${config.logo.imgSrc}" alt="${config.logo.text || "Logo"}" class="logo-img">
    `;
    } else {
      logoLinkWrapper.innerHTML = `      
      <span class="logo-text">${config.logo.text || "Nahid Islam"}</span>
    `;
    }
  }
  generateMenuItems(leftMenuContainer, config.leftMenu);
  generateMenuItems(rightMenuContainer, config.rightMenu);

  // ৩. 🎯 স্টিকি হেডার ইঞ্জিন (Smooth Backdrop Blurring)
  const header = document.querySelector(".main-header");
  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    },
    { passive: true },
  );

  // ৪. 📱 মোবাইল নেভিগেশন ফিক্স লজিক
  const mobileToggle = document.getElementById("nahidMobileToggle");

  if (mobileToggle) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      header.classList.toggle("mobile-nav-open");
    });

    // স্ক্রিনের যেকোনো খালি জায়গায় ক্লিক করলে মোবাইল মেনু অটোমেটিক বন্ধ হয়ে যাবে
    document.addEventListener("click", (e) => {
      if (
        header.classList.contains("mobile-nav-open") &&
        !header.contains(e.target)
      ) {
        header.classList.remove("mobile-nav-open");
      }
    });
  }
}

function initNahidDynamicHero() {
  const config =
    typeof nahidHeroConfig !== "undefined" ? nahidHeroConfig : null;
  if (!config) return;

  // ১. ব্যাজ লোড
  const badgeText = document.getElementById("heroBadgeText");
  const badgeIcon = document.getElementById("heroBadgeIcon");
  if (badgeText && config.badge) badgeText.textContent = config.badge.text;
  if (badgeIcon && config.badge)
    badgeIcon.innerHTML = config.badge.sparkleSvg || "";

  // ২. হেডিং জেনারেটর
  const headingEl = document.getElementById("heroHeading");
  if (headingEl && config.heading) {
    headingEl.innerHTML = `${config.heading.prefix || ""} <span class="highlight-text">${config.heading.name || ""}</span>,<br>${config.heading.title || ""}`;
  }

  // ৩. প্রোফাইল ইমেজ ও ওভারলে
  const imgWrapper = document.getElementById("heroImageWrapper");
  if (imgWrapper && config.media) {
    imgWrapper.innerHTML = `
      <img src="${config.media.imgSrc}" alt="${config.media.altText}" class="hero-image">
      <div class="image-overlay"></div>
    `;
  }

  // ৪. গ্লাস সিটিএ অ্যাকশন বাটন
  const btnPort = document.getElementById("heroBtnPortfolio");
  const btnHire = document.getElementById("heroBtnHire");
  if (btnPort && config.ctas) {
    btnPort.href = config.ctas.portfolioUrl || "#";
    btnPort.querySelector(".btn-text").textContent = config.ctas.portfolioLabel;
  }
  if (btnHire && config.ctas) {
    btnHire.href = config.ctas.hireUrl || "#";
    btnHire.textContent = config.ctas.hireLabel;
  }

  // ৫. উইজেট ও পরিসংখ্যান
  const quoteText = document.getElementById("heroQuoteText");
  if (quoteText && config.testimonial)
    quoteText.textContent = config.testimonial.text;

  const starsEl = document.getElementById("heroRatingStars");
  const yearsEl = document.getElementById("heroExpYears");
  const labelEl = document.getElementById("heroExpLabel");

  if (starsEl && config.stats) starsEl.textContent = config.stats.stars;
  if (yearsEl && config.stats) yearsEl.textContent = config.stats.years;
  if (labelEl && config.stats) labelEl.textContent = config.stats.label;

  // ৬. ডেকোরেটিভ কার্ভ লাইন
  const decoLine = document.getElementById("heroDecoLine");
  if (decoLine && config.decorations)
    decoLine.innerHTML = config.decorations.leftLineSvg || "";
}
// 1. Service Local Configurations
function initNahidInfiniteSlider() {
  // 1. Service Local Configurations & Context Scopes
  const nahidConfig = {
    autoSlideActive: true, // True = Auto Slide Running, False = Dev Mode
    autoSlideInterval: 3000, // Slides transition interval (3s)
    gapValue: 30, // Fixed pixel separation mapping
  };

  const nahidViewCardsCount = 3;
  let nahidCurrentIndex = nahidViewCardsCount;
  let nahidAutoSlideTimer = null;
  let nahidIsTransitioning = false;

  // 2. DOM Elements Target Hooks
  const titleElement = document.querySelector(".nahid-services-title");
  const subtitleElement = document.querySelector(".nahid-services-subtitle");
  const track = document.getElementById("nahid-services-container");
  const masterTemplate = document.getElementById("nahid-master-card-template");
  const paginationContainer = document.getElementById(
    "nahid-pagination-container",
  );

  // Structural Safety Guards
  if (!track || !masterTemplate || !paginationContainer) return;

  // 3. Inject Section Meta Text Dynamically
  if (titleElement && typeof nahidServicesMeta !== "undefined") {
    titleElement.innerHTML = `${nahidServicesMeta.sectionTitle} <span class="nahid-accent-text">${nahidServicesMeta.accentText}</span>`;
  }
  if (subtitleElement && typeof nahidServicesMeta !== "undefined") {
    subtitleElement.textContent = nahidServicesMeta.sectionSubtitle;
  }

  if (
    typeof nahidServicesData === "undefined" ||
    nahidServicesData.length === 0
  )
    return;

  // 4. Symmetrical Quad-Buffer Array Sequence Cloning Strategy
  const startClones = nahidServicesData.slice(0, nahidViewCardsCount);
  const endClones = nahidServicesData.slice(-nahidViewCardsCount);
  const totalCombinedData = [
    ...endClones,
    ...nahidServicesData,
    ...startClones,
  ];

  // Document Fragment for High-Performance Batch Rendering
  const fragmentBuffer = document.createDocumentFragment();

  totalCombinedData.forEach((item, index) => {
    const cardClone = masterTemplate.cloneNode(true);
    cardClone.removeAttribute("id");
    cardClone.style.display = "flex"; // Make visible dynamically

    cardClone.classList.add(`nahid-card-${item.id}`);
    if (item.customClass) cardClone.classList.add(item.customClass);

    cardClone.setAttribute("data-service-id", item.id);
    cardClone.setAttribute(
      "data-service-type",
      item.serviceType || "generic-service",
    );
    cardClone.setAttribute("data-loop-index", index);

    // Context Data Interpolation Injection Mapping
    cardClone.querySelector(".nahid-service-card-title").textContent =
      item.title;
    cardClone.querySelector(".nahid-layer-bg-2").src = item.bgImg2;
    cardClone.querySelector(".nahid-layer-bg-1").src = item.bgImg1;
    cardClone.querySelector(".nahid-layer-main").src = item.mainImg;
    cardClone.querySelector(".nahid-action-circle-btn").href = item.link;

    fragmentBuffer.appendChild(cardClone);
  });

  // Purge tracking loops placeholders but keep master clone structure secure
  const templateNodeHolder = masterTemplate.cloneNode(true);
  track.innerHTML = "";
  track.appendChild(templateNodeHolder);
  track.appendChild(fragmentBuffer);

  // 5. Dynamic Pagination Dot Matrix Build Sequence
  paginationContainer.innerHTML = nahidServicesData
    .map(
      (_, i) =>
        `<span class="nahid-dot ${i === 0 ? "nahid-active" : ""}" data-index="${i}"></span>`,
    )
    .join("");

  // 6. Sub-Core Operational Engines (Encapsulated Support Functions)
  function updateNahidTrackPosition(animation = true) {
    const cardElements = track.querySelectorAll(
      ".nahid-service-card:not(#nahid-master-card-template)",
    );
    if (cardElements.length === 0) return;

    const cardWidth = cardElements[0].getBoundingClientRect().width;
    const moveDistance = nahidCurrentIndex * (cardWidth + nahidConfig.gapValue);

    if (animation) {
      track.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)";
      nahidIsTransitioning = true;
    } else {
      track.style.transition = "none";
      nahidIsTransitioning = false;
    }

    track.style.transform = `translate3d(-${moveDistance}px, 0, 0)`;
    updateNahidActiveDots();
  }

  function handleNahidTransitionEnd() {
    const cardElements = track.querySelectorAll(
      ".nahid-service-card:not(#nahid-master-card-template)",
    );
    if (cardElements.length === 0) return;

    nahidIsTransitioning = false;

    if (nahidCurrentIndex >= nahidServicesData.length + nahidViewCardsCount) {
      track.style.transition = "none";
      nahidCurrentIndex = nahidViewCardsCount;
      const cardWidth = cardElements[0].getBoundingClientRect().width;
      const moveDistance =
        nahidCurrentIndex * (cardWidth + nahidConfig.gapValue);
      track.style.transform = `translate3d(-${moveDistance}px, 0, 0)`;
    } else if (nahidCurrentIndex < nahidViewCardsCount) {
      track.style.transition = "none";
      nahidCurrentIndex = nahidServicesData.length + nahidViewCardsCount - 1;
      const cardWidth = cardElements[0].getBoundingClientRect().width;
      const moveDistance =
        nahidCurrentIndex * (cardWidth + nahidConfig.gapValue);
      track.style.transform = `translate3d(-${moveDistance}px, 0, 0)`;
    }
  }

  function nextNahidSlide() {
    if (nahidIsTransitioning) return;
    nahidCurrentIndex++;
    updateNahidTrackPosition(true);
  }

  function clickToNahidSlide(index) {
    if (nahidIsTransitioning) return;

    if (nahidConfig.autoSlideActive) {
      clearInterval(nahidAutoSlideTimer);
    }

    nahidCurrentIndex = index + nahidViewCardsCount;
    updateNahidTrackPosition(true);

    if (nahidConfig.autoSlideActive) {
      startNahidAutoPlay();
    }
  }

  function updateNahidActiveDots() {
    const dots = paginationContainer.querySelectorAll(".nahid-dot");
    if (dots.length === 0) return;

    let relativeIndex = nahidCurrentIndex - nahidViewCardsCount;
    if (relativeIndex >= nahidServicesData.length) relativeIndex = 0;
    if (relativeIndex < 0) relativeIndex = nahidServicesData.length - 1;

    dots.forEach((dot) => dot.classList.remove("nahid-active"));
    if (dots[relativeIndex]) {
      dots[relativeIndex].classList.add("nahid-active");
    }
  }

  function startNahidAutoPlay() {
    if (nahidAutoSlideTimer) clearInterval(nahidAutoSlideTimer);
    nahidAutoSlideTimer = setInterval(() => {
      nextNahidSlide();
    }, nahidConfig.autoSlideInterval);
  }

  // 7. Event & Lifecycle Listeners Binding
  paginationContainer.querySelectorAll(".nahid-dot").forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const targetIndex = parseInt(e.target.getAttribute("data-index"));
      clickToNahidSlide(targetIndex);
    });
  });

  track.addEventListener("transitionend", handleNahidTransitionEnd);

  window.addEventListener("resize", () => {
    updateNahidTrackPosition(false);
  });

  // 8. Core Initialization Trigger
  updateNahidTrackPosition(false);

  if (nahidConfig.autoSlideActive) {
    startNahidAutoPlay();
  }
}
// Nahid Dynamic Experience Rendering
function renderNahidDynamicExperience() {
  const titleContainer = document.getElementById("nahid-exp-title-target");
  const trackInjector = document.getElementById(
    "nahid-experience-injector-track",
  );
  const masterTemplate = document.getElementById("nahid-exp-master-template");

  // Strict structural guards check
  if (!trackInjector || !masterTemplate) return;

  // 1. Injected Header text dynamic generation mapping
  if (titleContainer && typeof nahidExperienceMeta !== "undefined") {
    titleContainer.innerHTML = `${nahidExperienceMeta.sectionTitle} <span class="accent-orange">${nahidExperienceMeta.accentText}</span>`;
  }

  // 2. Clear old instances or artifacts
  trackInjector.innerHTML = "";

  if (
    typeof nahidExperienceData === "undefined" ||
    nahidExperienceData.length === 0
  )
    return;

  const fragmentBuffer = document.createDocumentFragment();

  // 3. Loop tracking computational pipeline structures injection
  nahidExperienceData.forEach((item) => {
    const nodeClone = masterTemplate.cloneNode(true);
    nodeClone.removeAttribute("id");
    nodeClone.style.display = "grid"; // Reset configuration to grid view mapping
    nodeClone.classList.add(`nahid-exp-node-${item.id}`);

    // Data value elements interpolation binding blocks
    nodeClone.querySelector(".company-name").textContent = item.company;
    nodeClone.querySelector(".experience-duration").textContent = item.duration;
    nodeClone.querySelector(".role-designation").textContent = item.role;

    const descElement = nodeClone.querySelector(".role-desc");
    if (item.description && item.description.trim() !== "") {
      descElement.textContent = item.description;
    } else {
      descElement.style.display = "none"; // Gracefully clear line space spacing if description is blank
    }

    // Dynamic dot contextual indicator logic switch
    const indicatorDot = nodeClone.querySelector(".timeline-dot");
    if (item.dotType) {
      indicatorDot.classList.add(item.dotType);
    } else {
      indicatorDot.classList.add("orange-pill"); // Default layout safe fallback
    }

    fragmentBuffer.appendChild(nodeClone);
  });

  // 4. Hit direct rendering engine
  trackInjector.appendChild(fragmentBuffer);
}
// =======================================================================
// WHY HIRE ME ENGINE SECTION COMPONENT
// =======================================================================
function initNahidHireMeEngine() {
  const titleTarget = document.getElementById("nahid-hire-title-target");
  const descTarget = document.getElementById("nahid-hire-desc-target");
  const avatarTarget = document.getElementById("nahid-hire-avatar-target");
  const btnTarget = document.getElementById("nahid-hire-btn-target");
  const statsTrack = document.getElementById("nahid-stats-injector-track");
  const templateNode = document.getElementById("nahid-stat-node-template");

  // Structural Framework Security Blocks Guards Checking
  if (!statsTrack || !templateNode) return;

  // 1. Inject Basic Strings Data Content Layers
  if (titleTarget && typeof nahidHireMeta !== "undefined") {
    titleTarget.innerHTML = `${nahidHireMeta.titleStart} <span class="accent-orange">${nahidHireMeta.titleAccent}</span>`;
  }
  if (descTarget && typeof nahidHireMeta !== "undefined") {
    descTarget.textContent = nahidHireMeta.description;
  }
  if (avatarTarget && typeof nahidHireMeta !== "undefined") {
    avatarTarget.src = nahidHireMeta.avatarImg;
  }
  if (btnTarget && typeof nahidHireMeta !== "undefined") {
    btnTarget.textContent = nahidHireMeta.ctaText;
    btnTarget.href = nahidHireMeta.ctaLink;
  }

  // 2. Clear old buffer tracking wrappers elements
  statsTrack.innerHTML = "";

  if (typeof nahidHireStats === "undefined" || nahidHireStats.length === 0)
    return;

  const fragmentBuffer = document.createDocumentFragment();

  // 3. Dynamic Node Interpolation Execution Loop
  nahidHireStats.forEach((stat) => {
    // Read clean node markup layout content from native document template element context safely
    const nodeInstance = templateNode.content.cloneNode(true);

    nodeInstance.querySelector(".stat-counter-number").textContent = stat.count;
    nodeInstance.querySelector(".stat-counter-label").textContent = stat.label;

    fragmentBuffer.appendChild(nodeInstance);
  });

  // 4. Hit layout injection pipeline safely
  statsTrack.appendChild(fragmentBuffer);
}

// Nahid Dynamic Portfolio Rendering
function renderNahidDynamicPortfolio() {
  const config =
    typeof nahidPortfolioConfig !== "undefined"
      ? nahidPortfolioConfig
      : { loop: true, autoplay: true, autoplaySpeed: 3000, slidesPerView: 2 };
  const projectsData =
    typeof nahidPortfolioData !== "undefined" ? nahidPortfolioData : [];

  const slider = document.getElementById("portfolioSlider");
  const pagination = document.getElementById("sliderPagination");
  const dynamicTitle = document.getElementById("dynamicTitle");
  const dynamicDesc = document.getElementById("dynamicDesc");
  const dynamicTags = document.getElementById("dynamicTags");
  const dynamicProjectLink = document.getElementById("dynamicProjectLink");
  const contentArea = document.getElementById("dynamicContentArea");

  // ==========================================
  // 🔥 app-data.js থেকে হেডার টেক্সট ডাইনামিক করার লজিক
  // ==========================================
  const metaData =
    typeof nahidPortfolioMeta !== "undefined" ? nahidPortfolioMeta : null;

  const headerMainTitle = document.getElementById("portfolioMainTitle");
  const headerAccentTitle = document.getElementById("portfolioAccentTitle");
  const headerSeeAllBtn = document.getElementById("portfolioSeeAllBtn");

  if (metaData) {
    if (headerMainTitle && metaData.sectionTitle) {
      // এটি স্প্যান (<span>) ট্যাগ না ভেঙে শুধু শুরুর টেক্সট ("My") চেঞ্জ করবে
      headerMainTitle.childNodes[0].textContent = metaData.sectionTitle + " ";
    }
    if (headerAccentTitle && metaData.accentText) {
      headerAccentTitle.textContent = metaData.accentText;
    }
    if (headerSeeAllBtn && metaData.sectionSubtitle) {
      headerSeeAllBtn.textContent = metaData.sectionSubtitle;
    }
  }
  // ==========================================

  if (projectsData.length === 0 || !slider || !pagination) return;

  const slidesPerView = config.slidesPerView || 2;
  const isMobile = window.innerWidth <= 768;
  const finalSlidesPerView = isMobile ? 1 : slidesPerView;

  // লুপ ট্রু হলে যতগুলো কার্ড স্ক্রিনে দেখাবে, ততগুলো ক্লোন শুরুতে থাকবে। তাই স্টার্টিং ইনডেক্স হবে = finalSlidesPerView
  let currentIndex = config.loop ? finalSlidesPerView : 0;
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = 0;
  let autoplayTimer = null;
  let isTransitioning = false;

  function buildSlider() {
    slider.innerHTML = "";
    pagination.innerHTML = "";

    // ১. আসল ডাটার কাউন্ট অনুযায়ী পেজিনেশন ডটস তৈরি
    projectsData.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        if (isTransitioning) return;
        stopAutoplay();
        moveToSlide(config.loop ? index + finalSlidesPerView : index);
        startAutoplay();
      });
      pagination.appendChild(dot);
    });

    // ২. ট্রু ইনফিনিট ক্লোনিং ইঞ্জিন (ব্ল্যাংক স্পেস প্রোটেকশন)
    if (config.loop) {
      // শেষের দিক থেকে finalSlidesPerView সংখ্যক কার্ড নিয়ে শুরুতে ক্লোন
      for (
        let i = projectsData.length - finalSlidesPerView;
        i < projectsData.length;
        i++
      ) {
        if (projectsData[i])
          slider.appendChild(createSlideNode(projectsData[i]));
      }

      // আসল কার্ডগুলো মাঝখানে বসবে
      projectsData.forEach((project) =>
        slider.appendChild(createSlideNode(project)),
      );

      // শুরুর দিক থেকে finalSlidesPerView সংখ্যক কার্ড নিয়ে শেষে ক্লোন
      for (let i = 0; i < finalSlidesPerView; i++) {
        if (projectsData[i])
          slider.appendChild(createSlideNode(projectsData[i]));
      }
    } else {
      projectsData.forEach((project) =>
        slider.appendChild(createSlideNode(project)),
      );
    }

    applyDynamicSlideWidths();

    setTimeout(() => {
      updateSliderPositionWithoutAnimation();
      updateTextContent(config.loop ? 0 : currentIndex);
      startAutoplay();
    }, 50);
  }

  function applyDynamicSlideWidths() {
    const slides = slider.querySelectorAll(".portfolio-slide");
    if (slides.length === 0) return;

    const style = window.getComputedStyle(slider);
    const gap = parseFloat(style.gap) || 0;

    slides.forEach((slide) => {
      const widthCalc = `calc((100% - ${(finalSlidesPerView - 1) * gap}px) / ${finalSlidesPerView})`;
      slide.style.flex = `0 0 ${widthCalc}`;
      slide.style.minWidth = widthCalc;
    });
  }

  function createSlideNode(project) {
    const slide = document.createElement("div");
    slide.classList.add("portfolio-slide");
    slide.innerHTML = `
      <div class="slide-card">
        <img src="${project.image}" alt="${project.title} Mockup">
        <div class="watermark-text">${project.watermark}</div>
      </div>
    `;
    return slide;
  }

  function moveToSlide(index, animated = true) {
    const slides = document.querySelectorAll(".portfolio-slide");
    if (slides.length === 0) return;

    currentIndex = index;
    isTransitioning = true;

    const slideWidth = slides[0].getBoundingClientRect().width;
    const style = window.getComputedStyle(slider);
    const gap = parseFloat(style.gap) || 0;

    currentTranslate = -currentIndex * (slideWidth + gap);
    prevTranslate = currentTranslate;

    if (animated) {
      slider.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
    } else {
      slider.style.transition = "none";
    }

    slider.style.transform = `translateX(${currentTranslate}px)`;

    // ডট ও টেক্সটের জন্য অ্যাক্টিভ রিয়েল ইনডেক্স ক্যালকুলেট করা
    let activeIndex = currentIndex;
    if (config.loop) {
      if (currentIndex < finalSlidesPerView) {
        activeIndex = projectsData.length - (finalSlidesPerView - currentIndex);
      } else if (currentIndex >= projectsData.length + finalSlidesPerView) {
        activeIndex = currentIndex - (projectsData.length + finalSlidesPerView);
      } else {
        activeIndex = currentIndex - finalSlidesPerView;
      }
    }

    // সেফটি চেক যাতে অ্যারে ইনডেক্সের বাইরে না যায়
    if (activeIndex < 0) activeIndex = 0;
    if (activeIndex >= projectsData.length)
      activeIndex = projectsData.length - 1;

    updateDots(activeIndex);

    if (animated && contentArea) {
      contentArea.classList.add("fade-out");
      setTimeout(() => {
        updateTextContent(activeIndex);
        contentArea.classList.remove("fade-out");
      }, 200);
    } else {
      updateTextContent(activeIndex);
    }
  }

  // লুপ বাউন্ডারি টাচ করলে ব্যাকগ্রাউন্ডে ইনস্ট্যান্ট পজিশন শিফট (সিমলেস ট্রিক)
  slider.addEventListener("transitionend", () => {
    isTransitioning = false;
    if (!config.loop) return;

    if (currentIndex <= 0) {
      currentIndex = projectsData.length;
      updateSliderPositionWithoutAnimation();
    } else if (currentIndex >= projectsData.length + finalSlidesPerView) {
      currentIndex = finalSlidesPerView;
      updateSliderPositionWithoutAnimation();
    }
  });

  function updateSliderPositionWithoutAnimation() {
    const slides = document.querySelectorAll(".portfolio-slide");
    if (slides.length === 0) return;
    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(slider).gap) || 0;

    currentTranslate = -currentIndex * (slideWidth + gap);
    prevTranslate = currentTranslate;
    slider.style.transition = "none";
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }

  function updateDots(activeIndex) {
    document.querySelectorAll(".slider-pagination .dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === activeIndex);
    });
  }

  function updateTextContent(index) {
    const currentData = projectsData[index];
    if (!currentData) return;

    if (dynamicTitle) dynamicTitle.textContent = currentData.title;
    if (dynamicDesc) dynamicDesc.textContent = currentData.description;
    if (dynamicProjectLink)
      dynamicProjectLink.setAttribute("href", currentData.link);

    if (dynamicTags) {
      dynamicTags.innerHTML = "";
      currentData.tags.forEach((tag) => {
        const span = document.createElement("span");
        span.classList.add("tag-badge");
        span.textContent = tag;
        dynamicTags.appendChild(span);
      });
    }
  }

  function startAutoplay() {
    if (!config.autoplay) return;
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      if (!isTransitioning) {
        moveToSlide(currentIndex + 1);
      }
    }, config.autoplaySpeed);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  // ড্র্যাগ, টাচ এবং মাউস হোভার ট্র্যাকিং
  slider.addEventListener("mousedown", dragStart);
  slider.addEventListener("touchstart", dragStart, { passive: true });
  slider.addEventListener("mousemove", dragAction);
  slider.addEventListener("touchmove", dragAction, { passive: true });
  slider.addEventListener("mouseup", dragEnd);
  slider.addEventListener("mouseleave", dragEnd);
  slider.addEventListener("touchend", dragEnd);

  slider.addEventListener("mouseenter", () => {
    stopAutoplay();
  });
  slider.addEventListener("mouseleave", () => {
    if (!isDragging) startAutoplay();
  });

  function dragStart(e) {
    if (isTransitioning) return;
    isDragging = true;
    stopAutoplay();
    slider.style.transition = "none";
    startX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    animationID = requestAnimationFrame(dragAnimationLoop);
  }

  function dragAction(e) {
    if (!isDragging) return;
    const currentX = e.type.includes("touch")
      ? e.touches[0].clientX
      : e.clientX;
    const diff = currentX - startX;
    currentTranslate = prevTranslate + diff;
  }

  function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    cancelAnimationFrame(animationID);

    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -70) {
      moveToSlide(currentIndex + 1);
    } else if (movedBy > 70) {
      moveToSlide(currentIndex - 1);
    } else {
      moveToSlide(currentIndex);
    }
    startAutoplay();
  }

  function dragAnimationLoop() {
    if (isDragging) {
      slider.style.transform = `translateX(${currentTranslate}px)`;
      animationID = requestAnimationFrame(dragAnimationLoop);
    }
  }

  window.addEventListener("resize", () => {
    // স্ক্রিন সাইজ চেঞ্জ হলে ডাইনামিকালি রিবিল্ড করা যাতে ক্লোন কাউন্ট ঠিক থাকে
    const currentMobileState = window.innerWidth <= 768;
    if (currentMobileState !== isMobile) {
      buildSlider();
    } else {
      updateSliderPositionWithoutAnimation();
    }
  });

  buildSlider();
}

function initNahidFullyDynamicSlider() {
  // ডাটা সেফটি মেকানিজম ফলব্যাকস
  const config =
    typeof nahidTestimonialConfig !== "undefined"
      ? nahidTestimonialConfig
      : {
          loop: true,
          autoplay: true,
          autoplaySpeed: 4000,
          slidesPerView: 3,
          header: {
            titleNormalPre: "Testimonials",
            titleSpan: "",
            titleNormalPost: "",
            subtitle: "",
          },
        };
  const testimonialData =
    typeof nahidTestimonialData !== "undefined" ? nahidTestimonialData : [];

  // ডম এলিমেন্টস কুয়েরি
  const titleEl = document.getElementById("nahidTestimonialTitle");
  const subtitleEl = document.getElementById("nahidTestimonialSubtitle");
  const slider = document.getElementById("testimonialSlider");
  const pagination = document.getElementById("testimonialPagination");
  const templateCard = document.getElementById("nahidCardTemplate");

  if (!slider || !pagination || !templateCard) return;

  // ১. ডাইনামিক হেডার টেক্সট ইনজেকশন
  if (titleEl && config.header) {
    const pre = config.header.titleNormalPre || "";
    const spanText = config.header.titleSpan
      ? `<span>${config.header.titleSpan}</span>`
      : "";
    const post = config.header.titleNormalPost || "";
    titleEl.innerHTML = `${pre}${spanText}${post}`;
  }
  if (subtitleEl && config.header) {
    subtitleEl.textContent = config.header.subtitle || "";
  }

  if (testimonialData.length === 0) return;

  // স্লাইড ভিউ ও রেসপনসিভ লজিক কনফিগারেশন
  const slidesPerView = config.slidesPerView || 3;
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;

  let finalSlidesPerView = slidesPerView;
  if (isMobile) finalSlidesPerView = 1;
  else if (isTablet) finalSlidesPerView = 2;

  // আইসোলেটেড স্টেট ট্র্যাকিং ভ্যারিয়েবলস
  let currentIndex = config.loop ? finalSlidesPerView : 0;
  let isDragging = false;
  let startX = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = 0;
  let autoplayTimer = null;
  let isTransitioning = false;

  // পিওর ক্লোনিং এবং ডাটা বাইন্ডিং ইঞ্জিন
  function createReviewNodeFromHTML(data) {
    const clone = templateCard.cloneNode(true);
    clone.removeAttribute("id");
    clone.style.display = "block";

    const avatarImg = clone.querySelector(".client-avatar");
    avatarImg.src = data.avatar;
    avatarImg.alt = `${data.name} Avatar`;

    clone.querySelector(".client-name").textContent = data.name;
    clone.querySelector(".client-role").textContent = data.role;
    clone.querySelector(".review-text").textContent = data.review;
    clone.querySelector(".rating-number").textContent = data.rating.toFixed(1);

    // রেটিং স্টার ইঞ্জিন
    let starsHTML = "";
    const fullStars = Math.floor(data.rating);
    for (let i = 0; i < 5; i++) {
      starsHTML += i < fullStars ? "★" : "☆";
    }
    clone.querySelector(".stars").textContent = starsHTML;

    return clone;
  }

  function buildSlider() {
    // আগের রেন্ডার করা ওল্ড ডাইনামিক স্লাইড রিমুভ (টেমপ্লেট বাদে)
    const dynamicSlides = slider.querySelectorAll(
      ".testimonial-slide:not(#nahidCardTemplate)",
    );
    dynamicSlides.forEach((slide) => slide.remove());
    pagination.innerHTML = "";

    // পেজিনেশন ডটস রেন্ডার
    testimonialData.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        if (isTransitioning) return;
        stopAutoplay();
        moveToSlide(config.loop ? index + finalSlidesPerView : index);
        startAutoplay();
      });
      pagination.appendChild(dot);
    });

    // ইনফিনিট লুপের জন্য বাফার বা ক্লোন এলিমেন্ট ইনজেক্ট লজিক
    if (config.loop) {
      for (
        let i = testimonialData.length - finalSlidesPerView;
        i < testimonialData.length;
        i++
      ) {
        if (testimonialData[i])
          slider.appendChild(createReviewNodeFromHTML(testimonialData[i]));
      }
      testimonialData.forEach((review) =>
        slider.appendChild(createReviewNodeFromHTML(review)),
      );
      for (let i = 0; i < finalSlidesPerView; i++) {
        if (testimonialData[i])
          slider.appendChild(createReviewNodeFromHTML(testimonialData[i]));
      }
    } else {
      testimonialData.forEach((review) =>
        slider.appendChild(createReviewNodeFromHTML(review)),
      );
    }

    applyDynamicWidths();

    setTimeout(() => {
      updateSliderPosition();
      startAutoplay();
    }, 50);
  }

  function applyDynamicWidths() {
    const slides = slider.querySelectorAll(
      ".testimonial-slide:not(#nahidCardTemplate)",
    );
    const gap = parseFloat(window.getComputedStyle(slider).gap) || 0;

    slides.forEach((slide) => {
      const widthCalc = `calc((100% - ${(finalSlidesPerView - 1) * gap}px) / ${finalSlidesPerView})`;
      slide.style.flex = `0 0 ${widthCalc}`;
      slide.style.minWidth = widthCalc;
    });
  }

  function moveToSlide(index, animated = true) {
    const slides = slider.querySelectorAll(
      ".testimonial-slide:not(#nahidCardTemplate)",
    );
    if (slides.length === 0) return;

    currentIndex = index;
    isTransitioning = true;

    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(slider).gap) || 0;

    currentTranslate = -currentIndex * (slideWidth + gap);
    prevTranslate = currentTranslate;

    slider.style.transition = animated
      ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)"
      : "none";
    slider.style.transform = `translateX(${currentTranslate}px)`;

    let activeIndex = currentIndex;
    if (config.loop) {
      if (currentIndex < finalSlidesPerView) {
        activeIndex =
          testimonialData.length - (finalSlidesPerView - currentIndex);
      } else if (currentIndex >= testimonialData.length + finalSlidesPerView) {
        activeIndex =
          currentIndex - (testimonialData.length + finalSlidesPerView);
      } else {
        activeIndex = currentIndex - finalSlidesPerView;
      }
    }

    if (activeIndex < 0) activeIndex = 0;
    if (activeIndex >= testimonialData.length)
      activeIndex = testimonialData.length - 1;

    updateDots(activeIndex);
  }

  slider.addEventListener("transitionend", () => {
    isTransitioning = false;
    if (!config.loop) return;

    if (currentIndex <= 0) {
      currentIndex = testimonialData.length;
      updateSliderPosition();
    } else if (currentIndex >= testimonialData.length + finalSlidesPerView) {
      currentIndex = finalSlidesPerView;
      updateSliderPosition();
    }
  });

  function updateSliderPosition() {
    const slides = slider.querySelectorAll(
      ".testimonial-slide:not(#nahidCardTemplate)",
    );
    if (slides.length === 0) return;
    const slideWidth = slides[0].getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(slider).gap) || 0;

    currentTranslate = -currentIndex * (slideWidth + gap);
    prevTranslate = currentTranslate;
    slider.style.transition = "none";
    slider.style.transform = `translateX(${currentTranslate}px)`;
  }

  function updateDots(activeIndex) {
    pagination.querySelectorAll(".dot").forEach((dot, idx) => {
      dot.classList.toggle("active", idx === activeIndex);
    });
  }

  function startAutoplay() {
    if (!config.autoplay) return;
    stopAutoplay();
    autoplayTimer = setInterval(() => {
      if (!isTransitioning) moveToSlide(currentIndex + 1);
    }, config.autoplaySpeed);
  }

  function stopAutoplay() {
    if (autoplayTimer) clearInterval(autoplayTimer);
  }

  // ইভেন্ট ড্র্যাগিং ইন্টারফেস হ্যান্ডলারস
  slider.addEventListener("mousedown", dragStart);
  slider.addEventListener("touchstart", dragStart, { passive: true });
  slider.addEventListener("mousemove", dragAction);
  slider.addEventListener("touchmove", dragAction, { passive: true });
  slider.addEventListener("mouseup", dragEnd);
  slider.addEventListener("mouseleave", dragEnd);
  slider.addEventListener("touchend", dragEnd);

  slider.addEventListener("mouseenter", () => {
    stopAutoplay();
  });
  slider.addEventListener("mouseleave", () => {
    if (!isDragging) startAutoplay();
  });

  function dragStart(e) {
    if (isTransitioning) return;
    isDragging = true;
    stopAutoplay();
    slider.style.transition = "none";
    startX = e.type.includes("touch") ? e.touches[0].clientX : e.clientX;
    animationID = requestAnimationFrame(dragLoop);
  }

  function dragAction(e) {
    if (!isDragging) return;
    const currentX = e.type.includes("touch")
      ? e.touches[0].clientX
      : e.clientX;
    currentTranslate = prevTranslate + (currentX - startX);
  }

  function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    cancelAnimationFrame(animationID);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -70) moveToSlide(currentIndex + 1);
    else if (movedBy > 70) moveToSlide(currentIndex - 1);
    else moveToSlide(currentIndex);

    startAutoplay();
  }

  function dragLoop() {
    if (isDragging) {
      slider.style.transform = `translateX(${currentTranslate}px)`;
      animationID = requestAnimationFrame(dragLoop);
    }
  }

  // স্ক্রিন সাইজ পরিবর্তন রেসপনসিভ লিসেনার
  window.addEventListener("resize", () => {
    const currentMobileState = window.innerWidth <= 768;
    const currentTabletState =
      window.innerWidth > 768 && window.innerWidth <= 1024;

    let newSlidesPerView = slidesPerView;
    if (currentMobileState) newSlidesPerView = 1;
    else if (currentTabletState) newSlidesPerView = 2;

    if (newSlidesPerView !== finalSlidesPerView) {
      finalSlidesPerView = newSlidesPerView;
      buildSlider();
    } else {
      updateSliderPosition();
    }
  });

  buildSlider();
}
// initialize Nahid Dynamic CTA Section
function initNahidDynamicCtaSection() {
  const config = typeof nahidCtaConfig !== "undefined" ? nahidCtaConfig : null;
  if (!config) return;

  // ডম সিলেক্টরস
  const headingEl = document.getElementById("nahidCtaHeading");
  const iconBoxEl = document.getElementById("nahidCtaIconBox");
  const inputEl = document.getElementById("nahidCtaInput");
  const submitBtnEl = document.getElementById("nahidCtaSubmitBtn");
  const badgesRowEl = document.getElementById("nahidCtaBadgesRow");
  const formEl = document.getElementById("nahidCtaForm");

  // ১. হেডিং ডাটা ইনজেক্ট
  if (headingEl && config.heading) {
    const normalText = config.heading.textNormal || "";
    const highlightText = config.heading.textHighlight
      ? `<span class="highlight-orange">${config.heading.textHighlight}</span>`
      : "";
    headingEl.innerHTML = `${normalText}${highlightText}`;
  }

  // ২. ফর্ম প্লেসহোল্ডার, বাটন ও আইকন ডাটা ইনজেক্ট
  if (config.form) {
    if (iconBoxEl && config.form.emailIconSvg)
      iconBoxEl.innerHTML = config.form.emailIconSvg;
    if (inputEl && config.form.placeholder)
      inputEl.setAttribute("placeholder", config.form.placeholder);
    if (submitBtnEl && config.form.buttonText)
      submitBtnEl.textContent = config.form.buttonText;
  }

  // ৩. ট্রাস্ট ব্যাজ লুপ রেন্ডারিং
  if (badgesRowEl && config.badges && config.badges.length > 0) {
    badgesRowEl.innerHTML = ""; // ক্লিয়ার ওল্ড ডাটা
    config.badges.forEach((badge) => {
      const badgeItem = document.createElement("div");
      badgeItem.classList.add("badge-item");

      badgeItem.innerHTML = `
        <span class="badge-icon">${badge.iconSvg || ""}</span>
        <span class="badge-text">${badge.text || ""}</span>
      `;
      badgesRowEl.appendChild(badgeItem);
    });
  }

  // ৪. সাবমিট ইভেন্ট হ্যান্ডলার (আইসোলেটেড ভ্যালিডেশন)
  if (formEl) {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!inputEl) return;

      const emailValue = inputEl.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailValue) {
        inputEl.classList.add("input-error");
        return;
      }

      if (!emailRegex.test(emailValue)) {
        inputEl.classList.add("input-error");
        alert("Please enter a valid email address.");
        return;
      }

      // সাকসেস হলে এরর ক্লাস রিমুভ ও কলব্যাক এক্সিকিউট
      inputEl.classList.remove("input-error");
      if (typeof config.onSubmit === "function") {
        config.onSubmit(emailValue);
      }
      formEl.reset();
    });

    // ইনপুট টাইপ করার সময় এরর ক্লাস রিমুভ করা
    if (inputEl) {
      inputEl.addEventListener("input", () => {
        inputEl.classList.remove("input-error");
      });
    }
  }
}

// marquee engine for Nahid Tilted Marquee Section
function initNahidTiltedMarquee() {
  const config =
    typeof nahidMarqueeConfig !== "undefined" ? nahidMarqueeConfig : null;
  const track = document.getElementById("nahidMarqueeTrack");

  if (!config || !track || !config.items || config.items.length === 0) return;

  function createMarqueeSet(itemsArray) {
    const setContainer = document.createElement("div");
    setContainer.classList.add("marquee-set");

    setContainer.innerHTML = itemsArray
      .map((item) => {
        // SVG ট্যাগের ভেতরে আমাদের নিজস্ব ক্লাসটি পুশ করে দিচ্ছি যেন CSS এটাকে ফোর্স করতে পারে
        let svgContent = item.svg || "✦";
        if (item.svg && item.svg.includes("<svg")) {
          svgContent = item.svg.replace(
            "<svg",
            `<svg class="custom-marquee-svg" style="color: ${item.iconColor || "#ff7a30"}; fill: ${item.iconColor || "#ff7a30"};"`,
          );
        }

        return `
        <span class="marquee-text">${item.text}</span>
        <span class="marquee-icon-wrap">${svgContent}</span>
      `;
      })
      .join("");

    return setContainer;
  }

  track.innerHTML = "";
  track.appendChild(createMarqueeSet(config.items));
  track.appendChild(createMarqueeSet(config.items));
  track.appendChild(createMarqueeSet(config.items));
}
// initialize Nahid Dynamic Pricing
function initNahidDynamicPricing() {
  const config =
    typeof nahidPricingConfig !== "undefined" ? nahidPricingConfig : null;
  const pricingData =
    typeof nahidPricingData !== "undefined" ? nahidPricingData : [];

  const titleEl = document.getElementById("nahidPricingTitle");
  const mainBtnEl = document.getElementById("nahidPricingMainBtn");
  const gridContainer = document.getElementById("nahidPricingGrid");
  const templateCard = document.getElementById("nahidPricingTemplate");

  if (!gridContainer || !templateCard) return;

  // ১. হেডার ও টাইটেল ডাটা ইনজেকশন
  if (config && config.header) {
    if (titleEl) {
      const normal = config.header.titleNormal || "";
      const highlight = config.header.titleHighlight
        ? `<span>${config.header.titleHighlight}</span>`
        : "";
      titleEl.innerHTML = `${normal}${highlight}`;
    }
    if (mainBtnEl)
      mainBtnEl.textContent = config.header.mainButtonText || "Get in Touch";
  }

  if (pricingData.length === 0) return;

  // আগের রেন্ডার করা ডাইনামিক কার্ড থাকলে ক্লিয়ার করা (টেমপ্লেট বাদে)
  const existingCards = gridContainer.querySelectorAll(
    ".pricing-card:not(#nahidPricingTemplate)",
  );
  existingCards.forEach((card) => card.remove());

  // ২. পিওর ডাটা-ড্রিভেন ক্লোনিং এবং রেন্ডারিং লুপ
  pricingData.forEach((data) => {
    const clone = templateCard.cloneNode(true);
    clone.removeAttribute("id");
    clone.style.display = "flex"; // কার্ড ডিসপ্লে অন করা হলো

    // ডাটা বাইন্ডিং
    clone.querySelector(".card-tier-tag").textContent = data.tier;
    clone.querySelector(".price-amount").textContent = data.price;
    clone.querySelector(".package-title").textContent = data.packageTitle;
    clone.querySelector(".delivery-time").textContent = `● ${data.delivery}`;
    clone.querySelector(".revision-count").textContent = `● ${data.revisions}`;

    // ফিচার লিস্ট জেনারেট করা
    const featureListUl = clone.querySelector(".package-features-list");
    featureListUl.innerHTML = ""; // ওল্ড ডেটা রিসেট

    if (data.features && data.features.length > 0) {
      data.features.forEach((featureText) => {
        const li = document.createElement("li");
        li.textContent = featureText;
        featureListUl.appendChild(li);
      });
    }

    // বাটনে ক্লিক করলে অ্যাকশন লজিক (আপনার রিকোয়েস্ট অনুযায়ী আলোচনা শুরু হবে)
    const arrowBtn = clone.querySelector(".card-arrow-btn");
    arrowBtn.addEventListener("click", () => {
      const targetCtaInput = document.getElementById("nahidCtaInput");
      if (targetCtaInput) {
        targetCtaInput.focus();
        targetCtaInput.scrollIntoView({ behavior: "smooth", block: "center" });
        // ডাইনামিকালি মেইলে প্যাকেজের হিন্ট দেওয়া
        targetCtaInput.value = `I am interested in ${data.tier}...`;
      }
    });

    gridContainer.appendChild(clone);
  });
}

function initNahidFaqAccordion() {
  const config = typeof nahidFaqConfig !== "undefined" ? nahidFaqConfig : null;
  const listContainer = document.getElementById("nahidFaqList");
  const titleEl = document.getElementById("nahidFaqTitle");

  if (!config || !listContainer) return;

  // ১. টাইটেল ইনজেকশন
  if (titleEl) {
    const normal = config.titleNormal || "";
    const highlight = config.titleHighlight
      ? `<span>${config.titleHighlight}</span>`
      : "";
    titleEl.innerHTML = `${normal}${highlight}`;
  }

  if (!config.questions || config.questions.length === 0) return;
  listContainer.innerHTML = ""; // ওল্ড ডাটা ক্লিয়ার

  // ২. ডাইনামিক অ্যাকোর্ডিয়ন আইটেম রেন্ডারিং
  config.questions.forEach((item, index) => {
    const faqItem = document.createElement("div");
    faqItem.classList.add("faq-item");
    if (index === 0) faqItem.classList.add("active"); // প্রথমটা ডিফল্ট ওপেন থাকবে

    faqItem.innerHTML = `
      <button class="faq-trigger" aria-expanded="${index === 0 ? "true" : "false"}">
        <span class="faq-question-text">${item.q}</span>
        <span class="faq-icon-box">${index === 0 ? config.icons.minus : config.icons.plus}</span>
      </button>
      <div class="faq-panel" style="${index === 0 ? "max-height: fit-content; opacity: 1;" : "max-height: 0; opacity: 0;"}">
        <div class="faq-panel-content">
          <p>${item.a}</p>
        </div>
      </div>
    `;

    // ৩. টগল ইভেন্ট লিসেনার (আইসোলেটেড স্কোপ)
    const trigger = faqItem.querySelector(".faq-trigger");
    trigger.addEventListener("click", () => {
      const isActive = faqItem.classList.contains("active");

      // অন্য সব ওপেন থাকা আইটেম বন্ধ করা (Optional: Single Open Behavior)
      listContainer.querySelectorAll(".faq-item").forEach((el) => {
        el.classList.remove("active");
        el.querySelector(".faq-trigger").setAttribute("aria-expanded", "false");
        el.querySelector(".faq-icon-box").innerHTML = config.icons.plus;

        const panel = el.querySelector(".faq-panel");
        panel.style.maxHeight = "0";
        panel.style.opacity = "0";
      });

      // কারেন্ট আইটেম টগল করা
      if (!isActive) {
        faqItem.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
        faqItem.querySelector(".faq-icon-box").innerHTML = config.icons.minus;

        const currentPanel = faqItem.querySelector(".faq-panel");
        currentPanel.style.maxHeight = currentPanel.scrollHeight + "px";
        currentPanel.style.opacity = "1";
      }
    });

    listContainer.appendChild(faqItem);
  });

  // উইন্ডো রিসাইজ হলে হাইট অ্যাডজাস্টমেন্ট ঠিক রাখা
  window.addEventListener("resize", () => {
    const activePanel = listContainer.querySelector(
      ".faq-item.active .faq-panel",
    );
    if (activePanel) {
      activePanel.style.maxHeight = activePanel.scrollHeight + "px";
    }
  });
}

function initNahidWorkflowGrid() {
  const config =
    typeof nahidWorkflowConfig !== "undefined" ? nahidWorkflowConfig : null;
  const workflowData =
    typeof nahidWorkflowData !== "undefined" ? nahidWorkflowData : [];

  const titleEl = document.getElementById("nahidWorkflowTitle");
  const gridContainer = document.getElementById("nahidWorkflowGrid");
  const templateCard = document.getElementById("nahidWorkflowTemplate");

  if (!gridContainer || !templateCard) return;

  // ১. হেডার টাইটেল রেন্ডার
  if (config) {
    const normal = config.titleNormal || "";
    const highlight = config.titleHighlight
      ? `<span>${config.titleHighlight}</span>`
      : "";
    if (titleEl) titleEl.innerHTML = `${normal}${highlight}`;
  }

  if (workflowData.length === 0) return;

  // ওল্ড ডাইনামিক ডেটা রিসেট (টেমপ্লেট বাদে)
  const existingCards = gridContainer.querySelectorAll(
    ".workflow-card:not(#nahidWorkflowTemplate)",
  );
  existingCards.forEach((card) => card.remove());

  // ২. পিওর ক্লোনিং মেকানিজম লুপ
  workflowData.forEach((data) => {
    const clone = templateCard.cloneNode(true);
    clone.removeAttribute("id");
    clone.style.display = "flex"; // ডিসপ্লে অন

    clone.querySelector(".workflow-step-num").textContent = data.step;
    clone.querySelector(".workflow-icon-box").innerHTML = data.iconSvg || "";
    clone.querySelector(".workflow-step-title").textContent = data.title;
    clone.querySelector(".workflow-step-desc").textContent = data.desc;

    gridContainer.appendChild(clone);
  });
}

function initNahidDynamicFooter() {
  const config =
    typeof nahidFooterConfig !== "undefined" ? nahidFooterConfig : null;
  if (!config) return;

  // ১. কানেক্ট ব্যানার ডাটা
  if (config.connectBanner) {
    const titleEl = document.getElementById("nahidFooterConnectTitle");
    const btnTextEl = document.querySelector("#nahidFooterHireBtn .btn-text");
    if (titleEl) titleEl.textContent = config.connectBanner.title;
    if (btnTextEl) btnTextEl.textContent = config.connectBanner.buttonText;
  }

  // ২. ব্র্যান্ড ও ডেসক্রিপশন
  if (config.brand) {
    const logoWrap = document.getElementById("nahidFooterLogoWrap");
    const descEl = document.getElementById("nahidFooterDesc");

    if (logoWrap) {
      logoWrap.innerHTML = `
        <span class="brand-logo-icon"> <img src="${config.brand.logoImage}" alt="${config.brand.logoAlt}"></span>
       
      `;
    }
    if (descEl) descEl.textContent = config.brand.description;
  }

  // ৩. সোশ্যাল মিডিয়া রেন্ডারিং
  const socialsContainer = document.getElementById("nahidFooterSocials");
  if (socialsContainer && config.socials) {
    socialsContainer.innerHTML = "";
    config.socials.forEach((soc) => {
      const a = document.createElement("a");
      a.href = soc.url;
      a.className = "social-icon-link";
      a.setAttribute("aria-label", soc.name);
      a.innerHTML = soc.iconSvg;
      socialsContainer.appendChild(a);
    });
  }

  // ৪. নেভিগেশন ও কন্টাক্ট কলাম প্রসেস
  const appendLinks = (containerId, linksArray) => {
    const container = document.getElementById(containerId);
    if (!container || !linksArray) return;
    container.innerHTML = "";
    linksArray.forEach((item) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = item.link || "#";
      a.textContent = item.label;
      li.appendChild(a);
      container.appendChild(li);
    });
  };

  appendLinks("nahidFooterNav", config.navigation);
  appendLinks("nahidFooterContact", config.contact);

  // ৫. নিউজলেটার ও কপিরাইট
  const newsletterTitle = document.getElementById("nahidNewsletterTitle");
  if (newsletterTitle && config.newsletter) {
    newsletterTitle.textContent = config.newsletter.title;
  }

  const copyrightEl = document.getElementById("nahidCopyrightText");
  if (copyrightEl) copyrightEl.textContent = config.copyright || "";

  // ৬. লিগ্যাল বটম লিংক
  const legalContainer = document.getElementById("nahidLegalLinks");
  if (legalContainer && config.legal) {
    legalContainer.innerHTML = "";
    config.legal.forEach((item, idx) => {
      const a = document.createElement("a");
      a.href = item.link;
      a.textContent = item.label;
      legalContainer.appendChild(a);

      if (idx < config.legal.length - 1) {
        const separator = document.createTextNode(" | ");
        legalContainer.appendChild(separator);
      }
    });
  }

  // ফর্ম সাবমিট হ্যান্ডলার (অ্যান্টি-রিফ্রেশ লজিক)
  const form = document.getElementById("nahidNewsletterForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thank you for subscribing!");
      form.reset();
    });
  }
}

// Master execution pipeline trigger
function bootNahidPortfolioEngine() {
  initNahidDynamicHeader();
  initNahidDynamicHero();
  initNahidInfiniteSlider();
  renderNahidDynamicExperience();
  initNahidHireMeEngine();
  renderNahidDynamicPortfolio();
  initNahidFullyDynamicSlider();
  initNahidDynamicCtaSection();
  initNahidTiltedMarquee();
  initNahidDynamicPricing();
  initNahidFaqAccordion();
  initNahidWorkflowGrid();
  initNahidDynamicFooter();
}

// Master execution pipeline trigger
document.addEventListener("DOMContentLoaded", bootNahidPortfolioEngine);
