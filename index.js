const headerMenuButton = document.querySelector(".header__menu-button");
const headerNavigation = document.querySelector(".header__navigation");
const headerNavigationCloseButton = document.querySelector(
  ".header__navigation-close-button"
);
const modesLight = document.querySelector(".modes__light");
const modes = document.querySelector(".modes");

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

modesLight.addEventListener("click", function () {
  if (modesLight.classList.contains("ri-sun-line")) {
    modesLight.classList.remove("ri-sun-line");
    modesLight.classList.add("ri-contrast-2-fill");
  } else {
    modesLight.classList.remove("ri-contrast-2-fill");
    modesLight.classList.add("ri-sun-line");
  }
});

modes.addEventListener("click", () => {
  if (document.body.classList.contains("modes--light")) {
    document.body.classList.remove("modes--light");
  } else {
    document.body.classList.add("modes--light");
  }
});
