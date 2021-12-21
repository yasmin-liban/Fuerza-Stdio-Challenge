// eslint-disable-next-line no-unused-vars

import '@styles';
import './images';
import App from './app';
import Header from './components/header';
import SubMenu from './components/submenu';

// Your code goes here ...
document.addEventListener('DOMContentLoaded', () => {
  const app = new App([
    new Header(),
    new SubMenu(),
  ]);

  app.bootstrap();
});
