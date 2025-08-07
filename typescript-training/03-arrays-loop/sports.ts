let sport: string[] = ["Hello", "connichiwa", "xin chao", "bung lua"];

// for (let i = 0; i < sport.length; i++) {
//      console.log(sport[i]);
// }

// let's use the simplied for loop

for (let tem of sport) {
     if (tem == "Hello") {
          console.log("This is : " + tem);
     } else {
          console.log(tem.toUpperCase());
     }
}