const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the number: ", function(num) {
    num = parseInt(num);
    if (isNaN(num) || num < 1) {
        console.log("Please enter a valid positive number.");
    } else {
        console.log("Even numbers from 1 to", num, ":");
        for (let i = 2; i <= num; i += 2) {
            console.log(i);
        }
    }
    rl.close();
});

