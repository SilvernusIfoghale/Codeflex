const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const btnCalculate = document.querySelector(".btnEl");
const display = document.querySelector("#displayEl");

btnCalculate.addEventListener("click", () => {
  const result = sum(num1.value, num2.value);
  display.innerHTML = `The sum is: ${result}`;
});

const sum = (num1, num2) => {
  let result = Number(num1) + Number(num2);
  return result;
};
