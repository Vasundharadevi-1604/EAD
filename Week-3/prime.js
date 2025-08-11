let primeNum = parseInt(prompt("Enter a number:"));
if (primeNum > 1) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(primeNum); i++) {
        if (primeNum % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime ? "Prime Number" : "Not a Prime Number");
} else {
    console.log("Not a Prime Number");
}
