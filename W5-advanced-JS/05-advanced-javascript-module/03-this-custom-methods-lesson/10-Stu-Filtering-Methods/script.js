// Create an array of account objects
var accounts = [
  {firstName: "John", lastName: "Doe", balance: 200000},
  {firstName: "Jane", lastName: "Doe", balance: 250000},
  {firstName: "Adebola", lastName: "Samwade", balance: 300000},
  {firstName: "Amandeep", lastName: "Jayne", balance: 150000},
  {firstName: "Clara", lastName: "Wadiah", balance: 350000}
];

// Use the find method to search through the array and print the first account with a balance of $250,000
var account = accounts.find(function(account) {
  return account.balance === 250000;
});
console.log(account);

// Use the filter method to create a new array of only users with a last name that begins with "D"
var filteredAccounts = accounts.filter(function(account) {
  return account.lastName[0] === "D";
});
console.log(filteredAccounts);