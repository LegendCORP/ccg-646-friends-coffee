class CopyShareText {
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

            shareBtn.addEventListener('click', () => {
                shareInput.select();
                document.execCommand('copy');
                currentEl.classList.remove('active');
            });
        });
    }
}
