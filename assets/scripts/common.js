;(() => {
  "use strict";

  const headerMenu = document.querySelector(".header__menu");
  const headerNavigation = document.querySelector(".header__navigation");

  const showNavigation = () => {
    headerMenu.classList.toggle("header__menu--active");
    headerNavigation.classList.toggle("header__navigation--active");
  };

  headerMenu.addEventListener("click", showNavigation);
})();