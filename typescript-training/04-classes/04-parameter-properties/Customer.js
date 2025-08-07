"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customerr {
    _firstName;
    _lastName;
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// Let's create an instance
let myCustomerr = new Customerr("Tai", "Nguyen");
console.log(myCustomerr.firstName);
console.log(myCustomerr.lastName);
//# sourceMappingURL=Customer.js.map