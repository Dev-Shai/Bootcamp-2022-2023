//WRITE YOUR CODE BELOW
// Objects are a collection of properties
let customerOrder = {
// Properties are made up of key-value pairs
name: "Shahid",
sugarNumber: "2",
orderReady: true
};

console.log(`${customerOrder.name}'s order with ${customerOrder.sugarNumber} sugar(s) is: `)
if (customerOrder.orderReady == true)
console.log(`Ready for pick-up`);
else if (customerOrder.orderReady !== true)
console.log(`Still in order queue`)