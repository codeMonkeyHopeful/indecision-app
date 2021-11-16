class Person {
  constructor(name = "Anon", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi I am, ${this.name}`;
  }
  getDescription() {
    return `${this.name} is ${this.age} old!`;
  }
}

class Student extends Person {
  constructor(name, age, major = "") {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return this.major ? true : false;
  }
  getDescription() {
    let description = super.getDescription();
    description = this.major ? `I have a major` : description;
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation = "") {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  getGreeting() {
    let description = super.getGreeting();
    return this.homeLocation
      ? (description += ` I am visiting from ${this.homeLocation}`)
      : description;
  }
}
const student = new Student("Ryan", 36, "Computer Science");
console.log(student.getGreeting());

const traveler = new Traveler("FOB", 27, "Troy");
console.log(traveler.getGreeting());
