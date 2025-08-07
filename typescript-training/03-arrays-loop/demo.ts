let numbers: number[] = [1, 2, 3, 4];

let sum: number = 0;

for (let i = 0; i < numbers.length; i++) {
     if (numbers[i] % 2 != 0) {
          sum += numbers[i];
     }
}

console.log("The sum of arrays is: " + sum);