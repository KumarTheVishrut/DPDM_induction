const readline = require("readline");
const { runInContext } = require("vm");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}


rl.question("Enter a string: ", function(string) {
    const result = countVowel(string);
    console.log(result);
    rl.close();
});



