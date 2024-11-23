const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btnCalculate = document.querySelector(".btnEl");
const display = document.querySelector("#displayEl");

btnCalculate.addEventListener("click", () => {
  let sum = Number(num1.value) + Number(num2.value);
  display.innerHTML = `The sum is: ${sum}`;
});
