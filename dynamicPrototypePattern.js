const peopleDynamicProto = function (name, age, state) {
    this.name = name;
    this.age = age;
    this.state = state;

    if (typeof this.printPerson !== 'function') {
        peopleDynamicProto.proptotype.printPerson = function () {
            console.log(`${this.name}, ${this.age}, ${this.state}`)
        }

    }
}

const person1 = new peopleDynamicProto();

person1.printPerson();
