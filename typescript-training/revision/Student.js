"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    _id;
    _name;
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
}
let newStudent = new Student("001", "Ngoc Anh Tai");
if (newStudent.id == "001") {
    newStudent.name = "Tong Ngoc Anh Tai";
}
console.log(newStudent);
//# sourceMappingURL=Student.js.map