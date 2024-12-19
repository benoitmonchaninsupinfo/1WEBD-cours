class Animal {
  constructor(name) {
    this._name = name;
  }

  makeSound() {
    console.log("Son générique n'animal !");
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    console.log(`${this._name} a aboyé !`);
  }
}

const bob = new Dog("Bob");
bob.makeSound();
bob.name = "Billy";
bob.makeSound();
