const btn = document.querySelector("#btnEl");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (btn.classList.contains("fa-moon")) {
    btn.classList.replace("fa-moon", "fa-sun");
  } else {
    btn.classList.replace("fa-sun", "fa-moon");
  }
});
