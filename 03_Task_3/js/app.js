/**
 * Write your code below!
 */

// vytváření třídy + constructor: 
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Ahoj. Jsem ${this.name} a je mi ${this.age} let.`)
  }
}

/* const zvire = new Animal('Pepík', 3)

console.log(zvire)
zvire.sayHello()

const zvire2 = new Animal('Žofka', 72)

console.log(zvire2)
zvire2.sayHello()

class Cat extends Animal {
  constructor(name, age, color, lifes) {
    super(name, age);
    this.color = color;
    this.lifes = lifes;
  }

  sayHello() {
    console.log(`Čus. Jsem ${this.name}, jsem ${this.color} kočka a mám ${this.lifes} životů.`);
  }

  meow() {
    console.log('Mňau. Chci jíst.')
  }

  die() {
    this.lifes -= 1;
    console.log(`Zbývá mi ${this.lifes} životů.`)
  }
}

const kocka = new Cat('Mourek', 6, 'strakatá', 7);

console.log(kocka)
kocka.sayHello()
kocka.meow()

*/ 