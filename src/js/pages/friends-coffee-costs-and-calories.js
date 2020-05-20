console.log("friends");

import { ReadMoreToggler } from "../components/read-more";
import { AnimatedAccordion } from "../components/togglers";
import { OpenClose } from "../components/open-close";

new ReadMoreToggler({
  container: ".js-readmore-container-top",
  target: ".js-readmore-top",
  trigger: ".js-readmore-trigger-top",
  triggerText: ["", ""],
  triggerTextHolder: ".js-readmore-text-top",
});

new OpenClose(".open-close");

const readMoreContainers = Array.from(
  document.querySelectorAll(".js-read-more-container")
);
readMoreContainers.map(
  (container) => new ReadMoreToggler(container, ".js-read-more-trigger")
);

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
