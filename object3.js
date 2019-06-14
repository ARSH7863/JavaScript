function Emp(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;

    var print = function () {
        console.log(this.name + " " + this.id);
    };
};
var result = Emp(1, "ARSH");

var shaikh = new Emp(1, "SHAIKH", 19);

var shkh = new Emp(2, "SHKH", 20);
console.log(shkh);
console.log(shaikh);
shaikh.print();