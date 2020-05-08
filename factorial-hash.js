function factorial(send) {
    var result = 1;
    for (var num = 1; num <= send; num++) {
        result *= num;
    }
    return result;
}
function sumOfDigits(num) {
    var n = factorial(num);
    var sum = 0;
    var rest = 0;
    while (n > 0) {
        rest = n % 10;
        n = (n - rest) / 10;
        sum = sum + rest;
    }
    return sum;
}
console.log(sumOfDigits(2000));
