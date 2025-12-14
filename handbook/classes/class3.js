var Human = /** @class */ (function () {
    function Human(name, age) {
        this.name = name;
        this.age = age;
    }
    return Human;
}());
var params = {
    name: 'John',
    age: 3
};
var john = new Human(params.name, params.age);
john.name = '12';
console.log(john);
