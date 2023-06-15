let number1 = Number (prompt (`Enter the first number`))
let number2 = Number (prompt (`Enter the second number`))
let calc = prompt (`What would you like to do with these 2 numbers? enter Add, Minus, Multiply or Divide`)
let calcLower = calc.toLowerCase()
let result
let calcSign

if (calcLower == "add") {
    result = number1 + number2;
    calcSign = "+"
}
else if (calcLower == "minus") {
    result = number1 - number2;
    calcSign = "-"
}
else if (calcLower == "multiply") {
    result = number1 * number2;
    calcSign = "*"
}
else if (calcLower == "divide") {
    result = number1 / number2;
    calcSign = "/"
}

// display the result
alert (`${number1} ${calcSign} ${number2} = ${result}`);