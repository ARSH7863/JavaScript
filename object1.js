var person = { id: 1, name: "ARSH" };
console.log(person);

var person = {
    id: 1,
    name: "ARSH",
    print: function () {
        console.log(this.id + " " + this.name);
    }
};
console.log(person.name);
console.log(person.id);
person.fees = 1000;
console.log(person.fees);
person.print();