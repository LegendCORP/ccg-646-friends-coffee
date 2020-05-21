export function ScrollToggler(selector, offset, classToToggle) {
  this.btn = document.querySelector(selector);
  this.offset = offset || 300;
  this.classToToggle = classToToggle || "visible";
  if (!this.btn) return;

  this.onScroll = function () {
    if (window.pageYOffset > this.offset) {
      this.btn.classList.add(this.classToToggle);
    } else {
      this.btn.classList.remove(this.classToToggle);
    }
  };

  this.init = function () {
    document.addEventListener("scroll", this.onScroll.bind(this));
  };

  this.init();
}
