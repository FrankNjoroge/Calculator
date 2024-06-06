const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b !== 0 ? a / b : "Lmao"),
};

const btns = document.querySelectorAll("button");
const display = document.querySelector(".display");

let operation = "";
// document.addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     const buttonValue = e.target.textContent;

//     if (buttonValue === "AC") {
//       operation = "";
//     } else if (buttonValue === "=") {
//       performCalculation();
//     } else {
//       operation += buttonValue;
//     }
//   }
// });
btns.forEach((btn) =>
  btn.addEventListener("click", (e) => {
    if (e.target.textContent === "AC") {
      operation = "";
      display.textContent = operation;
    }
    if (e.target.textContent !== "=" && e.target.textContent != "AC") {
      operation += e.target.textContent;
      display.textContent = operation;
    }
  })
);

const btnSubmit = document.querySelector("button[type=submit]");
btnSubmit.addEventListener("click", () => {
  let calculation;
  let firstOperand;
  let secondOperand;
  if (operation.length) {
    let operator = Object.keys(operators).find((op) => operation.includes(op));
    if (operator) {
      calculation = operation.split(operator);
      firstOperand = +calculation[0];
      secondOperand = +calculation[1];
      display.textContent = operators[operator](firstOperand, secondOperand);
      operation = "";
    }
  }
});
