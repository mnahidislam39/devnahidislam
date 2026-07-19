// Header Config Function
function headerConfigFunction() {
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

// Hero Config Function
function heroConfigFunction() {
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

// Global Modal Config Function
function globalModalConfigFunction() {
  const hireModal = document.getElementById("nahid-hire-modal");
  const modalCloseBtn = document.getElementById("nahid-modal-close");
  const modalFormTrigger = document.getElementById("nahid-modal-form-trigger");
  const btnHire = document.getElementById("heroBtnHire");

  // মডাল ওপেন করার মেইন ফাংশন
  const openHireModal = (e) => {
    if (e) e.preventDefault();
    if (hireModal) {
      hireModal.classList.add("active");
    } else {
      console.error("Modal element (#nahid-hire-modal) not found in HTML!");
    }
  };

  // ১. হিরো সেকশনের বাটন ট্রিগার
  if (btnHire) {
    if (typeof config !== "undefined" && config.ctas && config.ctas.hireLabel) {
      btnHire.textContent = config.ctas.hireLabel;
    }
    btnHire.addEventListener("click", openHireModal);
  }

  // ২. মডাল কন্ট্রোল লজিকস (ভুল এড়াতে প্রতিটা এলিমেন্ট চেক করে নেওয়া হয়েছে)
  if (hireModal) {
    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", () => hireModal.classList.remove("active"));
    }

    hireModal.addEventListener("click", (e) => {
      if (e.target === hireModal) hireModal.classList.remove("active");
    });

    if (modalFormTrigger) {
      modalFormTrigger.addEventListener("click", () => {
        hireModal.classList.remove("active");
        const contactSection = document.getElementById("nahidContactSection"); // নিশ্চিত করুন এই ID টি আপনার ফরমে আছে
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  }

  // গ্লোবাল উইন্ডো অবজেক্টে এক্সপোজ করা যাতে অন্য ফাংশন একে কল করতে পারে
  window.openNahidHireModal = openHireModal;
}

// Service Config Function
function serviceConfigFunction() {
  // 1. Service Local Configurations
  const nahidConfig = {
    autoSlideActive: true,
    autoSlideInterval: 5000,
    gapValue: 30,
  };

  const nahidViewCardsCount = 3;
  let nahidCurrentIndex = nahidViewCardsCount;
  let nahidAutoSlideTimer = null;
  let nahidIsTransitioning = false;
  let isDragging = false;
  let startX, scrollLeft;

  // 2. DOM Elements  
  const titleParent = document.querySelector(".nahid-services-title");
  const subTitleElement = document.querySelector(".servicesSubTitle");
  const descriptionElement = document.querySelector(".servicesDescripiton");
  const track = document.getElementById("nahid-services-container");
  const masterTemplate = document.getElementById("nahid-master-card-template");
  const paginationContainer = document.getElementById("nahid-pagination-container");
  const prevBtn = document.querySelector(".nahid-prev-btn");
  const nextBtn = document.querySelector(".nahid-next-btn");

  if (!track || !masterTemplate || !paginationContainer) return;

  // 3. Inject Section Meta
  if (typeof nahidServicesMeta !== "undefined") {

    // Title সেট করা
    if (titleParent) {
      titleParent.childNodes[0].textContent = nahidServicesMeta.sectionTitle;
    }

    // Subtitle সেট করা
    if (subTitleElement) {
      subTitleElement.textContent = nahidServicesMeta.sectionSubTitle;
    }

    // Description সেট করা
    if (descriptionElement) {
      descriptionElement.textContent = nahidServicesMeta.sectionDescription;
    }
  }

  if (typeof nahidServicesData === "undefined" || nahidServicesData.length === 0) return;

  // 4. Data Preparation & Rendering
  const startClones = nahidServicesData.slice(0, nahidViewCardsCount);
  const endClones = nahidServicesData.slice(-nahidViewCardsCount);
  const totalCombinedData = [...endClones, ...nahidServicesData, ...startClones];

  const fragmentBuffer = document.createDocumentFragment();

  totalCombinedData.forEach((item) => {
    const cardClone = masterTemplate.cloneNode(true);
    cardClone.removeAttribute("id");
    cardClone.style.display = "flex";
    cardClone.classList.add(`nahid-card-${item.id}`);

    // Mapping Content
    const icon = cardClone.querySelector(".nahid-service-icon");
    if (icon) icon.src = item.icon;
    cardClone.querySelector(".nahid-service-card-title").textContent = item.title;
    cardClone.querySelector(".nahid-service-desc").textContent = item.desc;

    const featureList = cardClone.querySelector(".nahid-service-features");
    if (featureList && item.features) {
      featureList.innerHTML = item.features.map(f => `<li><span class="check-icon">✓</span> ${f}</li>`).join('');
    }
    cardClone.querySelector(".nahid-contact-btn").href = item.link;

    fragmentBuffer.appendChild(cardClone);
  });

  const templateNodeHolder = masterTemplate.cloneNode(true);
  track.innerHTML = "";
  track.appendChild(templateNodeHolder);
  track.appendChild(fragmentBuffer);

  // 5. Pagination
  paginationContainer.innerHTML = nahidServicesData.map((_, i) =>
    `<span class="service-slider-dot ${i === 0 ? "service-slider-dot-active" : ""}" data-index="${i}"></span>`
  ).join("");

  function updateNahidTrackPosition(animation = true) {
    const cardElements = track.querySelectorAll(".nahid-service-card:not(#nahid-master-card-template)");
    if (cardElements.length === 0) return;

    // বর্তমান স্ক্রিনে কয়টি কার্ড দেখা যাচ্ছে তা বের করা
    const viewportWidth = track.parentElement.offsetWidth;
    const cardWidth = cardElements[0].offsetWidth;
    const gap = 30;

    // কার্ডের পজিশন ক্যালকুলেশন
    const moveDistance = nahidCurrentIndex * (cardWidth + gap);

    track.style.transition = animation ? "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)" : "none";
    track.style.transform = `translate3d(${-moveDistance}px, 0, 0)`;

    // অ্যাক্টিভ ক্লাস লজিক:
    // মোবাইলে ১টি কার্ড দেখা গেলে প্রথমটিই অ্যাক্টিভ, ট্যাবলেটে ২টি হলে মাঝখানেরটি
    const visibleCards = Math.round(viewportWidth / cardWidth);
    const activeIndex = nahidCurrentIndex + Math.floor(visibleCards / 2);

    cardElements.forEach((card, index) => {
      card.classList.toggle("nahid-active-card", index === activeIndex);
    });
  }

  function nextNahidSlide() {
    if (nahidIsTransitioning) return;
    nahidCurrentIndex++;
    updateNahidTrackPosition(true);
    updateNahidActiveDots(); // অ্যারো ক্লিকেও ডট আপডেট হবে
  }

  function prevNahidSlide() {
    if (nahidIsTransitioning) return;
    nahidCurrentIndex--;
    updateNahidTrackPosition(true);
    updateNahidActiveDots(); // অ্যারো ক্লিকেও ডট আপডেট হবে
  }

  function updateNahidActiveDots() {
    const dots = document.querySelectorAll(".service-slider-dot");
    const activeDotIndex = (nahidCurrentIndex - nahidViewCardsCount + nahidServicesData.length) % nahidServicesData.length;

    dots.forEach((dot, index) => {
      dot.classList.toggle("service-slider-dot-active", index === activeDotIndex);
    });
    updateNahidActiveDots(); // <--- এই লাইনটি যোগ করুন
  }

  // 7. Event Listeners (Drag + Buttons)
  track.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX;
  });

  window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    isDragging = false;
    const diff = startX - e.pageX;
    if (diff > 50) nextNahidSlide();
    else if (diff < -50) prevNahidSlide();
  });

  prevBtn?.addEventListener('click', prevNahidSlide);
  nextBtn?.addEventListener('click', nextNahidSlide);

  // 5. Pagination Click Handler (ফাইনাল ফিক্স)
  paginationContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("service-slider-dot")) {
      // যদি ট্রানজিশন চলতে থাকে, তবে ক্লিক ইগনোর করবে
      if (nahidIsTransitioning) return;

      const clickedIndex = parseInt(e.target.getAttribute("data-index"));
      nahidCurrentIndex = clickedIndex + nahidViewCardsCount;

      updateNahidTrackPosition(true);
      // এখানেও ডট আপডেট কল করা নিরাপদ
      updateNahidActiveDots();
    }
  });


  track.addEventListener("transitionend", () => {
    nahidIsTransitioning = false;
    if (nahidCurrentIndex >= nahidServicesData.length + nahidViewCardsCount) {
      nahidCurrentIndex = nahidViewCardsCount;
      updateNahidTrackPosition(false);
    } else if (nahidCurrentIndex < nahidViewCardsCount) {
      nahidCurrentIndex = nahidServicesData.length + nahidViewCardsCount - 1;
      updateNahidTrackPosition(false);
    }
  });

  window.addEventListener("resize", () => updateNahidTrackPosition(false));
  updateNahidTrackPosition(false);
  if (nahidConfig.autoSlideActive) {
    nahidAutoSlideTimer = setInterval(nextNahidSlide, nahidConfig.autoSlideInterval);
  }
}

