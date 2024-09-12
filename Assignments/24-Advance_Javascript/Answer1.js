function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.sayHello = function() {
        console.log("Hello, " + this.name + "!");
    };
}

