class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean;
  protected key: Key;
  protected tenants: Person[];
  constructor(key: Key) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log('Welcome home!');
    } else {
      console.log('The door is closed.');
    }
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log('The door is now open.');
    } else {
      console.log('Key is invalid!');
    }
  }
}

const key = new Key();
const person = new Person(key);
const house = new MyHouse(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
