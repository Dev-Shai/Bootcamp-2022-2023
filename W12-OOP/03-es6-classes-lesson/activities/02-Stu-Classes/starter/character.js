class Character {
constructor (name, strength, hitPoints) {
  if (!name) {
    throw new Error("You are missing the name.");
  }
  if (!strength) {
    throw new Error("You are missing the strength.");
  }
  if (!hitPoints) {
    throw new Error("You are missing the hitPoints.");
  }
  this.name = name;
  this.strength = strength;
  this.hitPoints = hitPoints;
}

  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for NAME are as following:`);
    console.log(`Each attack will do STRENGTH damage.`);
    console.log(`NAME has HITPOINTS hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero

  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.hitPoints <= 0) {
      console.log (`${this.name} has been defeated!`);
      return false
    }
    else {
      console.log (`${this.name} is still alive`);
      return true
    }
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class

// Create an interval that alternates attacks every 2000 milliseconds

// * Open [character.js](starter/character.js) and update the `Character` class. It should instantiate an object with the following properties:

//   * Name
//   * Strength
//   * hitPoints

// * Create a `printStats()` class method that prints the name, strength, and hitPoints for a character.

// * Create an `attack(opponent)` method that a character can use to deal damage (equal to their strength) to their opponent's hitPoints.  

// * Create two instances of a character, giving them different names, strength, and hitPoints. 

// * Using `setInterval`, make each character take turns attacking each other. 

// * `printStats()` after each attack to visualize the battle.

// * Use an `isAlive` method to check if each character has more than 0 hitPoints every turn. If either character has been defeated, stop the interval and end the game.