import { Animal } from "./Animal";
import { Dog } from "./Dog";

let myAnimal = new Animal("Heo", 12, "Ec Ec");
console.log(myAnimal.getInfo());

let myDog = new Dog("Lu Lu", 10, "Alaska", "Red");
console.log(myDog.getInfo());