// Experience Config Function
function experienceConfigFunction() {
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

// About Me Config Function
function aboutMeConfigFunction() {
  const titleTarget = document.getElementById("nahid-hire-title-target");
  const descTarget = document.getElementById("nahid-hire-desc-target");
  const avatarTarget = document.getElementById("nahid-hire-avatar-target");
  const btnTarget = document.getElementById("nahid-hire-btn-target");
  const statsTrack = document.getElementById("nahid-stats-injector-track");
  const templateNode = document.getElementById("nahid-stat-node-template");

  if (!statsTrack || !templateNode) return;

  if (titleTarget && typeof nahidHireMeta !== "undefined") {
    titleTarget.innerHTML = `${nahidHireMeta.titleStart} <span class="accent-orange">${nahidHireMeta.titleAccent}</span>`;
  }
  if (descTarget && typeof nahidHireMeta !== "undefined") {
    descTarget.textContent = nahidHireMeta.description;
  }
  if (avatarTarget && typeof nahidHireMeta !== "undefined") {
    avatarTarget.src = nahidHireMeta.avatarImg;
  }
  // --- Why Hire Me Section CTA Button Handling ---
  if (btnTarget && typeof nahidHireMeta !== "undefined") {
    btnTarget.textContent = nahidHireMeta.ctaText || "Hire Me";
    btnTarget.href = "#";

    btnTarget.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof window.openNahidHireModal === "function") {
        window.openNahidHireModal(e);
      } else {
        const modal = document.getElementById("nahid-hire-modal");
        if (modal) modal.classList.add("active");
      }
    });
  }


  statsTrack.innerHTML = "";

  if (typeof nahidHireStats === "undefined" || nahidHireStats.length === 0)
    return;

  const fragmentBuffer = document.createDocumentFragment();

  nahidHireStats.forEach((stat) => {
    const nodeInstance = templateNode.content.cloneNode(true);
    const counterElement = nodeInstance.querySelector(".stat-counter-number");

    counterElement.textContent = "0";
    counterElement.setAttribute("data-target", parseInt(stat.count, 10) || 0);
    nodeInstance.querySelector(".stat-counter-label").textContent = stat.label;

    fragmentBuffer.appendChild(nodeInstance);
  });

  statsTrack.appendChild(fragmentBuffer);

  const startCountAnimation = (element) => {
    const target = parseInt(element.getAttribute("data-target"), 10) || 0;
    let count = 0;
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let frame = 0;

    const counter = () => {
      frame++;
      const progress = frame / totalFrames;
      count = Math.round(target * progress);

      if (frame < totalFrames) {
        element.innerText = count;
        requestAnimationFrame(counter);
      } else {
        element.innerText = target + "+";
      }
    };

    requestAnimationFrame(counter);
  };

  const observerOptions = { threshold: 0.5 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const stats = entry.target.querySelectorAll(".stat-counter-number");
        stats.forEach((stat) => startCountAnimation(stat));
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(statsTrack);
}

