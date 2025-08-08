let numbers: number[] = [2, 5, 6, 7];

numbers.push(4);

let total: number = 0;

for (let num of numbers) {
     if (num % 2 == 0) {
          total += num;
     }
}

console.log("The total of even number is: " + total);