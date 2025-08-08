import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myShape = new Shape(10, 15);
console.log(myShape.getInfo());

let myCircle = new Circle(5, 10, 34);
console.log(myCircle.getInfo());

let myRectangle = new Rectangle(3, 4, 5, 3);
console.log(myRectangle.getInfo());