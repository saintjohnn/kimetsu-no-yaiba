const headerMenuButton = document.querySelector(".header__menu-button");
const headerNavigation = document.querySelector(".header__navigation");
const headerNavigationCloseButton = document.querySelector(
  ".header__navigation-close-button"
);

if (headerMenuButton) {
  headerMenuButton.addEventListener("click", () => {
    headerNavigation.classList.add("show-menu");
  });
}

if (headerNavigationCloseButton) {
  headerNavigationCloseButton.addEventListener("click", () => {
    headerNavigation.classList.remove("show-menu");
  });
}
