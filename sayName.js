//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
function Person(personName, personAge) {
  this.name = personName;
  this.age = personAge;
}

//Now create three instances of Person with data you make up

  //code here
var me = new Person('Tanner Andersen', 19);
var cat = new Person('Meowsies', 28);
var hamster = new Person('Squeak Squak', 2.5);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
  function Person(personName, personAge) {
    this.name = personName;
    this.age = personAge;
    this.sayName = function() {
      alert(this.name);
    }
  }
