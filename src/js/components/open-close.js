export class OpenClose {
  constructor(holders, opts) {
    if (!document.querySelectorAll(holders)) {
      return;
    }

    function extend(...args) {
      const newObj = {};
      for (const obj of args) {
        for (const key in obj) {
          //copy all the fields
          newObj[key] = obj[key];
        }
      }
      return newObj;
    }
    this.defaults = {
      accMode: true,
      hideOnClickOutside: true,
    };
    this.options = extend(this.defaults, opts || {});
    this.holders = document.querySelectorAll(holders);

    this.attachEvents();
  }

  attachEvents() {
    this.holders.forEach((currentEl) => {
      var self = this;
      let openers = currentEl.querySelectorAll(".opener");
      openers.forEach(function (opener) {
        opener.addEventListener("click", (e) => {
          e.preventDefault();

          if (self.options.accMode) {
            //hide other drop if open
            self.holders.forEach((item) => {
              if (item !== currentEl) {
                self.removeClass(item);
              }
            });
          }

          if (currentEl.classList.contains("active")) {
            self.removeClass(currentEl);
          } else {
            self.addClass(currentEl);
          }
        });
      });

      if (this.options.hideOnClickOutside) {
        document.addEventListener("click", (e) => {
          if (!currentEl.contains(e.target)) {
            this.removeClass(currentEl);
          }
        });
      }
    });
  }

  addClass(e) {
    e.classList.add("active");
  }

  removeClass(e) {
    e.classList.remove("active");
  }
}
