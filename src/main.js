const menuBar = document.querySelector("nav");

menuBar.addEventListener("click", (btn) => {
  const pressedBtn = btn.target.id;

  switch (pressedBtn) {
    case "home-section":
      console.log("home");
      break;
    case "menu-section":
      console.log("menu");
      break;
    case "about-section":
      console.log("about");
      break;
  }
});
