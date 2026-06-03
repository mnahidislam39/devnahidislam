const initHeroTechParallax = () => {
  const hero = document.querySelector(".hero-section");
  const items = document.querySelectorAll(".tech-item");

  if (!hero || items.length === 0) return;

  hero.addEventListener(
    "mousemove",
    (event) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      // মাউস সেন্টারিং ম্যাপিং
      const mouseX = (event.clientX - width / 2) * 0.025;
      const mouseY = (event.clientY - height / 2) * 0.025;

      items.forEach((item, index) => {
        // ডাইনামিক ৩ডি ইফেক্ট রেশিও ক্যালকুলেশন
        const factor = ((index % 3) + 1) * 0.4;
        item.style.transform = `translate3d(${mouseX * factor}px, ${mouseY * factor}px, 0)`;
        item.style.transition = "none";
      });
    },
    { passive: true },
  );

  hero.addEventListener("mouseleave", () => {
    items.forEach((item) => {
      item.style.transition = "transform 0.7s cubic-bezier(0.25, 1, 0.5, 1)";
      item.style.transform = "translate3d(0, 0, 0)";
    });
  });
};

// ইনিশিয়েলাইজেশন গেটওয়ে
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHeroTechParallax);
} else {
  initHeroTechParallax();
}
