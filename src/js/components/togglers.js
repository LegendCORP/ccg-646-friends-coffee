export class SimpleToggler {
  constructor(triggerSelector, targetSelector, classToToggle) {
    this.trigger = document.querySelector(triggerSelector);
    this.target = document.querySelector(targetSelector);
    this.classToToggle = classToToggle || "active";
    this.mapEvents();
  }

  mapEvents() {
    this.trigger.addEventListener("click", this.toggle.bind(this));
  }

  toggle(e) {
    e.preventDefault();
    if (
      this.target.classList.contains(this.classToToggle) &&
      this.trigger.classList.contains(this.classToToggle)
    ) {
      this.trigger.classList.remove(this.classToToggle);
      this.target.classList.remove(this.classToToggle);
      return;
    }
    this.target.classList.add(this.classToToggle);
    this.trigger.classList.add(this.classToToggle);
  }
}

export class OpenClose {
  constructor(holders) {
    if (!document.querySelectorAll(holders)) {
      return;
    }

    this.holders = document.querySelectorAll(holders);

    this.attachEvents();
  }

  attachEvents() {
    this.holders.forEach((currentEl) => {
      let opener = currentEl.querySelector(".opener");
      opener.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (currentEl.classList.contains("active")) {
          this.removeClass(currentEl);
        } else {
          this.addClass(currentEl);
        }
      });

      document.addEventListener("click", (el) => {
        if (!currentEl.contains(el.target)) {
          this.removeClass(currentEl);
        }
      });
    });
  }

  addClass(e) {
    e.classList.add("active");
  }

  removeClass(e) {
    e.classList.remove("active");
  }
}

export class SimpleOpenClose {
  constructor(holders, triggerSelector, classToToggle) {
    if (!document.querySelectorAll(holders)) {
      return;
    }

    this.holders = document.querySelectorAll(holders);
    this.triggerSelector = triggerSelector;
    this.classToToggle = classToToggle;

    this.attachEvents();
  }

  attachEvents() {
    this.holders.forEach((currentEl) => {
      let opener = currentEl.querySelector(this.triggerSelector);
      opener.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (currentEl.classList.contains(this.classToToggle)) {
          this.removeClass(currentEl);
        } else {
          this.addClass(currentEl);
        }
      });
    });
  }

  addClass(e) {
    e.classList.add(this.classToToggle);
  }

  removeClass(e) {
    e.classList.remove(this.classToToggle);
  }
}

export function OpenToggler(container, triggerSelector, activeClass) {
  this.container = container;
  this.trigger = this.container.querySelector(triggerSelector || ".opener");
  this.activeClass = activeClass || "active";

  this.init = function () {
    this.trigger.addEventListener("click", this.onClick.bind(this));
  };

  this.onClick = function (e) {
    e.preventDefault();
    this.container.classList.add(this.activeClass);
  };

  this.init();
}

export function OpenAllToggler(containers, triggerSelector, activeClass) {
  this.containers = containers;
  this.trigger = document.querySelector(triggerSelector);
  this.activeClass = activeClass || "active";

  this.init = function () {
    this.trigger.addEventListener("click", this.onClick.bind(this));
  };

  this.onClick = function (e) {
    e.preventDefault();
    this.containers.forEach(
      function (container) {
        container.style.setProperty("height", container.scrollHeight + "px");
        setTimeout(
          function () {
            container.style.removeProperty("height");
            container.classList.add(this.activeClass);
          }.bind(this),
          300
        );
      }.bind(this)
    );
    this.trigger.classList.add("hidden");
  };

  this.init();
}

export class ActiveClassSwitcher {
  constructor(
    container,
    triggerSelector,
    targetSelector,
    classToToggle = "active"
  ) {
    this.container =
      typeof container === "string"
        ? document.querySelector(container)
        : container;
    if (!this.container) {
      console.error("ActiveClassSwitcher: Failed to init(no container)");
      return;
    }
    this.triggers = Array.prototype.slice.call(
      this.container.querySelectorAll(triggerSelector)
    );
    this.targets = Array.prototype.slice.call(
      this.container.querySelectorAll(targetSelector)
    );
    this.classToToggle = classToToggle;
    this.activeElem = null;
  }

