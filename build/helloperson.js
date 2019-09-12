"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(person) {
    return "Hello! " + person.firstname + " " + person.lastname;
}
var person = {
    firstname: 'Yash',
    lastname: 'Raj'
};
console.log(hello(person));
