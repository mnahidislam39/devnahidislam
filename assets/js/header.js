const initStickyHeader = () => {
  const header = document.querySelector(".main-header");
  if (!header) return;

  // হিরো সেকশন বা পেজের টপ থেকে ৫০ পিক্সেল স্ক্রল হলেই স্টিকি হবে
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
};

document.addEventListener("DOMContentLoaded", () => {
  initStickyHeader();
});
