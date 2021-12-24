// eslint-disable-next-line no-unused-vars

import '@styles';
import './images';
import App from './app';
import Header from './components/header';
import SubMenu from './components/submenu';
import Hero from './components/hero';
import ScrollTop from './components/scrolltop';

// Your code goes here ...
document.addEventListener('DOMContentLoaded', () => {
  const app = new App([
    new Header(),
    new SubMenu(),
    new Hero(),
    new ScrollTop(),
  ]);

  app.bootstrap();
});
