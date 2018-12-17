const peopleConstructor = function (name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;

    this.printPerson = function () {
        console.log(`${this.name} ${this.age} ${this.state}`)
    }
}

const person1 = new peopleFactory('jona', 27, 'medallo');
const person2 = new peopleFactory('angie', 23, 'medallo');

person1.printPerson();
person2.printPerson();