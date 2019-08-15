;(() => {
  "use strict";

  const headerMenu = document.querySelector(".header__menu");
  const headerNavigationList = document.querySelector(".header__navigation-list");

  const showNavigation = () => {
    headerMenu.classList.toggle("header__menu--active");
    headerNavigationList.classList.toggle("header__navigation-list--active");
  };

  headerMenu.addEventListener("click", showNavigation);

  /**
   * tabs
   */

  const tabsNavigationButtons = document.querySelectorAll(".courses__tabs-button");
  const tabsContentItems = document.querySelectorAll(".courses__content-item");
  const VISUALLY_HIDDEN = "visually-hidden";

  const showCourse = (event) => {
    const button = event.currentTarget;
    const course = event.currentTarget.dataset.course;

    tabsNavigationButtons.forEach(button => button.classList.remove("courses__tabs-button--active"));
    button.classList.add("courses__tabs-button--active");

    tabsContentItems.forEach(item => {
      if (item.dataset.course === course) {
        tabsContentItems.forEach(tab => tab.classList.add("visually-hidden"));
        item.classList.remove(VISUALLY_HIDDEN);
      }
    });
  };

  tabsNavigationButtons.forEach(button => button.addEventListener("click", showCourse));
})();