function portfolioConfigFunction() {
  const config = typeof nahidPortfolioConfig !== "undefined" ? nahidPortfolioConfig : { loop: true, autoplay: true, autoplaySpeed: 4000, slidesPerView: 3 };
  const projectsData = typeof nahidPortfolioData !== "undefined" ? nahidPortfolioData : [];
  const slider = document.getElementById("portfolioSlider");
  const pagination = document.getElementById("sliderPagination");

  const metaData = typeof nahidPortfolioMeta !== "undefined" ? nahidPortfolioMeta : null;
  const headerMainTitle = document.getElementById("portfolioMainTitle");
  const headerSubTitle = document.getElementById("portfolioSubTitle");
  const headerDescription = document.getElementById("portfolioDescription");

  if (metaData) {
    if (headerMainTitle && metaData.sectionTitle) headerMainTitle.childNodes[0].textContent = metaData.sectionTitle + " ";
    if (headerDescription && metaData.portfolioDescription) headerDescription.textContent = metaData.portfolioDescription;
    if (headerSubTitle && metaData.accentText) headerSubTitle.textContent = metaData.accentText;
  }

  if (projectsData.length === 0 || !slider || !pagination) return;

  const isMobile = window.innerWidth <= 768;
  const finalSlidesPerView = isMobile ? 1 : (config.slidesPerView || 3);

  let currentIndex = finalSlidesPerView;
  let isDragging = false, startX = 0, currentTranslate = 0, prevTranslate = 0, animationID = 0, autoplayTimer = null, isTransitioning = false;

  function createSlideNode(project) {
    const template = document.getElementById("portfolioSlideTemplate");
    const slide = template.content.cloneNode(true).querySelector(".portfolio-slide");
    slide.querySelector(".card-img").src = project.image;
    slide.querySelector(".card-img").alt = project.title;
    slide.querySelector(".watermark-text").textContent = project.watermark;
    slide.querySelector(".project-title").textContent = project.title;
    slide.querySelector(".project-desc-area").textContent = project.description;

    const tagsContainer = slide.querySelector(".tags-container");
    tagsContainer.innerHTML = '';
    project.tags.forEach(tag => {
      const span = document.createElement("span");
      span.className = "tag-badge";
      span.textContent = tag;
      tagsContainer.appendChild(span);
    });

    slide.querySelector(".card-action-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelectorAll(".portfolio-slide").forEach(s => s !== slide && s.classList.remove("expanded"));
      slide.classList.toggle("expanded");
      e.target.textContent = slide.classList.contains("expanded") ? "Hide" : "View";
    });
    return slide;
  }

  function buildSlider() {
    slider.innerHTML = "";
    pagination.innerHTML = "";

    // Create Pagination
    projectsData.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        stopAutoplay();
        moveToSlide(index + finalSlidesPerView);
        startAutoplay();
      });
      pagination.appendChild(dot);
    });

    // Loop Logic: Add clones
    const slidesToClone = finalSlidesPerView;
    for (let i = projectsData.length - slidesToClone; i < projectsData.length; i++) slider.appendChild(createSlideNode(projectsData[i]));
    projectsData.forEach(project => slider.appendChild(createSlideNode(project)));
    for (let i = 0; i < slidesToClone; i++) slider.appendChild(createSlideNode(projectsData[i]));

    applyDynamicSlideWidths();
    updateSliderPosition(false);
    startAutoplay();
  }

  function applyDynamicSlideWidths() {
    const slides = slider.querySelectorAll(".portfolio-slide");
    const gap = parseFloat(window.getComputedStyle(slider).gap) || 0;
    slides.forEach(slide => {
      slide.style.flex = `0 0 calc((100% - ${(finalSlidesPerView - 1) * gap}px) / ${finalSlidesPerView})`;
    });
  }

  function updateSliderPosition(animated = true) {
    const slides = slider.querySelectorAll(".portfolio-slide");
    const slideWidth = slides[0].offsetWidth;
    const gap = parseFloat(window.getComputedStyle(slider).gap) || 0;
    const containerWidth = slider.parentElement.offsetWidth;

    const centerOffset = (containerWidth / 2) - (slideWidth / 2);
    const translate = centerOffset - (currentIndex * (slideWidth + gap));

    slider.style.transition = animated ? "transform 0.5s ease-out" : "none";
    slider.style.transform = `translateX(${translate}px)`;
    prevTranslate = translate;

    // Active class
    slides.forEach((s, i) => s.classList.toggle("activePortfolioSlide", i === currentIndex));

    // Update dots
    const realIndex = (currentIndex - finalSlidesPerView + projectsData.length) % projectsData.length;
    document.querySelectorAll(".slider-pagination .dot").forEach((dot, idx) => dot.classList.toggle("active", idx === realIndex));
  }

  function moveToSlide(index) {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex = index;
    updateSliderPosition(true);
    setTimeout(() => isTransitioning = false, 500);
  }

  // Loop Fix
  slider.addEventListener("transitionend", () => {
    isTransitioning = false;
    if (currentIndex <= finalSlidesPerView - 1) {
      currentIndex = projectsData.length + (currentIndex % finalSlidesPerView);
      updateSliderPosition(false);
    } else if (currentIndex >= projectsData.length + finalSlidesPerView) {
      currentIndex = finalSlidesPerView;
      updateSliderPosition(false);
    }
  });

  // Autoplay
  function startAutoplay() { if (config.autoplay) autoplayTimer = setInterval(() => moveToSlide(currentIndex + 1), config.autoplaySpeed); }
  function stopAutoplay() { clearInterval(autoplayTimer); }

  // Dragging
  slider.addEventListener("mousedown", (e) => { isDragging = true; startX = e.pageX; stopAutoplay(); });
  window.addEventListener("mousemove", (e) => { if (!isDragging) return; slider.style.transform = `translateX(${prevTranslate + (e.pageX - startX)}px)`; });
  window.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    isDragging = false;
    const movedBy = e.pageX - startX;
    if (movedBy < -50) moveToSlide(currentIndex + 1);
    else if (movedBy > 50) moveToSlide(currentIndex - 1);
    else updateSliderPosition(true);
    startAutoplay();
  });

  // Nav Buttons
  document.querySelector(".nahid-portfolio-prev")?.addEventListener("click", () => { stopAutoplay(); moveToSlide(currentIndex - 1); startAutoplay(); });
  document.querySelector(".nahid-portfolio-next")?.addEventListener("click", () => { stopAutoplay(); moveToSlide(currentIndex + 1); startAutoplay(); });

  window.addEventListener("resize", buildSlider);
  buildSlider();
}

