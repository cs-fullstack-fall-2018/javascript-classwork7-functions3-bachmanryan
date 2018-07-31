function main() {
    var number = 10;
    var number1 = 2;
    alert(product(number, number1));
    alert(quotient(number, number1));
    alert("Product Answer" + result);
    alert("Quotient Answer" + otherResult);
}
function product(num1, num2) {
    var result = num1 * num2;
    return result;
}

function quotient(num1, num2) {
    var otherResult = num1 / num2;
    return otherResult;
}
main();