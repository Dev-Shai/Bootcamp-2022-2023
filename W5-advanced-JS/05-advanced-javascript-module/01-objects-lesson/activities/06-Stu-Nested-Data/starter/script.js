//WRITE YOUR CODE BELOW
const menu = {
    drinks: [
        {
            name: "Latte",
            price: 3.50,
            sizeOptions: ["Small", "Medium", "Large"],
            milkOptions: ["Whole", "Non-fat", "Soy"],
            iced: false,
            sugar: false
        },
        {
            name: "Iced Coffee",
            price: 2.50,
            sizeOptions: ["Medium", "Large"],
            iced: true,
            sugar: true
        },
        {
            name: "Cappuccino",
            price: 4.00,
            sizeOptions: ["Small", "Medium", "Large"],
            milkOptions: ["Whole", "Non-fat"],
            iced: false,
            sugar: true
        }
    ],
    food: [
        {
            name: "Croissant",
            price: 2.50,
            options: ["Plain", "Chocolate", "Almond"]
        },
        {
            name: "Bagel",
            price: 3.00,
            options: ["Plain", "Sesame", "Everything"]
        },
        {
            name: "Hummus panini",
            price: 4.50,
            sizeOptions: ["Medium"]
        },
        {
            name: "Mulligatawny Soup",
            price: 3.00,
            sizeOptions: ["Medium", "Large"]
        },
        {
            name: "Muffin",
            price: 2.00,
            options: ["Blueberry", "Chocolate Chip", "Banana Nut"]
        }
    ]
}

console.log(`The price of a ${menu.drinks[0].name} is $${menu.drinks[0].price.toFixed(2)}.`);
console.log(`The price of two ${menu.drinks[0].name}s is $${menu.drinks[0].price.toFixed(2) * 2}.`);
if(menu.drinks[0].milkOptions){
  console.log(`Milk options for ${menu.drinks[0].name} : ${menu.drinks[0].milkOptions.join(", ")}`);
}
if(menu.drinks[0].sizeOptions){
   console.log(`Size options for ${menu.drinks[0].name} : ${menu.drinks[0].sizeOptions.join(", ")}`);
}

console.log("Drink options and prices:");
menu.drinks.forEach(drink => console.log(`  ${drink.name}: $${drink.price.toFixed(2)}`));

console.log("Food options and prices:");
menu.food.forEach(food => console.log(`  ${food.name}: $${food.price.toFixed(2)}`));