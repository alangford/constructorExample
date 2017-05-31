t/**
 * Created by beebe on 5/31/2017.
 */
function Person(name, age){
    this.name = name;
        this.age = age;
    this.employee = false
}
Person.prototype.MakeEmployee = function(description, salary){
    this.description = description;
    this.salary = salary;
    this.employee = true
};
Person.prototype.describe = function(){
    this.employee ? console.log(this.name, this.age, this.description, this.salary) : console.log(this.name, this.age)
};

var bob = new Person("bob", 24);
bob.describe();
bob.MakeEmployee("Manager", 60000);
bob.describe();
console.log(bob);