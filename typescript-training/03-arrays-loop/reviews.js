var reviews = [5, 5, 6, 6, 7];
reviews.push(6);
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("The average of this array is: " + average);
