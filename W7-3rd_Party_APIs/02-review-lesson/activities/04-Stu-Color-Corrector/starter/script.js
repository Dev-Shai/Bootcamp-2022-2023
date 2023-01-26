// JavaScript function that wraps everything
$(document).ready(function() {

  // Array for word colors
  var colorsOfText = [];

  // Target word
  var targetColor;

  // Target word color
  var targetColorOfText;

  // User"s selection
  var userAnswer;

  // Array for words
  var colors = [
    "brown",
    "blue",
    "magenta",
    "teal",
    "coral",
    "black",
    "gray"
  ];

  function shuffleColors(colors) {
    for (let i = 0; i < colors.length; i++) {
      let randomIndex = Math.floor(Math.random() * colors.length);
      let tempStorage = colors[i];
      colors[i] = colors[randomIndex];
      colors[randomIndex] = tempStorage;
    }
    return colors;
  }

  // This function sets a random color "word" and a random set of colors "visuals"
  function randColor() {

    // Set random word
    targetColor = colors[Math.floor(Math.random() * colors.length)];

    // Set random word color
    targetColorOfText = colors[Math.floor(Math.random() * colors.length)];
    while (targetColorOfText === targetColor) {
        targetColorOfText = colors[Math.floor(Math.random() * colors.length)];
    }
  }

  // This function creates the actual "game" logic.
  function createColorPicker() {

    // Shuffle color array
    colors = shuffleColors(colors);

    // Push to text color array
    for (let i = 0; i < colors.length; i++) {
        colorsOfText.push(colors[i]);
    }

    // Shuffle text color array
    colorsOfText = shuffleColors(colorsOfText);

    // Loop through all colors in the array
    for (let i = 0; i < colors.length; i++) {
        // Create element to hold word
        let colorEl = $("<li>").text(colors[i]);
        colorEl.addClass("color-choice")
        colorEl.attr("id", colors[i])

        // Output a word
        $("#color-picker").append(colorEl);

        // Make word a random color
        colorEl.css("color", colorsOfText[i]);
    }
  }

  // Clear the divs and arrays upon each round.
  function clear() {
    $("#color-picker").empty();
    colorsOfText = [];
  }

  // Function for resetting colors and setting new colors.
  function reset() {
    clear();
    randColor();
    $("#rand-target-color").text(targetColor);
    $("#rand-target-color").css("color", targetColorOfText);
    createColorPicker();
  }

  // Get id of element clicked by user
  $("#color-picker").on("click", ".color-choice", function(event) {
    userAnswer = $(this).attr("id");
    if (userAnswer === targetColorOfText) {
        alert("Correct!");
    } else {
        alert("Incorrect!");
    }
    reset();
  });

  // Run game
  reset();
});
