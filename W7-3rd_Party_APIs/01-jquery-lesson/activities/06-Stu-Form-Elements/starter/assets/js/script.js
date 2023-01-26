var shoppingFormEl = $('#shopping-form');
var shoppingListEl = $('#shopping-list');

// TODO: Create a function to handle the form submission event that captures the form's `<input>` value and prints it to the `shoppingListEl` as a `<li>`

function handleFormSubmit(event) {
event.preventDefault(); // this prevents the form from submitting
var inputValue = $('#shopping-input').val(); // to  get the input value
if (!inputValue) {
    alert('No shopping item filled out in form.');
    console.log('No shopping item filled out in form.');
    return;
}
shoppingListEl.append('<li>' + inputValue + '</li>'); // I am adding the input value as a new <li> to the shopping list
$('#shopping-input').val(''); // This will clear the input field
}

// TODO: Add an event listener to the `shoppingFormEl` to handle submission

shoppingFormEl.on('submit', handleFormSubmit); //  to add the event listener to the form