portfolioConfigFunction();

// Testimonial Config Function 
function testimonialConfigFunction() {
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

// Project Form Config Function
function projectFormConfigFunction() {
  const config = typeof nahidCtaConfig !== "undefined" ? nahidCtaConfig : null;
  if (!config) return;

  const headingEl = document.getElementById("nahidCtaHeading");
  const formEl = document.getElementById("nahidCtaForm");
  const badgesRowEl = document.getElementById("nahidCtaBadgesRow");

  // ১. হেডিং ডাটা ইনজেক্ট
  if (headingEl && config.heading) {
    headingEl.innerHTML = `${config.heading.textNormal || ""}<span class="highlight-orange">${config.heading.textHighlight || ""}</span>`;
  }

  // ২. ট্রাস্ট ব্যাজ রেন্ডারিং
  if (badgesRowEl && config.badges) {
    badgesRowEl.innerHTML = config.badges
      .map(
        (badge) => `
      <div class="badge-item">
        <span class="badge-icon">${badge.iconSvg || ""}</span>
        <span class="badge-text">${badge.text || ""}</span>
      </div>
    `,
      )
      .join("");
  }


  // ১. কান্ট্রি লিস্ট
  const countries = [
    { name: "United States" }, { name: "United Kingdom" }, { name: "Canada" }, { name: "Australia" },
    { name: "Germany" }, { name: "Bangladesh" }, { name: "India" }, { name: "United Arab Emirates" },
    { name: "Saudi Arabia" }, { name: "Singapore" }, { name: "Netherlands" }, { name: "France" },
    { name: "Italy" }, { name: "Spain" }, { name: "Sweden" }, { name: "Switzerland" },
    { name: "Norway" }, { name: "New Zealand" }, { name: "Japan" }, { name: "South Korea" },
    { name: "Israel" }, { name: "Ireland" }, { name: "Denmark" }, { name: "Belgium" }, { name: "Other" }
  ];

  // ২. কান্ট্রি ভ্যালিডেশন রুলস
  const countryValidationRules = {
    "Bangladesh": /^(880|0)?1[3-9]\d{8}$/, "India": /^(91|0)?[6-9]\d{9}$/,
    "United States": /^1?[2-9]\d{9}$/, "Canada": /^1?[2-9]\d{9}$/,
    "United Kingdom": /^(44|0)?7\d{9}$/, "Australia": /^(61|0)?[45]\d{8}$/,
    "Germany": /^(49|0)?1[5-7]\d{8,9}$/, "United Arab Emirates": /^(971|0)?5[024568]\d{7}$/,
    "Saudi Arabia": /^(966|0)?5\d{8}$/, "Singapore": /^(65)?[89]\d{7}$/,
    "Netherlands": /^(31|0)?6\d{8}$/, "France": /^(33|0)?[67]\d{8}$/,
    "Italy": /^(39|0)?3\d{8,9}$/, "Spain": /^(34)?[67]\d{8}$/,
    "Sweden": /^(46|0)?7\d{8}$/, "Switzerland": /^(41|0)?7[5-9]\d{7}$/,
    "Norway": /^(47)?[49]\d{7}$/, "New Zealand": /^(64|0)?2\d{7,9}$/,
    "Japan": /^(81|0)?[789]0\d{8}$/, "South Korea": /^(82|0)?10\d{7,8}$/,
    "Israel": /^(972|0)?5\d{8}$/, "Ireland": /^(353|0)?8\d{8}$/,
    "Denmark": /^(45)?\d{8}$/, "Belgium": /^(32|0)?4\d{8}$/, "Other": /^\d{7,15}$/
  };

  // ৩. সার্ভিস লিস্ট
  const serviceItems = [
    { text: "Custom Web Design & Development" }, { text: "E-commerce" },
    { text: "Shopify Development" }, { text: "WordPress Development" }, { text: "web optimization" }, { text: "Maintenance & Support" }, { text: "Consulting" }
  ];

  // ৪. ড্রপডাউন পপুলেট করা
  const countrySelect = document.getElementById("dynamicCountrySelect");
  const serviceSelect = document.getElementById("serviceSelect");

  if (countrySelect) {
    countrySelect.innerHTML = '<option value="">Select Country</option>';
    countries.forEach(c => countrySelect.innerHTML += `<option value="${c.name}">${c.name}</option>`);
  }

  if (serviceSelect) {
    serviceSelect.innerHTML = '<option value="">Select a Service</option>';
    serviceItems.forEach(s => serviceSelect.innerHTML += `<option value="${s.text}">${s.text}</option>`);
  }

  // ৫. ফর্ম সাবমিট হ্যান্ডলার
  if (typeof formEl !== 'undefined' && formEl) {
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();

      // এরর ক্লিয়ার করা
      document.querySelectorAll(".error-message").forEach((el) => (el.textContent = ""));

      const submitBtn = document.getElementById("nahidCtaSubmitBtn");

      // সব ভ্যালু নেওয়া
      const fullname = formEl.querySelector("input[name='fullname']")?.value.trim();
      const email = formEl.querySelector("input[name='email']")?.value.trim();
      const country = countrySelect ? countrySelect.value : "";
      const service = serviceSelect ? serviceSelect.value : "";
      const rawWhatsapp = formEl.querySelector("input[name='whatsapp']")?.value.trim();
      const cleanWhatsapp = rawWhatsapp ? rawWhatsapp.replace(/[\s\-\(\)\+]/g, "") : "";

      let isValid = true;

      // ভ্যালিডেশন চেক
      if (!fullname) { document.getElementById("error-fullname").textContent = "Please enter your full name"; isValid = false; }
      if (!email) { document.getElementById("error-email").textContent = "Please enter your email"; isValid = false; }
      if (!country) { document.getElementById("error-country").textContent = "Please select your country"; isValid = false; }
      if (!service) { document.getElementById("error-service").textContent = "Please select a service"; isValid = false; }

      const rule = countryValidationRules[country];
      if (!rawWhatsapp || !rule || !rule.test(cleanWhatsapp)) {
        document.getElementById("error-whatsapp").textContent = "Please enter your whatsapp number";
        isValid = false;
      }

      if (!isValid) return;

      // সাবমিশন প্রসেস
      submitBtn.textContent = "Sending...";
      submitBtn.disabled = true;

      const data = { fullname, email, country, whatsapp: cleanWhatsapp, service, formType: "project" };

      fetch("https://script.google.com/macros/s/AKfycbx1d4YwrZIJNOEvs0CpqWofR3KjNRorTjniETgF51-wWr6OY-l6apTvjvVKvxFgGUFJ/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })
        .then(() => {
          submitBtn.textContent = "Sent Successfully!";
          submitBtn.style.background = "#00ca6d";
          formEl.reset();
          setTimeout(() => {
            submitBtn.textContent = "Send Message";
            submitBtn.style.background = "";
            submitBtn.disabled = false;
          }, 3000);
        })
        .catch((err) => {
          console.error("Error:", err);
          submitBtn.textContent = "Error! Try Again";
          submitBtn.disabled = false;
        });
    });

    // টাইপ করলে এরর মুছে ফেলার লজিক
    formEl.querySelectorAll("input, select").forEach((input) => {
      input.addEventListener("input", () => {
        const errorEl = document.getElementById("error-" + input.name);
        if (errorEl) errorEl.textContent = "";
      });
    });
  }

}

