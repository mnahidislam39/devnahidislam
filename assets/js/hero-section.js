/**
 * Portfolio Core UI Optimization Script
 * Handled with Vanilla/Raw JS for maximum performance.
 */

document.addEventListener("DOMContentLoaded", () => {
  // --- 1. DOM ELEMENT CACHING ---
  const headerContainer = document.querySelector(".header-container");
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenus = document.querySelectorAll(".nav-menu");
  const marqueeWrapper = document.querySelector(".marquee-wrapper");
  const marqueeGroups = document.querySelectorAll(".marquee-group");

  // --- 2. OPTIMIZED HEADER NAVIGATION (Using Event Delegation) ---
  if (headerContainer) {
    headerContainer.addEventListener("click", (e) => {
      const clickedNavItem = e.target.closest(".nav-item");

      if (clickedNavItem) {
        const currentActive = headerContainer.querySelector(".nav-item.active");
        if (currentActive) {
          currentActive.classList.remove("active");
        }
        clickedNavItem.classList.add("active");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHeroBgParallax();
  });

  // --- 3. RESPONSIVE MOBILE TOGGLE ---
  if (mobileToggle) {
    mobileToggle.addEventListener("click", () => {
      const isExpanded = mobileToggle.classList.toggle("open");

      navMenus.forEach((menu) => {
        menu.classList.toggle("active", isExpanded);
      });
    });
  }

  // --- 4. OPTIMIZED MARQUEE HOVER INTERACTION ---
  if (marqueeWrapper && marqueeGroups.length > 0) {
    marqueeWrapper.addEventListener(
      "mouseenter",
      () => {
        marqueeGroups.forEach((group) => {
          group.style.animationDuration = "65s";
        });
      },
      { passive: true },
    );

    marqueeWrapper.addEventListener(
      "mouseleave",
      () => {
        marqueeGroups.forEach((group) => {
          group.style.animationDuration = "55s";
        });
      },
      { passive: true },
    );
  }
});
