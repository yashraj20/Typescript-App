"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee(firstname, middlename, lastname) {
        var _this = this;
        this.firstname = firstname;
        this.middlename = middlename;
        this.lastname = lastname;
        this.getfullname = function () {
            return _this.fullname;
        };
        this.fullname = firstname + " " + middlename + " " + lastname;
    }
    return Employee;
}());
exports.Employee = Employee;
