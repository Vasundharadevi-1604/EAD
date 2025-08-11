let revNum = parseInt(prompt("Enter a number:"));
let reverse = 0;
while (revNum > 0) {
    let digit = revNum % 10;
    reverse = reverse * 10 + digit;
    revNum = Math.floor(revNum / 10);
}
console.log("Reversed number =", reverse);
