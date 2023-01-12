var constellations = ["Orion", "Scorpius", "Lyra", "Ursa Major", "Ursa Minor"];
var planets = ["Earth", "Saturn", "Mars", "Jupiter", "Uranus", "Venus"];
var star = "polaris";

// WRITE YOUR CODE BELOW

constellations.unshift("Canis Major");
console.log(constellations)

// getting rid of venus
// You can also use:
// // Remove "Venus" from the planets array
// var index = planets.indexOf("Venus");
// planets.splice(index, 1);
planets.pop()
console.log(planets)

// creating an array that combines constellations and planets array
const galaxy = constellations.concat(planets);
console.log(galaxy)

// converting the variable string to uppercase using the touppercase method
var starUpper = star.toUpperCase();
console.log(starUpper)