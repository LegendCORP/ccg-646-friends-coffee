console.log("friends");

import { ReadMoreToggler } from "../components/read-more";
import { OpenClose } from "../components/open-close";
import { CopyShareText } from "../components/copy-share-text";
import Swiper from "swiper";
import { AnimatedAccordion } from "../components/togglers";

new ReadMoreToggler({
  container: ".js-readmore-container-top",
  target: ".js-readmore-top",
  trigger: ".js-readmore-trigger-top",
  triggerText: ["", ""],
  triggerTextHolder: ".js-readmore-text-top",
});

const readMoreContainers = Array.from(
  document.querySelectorAll(".js-read-more-container")
);

readMoreContainers.map(
  (container) => new ReadMoreToggler(container, ".js-read-more-trigger")
);

new OpenClose(".open-close");
new CopyShareText(".js-copy-share-text");

function mySwiper() {
  function resizeHandler() {
    let screenMobile = window.matchMedia("(max-width: 767px)").matches;
    let screenDesktop = window.matchMedia("(min-width: 768px)").matches;
    if (screenMobile && window.mainSwiper === undefined) {
      [...document.querySelectorAll(".comments-block")].forEach((wrap) => {
        var swiper = wrap.querySelector(".comments-swiper");
        var nx = wrap.querySelector(".swiper-button-next");
        var pr = wrap.querySelector(".swiper-button-prev");

        window.mainSwiper = new Swiper(swiper, {
          autoHeight: false,
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: {
            nextEl: nx,
            prevEl: pr,
          },
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
          },
        });
      });
    } else if (screenDesktop && window.mainSwiper !== undefined) {
      window.mainSwiper.destroy();
      window.mainSwiper = undefined;
    }
  }

  resizeHandler();

  window.addEventListener("resize", resizeHandler);
}

function initAll() {
  mySwiper();
}

initAll();

new AnimatedAccordion(
  ".js-acrd-sns-container",
  ".js-acrd-sns-trigger",
  ".js-acrd-sns-target"
).init();
