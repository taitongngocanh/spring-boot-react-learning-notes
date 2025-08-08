"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customerr = void 0;
var Customerr = /** @class */ (function () {
    function Customerr(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(Customerr.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customerr.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customerr;
}());
exports.Customerr = Customerr;
