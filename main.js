const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => (b !== 0 ? a / b : "Lmao"),
  "%": (a) => a / 100,
};

const btns = document.querySelectorAll("button");
const display = document.querySelector(".display");

let operation = "";
document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const buttonValue = e.target.textContent;
    if (buttonValue === "AC") {
      operation = "";
      display.textContent = 0;
    } else if (buttonValue === "=") {
      performCalculation();
    } else {
      operation += buttonValue;
      display.textContent = operation;
    }
  }
});

const performCalculation = () => {
  if (operation.length) {
    let operator = Object.keys(operators).find((op) => operation.includes(op));
    if (operator) {
      if (operator === "%") {
        let value = parseFloat(operation.split("%")[0]);
        if (!isNaN(value)) {
          let result = operators["%"](value);
          display.textContent = result;
        }
      }
      let [firstOperand, secondOperand] = operation.split(operator).map(Number);
      if (!isNaN(firstOperand) && !isNaN(secondOperand)) {
        let result = operators[operator](firstOperand, secondOperand);
        display.textContent = result;
        operation = "";
      }
    }
  }
};

//LEGACY CODE
// btns.forEach((btn) =>
//   btn.addEventListener("click", (e) => {
//     if (e.target.textContent === "AC") {
//       operation = "";
//       display.textContent = 0;
//     } else if (e.target.textContent !== "=" && e.target.textContent != "AC") {
//       operation += e.target.textContent;
//       display.textContent = operation;
//     }
//   })
// );

// const btnSubmit = document.querySelector("button[type=submit]");
// btnSubmit.addEventListener("click", () => {
//   if (operation.length) {
//     let operator = Object.keys(operators).find((op) => operation.includes(op));
//     if (operator) {
//       if (operator === "%") {
//         let value = parseFloat(operation.split("%")[0]);
//         if (!isNaN(value)) {
//           let result = operators["%"](value);
//           display.textContent = result;
//         }
//       }
//       let [firstOperand, secondOperand] = operation.split(operator).map(Number);
//       if (!isNaN(firstOperand) && !isNaN(secondOperand)) {
//         let result = operators[operator](firstOperand, secondOperand);
//         display.textContent = result;
//         operation = "";
//       }
//     }
//   }
// });
