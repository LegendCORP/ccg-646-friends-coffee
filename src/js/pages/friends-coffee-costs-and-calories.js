console.log("friends");

import { ReadMoreToggler } from "../components/read-more";

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
