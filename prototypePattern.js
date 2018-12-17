const peopleProto = function () {
}

peopleProto.proptotype.name = 0;
peopleProto.proptotype.age = "no age";
peopleProto.proptotype.state = "no state";

peopleProto.proptotype.printPerson = function () {
    console.log(`${this.name}, ${this.age}, ${this.state}`)
}

const person1 = new peopleProto();
person1.name = 'jona'
person1.age = 27
person1.state = 'medallo'

person1.printPerson();
