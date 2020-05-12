console.log("friends");

import { ReadMoreToggler } from "../components/read-more";

new ReadMoreToggler({
  container: ".js-readmore-container-top",
  target: ".js-readmore-top",
  trigger: ".js-readmore-trigger-top",
  triggerText: ["", ""],
  triggerTextHolder: ".js-readmore-text-top",
});
console.log("lol");
