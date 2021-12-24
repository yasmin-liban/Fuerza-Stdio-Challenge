export default class ScrollTop {
  constructor() {
    this.selector = '.scroll-to-top';
    this.multiple = false;
  }

  bootstrap() {
    this.$scroll = document.querySelector(this.selector);

    this.addEventListeners();
  }

  addEventListeners() {
    this.$scroll.addEventListener('click', this.onScrollTop.bind(this));
  }

  // eslint-disable-next-line class-methods-use-this
  onScrollTop() {
    window.scrollTo(0, 0);
  }
}
