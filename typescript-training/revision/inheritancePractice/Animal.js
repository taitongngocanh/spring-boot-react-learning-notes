"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(_name, _age, _species) {
        this._name = _name;
        this._age = _age;
        this._species = _species;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get species() {
        return this._species;
    }
    set species(value) {
        this._species = value;
    }
    getInfo() {
        return `name: ${this._name}, age: ${this._age}, species: ${this._species}`;
    }
}
exports.Animal = Animal;
//# sourceMappingURL=Animal.js.map