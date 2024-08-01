import displayHomeContent from "./home";
import displayAboutContent from "./about";

const menuBar = document.querySelector("nav");

menuBar?.addEventListener("click", (btn) => {
  const pressedBtn = btn.target?.id;

  switch (pressedBtn) {
    case "home-section":
      displayHomeContent();
      break;
    case "menu-section":
      console.log("menu");
      break;
    case "about-section":
      displayAboutContent();
      break;
  }
});
