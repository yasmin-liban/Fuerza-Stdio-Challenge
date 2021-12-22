export default class SubMenu {
  constructor() {
    this.selector = '[data-element="submenu"]';
    this.handlerSelector = 'a[handler-for]';
    this.multiple = true;

    this.classes = {
      menuVisible: 'submenu-main--visible',
      selected: 'submenu-item--selected',
      showBelow: 'submenu-main--nested',
      showToSide: 'submenu-main--sub-nested',
      positionRelative: 'submenu-item--position-relative',
    };

    document.addEventListener('click', this.onClickOutsideMenu.bind(this));
  }

  bootstrap($submenu) {
    const $handler = document.querySelector(`[handler-for="${$submenu.id}"]`);

    $handler.addEventListener('click', this.onToggleSubMenu.bind(this));

    this.handleNestingVisualization($submenu, $handler);
  }

  handleNestingVisualization($submenu, $handler) {
    const nestLevel = $submenu.getAttribute('nest-level');
    if (!nestLevel) {
      throw new Error('Submenu element must contain [nest-level] attribute.');
    } else if (nestLevel === '1') {
      $submenu.classList.add(this.classes.showBelow);
    } else {
      const handlerParent = $handler.closest('.submenu-item');
      $submenu.classList.add(this.classes.showToSide);
      handlerParent.classList.add(this.classes.positionRelative);
    }
  }

  onToggleSubMenu(event) {
    const handlerFor = event.target.getAttribute('handler-for');
    const $submenu = document.querySelector(`[id=${handlerFor}]`);
    $submenu.classList.toggle(this.classes.menuVisible);
  }

  onClickOutsideMenu(event) {
    const isSubmenu = event.target.matches(this.selector);
    const isHandler = event.target.matches(this.handlerSelector);
    if (!(isSubmenu || isHandler)) {
      document.querySelectorAll(this.selector).forEach((submenu) => {
        submenu.classList.remove(this.classes.menuVisible);
      });
    }
  }
}
