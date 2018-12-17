const peopleFactory = function (name, age, state) {
    const temp = {};

    temp.name = name;
    temp.age = age;
    temp.state = state;

    temp.printPerson = function () {
        console.log(`${this.name} ${this.age} ${this.state}`)
    }

    return temp;
}

const person1 = peopleFactory('jona', 27, 'medallo');
const person2 = peopleFactory('angie', 23, 'medallo');

person1.printPerson();
person2.printPerson();