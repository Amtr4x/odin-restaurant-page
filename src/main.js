import displayHomeContent from "./home";
import displayAboutContent from "./about";
import displayMenuContent from "./menu";

const menuBar = document.querySelector("nav");

menuBar?.addEventListener("click", (btn) => {
  const pressedBtn = btn.target?.id;

  switch (pressedBtn) {
    case "home-section":
      displayHomeContent();
      break;
    case "menu-section":
      displayMenuContent();
      break;
    case "about-section":
      displayAboutContent();
      break;
  }
});
