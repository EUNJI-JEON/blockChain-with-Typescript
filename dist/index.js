"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const lulu = new Human("lulu", 27, "male");
const sayHi = (person) => {
    return `Hello ${person.name}, you are ${person.age} years old and a ${person.gender}`;
};
console.log(sayHi(lulu));
//# sourceMappingURL=index.js.map