class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}

class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

class Rectangle extends Shape {
    draw() {
        console.log("Drawing a rectangle");
    }
}

const circle = new Circle();
const rectangle = new Rectangle();

circle.draw();
rectangle.draw();
