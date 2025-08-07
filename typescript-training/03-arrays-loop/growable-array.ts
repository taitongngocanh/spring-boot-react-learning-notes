let sports: string[] = ["Xin chao", "Konnichiwa", "gohan"];

sports.push("mizu");
sports.push("sakana");

for (let tem of sports) {

     if (tem == "gohan") {
          console.log(tem + " : this is my favorite food!");
     } else {
          console.log(tem.toUpperCase());
     }
}