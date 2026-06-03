const initWaveAnimation = () => {
  const marqueeSection = document.querySelector(".marquee-section");
  if (!marqueeSection) return;

  let offset = 0;
  let bounceDegree = 0;

  const render = () => {
    // ডানে-বামে সরার স্পিড
    offset += 1.5;
    if (offset > 1200) offset = 0;

    // ওপর-নিচে দোলার ফ্রিকোয়েন্সি (Sine wave degree)
    bounceDegree += 0.04;
    const bounce = Math.sin(bounceDegree) * 12; // ১২ পিক্সেল পর্যন্ত ওপর-নিচে দুলবে

    // সরাসরি সিএসএস ভ্যারিয়েবলে ডেটা পুশ করা হচ্ছে (সর্বোচ্চ পারফরম্যান্সের জন্য)
    marqueeSection.style.setProperty("--wave-offset", offset);
    marqueeSection.style.setProperty("--wave-bounce", bounce);

    requestAnimationFrame(render);
  };

  requestAnimationFrame(render);
};

document.addEventListener("DOMContentLoaded", () => {
  initWaveAnimation();
});
