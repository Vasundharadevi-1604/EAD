let digitNum = parseInt(prompt("Enter a number:"));
let count = 0;
while (digitNum > 0) {
    count++;
    digitNum = Math.floor(digitNum / 10);
}
console.log("Number of digits =", count);
