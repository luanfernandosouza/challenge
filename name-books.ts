let input1original = ["bob", "john", "claire", "johnson"];
let input1 = ["bob", "john", "claire", "johnson"];

let input2original = ["alice", "bob"];
let input2 = ["alice", "bob"];

function example1 () {
    input1.sort();
    for (let i = 0; i < input1original.length; i++) {
        if (input1original[i] != input1[i]) {
            return false;
        }
    }
    return true; 
}

function example2 () {
    input2.sort();
    for (let i = 0; i < input2original.length; i++) {
        if (input2original[i] != input2[i]) {
            return false;
        } 
    }
    return true; 
}

console.log(example1());
console.log(example2());