// Marquee Config Function
function marqueeConfigFunction() {
  const config =
    typeof nahidMarqueeConfig !== "undefined" ? nahidMarqueeConfig : null;
  const track = document.getElementById("nahidMarqueeTrack");

  if (!config || !track || !config.items || config.items.length === 0) return;

  function createMarqueeSet(itemsArray) {
    const setContainer = document.createElement("div");
    setContainer.classList.add("marquee-set");

    setContainer.innerHTML = itemsArray
      .map((item) => {
        let iconContent = "✦"; // ডিফল্ট আইকন (যদি কোনোটিই না দেওয়া থাকে)

        // ১. যদি ডাটাতে সরাসরি SVG কোড দেওয়া থাকে
        if (item.svg && item.svg.trim()) {
          iconContent = item.svg;

          // SVG এর ওপর ডাইনামিক কালার ফোর্স করার অংশ
          if (iconContent.includes("<svg")) {
            iconContent = iconContent.replace(
              "<svg",
              `<svg class="custom-marquee-svg" style="color: ${item.iconColor || "#ff7a30"}; fill: ${item.iconColor || "#ff7a30"};"`,
            );
          }
        }
        // ২. আর যদি ডাটাতে ইমেজ পাথ/লিংক দেওয়া থাকে
        else if (item.img && item.img.trim()) {
          iconContent = `<img src="${item.img}" alt="${item.text || "icon"}" class="marquee-img" style="width: 100%; height: 100%; object-fit: contain;" />`;
        }

        return `
        <span class="marquee-icon-wrap">${iconContent}</span>
        <span class="marquee-text">${item.text}</span>
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

// Pricing Plan Config Function
function pricingPlanConfigFunction() {
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

// FAQ Config Function
function faqConfigFunction() {
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

// Work Flow Config Function
function workFlowConfigFunction() {
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

// Footer Config Function
function footerConfigFunction() {
  const config =
    typeof nahidFooterConfig !== "undefined" ? nahidFooterConfig : null;
  if (!config) return;

  if (config.connectBanner) {
    const titleEl = document.getElementById("nahidFooterConnectTitle");
    const btnTextEl = document.querySelector("#nahidFooterHireBtn .btn-text");
    const btnUrlEl = document.querySelector("#nahidFooterHireBtn");

    const popup = document.getElementById("nahidConnectPopup");
    const popupClose = document.getElementById("nahidPopupCloseBtn");
    const popupTitle = document.getElementById("nahidPopupTitle");
    const popupDesc = document.getElementById("nahidPopupDesc");
    const popupWhatsappBtn = document.getElementById("nahidPopupWhatsappBtn");
    // নতুন স্প্যান আইডিটি ধরা হলো
    const popupBtnTextEl = document.getElementById("nahidPopupBtnText");

    if (titleEl) titleEl.textContent = config.connectBanner.title;
    if (btnTextEl) btnTextEl.textContent = config.connectBanner.buttonText;

    if (popupTitle) popupTitle.textContent = config.connectBanner.title;
    if (popupDesc && config.connectBanner.desc) {
      popupDesc.textContent = config.connectBanner.desc;
    }

    // পপআপ বাটনের টেক্সট ডাইনামিকলি কনফিগ থেকে বসানো হলো
    if (popupBtnTextEl && config.connectBanner.popupBtnText) {
      popupBtnTextEl.textContent = config.connectBanner.popupBtnText;
    }

    if (btnUrlEl && popup) {
      btnUrlEl.addEventListener("click", (e) => {
        e.preventDefault();
        popup.classList.add("active");
      });
    }

    if (popupClose && popup) {
      popupClose.addEventListener("click", () => {
        popup.classList.remove("active");
      });
    }

    if (popup) {
      popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.classList.remove("active");
      });
    }

    if (popupWhatsappBtn) {
      popupWhatsappBtn.href = config.connectBanner.buttonUrl;

      popupWhatsappBtn.addEventListener("click", () => {
        popup.classList.remove("active");
      });
    }
  }
  // ২. ব্র্যান্ড ও ডেসক্রিপশন
  if (config.brand) {
    const logoWrap = document.getElementById("nahidFooterLogoWrap");
    const descEl = document.getElementById("nahidFooterDesc");

    if (logoWrap) {
      logoWrap.innerHTML = `
        <span class="brand-logo-icon">
          <img src="${config.brand.logoImage}" alt="${config.brand.logoAlt}">
        </span>
      `;
    }
    if (descEl) descEl.textContent = config.brand.description;
  }

  // Helper: টেক্সট থেকে ডাইনামিক স্লাগ বানানোর ফাংশন
  const generateSlug = (text) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");
  };

  // ৩. সোশ্যাল মিডিয়া রেন্ডারিং
  const socialsContainer = document.getElementById("nahidFooterSocials");
  if (socialsContainer && config.socials) {
    let socialsHTML = "";
    config.socials.forEach((soc) => {
      const dynamicSlug = generateSlug(soc.name);
      socialsHTML += `
        <a href="${soc.url}"  target="_blank" rel="noopener noreferrer"
           class="social-icon-link social-link-${dynamicSlug}" 
           id="social-id-${dynamicSlug}" 
           aria-label="${soc.name}">
           ${soc.iconSvg}  
        </a>
      `;
    });
    socialsContainer.innerHTML = socialsHTML;
  }

  // ৪. নেভিগেশন ও কন্টাক্ট কলাম প্রসেস
  const appendLinks = (containerId, linksArray) => {
    const container = document.getElementById(containerId);
    if (!container || !linksArray) return;

    let linksHTML = "";
    linksArray.forEach((item, idx) => {
      const dynamicSlug = generateSlug(item.label);
      linksHTML += `
        <li id="${containerId}-${idx}">
          <a href="${item.url || "#"}" class="footer-nav-link">
             ${item.label}
          </a>
        </li>`;
    });
    container.innerHTML = linksHTML;
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

  // ৬. লিগ্যাল বটম লিংক ও অটো-ট্যাগ জেনারেশন মেকানিজম
  const legalContainer = document.getElementById("nahidLegalLinks");
  const modal = document.getElementById("nahidPolicyModal");
  const modalTitle = document.getElementById("nahidPolicyModalTitle");
  const modalBody = document.getElementById("nahidPolicyModalBody");
  const modalClose = document.getElementById("nahidPolicyModalClose");

  const iconMap = {
    file: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>`,
    lock: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    check: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 4 12 14.01 9 11.01"></polyline><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path></svg>`,
    alert: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`,
    shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    user: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e676" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle></svg>`,
  };

  if (legalContainer && config.legal) {
    let legalHTML = "";
    config.legal.forEach((item, idx) => {
      const dynamicSlug = generateSlug(item.label);
      legalHTML += `<a href="javascript:void(0);" class="legal-link-${dynamicSlug}" data-idx="${idx}">${item.label}</a>`;
      if (idx < config.legal.length - 1) legalHTML += " | ";
    });
    legalContainer.innerHTML = legalHTML;

    legalContainer.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        const dataIdx = link.getAttribute("data-idx");
        const policy = config.legal[dataIdx];

        if (policy && modal && modalTitle && modalBody) {
          modalTitle.textContent = policy.label;

          let builtHTML = `<div class="policy-popup-content">`;

          if (policy.content && Array.isArray(policy.content)) {
            policy.content.forEach((block) => {
              const svgIcon = iconMap[block.icon] || iconMap["file"];
              builtHTML += `
                <div class="policy-item">
                  <div class="policy-icon-title">
                    <h4>${block.title}</h4>
                  </div>
                  <p>${block.text}</p>
                </div>`;
            });
          }

          builtHTML += `</div>`;
          modalBody.innerHTML = builtHTML;
          modal.classList.add("open");
        }
      });
    });
  }

  if (modal) {
    if (modalClose) {
      modalClose.addEventListener("click", () => {
        modal.classList.remove("open");
      });
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("open");
      }
    });
  }

  const form = document.getElementById("nahidNewsletterForm");
  const emailInput = document.getElementById("nahidCtaInput");
  const submitBtn = form ? form.querySelector(".newsletter-submit-btn") : null;
  const successMsg = document.getElementById("nahidSuccessMessage");

  if (form && emailInput && submitBtn && successMsg) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // ১. ডিফল্ট টেক্সট বা এইচটিএমএল সেভ করে রাখা
      const originalHTML = submitBtn.innerHTML;

      // বাটন লোডিং স্টেট
      submitBtn.textContent = "Subscribing...";
      submitBtn.style.opacity = "0.5";
      submitBtn.disabled = true;

      const data = {
        formType: "subscriber",
        email: emailInput.value,
      };

      // ২. ইনস্ট্যান্ট ইনপুট ক্লিয়ার করা
      form.reset();

      fetch(
        "https://script.google.com/macros/s/AKfycbx1d4YwrZIJNOEvs0CpqWofR3KjNRorTjniETgF51-wWr6OY-l6apTvjvVKvxFgGUFJ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        },
      )
        .then(() => {
          // ৩. সাকসেস স্টেট
          submitBtn.textContent = "Subscribed 😍";
          submitBtn.style.opacity = "1";
          submitBtn.disabled = false;

          const formRect = form.getBoundingClientRect();
          successMsg.style.position = "absolute";
          successMsg.style.top = `${window.scrollY + formRect.bottom + 8}px`;
          successMsg.style.left = `${window.scrollX + formRect.left}px`;
          successMsg.style.display = "block";
          successMsg.textContent = "Thank you for subscribing!";

          // ৪. ২ সেকেন্ড পর অরিজিনাল বাটন ফিরে আসা
          setTimeout(() => {
            submitBtn.innerHTML = originalHTML; // অরিজিনাল আইকন + টেক্সট ফিরে আসবে
            successMsg.style.display = "none";
          }, 3000);
        })
        .catch((err) => {
          console.error("Error:", err);
          submitBtn.textContent = "Error! Try Again";
          submitBtn.disabled = false;
        });
    });
  }
}



