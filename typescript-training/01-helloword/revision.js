var numbers = [2, 5, 6, 7];
numbers.push(4);
var total = 0;
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    if (num % 2 == 0) {
        total += num;
    }
}
console.log("The total of even number is: " + total);
