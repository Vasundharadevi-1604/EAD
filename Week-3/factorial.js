let factNum = parseInt(prompt("Enter a number:"));
let fact = 1;
for (let i = 1; i <= factNum; i++) {
    fact *= i;
}
console.log("Factorial =", fact);
