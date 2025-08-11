import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let theCoach: Coach[] = [];

theCoach.push(myCricketCoach);
theCoach.push(myGolfCoach);

for (let temp of theCoach) {
     console.log(temp.getDailyWorkout());
}

