function solve(num1, num2, num3) {
    let largestNumber;
    if (num1 > num2 && num1 > num3) {
        largestNumber = num1;
    } else if (num2 > num1 && num2 > num3) {
        largestNumber = num2;
    } else if (num3 > num1 && num3 > num2) {
        largestNumber = num3;
    }
    return `The largest number is ${largestNumber}.`;
}

function largestNumber(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

console.log(solve(100, 1200, 321));