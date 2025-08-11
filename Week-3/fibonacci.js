let fibTerms = parseInt(prompt("Enter number of terms:"));
let a = 0, b = 1;
for (let i = 0; i < fibTerms; i++) {
    console.log(a);
    let next = a + b;
    a = b;
    b = next;
}
