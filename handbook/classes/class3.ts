interface HumanInterface {
  readonly name: string;
  readonly age: number;
}
class Human {
  readonly name: string;
  readonly age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  // constructor(readonly name: string, readonly age: number) { }
}

const params = { 
  name: 'John',
  age: 123
};
// let john: HumanInterface = new Human(params.name, params.age);
let john: HumanInterface = new Human(params.name, params.age);
john.name = '12';
console.log(john);



// class Octopus {
//   readonly name: string;
//   readonly numberOfLegs: number = 8;
//   constructor(theName: string) {
//     this.name = theName;
//   }
// }
// let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // error! name is readonly.