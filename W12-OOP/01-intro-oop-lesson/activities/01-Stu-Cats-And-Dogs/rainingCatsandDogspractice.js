// * Make a dogs object with three keys:
dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise () {
        if (this.raining===true) {
            console.log(this.noise);
        }
        else {
            console.log(`No rain today`)
        }
    }

}
cats = {
    raining: false,
    noise: "Meow!",
    makeNoise () {
        if (this.raining===true) {
            console.log(this.noise);
        }
        else {
            console.log(`No rain today`)
        }
    }

}

console.log(dogs)
// cats.raining = true
console.log(cats)

dogs.makeNoise();
cats.makeNoise();

//   * First key called `raining` with a value of `true`.

//   * Second key called `noise` with a value of "Woof!"

//   * Third key called "`akeNoise`" which contains a function that console.logs the noise to the screen if it is raining dogs.

// * Next, make a cats object with three keys:

//   * First key called `raining` with a value of `false`.

//   * Second key called `noise` with a value of "Meow!"

//   * Third key called `makeNoise` which contains a function that `console.logs` the noise to the screen if it is raining cats.

// * Make the dog bark.

// * Make the cat meow.