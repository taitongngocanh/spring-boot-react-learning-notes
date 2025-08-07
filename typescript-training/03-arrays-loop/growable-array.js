var sports = ["Xin chao", "Konnichiwa", "gohan"];
sports.push("mizu");
sports.push("sakana");
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tem = sports_1[_i];
    if (tem == "gohan") {
        console.log(tem + " : this is my favorite food!");
    }
    else {
        console.log(tem.toUpperCase());
    }
}
