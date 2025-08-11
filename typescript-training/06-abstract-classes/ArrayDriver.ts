import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle = new Circle(5, 10, 34);
let myRectangle = new Rectangle(3, 4, 5, 3);

let theShapes: Shape[] = [];

theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let temp of theShapes) {
     console.log(temp.getInfo());
     console.log(temp.calculateArea());
     console.log();
}