  init() {
    this.triggers.map((trigger) =>
      trigger.addEventListener("click", this.handleClick.bind(this))
    );
  }

  handleClick(e) {
    e.preventDefault();
    this.activeElem = e.currentTarget.dataset.trigger - 1;
    if (e.currentTarget.classList.contains(this.classToToggle)) {
      this.clearActiveElements();
      return;
    }
    this.clearActiveElements();
    this.setActiveElements(this.activeElem);
  }

  clearActiveElements() {
    this.triggers.map((trigger) =>
      trigger.classList.remove(this.classToToggle)
    );
    this.targets.map((target) => target.classList.remove(this.classToToggle));
  }

  setActiveElements(triggerIndex) {
    this.toggle(triggerIndex);
  }

  toggle(triggerIndex) {
    // console.log(
    //   this.triggers[triggerIndex].classList.contains(this.classToToggle),
    //   this.classToToggle
    // );

    if (this.triggers[triggerIndex].classList.contains(this.classToToggle)) {
      this.triggers[triggerIndex].classList.remove(this.classToToggle);
      this.targets[triggerIndex].classList.remove(this.classToToggle);
      return;
    }
    this.triggers[triggerIndex].classList.add(this.classToToggle);
    this.targets[triggerIndex].classList.add(this.classToToggle);
  }
}

//////////////////////// ANIMATED ACCORDION

export class AnimatedAccordion extends ActiveClassSwitcher {
  constructor(
    container,
    triggerSelector,
    targetSelector,
    classToToggle = "active",
    animationDuration = 500
  ) {
    super(container, triggerSelector, targetSelector, classToToggle);
    this.animationDuration = animationDuration;
  }

  setHeight(element, dir) {
    // console.log(element);
    const setValue = element.scrollHeight;
    if (dir) {
      element.style.setProperty("height", `${setValue}px`);
      setTimeout(() => {
        element.style.setProperty("height", "auto");
      }, this.animationDuration);
    } else {
      element.style.setProperty("height", `${setValue}px`);
      setTimeout(() => {
        element.style.setProperty("height", "0");
      }, 100);
      // element.style.setProperty("height", "0");
    }

    return setValue;
  }

  clearActiveElements() {
    this.triggers.map((trigger) =>
      trigger.classList.remove(this.classToToggle)
    );
    this.targets.map((target) => {
      if (target.classList.contains(this.classToToggle)) {
        this.setHeight(target, false);
        target.classList.remove(this.classToToggle);
      }
    });
  }

  setActiveElements(triggerIndex) {
    this.toggle(triggerIndex);
    this.setHeight(this.targets[triggerIndex], true);
  }

  init() {
    this.triggers.map((trigger) =>
      trigger.addEventListener("click", this.handleClick.bind(this))
    );
    this.targets.map((target) => {
      if (!target.classList.contains(this.classToToggle)) {
        this.setHeight(target, false);
      }
    });
  }

  onResize() {
    if (!this.targets[this.activeElem]) return;
    this.targets[this.activeElem].style.setProperty("height", "auto");

    setTimeout(() => {
      this.targets[this.activeElem].style.setProperty(
        "height",
        `${this.targets[this.activeElem].scrollHeight}px`
      );
    }, 10);
  }
}

export class LinkToggler extends ActiveClassSwitcher {
  constructor(container, triggerSelector, targetSelector, linkSelector) {
    super(container, triggerSelector, targetSelector, "active");
    this.linkElem = this.container.querySelector(linkSelector);
  }

  handleClick(e) {
    e.preventDefault();
    if (e.currentTarget.classList.contains(this.classToToggle)) return;
    const triggerIndex = e.currentTarget.dataset.trigger - 1;
    const link = e.currentTarget.dataset.link;
    this.clearActiveElements();
    this.setActiveElements(triggerIndex);
    this.linkElem.href = link;
  }
}
