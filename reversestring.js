let text = prompt("Enter a string:");
let reverseText = "";
for (let ch of text) {
    reverseText = ch + reverseText;
}
console.log("Reversed string:", reverseText);
