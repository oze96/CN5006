const prompt = require("prompt-sync")()
console.log("Basic Calculator")
const num1 = Number(prompt("Enter first number: "))
const num2 = Number(prompt("Enter second number: "))
const operator = prompt("Enter operator (+, -, *, /): ")

switch (operator) {
    case "+":
        console.log("The result is: " + (num1 + num2))
        break
    case "-":
        console.log("The result is: " + (num1 - num2))
        break
    case "*":
        console.log("The result is: " + num1 * num2)
        break
    case "/":
        // We don't want the denominator to be zero
        if (num2 !== 0) {
            console.log("The result is: " + num1 / num2)
        } else {
            console.log("Error: Division by zero is not allowed.")
        }
        break
    default:
        break
}
