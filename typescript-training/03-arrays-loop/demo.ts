let sportsOne: string[] = ["Pheo", "No", "Cam", "leo"];

sportsOne.push("Van Lan");
sportsOne.push("Tien Dat");

for (let favor of sportsOne) {
     if (favor == "No") {
          console.log(favor + " This is my favorite wife!");
     } else {
          console.log(favor);
     }
}