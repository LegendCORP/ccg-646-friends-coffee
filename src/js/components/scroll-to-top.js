export const scrollToTop = () => {
  const btn = document.querySelector(".js-scroll-to-top");
  if (!btn) return;
  document.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });
};