//  Premium Custom Cursor Initializer Engine
function initCustomCursor() {
  // 1. Mobile / Touch devices checks mapping ( tactile unit detection )
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  if (isTouchDevice) {
    return; // Stop implementation process framework on touch devices
  }

  // 2. Select key pointer references nodes element template structure
  const container = document.querySelector('.cursor-container');
  const outerCursor = document.querySelector('.custom-cursor-outer');
  const innerCursor = document.querySelector('.custom-cursor-inner');
  const trailContainer = document.querySelector('.cursor-trail-container');

  // Safety check: Elements ready ache kina check kora
  if (!container || !outerCursor || !innerCursor || !trailContainer) {
    console.warn("Custom Cursor Elements not found in DOM.");
    return;
  }

  // 3. Track coordinates vector processing logic setup array mapping parameters
  let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let outerPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  let innerPos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

  // 4. Generate 6 Fading Trailing Dots Setup Configurations
  const totalTrails = 6;
  const trailNodes = [];
  const trailPositions = Array.from({ length: totalTrails }, () => ({ x: mouse.x, y: mouse.y }));

  // Clear previous trails inside target container if re-initialized
  trailContainer.innerHTML = '';

  for (let i = 0; i < totalTrails; i++) {
    const dot = document.createElement('div');
    dot.classList.add('trail-circle');

    // Gradual transparency mapping design framework metrics scaling context
    const opacityValue = 0.5 * (1 - (i / totalTrails));
    const scaleValue = 1 - (i / totalTrails) * 0.5;

    dot.style.opacity = opacityValue;
    dot.style.transform = `translate(-50%, -50%) scale(${scaleValue})`;

    trailContainer.appendChild(dot);
    trailNodes.push(dot);
  }

  // 5. Mouse move tracking listener updates
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  // Linear Interpolation Logic calculation engine formula context matrix
  const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

  // 6. Render loop tracking module pipeline structure frame logic rate control sequence
  function updateAnimationFrame() {
    // Inner center point cursor logic processing metrics target configurations tracking
    innerPos.x = lerp(innerPos.x, mouse.x, 0.35);
    innerPos.y = lerp(innerPos.y, mouse.y, 0.35);
    innerCursor.style.left = `${innerPos.x}px`;
    innerCursor.style.top = `${innerPos.y}px`;

    // Outer glow dynamic shell structure loop processing configurations track
    outerPos.x = lerp(outerPos.x, mouse.x, 0.14);
    outerPos.y = lerp(outerPos.y, mouse.y, 0.14);
    outerCursor.style.left = `${outerPos.x}px`;
    outerCursor.style.top = `${outerPos.y}px`;

    // Trail elements loop updates cascading configuration logic parameters structure
    let leaderX = innerPos.x;
    let leaderY = innerPos.y;

    for (let i = 0; i < totalTrails; i++) {
      trailPositions[i].x = lerp(trailPositions[i].x, leaderX, 0.22);
      trailPositions[i].y = lerp(trailPositions[i].y, leaderY, 0.22);

      trailNodes[i].style.left = `${trailPositions[i].x}px`;
      trailNodes[i].style.top = `${trailPositions[i].y}px`;

      leaderX = trailPositions[i].x;
      leaderY = trailPositions[i].y;
    }

    requestAnimationFrame(updateAnimationFrame);
  }
  requestAnimationFrame(updateAnimationFrame);

  // 7. Hover states element tracking parameters mapping interface layer configuration targets setup
  const interactiveSelectors = document.querySelectorAll('.hover-target');

  interactiveSelectors.forEach(element => {
    element.addEventListener('mouseenter', () => container.classList.add('is-hovered'));
    element.addEventListener('mouseleave', () => container.classList.remove('is-hovered'));
  });

  // 8. Action clicks event listener dynamic handlers ripple processing sequences
  window.addEventListener('mousedown', () => {
    container.classList.add('is-clicked');
    createRippleRingEffect(mouse.x, mouse.y);
  });

  window.addEventListener('mouseup', () => {
    container.classList.remove('is-clicked');
  });

  // Dynamic injection script module engine for ripple context layout instantiation parsing
  function createRippleRingEffect(x, y) {
    const ripple = document.createElement('div');
    ripple.classList.add('cursor-ripple');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    container.appendChild(ripple);

    // Dynamic node garbage collection to prevent memory leak
    ripple.addEventListener('animationend', () => {
      ripple.remove();
    });
  }
}


// Master Function
function masterFunction() {
  headerConfigFunction();
  heroConfigFunction();
  serviceConfigFunction();
  experienceConfigFunction();
  aboutMeConfigFunction();
  portfolioConfigFunction();
  testimonialConfigFunction();
  projectFormConfigFunction();
  marqueeConfigFunction();
  pricingPlanConfigFunction();
  faqConfigFunction();
  workFlowConfigFunction();
  footerConfigFunction();
  globalModalConfigFunction();
  initCustomCursor();
}

// Master Function Call
document.addEventListener("DOMContentLoaded", masterFunction);
