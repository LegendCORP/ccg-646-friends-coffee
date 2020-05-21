export class CopyShareText {
  constructor(selector) {
    this.selector = selector;
    if (!document.querySelector(this.selector)) {
      return;
    }

    this.holders = document.querySelectorAll(this.selector);
    this.attachEvents();
  }

  attachEvents() {
    this.holders.forEach((currentEl) => {
      let shareBtn = currentEl.querySelector(`${this.selector}-btn`);
      let shareInput = currentEl.querySelector(`${this.selector}-input`);

      shareBtn.addEventListener("click", () => {
        shareInput.select();
        document.execCommand("copy");
        currentEl.classList.remove("active");
      });
    });
  }
}

export function EmbedCopy(item) {
  if (!item instanceof HTMLElement) item = document.querySelector(item);
  if (!item) return;
  var embed = item;
  var embedInput = embed.querySelector("input");
  var notification = embed.querySelector(".copy-notification");

  embed.addEventListener("click", function (e) {
    e.preventDefault();
    embedInput.select();
    document.execCommand("copy");
    embed.classList.add("active");
    notification.style.setProperty("display", "block");

    setTimeout(function () {
      embed.classList.remove("active");
      notification.style.removeProperty("display");
    }, 1000);
  });
}
