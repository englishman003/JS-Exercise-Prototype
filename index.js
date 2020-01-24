/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

// Initializing Person Object With Properties

function Person(name, age) {
    this.name = name,
    this.age = age,
    this.stomach = []
    }

//Setting Person Methods On The Prototype

Person.prototype.eat = function(food){
  // If stomach has less than 10 items, food is eaten, or pushed to the stomach.
  if(this.stomach.length <= 9){
    this.stomach.push(food);
  }
}
// Person is given the ability to get rid of the waste that is left over from the stomach, by it being able to be 'popped' out.
Person.prototype.poop = function(){
  for(let i = this.stomach.length; i > 0; i--){
    this.stomach.pop();
  }
}

// Person is able to state its name and age.
Person.prototype.toString = function(){
  return `${this.name}, ${this.age}`;
}
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

// Initializing Car with its properties.
function Car(model, milesPerGallon) {
  this.model = model,
  this.milesPerGallon = milesPerGallon,
  this.tank = 0,
  this.odometer = 0
}

// Implementing methods inside of the Car's prototype.

//  Passing the variable gallons, car is able to be filled by this method.
Car.prototype.fill = function(gallons){
  this.tank += gallons;
}

Car.prototype.drive = function(distance){
  // Added the distance to the odometer.
  this.odometer += distance;
  // Declared both Drivable Miles & The Gallons Used.
  let drivableMiles = (this.tank * this.milesPerGallon);
  let gallonsUsed = (distance / this.milesPerGallon);

  // Made sure if there was enough fuel to go the desired distance.
  if(drivableMiles > distance){
    //If So, the fuel used was removed from the tank.
    this.tank -= Math.floor(gallonsUsed);
  }

  // If there was not enough fuel, the tank was emptied and the remaining drivable miles were added to the odometer.
  else if(drivableMiles < distance){
    this.tank = 0;
    this.odometer = drivableMiles;
    // Returns a string that declares the mileage that the fuel ran out.
    return `I ran out of fuel at ${this.odometer} miles`;
  }
}

/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

// Initialized Baby as a subclass to Person with its own property as well.
function Baby(name, age, favoriteToy) {
  Person.call(this, name, age),
  // Baby now has a favorite toy.
  this.favoriteToy = favoriteToy
}

// Baby has all of the methods of a Person.
Baby.prototype = Object.create(Person.prototype);
//  Baby is now able to share that he/she is playing with their favorite toy.
Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}

/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1.  Window/Global Object Binding - Whenever the 'this' keyword is used in the global scope, it is referring back to the window object.
  2.  Implicit Binding - Anything before the dot, is 'this'.
  3.  New Binding - Whenever a 'new' Object is created from an Object that is declared before, the 'this' keyword refers to the instance of the object you created. 
  4.  Explicit Binding - Whenever we use the methods '.call()' and '.apply()', 'this' would be referring to the item that is being called in the parentheses.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
