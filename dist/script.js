// Elements & Variables
const html = document.documentElement.classList;

const btnDarkMode = document.querySelector(".dark-mode");
const btnSun = document.querySelector(".sun");
const btnMoon = document.querySelector(".moon");
const svgEl = document.querySelector(".svg");

// Functions
function switchSvg(src) {
  svgEl.setAttribute("src", `${src}`);
}

// Event handlers
btnDarkMode.addEventListener("click", () => {
  if (html.contains("dark")) {
    html.remove("dark");
    localStorage.theme = "light";
    switchSvg("images/bg-curvy-mobile.svg");
  } else {
    html.add("dark");
    localStorage.theme = "dark";
    switchSvg("images/bg-curvy-desktop.svg");
  }
});

window.addEventListener("load", () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    html.add("dark");
    switchSvg("images/bg-curvy-desktop.svg");
  } else {
    html.remove("dark");
    switchSvg("images/bg-curvy-mobile.svg");
  }
});
