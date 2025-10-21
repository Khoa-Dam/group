// ===== Reveal-on-scroll Animation =====
(() => {
  const els = Array.from(document.querySelectorAll(".reveal-on-scroll"));
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-inview");
        } else {
          // Remove class when scroll out -> animation repeats when scrolling back
          en.target.classList.remove("is-inview");
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.01 }
  );

  els.forEach((el) => io.observe(el));
})();

// ===== Footer Year =====
(() => {
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
})();
