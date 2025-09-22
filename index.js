const buttons = document.querySelectorAll(".button");
const displayValue = document.querySelector(".total");

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const operators = ["+", "-", "×", "÷", "="];

let currentValue = "";
let previousValue = "";
let operator = null;

buttons.forEach((button) => {
	button.addEventListener("click", (e) => {
		const value = e.target.textContent.trim();

		if (numbers.includes(value) || value === ".") {
			if (value === "." && currentValue.includes(".")) return;
			currentValue += value;
			displayValue.textContent = currentValue;
		} else if (operators.includes(value)) {
			console.log("Operator: ", value);
			if (value === "=") {
				if (currentValue && previousValue && operator) {
					const num1 = parseFloat(previousValue);
					const num2 = parseFloat(currentValue);
					switch (operator) {
						case "+":
							currentValue = (num1 + num2).toString();
							break;
						case "-":
							currentValue = (num1 - num2).toString();
							break;
						case "×":
							currentValue = (num1 * num2).toString();
							break;
						case "÷":
							if (num2 === 0) {
								currentValue = "Error";
							} else {
								currentValue = (num1 / num2).toString();
							}
							break;
					}
					displayValue.textContent = currentValue;
					operator = null;
				}
			} else if (value === "+") {
				if (currentValue) {
					operator = value;
					previousValue = currentValue;
					currentValue = "";
				}
			} else if (value === "-") {
				if (currentValue) {
					operator = value;
					previousValue = currentValue;
					currentValue = "";
				}
			}
		} else {
			console.log("Some Error");
		}
	});
});
