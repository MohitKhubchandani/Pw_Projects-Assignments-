function Person(name, age) {
    this.name = name;
    this.age = age;

    this.sayHello = function () {
        console.log("Hello, " + this.name + "!");
    };
}



function Employee(name, age, designation) {
    Person.call(this, name, age);
    this.designation = designation;
}

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.getDetails = function () {
    return `${this.name} is ${this.age} years old and works as a ${this.designation}.`;
}
