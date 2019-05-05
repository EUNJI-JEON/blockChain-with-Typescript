class Human {
    public name: string;
    public age: number;
    public gender: string;
    constructor(name: string, age: number, gender: string){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
}

const lulu = new Human("lulu", 27,"male");


const sayHi = (person:Human): string => {
    return `Hello ${person.name}, you are ${person.age} years old and a ${person.gender}`;
};


console.log(sayHi(lulu));

export {};