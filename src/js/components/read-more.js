export class ReadMoreToggler {
    constructor(config) {
        let {container, target, trigger, triggerText, triggerTextHolder} = config;
        if (typeof container === 'string') container = document.querySelector(container);
        if (!container || !(container instanceof HTMLElement)) return;
        this.container = container;
        this.triggerText = triggerText || ['Read More', 'Read Less'];
        this.trigger = trigger instanceof HTMLElement ? trigger : this.container.querySelector(trigger);
        this.triggerTextHolder =
            triggerTextHolder instanceof HTMLElement
                ? triggerTextHolder
                : this.container.querySelector(triggerTextHolder);
        this.target = target instanceof HTMLElement ? target : this.container.querySelector(target);
        this.targetHeight = '0';
        this.mapEvents();
    }

    mapEvents() {
        this.trigger.addEventListener('click', this.handleClick.bind(this));
    }

    setHeight(value) {
        this.target.style.setProperty('height', value);
        return value;
    }

    open() {
        this.triggerTextHolder.innerText = this.triggerText[1];
        this.trigger.classList.add('open');
        this.target.classList.add('open');
    }

    close() {
        this.triggerTextHolder.innerText = this.triggerText[0];
        this.trigger.classList.remove('open');
        this.target.classList.remove('open');
    }

    handleClick(e) {
        e.preventDefault();
        if (!this.trigger.classList.contains('open')) {
            this.open();
            this.targetHeight = this.setHeight(`${this.target.scrollHeight}px`);
            setTimeout(() => this.setHeight('auto'), 500);
            return;
        }
        this.close();
        this.targetHeight = this.setHeight(`${this.target.scrollHeight}px`);
        setTimeout(() => this.setHeight('0'), 0);
        setTimeout(() => this.target.style.removeProperty('height'), 500);
    }
}
