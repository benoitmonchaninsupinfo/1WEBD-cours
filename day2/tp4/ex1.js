class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduction() {
    return `Salut ! Je m'appelle ${this.name} et j'ai ${this.age} ans !`;
  }
}

const bob = new Person("Bob", 20);

console.log(bob.introduction());
