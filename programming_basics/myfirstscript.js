//var num1 = 20;
//ar num2 = 5;
//if (num1 < num2) {
//    num2 = num2 * num1;
//} else {
// //   num1 = num1 / num2;
//    if (num1 < num2) {
//        num1 = num1 * 2;
//    } else if (num1 == num2) {
//        num2 = num1 * num2;
//    } else {
//        num2 = num2 * 2;
//    }
//}
//console.log(num1);
//console.log(num2);
//
function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,sumNums(2,1)) + sumNums(sumNums(2,1),sumNums(2,3));
console.log('result is', result);
