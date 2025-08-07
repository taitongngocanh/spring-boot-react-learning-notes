let reviews: number[] = [5, 5, 6, 6, 7];

reviews.push(6);

let total: number = 0;

for (let i = 0; i < reviews.length; i++) {
     console.log(reviews[i]);
     total += reviews[i];
}

let average: number = total / reviews.length;

console.log("The average of this array is: " + average);