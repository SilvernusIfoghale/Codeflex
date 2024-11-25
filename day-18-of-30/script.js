const bodyEl = document.querySelector("body");
const btnToggle = document.querySelector(".btnEl");

btnToggle.addEventListener("click", () => {
  const colors = ["turquoise", "goldenrod", "greenyellow", "lightblue"];
  const random = Math.floor(Math.random() * 4);
  bodyEl.style.background = colors[random];
});
