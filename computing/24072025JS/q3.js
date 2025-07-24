const readline = require("readline");
const { runInContext } = require("vm");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function multiplicationTable(num) { 

    // find the count of vowels
    const x = num ;

    for (let i = 1; i <= 10; i++) {
        console.log(`${x} * ${i} = ${x * i}`);
    }

}


rl.question("Enter a number for multiplication table: ", function(string) {
    const result = multiplicationTable(string);
    console.log(result);
    rl.close();
});



