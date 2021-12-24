import Swiper, { Navigation, Parallax } from 'swiper';

export default class Hero {
  constructor() {
    this.selector = '[data-element="hero"]';
    this.multiple = false;

    const $hero = document.querySelector(this.selector);

    this.classes = {
      swiper: '.hero__swiper',
      swiperButtonPrev: '.swiper-button-prev',
      swiperButtonNext: '.swiper-button-next',
    };

    this.nodes = {
      hero: $hero,
      swiper: $hero.querySelector(this.classes.swiper),
      swiperButtonPrev: $hero.querySelector(this.classes.swiperButtonPrev),
      swiperButtonNext: $hero.querySelector(this.classes.swiperButtonNext),
    };
  }

  bootstrap() {
    this.swiper = new Swiper(this.nodes.swiper, {
      modules: [Navigation, Parallax],
      parallax: true,
      // autoHeight: true,
      cssMode: true,
      navigation: {
        prevEl: this.nodes.swiperButtonPrev,
        nextEl: this.nodes.swiperButtonNext,
      },
    });

    this.addEventListeners();
    this.styleSwiperNavButtons();
  }

  addEventListeners() {
    this.nodes.swiperButtonNext.addEventListener('click', this.swipeNext.bind(this));
    this.nodes.swiperButtonPrev.addEventListener('click', this.swipePrev.bind(this));
  }

  swipeNext() {
    this.swiper.slideNext();
  }

  swipePrev() {
    this.swiper.slidePrev();
  }

  styleSwiperNavButtons() {
    const arrows = [this.nodes.swiperButtonNext, this.nodes.swiperButtonPrev];
    arrows.forEach((arrow) => {
      const img = document.createElement('img');
      img.src = './images/Icon ionic-ios-arrow.svg';
      arrow.append(img);
    });
  }
}
