"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CricketCoach_1 = require("./CricketCoach");
const GolfCoach_1 = require("./GolfCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
let theCoach = [];
theCoach.push(myCricketCoach);
theCoach.push(myGolfCoach);
for (let temp of theCoach) {
    console.log(temp.getDailyWorkout());
}
