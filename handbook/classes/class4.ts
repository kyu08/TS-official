const fullNameMaxLength = 10;

class Employee {
  private _fullName: string;
  static greeting: string = 'hellooo';

  get fullName(): string {
    return this._fullName;
  }

  set fullName(newName: string) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error('too long');
    }
    this._fullName = newName;
  }
}
console.log(Employee.greeting);
Employee.greeting = '123123';
let employee = new Employee();
if (employee.fullName) {
  console.log(employee.fullName);
}
console.log(Employee.greeting);