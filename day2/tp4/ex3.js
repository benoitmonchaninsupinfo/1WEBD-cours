class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Il n'est pas possible d'instancier Shape directement.");
    }
  }

  getSurface() {
    throw new Error(
      "Il n'est possible d'utiliser cette fonction sans la redéfinir."
    );
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  getSurface() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(l) {
    super();
    this.l = l;
  }

  getSurface() {
    return this.l ** 2;
  }
}

const circle = new Circle(10);
console.log(circle.getSurface());

const square = new Square(10);
console.log(square.getSurface());
