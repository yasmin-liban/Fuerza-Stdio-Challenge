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
  }
}
