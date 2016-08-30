// YOUR CODE GOES HERE
var launchpad = function(ship, crew, rocket) {
  console.log("Lets do this!!");
  console.log("Prepare for launch, " + ship.name);
  ship.loadCrew(crew);
  console.log(ship.captain() + " is the Captain.");
  ship.mountPropulsion(rocket);
  ship.propulsion.addFuel(1000);
  ship.takeoff();
}

function Ship(name){
  this.name = name;
  this.crew = [];
  this.propulsion = null;
}

var ourShip = new Ship("Badass Ship");

var crewNames = ["Chris", "George", "Jeff", "Cary", "Jeremiah", "Annie", "Jason", "Sean", "Frank", "Sebastian", "Larisa"];

function CrewMember(name) {
  this.name = name;
  this.trained = false;
}

var trainCrew = function(array) {
  var trainedMembers = [];
  for (var i = 0; i < array.length; i++){

    trainedMembers.push(new CrewMember(array[i]));
    trainedMembers[i].trained = true;
  }
  return trainedMembers;
}

var crewMembers = trainCrew(crewNames);

Ship.prototype.loadCrew = function(boardingcrew) {
  for (var i = 0; i < boardingcrew.length; i++){
    this.crew.push(boardingcrew[i]);
    console.log(boardingcrew[i].name + " boarded the ship.");
  }
}

Ship.prototype.captain = function() {
  var number = this.crew.length;
  var randomNum = Math.floor(Math.random() * number);
  return this.crew[randomNum].name;
}

Ship.prototype.mountPropulsion = function(object) {
  this.propulsion = object;
  console.log("Rocket mounted");
}

Ship.prototype.takeoff = function() {
  if (this.propulsion.fire() == true) {
    console.log("Successful Takeoff Baby!");
    console.log("Vroooooooom!");
  }else {
    console.log("Unsuccessful Takeoff...");
  }

}


var rocket = {
  fuel: 0,
  addFuel: function(amount){
    this.fuel += amount;
    console.log("We have " + this.fuel + " gallons of fuel." );
  },

  fire: function() {
    if (this.fuel > 1){
      this.fuel -= 1;
      console.log(this.fuel + " gallons remaining! Engine fired!")
      return true;
    } else {
      console.log("The engine failed to fire");
      return false;
    }
  }
}

var fleet = {
  ships: [],
  name: "Badass Fleet of Badass Ships",
  build: function(shipsArray){
    for (var i = 0; i < shipsArray.length; i++){
      this.ships.push(new Ship(shipsArray[i]));
      console.log("Welcome 2 the BAD5zz fleet " + shipsArray[i]);
    }
  }
}

var shipnames = ["ship1", "ship2", "ship3", "PryMates"];

launchpad(ourShip, crewMembers, rocket);
fleet.build(shipnames);

for(var i = 0;i < shipnames.length; i++){
  launchpad(fleet.ships[i], crewMembers, rocket)
};
