const text = document.querySelector(".headingEl");
const btn = document.querySelector(".btnEl");

btn.addEventListener("click", () => {
  if (text.innerHTML === "Original Heading") {
    text.innerHTML = "Text Changed";
  } else {
    text.innerHTML = "Original Heading";
  }
});
