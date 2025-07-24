const readline = require("readline");
const { runInContext } = require("vm");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function stringReverser(str) { 

    const x = str.trim().split("");
    let  y = [];
    for (let i = x.length - 1; i >= 0; i--) {
        y.push(x[i]);
    }
    return y.join("");
    


}


rl.question("Enter a string to reverse it: ", function(string) {
    const result = stringReverser(string);
    console.log(result);
    rl.close();
});



