console.log("friends");

if ("NodeList" in window && !NodeList.prototype.forEach) {
  console.info("polyfill for IE11");
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}

import { ReadMoreToggler } from "../components/read-more";
import { OpenClose } from "../components/open-close";
import { CopyShareText, EmbedCopy } from "../components/copy-share-text";
import { ScrollToggler } from "../components/scroll-to-top";
import Swiper from "swiper";
import * as SmoothScroll from "smooth-scroll";

// import "swiper/css/swiper.css";

import { AnimatedAccordion } from "../components/togglers";

new SmoothScroll(".js-smooth-scroll");

new ReadMoreToggler({
  container: ".js-readmore-container-top",
  target: ".js-readmore-top",
  trigger: ".js-readmore-trigger-top",
  triggerText: ["", ""],
  triggerTextHolder: ".js-readmore-text-top",
});

const readMoreContainers = Array.prototype.slice.call(
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
      Array.prototype.slice
        .call(document.querySelectorAll(".comments-block"))
        .forEach((wrap) => {
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

mySwiper();

new ScrollToggler(".js-scroll-to-top");
new ScrollToggler(".js-scroll-socials");

const embeds = Array.prototype.slice.call(
  document.querySelectorAll(".js-copy-input-text")
);
embeds.map((embed) => {
  new EmbedCopy(embed);
});

new AnimatedAccordion(
  ".js-acrd-sns-container",
  ".js-acrd-sns-trigger",
  ".js-acrd-sns-target"
).init();

new AnimatedAccordion(
  ".js-acrd-mobchar-container",
  ".js-acrd-mobchar-trigger",
  ".js-acrd-mobchar-target"
).init();

const seasonsAccordions = Array.prototype.slice.call(
  document.querySelectorAll(".js-acrd-mob-sns-container")
);

seasonsAccordions.map((seasonItem) => {
  new AnimatedAccordion(
    seasonItem,
    ".js-acrd-mob-sns-trigger",
    ".js-acrd-mob-sns-target"
  ).init();
});
