"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(10, 15);
let myCircle = new Circle_1.Circle(5, 10, 34);
let myRectangle = new Rectangle_1.Rectangle(3, 4, 5, 3);
let theShapes = [];
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
for (let temp of theShapes) {
    console.log(temp.getInfo());
}
//# sourceMappingURL=ArrayDriver.js.map