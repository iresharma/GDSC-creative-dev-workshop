const DARK_ICON = "lni-night";
const LIGHT_ICON = "lni-sun";

const switchButton = document.querySelector("#switch-button");

if (halfmoon.getPreferredMode() == "light-mode") {
  switchButton.classList.add(DARK_ICON);
} else if (halfmoon.getPreferredMode() == "dark-mode") {
  switchButton.classList.add(LIGHT_ICON);
} else if (halfmoon.getPreferredMode() == "not-set") {
  switchButton.classList.add(LIGHT_ICON);
}

const switchTheme = () => {
  halfmoon.toggleDarkMode();
  if (halfmoon.getPreferredMode() == "light-mode") {
    switchButton.classList.remove(LIGHT_ICON);
    switchButton.classList.add(DARK_ICON);
} else if (halfmoon.getPreferredMode() == "dark-mode") {
      switchButton.classList.remove(DARK_ICON);
    switchButton.classList.add(LIGHT_ICON);
  }
};
