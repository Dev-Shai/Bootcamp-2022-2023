var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;

  if(element.matches("div")) {
    var state = element.getAttribute("data-state")

    console.log(state)
    if (state === "hidden") {
      element.dataset.state = "visible";
      element.setAttribute("data-state", "data-number");
      element.textContent = element.dataset.number }
      else {
        element.dataset.state = "hidden";
        element.textContent = "";
      }
  }
});