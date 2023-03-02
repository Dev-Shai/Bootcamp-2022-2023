function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.getBalance = () => {
    return this.balance;
  };
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };


// Add a setBalance function. This function should receive a value parameter and assign it to the balance property of MiniBank.
this.setBalance = (value) => 
{ 
  this.balance = value;
};


// Write an updateStatement function that takes in a number and pushes it to the statement array.
this.updateStatement = (value) =>
{
  this.statement.push(value); 
}
// Write a getStatement function that returns the statement property.
this.getStatement = () => 
{
  return this.statement.slice(0); 
}
// Write a printStatement function that prints each element in the statement array on its own line.
this.printStatement = () => {
  const statement = this.getStatement()
  for (let i=0; i < statement.length; i++) {
  console.log(`${i + 1}. ${statement[i]}`)
}
}
// Write a deposit function that takes a value and performs the following:
this.deposit = (value) => {
  if (typeof value !== 'number' || value <= 0) {
    throw new Error("'value' must be a positive number!");
  }
  const newBalance = this.getBalance() + value;
// Calls setBalance to update the balance property.
  this.setBalance(newBalance);
// Calls updateStatement to record the deposit transaction.  
  this.updateStatement(newBalance);
  console.log(`Deposited ${value}!`);
}


// Write a withdraw function that takes a value and performs the following:
this.withdraw = (value) => {
  if (typeof value !== 'number' || value <= 0) {
    throw new Error("'value' must be a number!");
  }
  const newBalance = this.getBalance() - value;
  if (newBalance <0) {
    throw new Error ('insufficient funds for this transaction')
  }
// Calls setBalance to update the balance property.
  this.setBalance(newBalance);
// Calls updateStatement to record the withdrawal transaction. (Be sure to use a negative number here.)
  this.updateStatement(-value);
  console.log(`Withdrew ${value}!`);
};


this.printBalance = () => {
  console.log(`Balance: ${this.getBalance()}`);
};
}

// Part 2 - Create and use a MiniBank instance
// Create a new bank object using the MiniBank constructor function.
const shaiBank = new MiniBank(0);
// Print the bank balance.
shaiBank.printBalance();
// Deposit some money into the bank object.
shaiBank.deposit(85);
// Print the bank balance.
shaiBank.printBalance();
// Withdraw some money from the bank object.
shaiBank.withdraw(20);
// Print the bank balance.
shaiBank.printBalance();

shaiBank.printStatement();
