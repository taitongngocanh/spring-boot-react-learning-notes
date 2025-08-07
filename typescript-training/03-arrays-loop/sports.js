var sport = ["Hello", "connichiwa", "xin chao", "bung lua"];
// for (let i = 0; i < sport.length; i++) {
//      console.log(sport[i]);
// }
// let's use the simplied for loop
for (var _i = 0, sport_1 = sport; _i < sport_1.length; _i++) {
    var tem = sport_1[_i];
    if (tem == "Hello") {
        console.log("This is : " + tem);
    }
    else {
        console.log(tem.toUpperCase());
    }
}
