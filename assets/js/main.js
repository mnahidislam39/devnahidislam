// ==========================================
// DEVELOPER CONFIGURATIONS (Global Flags)
// ==========================================
const nahidConfig = {
  autoSlideActive: true, // True = Auto Slide On, False = Off (Development Mode)
  autoSlideInterval: 3000, // Transition interval duration (3s)
};

// ==========================================
// SEAMLESS LOOP STATE ENGINE
// ==========================================
const nahidViewCardsCount = 3;
let nahidCurrentIndex = nahidViewCardsCount;
let nahidAutoSlideTimer = null;
let nahidIsTransitioning = false;

function initNahidInfiniteSlider() {
  const track = document.getElementById("nahid-services-container");
  const paginationContainer = document.getElementById(
    "nahid-pagination-container",
  );
  if (!track || !paginationContainer) return;

  // Seamless buffer loops track data mapping processing
  const startClones = nahidServicesData.slice(0, nahidViewCardsCount);
  const endClones = nahidServicesData.slice(-nahidViewCardsCount);
  const totalCombinedData = [
    ...endClones,
    ...nahidServicesData,
    ...startClones,
  ];

  // Inject dynamic template markup injection elements
  track.innerHTML = totalCombinedData
    .map(
      (item) => `
    <div class="nahid-service-card">
      <div class="nahid-service-card-header">
        <h3 class="nahid-service-card-title">${item.title}</h3>
      </div>
      <div class="nahid-services-image-stack">
        <img class="nahid-mockup-layer nahid-layer-bg-2" src="${item.bgImg2}" alt="Stack Layer">
        <img class="nahid-mockup-layer nahid-layer-bg-1" src="${item.bgImg1}" alt="Stack Layer">
        <img class="nahid-mockup-layer nahid-layer-main" src="${item.mainImg}" alt="${item.title}">
      </div>
      <div class="nahid-card-bottom-action">
        <a href="${item.link}" class="nahid-action-circle-btn">
          <svg viewBox="0 0 24 24"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      </div>
    </div>
  `,
    )
    .join("");

  // Dynamic dynamic point indicator rendering logic
  paginationContainer.innerHTML = nahidServicesData
    .map(
      (_, i) => `
    <span class="nahid-dot ${i === 0 ? "nahid-active" : ""}" data-index="${i}"></span>
  `,
    )
    .join("");

  // Strict dynamic click engine binding triggers bypassing execution faults
  const dotElements = paginationContainer.querySelectorAll(".nahid-dot");
  dotElements.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const selectedIndex = parseInt(e.target.getAttribute("data-index"));
      clickToNahidSlide(selectedIndex);
    });
  });

  // Structural rendering watcher listeners registration execution loops
  track.addEventListener("transitionend", handleNahidTransitionEnd);

  updateNahidTrackPosition(false);

  if (nahidConfig.autoSlideActive) {
    startNahidAutoPlay();
  }
}

function updateNahidTrackPosition(animation = true) {
  const track = document.getElementById("nahid-services-container");
  const cardElement = document.querySelector(".nahid-service-card");
  if (!track || !cardElement) return;

  const cardWidth = cardElement.getBoundingClientRect().width;
  const gapValue = 30; // Matches layout template grid parameters
  const moveDistance = nahidCurrentIndex * (cardWidth + gapValue);

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
  const track = document.getElementById("nahid-services-container");
  if (!track) return;

  nahidIsTransitioning = false;

  // Jump tracking logic computation calculation validation matrix setup
  if (nahidCurrentIndex >= nahidServicesData.length + nahidViewCardsCount) {
    track.style.transition = "none";
    nahidCurrentIndex = nahidViewCardsCount;
    const cardWidth = document
      .querySelector(".nahid-service-card")
      .getBoundingClientRect().width;
    const moveDistance = nahidCurrentIndex * (cardWidth + 30);
    track.style.transform = `translate3d(-${moveDistance}px, 0, 0)`;
  } else if (nahidCurrentIndex < nahidViewCardsCount) {
    track.style.transition = "none";
    nahidCurrentIndex = nahidServicesData.length + nahidViewCardsCount - 1;
    const cardWidth = document
      .querySelector(".nahid-service-card")
      .getBoundingClientRect().width;
    const moveDistance = nahidCurrentIndex * (cardWidth + 30);
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
  const dots = document.querySelectorAll(
    "#nahid-pagination-container .nahid-dot",
  );
  if (dots.length === 0) return;

  let relativeIndex = nahidCurrentIndex - nahidViewCardsCount;

  // Normalize looping indices checks boundaries points values matrix setups
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

window.addEventListener("resize", () => {
  updateNahidTrackPosition(false);
});

// Run framework processing dynamic logic
document.addEventListener("DOMContentLoaded", initNahidInfiniteSlider);
