var numbers = [1, 2, 3, 4];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
        sum += numbers[i];
    }
}
console.log("The sum of arrays is: " + sum);
