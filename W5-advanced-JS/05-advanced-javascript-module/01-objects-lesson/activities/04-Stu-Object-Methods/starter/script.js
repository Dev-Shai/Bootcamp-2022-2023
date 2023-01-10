//WRITE YOUR CODE BELOW
const menu = {
  drinks: [
    {name: "Coffee", price: 3.50},
    {name: "Tea", price: 2.50},
    {name: "Soda", price: 3.00},
    {name: "Juice", price: 4.00},
  ],

  getDrinkNames: function() {
    let drinkNames = [];
    for (let i = 0; i < this.drinks.length; i++) {
      drinkNames.push(this.drinks[i].name);
    }
    console.log(drinkNames);
  },

  getTotalPrice: function() {
    let totalPrice = 0;
    for (let i = 0; i < this.drinks.length; i++) {
      totalPrice += this.drinks[i].price;
    }
    console.log("Total Price: " + totalPrice.toFixed(2));
  }
};

menu.getDrinkNames();
menu.getTotalPrice();
 

console.log(Object.values(menu.drinks))