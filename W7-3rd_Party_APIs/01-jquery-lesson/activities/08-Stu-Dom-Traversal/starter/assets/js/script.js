// Assemble: Create/select DOM elements
var rootEl = $('#root');

// TODO: Starting from the root element, `rootEl`, make all the background color for each box white.

// smallest amount of code
$(rootEl).find('li').css('background-color', 'white');
console.log($(rootEl).find('li').css('background-color', 'white'));

// Alternative option:
// $('.item-a1, .item-b1, .item-c1, .item-a2, .item-b2, .item-c2, .item-a3, .item-b3, .item-c3').css('background-color', 'white');

// TODO: Starting from `rootEl`, create the jQuery statement that will add "O" to block the "X" from winning
$(rootEl).find('.item-a3').text('O');

// // or can use Psuedo-class selectors:
// $(rootEl).find('.a3:first').text("O");

// // or can use .eq to specifically choose the nth element in the specific class
// $(rootEl).find('.a3').eq(1).html("O");
