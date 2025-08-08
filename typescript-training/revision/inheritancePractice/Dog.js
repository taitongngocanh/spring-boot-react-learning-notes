"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
const Animal_1 = require("./Animal");
class Dog extends Animal_1.Animal {
    constructor(theName, theAge, theSpecies, _eye) {
        super(theName, theAge, theSpecies);
        this._eye = _eye;
    }
    get eye() {
        return this._eye;
    }
    set eye(value) {
        this._eye = value;
    }
    getInfo() {
        return `Name: ${this.name}, 
          Age: ${this.age}, 
          Species: ${this.species}, 
          Eye: ${this.eye}`;
    }
}
exports.Dog = Dog;
//# sourceMappingURL=Dog.js.map